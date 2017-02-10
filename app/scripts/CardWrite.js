var MyActiveObj = {
    RPOCX: null,
    isFrame: false,
    //判断是否客户端
    checkFrame: function () {
        if (window.RPOCX) {
            this.isFrame = true;
        }
    },
    //初始化，加载写卡控件
    loadActiveX: function () {
        try {
            this.checkFrame(); 
            if (this.isFrame)
            {
                if (!window.RPOCX.driverInit)
                {
                    alert("该客户端不支持写卡，请升级最新版的客户端");
                    return false;
                }
                this.RPOCX = window.RPOCX;
            }
            else { 
                this.RPOCX = new ActiveXObject("AIRPS.AIRPSCtrl.1");
            }
        } catch (e) {
            alert("尚未加载写卡控件，准备重新下载注册!");
            return false;
        }
        return true;
    },
    initObj: function () {
        //this.checkFrame();
        this.loadActiveX();
    },
    selSimType: function () {
        try {
            var cardNum = this.getCardNumFromReader();
            //document.getElementById('simSeriaNo').style.display = 'none';
            //空卡开户,跳转到写卡页面
            if ('' == cardNum) {
                //if(''=='1'){/*此行代码做测试用*/
                alert("请将空卡插入写卡器，并在换卡完成之前不要拔出。");
                //document.getElementById("n_SimCardType").value = 'AA';
                //document.getElementById('simSeriaNo').style.display = '';
            } else {
                alert("为保证换卡成功，在换卡完成前请勿拔出写卡器中SIM卡!");
                this.submitToWriteCard(cardNum)
            }
        } catch (e) { alert("写卡组件加载异常"); }
        return false;
    },

    getCardNumFromReader: function () {

        //1.与卡建立连接
        var result = this.RPOCX.driverInit();      //初始化写卡驱动

        if (result != 'SUCCESS') {
            //alert(result);
            //window.top.hideEstopDiv();
            return '';
        }
        result = this.RPOCX.connectCard();     //连接卡片

        if (result != 'SUCCESS') {
            //alert(result);
            //window.top.hideEstopDiv();
            return '';
        }

        //空卡识别文件
        result = this.RPOCX.getCardDetail();   //读取空卡识别文件
        if (result != 'SUCCESS') {
            //alert(result);
            var connFlag = this.disConnect();
            return '';
        }

        var cardNum = this.RPOCX.getCardNum();    //获得空卡识别文件的值

        this.disConnect();     //断开卡连接
        return cardNum;

    },
    //断开卡连接
    disConnect: function () {
        var flag = this.RPOCX.disConnectCard();
        if (!flag) {
            return "断开卡连接失败,请稍后再试!";
        }

        flag = this.RPOCX.exitCard();
        if (!flag) {
            return "断开写卡器连接失败,请稍后再试!";
        }
        return "SUCCESS";
    },



    //填写完手机号,选择空卡开户,直接跳转到写卡页面
    submitToWriteCard: function (cardNum) {
        var p1 = /^\d{11}$/;
        var n_AuthNum = $("#n_AuthNum").val();
        n_AuthNum = n_AuthNum.replace(/\s/g, '');
        if (!p1.test(n_AuthNum)) {

            document.getElementById("n_AuthNum").focus();
            alert('服务号码必须是11位的手机号码，请检查后重新输入！');
            return;
        }
        //验证手机号是否已经写卡  ajaxCheckWriteState
        var url = '/card/WriteCardHandler?queryType=ajaxCheckWriteState&authNum=' + n_AuthNum;
        $.ajax({
            type: 'POST',
            url: url,
            async: false,//异步 true  同步false
            success: function (data) {
                var error = data.error;
                if (error) {
                    if (error.indexOf('登录') != -1) {
                        alert("获取信息失败：工号未登录");
                        return;
                    }
                    else {
                        alert("获取信息失败：" + error);
                        return;
                    }
                }

                var info = data.flag;
                if (!info) {
                    alert("获取信息失败");
                    return;
                }
                var a = '';
                if (info == 'ok') {
                    var str = n_AuthNum + "已有写卡记录！SIM卡序列号为:" + data.simCardId + "。是否确定继续空卡开户";
                    //已经写过的暂时不写 //todo
                    alert(str);
                    return;
                } else {
                    if (MyActiveObj.isFrame) {
                        url = "/card/frameTelWriteCardInfo?authNum=" + n_AuthNum + "&cardNum=" + cardNum;
                    }
                    else {
                        url = "/card/telWriteCardInfo?authNum=" + n_AuthNum + "&cardNum=" + cardNum;
                    }
                    location.href = url;
                }
            },
            dataType: "json"
        });

    },


    //======================================================================================================

    success: 'SUCCESS',
    failed: true,
    //1：表示错误不需要关闭页面
    //2：表示返回错误代码，此时需要关闭页面，且数据不可用
    //返回false表示由于写卡组件或者其他客观原因写卡，不能进行写卡
    //返回-1表示确认写卡但是写卡失败
    //返回true表示写卡成功
    OCXObject: function (numOfPhone, issueData, externData, _issueData, _packWriteCardDataInfo, _n_SIMCardId, _writeCardResultAdd, _n_AuthNum, _cardNum) {
        //var RPOCX1 = "<OBJECT id='RPOCX'  CLASSID='clsid:004BF811-3C0E-4719-9305-5737354151C9'  width='0px' height='0px'></OBJECT>";
        //document.body.insertAdjacentHTML('beforeEnd',RPOCX1);         //在body标签内加入html（RPOCX activeX控件） 

        //window.top.showEstopDiv();
        var result = this.success;
        var flag = true;
        //1.与卡建立连接
        result = this.RPOCX.driverInit();      //初始化写卡驱动

        if (result != this.success) {
            alert(result);
            //window.top.hideEstopDiv();
            return 1 + ":" + result;
        }
        result = this.RPOCX.connectCard();     //连接卡片

        if (result != this.success) {
            alert(result);
            //window.top.hideEstopDiv();
            return 1 + ":" + result;
        }

        //2.判断插入的是否是空卡
        result = this.RPOCX.getICCIDDetail();   //读取iccid值
        if (result != this.success) {
            alert(result);
            var connFlag = this.disConnect();
            if (connFlag == "SUCCESS") {
                alert("安全断开连接,可以将写卡器与计算机断开!");
            } else {
                alert(connFlag);
            }
            //window.top.hideEstopDiv();
            return 1 + ":" + result;
        }
        var iccidNum = this.RPOCX.getICCIDNum();    //获得iccid值
        if (iccidNum != "00000000000000000000" && iccidNum != "FFFFFFFFFFFFFFFFFFFF") {
            alert("插入卡为成卡,不能写卡,请换卡!");
            var connFlag = this.disConnect();
            if (connFlag == "SUCCESS") {
                alert("安全断开连接,可以将写卡器与计算机断开!");
            } else {
                alert(connFlag);
            }
            //window.top.hideEstopDiv();
            return "1:插入卡为成卡,不能写卡,请换卡!";
        }




        //3.获得sim卡得厂商和类别信息
        result = this.RPOCX.getCardDetail();   //读取空卡识别文件

        if (result != this.success) {
            alert(result);
            var connFlag = this.disConnect();
            if (connFlag == "SUCCESS") {
                alert("安全断开连接,可以将写卡器与计算机断开!");
            } else {
                alert(connFlag);
            }
            //window.top.hideEstopDiv();
            return 1 + ":" + result;
        }
        var cardNum = this.RPOCX.getCardNum();//空卡序列号

        if (_cardNum != cardNum) {
            alert('请勿中途更换SIM卡，请插入原卡。');
            //window.top.hideEstopDiv();
            return;
        }
        var simMF = this.RPOCX.getCardManufactory();
        var simType = this.RPOCX.getCardType();



        //新版写卡2.0不需要如下步骤直接写卡即可
        if (cardNum != null && 20 != cardNum.length) {
            alert('不支持的卡类型');
            return '不支持的卡类型';

        }

        //8、新版空白卡写卡仿照原4G写卡流程写卡，首先判断是否为新版空白卡（判断规则为空卡序列号为20位，如果为20位则为新卡）

        //写卡举例数据
        //var numOfPhone = 1;
        //ICCID，IMSI，KI，SMSP，PIN1，PIN2，PUK1，PUK2
        //var issueData = "89860060230805120001,460008511020001,7E82DEBD0E4364C01D2353A1217AED64,+8613800100500,1234,5678,46848138,01902389|89860060230805120002,460008511020002,3FBA47C86EEC6A2F3448B6C3781E8E94,+8613800100500,1234,5678,22355216,78754470";    
        //var issueData = "89860060230805120001,460008511020001,7E82DEBD0E4364C01D2353A1217AED64,+8613800100500,1234,5678,46848138,01902389";    
        //var externData = simType+",,";    //卡类型编码,,
        //8.写入相应的个人化数据，写卡

        issueData = _issueData;
        externData = simType + ",,";

        //1.先调用970005获取是否为4G卡
        //2.判断普通卡和4G卡的写卡参数
        //3.调用控件不同的写上方法写卡
        //4.依卡类型回传不同的接口数据

        /**
        1.通过970005接口判断是否为4G空白卡，
            如果接口返回为4G卡：则以4G卡写卡格式写卡
            如果接口返回失败或是非4G卡，则以3G写卡格式写卡
        **/


        //if (if4GBlank == 'Y') {
        issueData = issueData.replace("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "");
        issueData = issueData + ",";
        //}
        /** 异常接口数据 **/

        if (confirm("是否确定写卡?")) {
            /*djs();
        return;*/

            //8、新版空白卡写卡仿照原4G写卡流程写卡，首先判断是否为新版空白卡（判断规则为空卡序列号为20位，如果为20位则为新卡）
            //新版写卡2.0
            if (cardNum != null && 20 == cardNum.length) {

                //imis,iccid,smsp,pin1,pin2,puk1,puk2,region_code 拼串后保存
                //以上值在跳转到写卡页面前获得，即判断是否4G空卡时已获得，需要注意该值是否有空的时候
                var packWriteCardDataInfo = _packWriteCardDataInfo;
                //20141125报障：无法写卡；970020接口的最后一个参数为空白卡归属地市,而非开户号码归属地市。
                //packWriteCardDataInfo = $.trim(packWriteCardDataInfo);
                //var workNo = "A440610";
                //var regionId = workNo.substr(0,1).toUpperCase();
                //packWriteCardDataInfo = packWriteCardDataInfo.substr(0,packWriteCardDataInfo.length-1)+ regionId;
                var url = '/card/WriteCardHandler?queryType=ajaxGetPackedWriteCardDataAction';
                url += "&cardSerialNo=" + cardNum;
                url += "&packWriteCardDataInfo=" + packWriteCardDataInfo;

                var flag;
                var writeCardData;
                //window.top.showEstopDiv();
                $.ajax({
                    type: 'POST',
                    url: url,
                    async: false,//异步 true  同步false
                    success: function (data) {
                        //window.top.hideEstopDiv();
                        flag = data.flag;
                        writeCardData = data.writeCardData;
                    },
                    dataType: "json"
                });
                if (flag == this.failed) {
                    alert("根据写卡数据[" + packWriteCardDataInfo + "]以及空卡序列号[" + cardNum + "]拼装写卡命令失败!");
                    var connFlag = this.disConnect();
                    if (connFlag == "SUCCESS") {
                        alert("安全断开连接,可以将写卡器与计算机断开!");
                    } else {
                        alert(connFlag);
                    }
                    return "1:根据写卡数据[" + packWriteCardDataInfo + "]以及空卡序列号[" + cardNum + "]拼装写卡命令失败!";
                }
                result = this.RPOCX.writeCard(writeCardData);
                //控件写卡函数返回值缺少错误代码,后续950024会报错。
                //			if ( "写卡失败"== result ) {
                //				result = "2:写卡失败";
                //			}
            } else {
                //if (if4GBlank == 'Y') {
                //执行4G写卡操作
                result = this.RPOCX.personalizeUsim(authCode, numOfPhone, issueData, externData);
                //opresult=1;
                //} else {
                //    //执行3G写卡操作
                //    result = this.RPOCX.personalize(authCode, numOfPhone, issueData, externData);
                //}
            }
            //3G卡成功写卡返回"0"950022  ,4G卡成功写卡返回"1" 950024
            //opresult = "0";
            //if (if4GBlank == 'Y') {
            opresult = "1";
            //}



            //var opresult="1";
            if (result != this.success) {
                //调整写卡失败是的页面提示
                alert(result);
                //失败时断开卡片
                var connFlag = this.disConnect();
                if (connFlag != "SUCCESS") {
                    //window.top.hideEstopDiv();
                    //alert("断开卡片连接失败!");    
                }

                var errCode = result.split(":")[0];
                this.writeCardResult(errCode, 'HW:' + result, simType, simMF, cardNum, _n_SIMCardId, _writeCardResultAdd, _n_AuthNum);
                return "2:" + errCode;
            }
            //alert("写卡成功!正在反馈写卡信息...");
            //$("#tdmsg").append("写卡成功！正在反馈写卡信息......<br>");
            //断开卡片
            var connFlag = this.disConnect();
            if (connFlag != "SUCCESS") {
                //window.top.hideEstopDiv();
                //alert("断开卡片连接失败!");    
            }
            this.writeCardResult(opresult, 'HW', simType, simMF, cardNum, _n_SIMCardId, _writeCardResultAdd, _n_AuthNum);
            return opresult;
        }
        this.RPOCX.freeDll();
        //window.top.hideEstopDiv();
        return "1";

    },
    writeCardResult: function (opresult, resultdesc, simType, simMF, cardNum, _n_SIMCardId, _writeCardResultAdd, _n_AuthNum) {

        var writeCardResult = opresult + '~' + resultdesc + '~' + cardNum + '~';
        writeCardResult += simType + '~' + simMF + '~' + _n_AuthNum + '~';
        writeCardResult += _writeCardResultAdd;

        //if (if4GBlank == 'Y') {
        url = '/card/WriteCardHandler?queryType=ajaxSendWriteCardResult4GAction';
        writeCardResult += "~A"
        writeCardResult = writeCardResult.replace("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "");
        //}
        //else {
        //    url = '/card/WriteCardHandler?queryType=ajaxSendWriteCardResultAction';
        //}
        $.ajax({
            type: 'POST',
            url: url,
            async: false,//异步 true  同步false
            data: { info: writeCardResult, n_AuthNum: _n_AuthNum, n_SIMCardId: _n_SIMCardId },
            success: function (data) {
                if (data.flag != '0000') {
                    alert("写卡结果回传失败:" + data.msg + "\n失败码:950024");
                    if (confirm("请尝试更新写卡控件，下载完成后安装，然后重新登录再次尝试写卡？")) {
                        window.open("http://211.138.17.10:9090/WSKF/download/社会渠道GSM业务安装文件.exe");
                    }
                }
                else {
                    alert('反馈写卡信息成功,正在转向实卡开户页面!');
                    MyActiveObj.redirectToOpenCard(cardNum, _n_SIMCardId);
                }
            },
            dataType: "json"
        });
        //window.top.hideEstopDiv();
    },
    download: function (fileName) {
        var url = 'http://211.138.17.10:9090/WSKF/download/' + fileName;
        window.open(url);
    },

    redirectToOpenCard: function (originNum, wirteNum) {
        location.href = "/card";
    },

    testRedirect: function () {
        var originNum = '16153148080041326508';
        var writeNum = '898600501614F1144770';
        MyActiveObj.redirectToOpenCard(originNum, writeNum);
    }
}

MyActiveObj.initObj();