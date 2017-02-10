
var simContent = null;

function SimPop(message,type) {
    if (simContent == null) {
        $("body").append("<div class='popuDivContent' id='simContent'>" +
               '<div class="pop_content">' +
                 '<div class="title"><h4>' + message + '</h4></div>' +
             '<ul class="pop_ul">'+
            '<li><span class="tit">申请数量</span></li>'+
            '<li>'+
                '<input type="text" value="1" id="applyNum" class="czinputother inputnums" maxlength="3">' +
                 '<input type="hidden" value="' + type + '" id="applyType" class="czinputother inputnums" maxlength="3">' +
            '</li>'+
        '</ul>'+
        '<div class="pop_btns clearfix" style="padding-left: 0">'+
            '<ul>'+
                '<li><a href="###" onclick="applyCard()" class="popbtn_ok">确认提交</a></li>'+
            '</ul>'+
        '</div>'+
                   '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</div>");

        simContent = $("#simContent");
    }
    showPopu("simContent", 400, 300);
}

var transferContent = null;
function transferPop() {
    if (transferContent == null) {
        $("body").append("<div class='popuDivContent' id='transferContent'>" +
               '<div class="pop_content">' +
                 '<div class="title"><h4>调账</h4></div>' +
             '<ul class="pop_ul">' +
            '<li><span class="tit">充值调账到订货</span></li>' +
            '<li>' +
                '<input type="text" value="" id="transferAmount" class="czinputother inputnums" maxlength="8">' +
                
            '</li>' +
        '</ul>' +
        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="applytransfer()" class="popbtn_ok">确认提交</a></li>' +
            '</ul>' +
        '</div>' +
                   '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</div>");

        transferContent = $("#transferContent");
    }
    showPopu("transferContent", 400, 300);
}
var machineApplyContent = null;
function machineApplyPop() {
    if (machineApplyContent == null) {
        $("body").append("<div class='popuDivContent' id='machineApplyContent'>" +
               '<div class="pop_content">' +
                 '<div class="title"><h4>机器申请</h4></div>' +
             '<ul class="pop_ul pop_choose">' +
           
           '<li>' +
              '<input type="hidden" value="一卡通机器" id="machineType" name="machineType">' +
                  '<dl class="dtleft" id="styleDetail"><dt><a href="###" id="ykt" class="hover" onclick="doSetmachine(this)">一卡通<i></i></a></dt> <dt><a href="###" id="rq" onclick="doSetmachine(this)">燃气<i></i></a></dt></dl>' +
           '</li>' +
        '</ul>' +
           '<div class="pop_info" style="padding:0">' +

                    	'<p>1.一卡通机器押金100元，从订货账户扣除</p>' +
                        '<p>2.燃气机器押金300元，从订货账户扣除</p>' +
            '</div>' +
        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="submachine()" class="popbtn_ok">确认提交</a></li>' +
            '</ul>' +
        '</div>' +
                   '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</div>");

        machineApplyContent = $("#machineApplyContent");
    }
    showPopu("machineApplyContent", 400, 300);
}


var couponBuyContent = null;
function couponBuyPop() {
    if (couponBuyContent == null) {
        $("body").append("<div class='popuDivContent' id='couponBuyContent'>" +
               '<div class="pop_content">' +
                 '<div class="title"><h4>1元优惠券购买</h4></div>' +
             '<ul class="pop_ul pop_choose">' + 
           '<li>' +            
                  '<dl class="dtleft" id="styleDetail">' +
                  '<dt><a href="###" id="couponbuyType1" onclick="doSetCouponBuy(this)">200张<i></i></a></dt>' +
                   '<dt><a href="###" id="couponbuyType2" onclick="doSetCouponBuy(this)">500张<i></i></a></dt>' +
                     '<dt><a href="###" id="couponbuyType3" onclick="doSetCouponBuy(this)">1000张<i></i></a></dt>' +
                       '<dt><a href="###" id="couponbuyType4" onclick="doSetCouponBuy(this)">1500张<i></i></a></dt>' +
                  '</dl>' +
           '</li>' +
        '</ul>' +
 
           '<div class="pop_info" style="padding:0">' +

                    	'<p>便民账户需支付：<span id="couponbuyAmount" class="meifont">0</span>元</p>' +
                  
            '</div>' +
        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="subcouponbuy()" class="popbtn_ok">确认提交</a></li>' +
            '</ul>' +
        '</div>' +
                   '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</div>");

        couponBuyContent = $("#couponBuyContent");
    }
    showPopu("couponBuyContent", 400, 300);
}

 

//装修费
var decorateBuyContent = null;
function decorateBuyPop() {
    if (decorateBuyContent == null) {
        $("body").append("<div class='popuDivContent' id='decorateBuyContent'>" +
               '<div class="pop_content">' +
                 '<div class="title"><h4>装修抵用券购买</h4></div>' +
             '<ul class="pop_ul pop_choose">' +
           '<li>' +
                  '<dl class="dtleft" id="styleDetail">' +
                  '<dt><a href="###" id="decoratebuyType1" onclick="doSetdecorateBuy(this)">1000<i></i>（装修预算1万内使用）</a></dt>' +
                   '<dt><a href="###" id="decoratebuyType2" onclick="doSetdecorateBuy(this)">3000<i></i>（装修预算1-3万使用）</a></dt>' +
                     '<dt><a href="###" id="decoratebuyType3" onclick="doSetdecorateBuy(this)">5000<i></i>（装修预算3-5万使用）</a></dt>' +
                       '<dt><a href="###" id="decoratebuyType4" onclick="doSetdecorateBuy(this)">10000<i></i>（装修预算5万以上使用）</a></dt>' +
                  '</dl>' +
           '</li>' +
        '</ul>' +
           '<div class="pop_info" style="padding:0">' +
            	'<p>优惠只能享受一次！</p>' +
                    	'<p>便民账户需支付：<span id="decoratebuyAmount" class="meifont">0</span>元</p>' +

            '</div>' +
        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="subdecoratebuy()" class="popbtn_ok">确认提交</a></li>' +
            '</ul>' +
        '</div>' +
                   '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</div>");

        couponBuyContent = $("#decorateBuyContent");
    }
    showPopu("decorateBuyContent", 400, 300);
}

var applylctpopContent = null;

function applylctpop() {
    if (applylctpopContent == null) {
        $("body").append("<div class='popuDivContent' id='applylctpopContent'>" +
               '<div class="pop_content">' +
                 '<div class="title"><h4>绿城通购买</h4></div>' +
             '<ul class="pop_ul">' +
            '<li><span class="tit">购买数量</span></li>' +
            '<li>' +
                '<input type="text" value="1" id="applylctNum" class="czinputother inputnums" maxlength="3">' +
               
            '</li>' +
        '</ul>' +
        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="applylctCard()" class="popbtn_ok">确认提交</a></li>' +
            '</ul>' +
        '</div>' +
                   '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</div>");

        applylctpopContent = $("#applylctpopContent");
    }
    showPopu("applylctpopContent", 400, 300);
}
var rePriceContent = null;

function rePrice(productID) {
    if (rePriceContent == null) {
        $("body").append("<div class='popuDivContent' id='rePriceContent'>" +
               '<div class="pop_content">' +
                 '<div class="title"><h4>价格投诉</h4></div>' +
             '<ul class="pop_ul">' +
           
            '<li>' +
                '<span>投诉价格：</span><input type="text" value="" id="Input_PriceReport_Price" class="czinputother inputnums" maxlength="6">' +
                
            '</li>' +

            '<li>' +
                '<span>备注：</span><textarea id="Input_PriceReport_Mark" class="czinputother"/>' +

            '</li>' +
        '</ul>' +
          '<div class="pop_info" style="padding:0">' +
                    	'<p><a href="###" >为了您的账户安全，请设置8~20的字母+数字组合密码。</a></p>' +
                        '<p><a href="###" ><span id ="passerror" class="meifont"></span></a></p>' +
                    '</div>' +
        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="PriceReport(\'' + productID + '\')" class="popbtn_ok">确认提交</a></li>' +
            '</ul>' +
        '</div>' +
                   '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</div>");

        rePriceContent = $("#rePriceContent");
    }
    showPopu("rePriceContent", 400, 300);
}

var passWordContent = null;

function passWordPop() {
    if (passWordContent == null) {
        $("body").append("<div class='popuDivContent' id='passWordContent'>" +
             '<div class="pop_content">' +
              '<div class="title"><h4>您的密码过于简单，请立即修改！</h4></div>' +
             '<ul class="pop_ul">' +
            '<li><span class="tit">密码</span></li>' +
            '<li>' +
                '<input type="password" value="" id="pass1" class="czinputother inputnums" >' + 
            '</li>' +
             '<li><span class="tit">确认密码</span></li>' +
            '<li>' +
                '<input type="password" value="" id="pass2" class="czinputother inputnums" >' +
            '</li>' +
        '</ul>' +
          '<div class="pop_info" style="padding:0">' +
                    	'<p><a href="###" >为了您的账户安全，请设置8~20的字母+数字组合密码。</a></p>' +
                        '<p><a href="###" ><span id ="passerror" class="meifont"></span></a></p>' +
                    '</div>' +
        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="updatePass()" class="popbtn_ok">确认</a></li>' +
                '<li><a href="/account/LogOff"  class="popbtn_ok">取消</a></li>' +
            '</ul>' +
        '</div>' +
                   '<a class="pop_close" onClick=""></a>' +
               '</div>' +
           "</div>");

        passWordContent = $("#passWordContent");
    }
   
    showPopu("passWordContent", 400, 300);
    $("#popuDivMain").attr('onclick', '');
}
//我要推荐

var reCommendContent = null;

function reCommendPop() {
    if (reCommendContent == null) {
        $("body").append("<div class='popuDivContent' id='reCommendContent'><form id='reCommendform'>" +
             '<div class="pop_content">' +
              '<div class="title"><h4>我要推荐</h4></div>' +
             '<ul class="pop_ul">' +
              '<li><span class="tit">店铺名称</span></li>' +
            '<li>' +
                '<input type="text" value="" id="StoreName" name="StoreName" placeholder="您的店铺名称" class="czinputother inputnums" > <input type="checkbox" class="ipt02" id="IsCreat" name="IsCreat" checked="checked">新开店铺' +
            '</li>' +
            '<li><span class="tit">店铺地址</span></li>' +
            '<li>' +
                '<input type="text" value="" id="Address" placeholder="您店铺的所在位置" name="Address" class="czinputother inputnums" >' +
            '</li>' +
             '<li><span class="tit">联系人</span></li>' +
            '<li>' +
                '<input type="text" value="" id="Contacter" placeholder="负责人" name="Contacter" class="czinputother inputnums" >' +
            '</li>' +
             '<li><span class="tit">联系电话</span></li>' +
            '<li>' +
                '<input type="text" value="" id="Mobile" placeholder="负责人电话" name="Mobile" class="czinputother inputnums" >' +
            '</li>' +
        '</ul>' +

        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="SubmitreCommendfirm()" class="popbtn_ok">确认</a></li>' +

            '</ul>' +
        '</div>' +
           '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</form></div>");

        reCommendContent = $("#reCommendContent");
    }
    showPopu("reCommendContent", 500, 300);
}

//快件正常签收
var KuaiJIanZhengChangQianShou_Content = null;
function KuaiJIanZhengChangQianShou_Pop(rowNum,ydh, xingming, mobile) {
        if (KuaiJIanZhengChangQianShou_Content == null) {
            $("body").append("<div class='popuDivContent' id='KuaiJIanZhengChangQianShou_Content'></div>");
            KuaiJIanZhengChangQianShou_Content = $("#KuaiJIanZhengChangQianShou_Content");
        }
        KuaiJIanZhengChangQianShou_Content.html('<div class="pop_content">' +
            '<div class="title"><h4>正常签收</h4></div>' +
            '<div class="czinfo"><ul class="pop_ul" style="width:400px;">' +
            '<li><em>运单号：</em><input type="text" value="' + ydh + '" id="popDiv_QianShou_YDH" name="popDiv_YDH" class="czinputother inputnums" ></li>' +
            '<li><em>收件人姓名：</em>' +           
            '<input type="text" value="'+xingming+'" id="popDiv_QianShou_XingMing" name="popDiv_QianShou_XingMing" class="czinputother inputnums" >' +
            '</li>' +
            '<li><em>收件人电话：</em>' +
            '<input type="text" value="'+mobile+'" id="popDiv_QianShou_Mobile" name="popDiv_QianShou_Mobile" class="czinputother inputnums" >' +
            '</li>' +
            '<li><em>提取码：</em>' +          
            '<input type="text" value="" id="popDiv_QianShou_TiQuMa" name="popDiv_QianShou_TiQuMa" class="czinputother inputnums" >' +
            '</li>' +
        '</ul></div>' +
        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="AjaxZhengChangQianShou(' + rowNum + ');" class="popbtn_ok">确认</a></li>' +

            '</ul>' +
        '</div>' +
           '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>'
           );
       showPopu("KuaiJIanZhengChangQianShou_Content", $('#KuaiJIanZhengChangQianShou_Content').width(), $('#KuaiJIanZhengChangQianShou_Content').height());
     //showPopu("KuaiJIanZhengChangQianShou_Content", 520, $('#KuaiJIanZhengChangQianShou_Content').height());
}
//快件异常签收
var KuaiJIanYiChangQianShou_Content = null;
function KuaiJIanYiChangQianShou_Pop(rowNum,ydh, xingming) {
    if (KuaiJIanYiChangQianShou_Content == null) {
        $("body").append("<div class='popuDivContent' id='KuaiJIanYiChangQianShou_Content'></div>");
        KuaiJIanYiChangQianShou_Content = $("#KuaiJIanYiChangQianShou_Content");
    }
    KuaiJIanYiChangQianShou_Content.html('<div class="pop_content">' +
          '<div class="title"><h4>异常签收</h4></div>' +
         '<div class="czinfo"><ul class="pop_ul" style="width:400px;">' +
          '<li><em>运单号：</em><input type="text" value="' + ydh + '" id="popDiv_QianShouYC_YDH" name="popDiv_YDH" class="czinputother inputnums" ></li>' +
          '<li><em>收件人姓名：</em>' +      
          '<input type="text" value="' + xingming + '" id="popDiv_QianShouYC_XingMing" name="popDiv_QianShouYC_XingMing" class="czinputother inputnums" >' +
          '</li>' +
          '<li><em>原因：</em>' +     
          '<input type="text" value="" id="popDiv_QianShouYC_Reason" name="popDiv_QianShouYC_Reason" class="czinputother inputnums" >' +
        '</li>' +        
    '</ul></div>' +
    '<div class="pop_btns clearfix" style="padding-left: 0">' +
        '<ul>' +
            '<li><a href="###" onclick="AjaxYiChangQianShou(' + rowNum + ');" class="popbtn_ok">确认</a></li>' +

        '</ul>' +
    '</div>' +
       '<a class="pop_close" onClick="closePopu()"></a>' +
           '</div>'
       );
    showPopu("KuaiJIanYiChangQianShou_Content", $('#KuaiJIanYiChangQianShou_Content').width(), $('#KuaiJIanYiChangQianShou_Content').height());
    //showPopu("KuaiJIanYiChangQianShou_Content", 540, $('#KuaiJIanYiChangQianShou_Content').height());
}
//快件重发短信
var KuaiJIanReSendMsg_Content = null;
function KuaiJIanReSendMsg_Pop(ydh) {
    if (KuaiJIanReSendMsg_Content == null) {
        $("body").append("<div class='popuDivContent' id='KuaiJIanReSendMsg_Content'></div>");
        KuaiJIanReSendMsg_Content = $("#KuaiJIanReSendMsg_Content");
    }
    KuaiJIanReSendMsg_Content.html('<div class="pop_content">' +
          '<div class="title"><h4>重发短信</h4></div>' +
         '<ul class="pop_ul">' +
          '<li> <span class="tit">你确认重新发送短信吗？</span><input type="hidden" value="' + ydh + '" id="popDiv_ReSendMsg_YDH" name="popDiv_ReSendMsg_YDH" class="czinputother inputnums" ></li>' +
  '</ul>' +
    '<div class="pop_btns clearfix" style="padding-left: 0">' +
        '<ul>' +
            '<li><a href="###" onclick="AjaxReSendMsg()" class="popbtn_ok">确认</a></li>' +

        '</ul>' +
    '</div>' +
       '<a class="pop_close" onClick="closePopu()"></a>' +
           '</div>'
       );
    showPopu("KuaiJIanReSendMsg_Content", $('#KuaiJIanReSendMsg_Content').width(), $('#KuaiJIanReSendMsg_Content').height());
}

//提供货源

var acctptGoodContent = null;

function acctptGoodPop(id) {
    if (acctptGoodContent == null) {
        $("body").append("<div class='popuDivContent' id='acctptGoodContent'><form id='acctptGoodContent'><input type='hidden' name='publishgoodid' id ='publishgoodid' />" +
             '<div class="pop_content">' +
              '<div class="title"><h4>提供货源</h4></div>' +
             '<ul class="pop_ul">' +
           
           
             '<li><span class="tit">联系人</span></li>' +
            '<li>' +
                '<input type="text" value="" id="publishgoodName" placeholder="您的姓名" name="publishgoodName" class="czinputother inputnums" >' +
            '</li>' +
             '<li><span class="tit">联系电话</span></li>' +
            '<li>' +
                '<input type="text" value="" id="publishgoodMobile" placeholder="您的电话号码" name="publishgoodMobile" class="czinputother inputnums" >' +
            '</li>' +
              '<li><span class="tit">件数</span></li>' +
            '<li>' +
                '<input type="text" value="" id="publishgoodNum" placeholder="产品数量" name="publishgoodNum" class="czinputother inputnums" >' +
            '</li>' +
             '<li><span class="tit">价格</span></li>' +
            '<li>' +
                '<input type="text" value="" id="publishgoodPrice" placeholder="产品价格" name="publishgoodPrice" class="czinputother inputnums" >' +
            '</li>' +
        '</ul>' +

        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="SubmitacctptGoodConfirm()" class="popbtn_ok">确认</a></li>' +

            '</ul>' +
        '</div>' +
           '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</form></div>");

        acctptGoodContent = $("#acctptGoodContent");
    }
    showPopu("acctptGoodContent", 500, 300);

    $('#publishgoodid').val(id);
}


//我要加盟

var innerJoinContent = null;

function innerJoinPop() {
    if (innerJoinContent == null) {
        $("body").append("<div class='popuDivContent' id='innerJoinContent'><form id='innerJoinform'>" +
             '<div class="pop_content">' +
              '<div class="title"><h4>我要加盟</h4></div>' +
             '<ul class="pop_ul">' +
              '<li><span class="tit">店铺名称</span></li>' +
            '<li>' +
                '<input type="text" value="" id="StoreName" name="StoreName" placeholder="您的店铺名称" class="czinputother inputnums" >' +
            '</li>' +
            '<li><span class="tit">店铺地址</span></li>' +
            '<li>' +
                '<input type="text" value="" id="Address" placeholder="您店铺的所在位置" name="Address" class="czinputother inputnums" >' +
            '</li>' +
             '<li><span class="tit">联系人</span></li>' +
            '<li>' +
                '<input type="text" value="" id="Contacter" placeholder="您的姓名" name="Contacter" class="czinputother inputnums" >' +
            '</li>' +
             '<li><span class="tit">联系电话</span></li>' +
            '<li>' +
                '<input type="text" value="" id="Mobile" placeholder="您的电话号码" name="Mobile" class="czinputother inputnums" >' +
            '</li>' +
        '</ul>' +
         
        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="SubmitinnerJoinConfirm()" class="popbtn_ok">确认</a></li>' +

            '</ul>' +
        '</div>' +
           '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</form></div>");

        innerJoinContent = $("#innerJoinContent");
    }
    showPopu("innerJoinContent", 500, 300);
}
//旧店改造
var reformContent = null;
function reformPop() {
    if (reformContent == null) {
        $("body").append("<div class='popuDivContent' id='reformContent'><form id='reformContentform'>" +
             '<div class="pop_content">' +
              '<div class="title"><h4>旧店改造</h4></div>' +
             '<ul class="pop_ul">' +
              '<li><span class="tit"><img id="valiCode" name="valiCode" style="cursor: pointer;" src="/MerchantInfo/GetValidateCode" alt="验证码" /></span></li>' +
            '<li>' +
                '<em>验证码</em><i><input type="text" class="ipt01" placeholder="验证码" id="vcode" name="vcode"></i>' +
            '</li>' +
           
        '</ul>' +

        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="SubmitreformConfirm()" class="popbtn_ok">确认</a></li>' +

            '</ul>' +
        '</div>' +
           '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</form></div>");

        reformContent = $("#reformContent");
    }
    showPopu("reformContent", 500, 300);

    $("#valiCode").bind("click", function () {
        this.src = "/MerchantInfo/GetValidateCode?time=" + (new Date()).getTime();
    });

    $("#valiCode").trigger('click');
}


var payPassContent = null;

function payPassPop() {
    if (payPassContent == null) {
        $("body").append("<div class='popuDivContent' id='payPassContent'>" +
             '<div class="pop_content">' +
              '<div class="title"><h4>支付密码用于qq游戏点卡充值</h4></div>' +
             '<ul class="pop_ul">' +
              '<li><span class="tit">初始密码</span></li>' +
            '<li>' +
                '<input type="password" value="" id="pass3" class="czinputother inputnums" >' +
            '</li>' +
            '<li><span class="tit">密码</span></li>' +
            '<li>' +
                '<input type="password" value="" id="pass1" class="czinputother inputnums" >' +
            '</li>' +
             '<li><span class="tit">确认密码</span></li>' +
            '<li>' +
                '<input type="password" value="" id="pass2" class="czinputother inputnums" >' +
            '</li>' +
        '</ul>' +
        '<div class="pop_info" style="padding:0">' +
                '<p><a href="###" >请联系业务经理索取初始密码。(6到20位)纯数字</a></p>' +
                '<p><a href="###" ><span id ="passerror" class="meifont"></span></a></p>' +
            '</div>' +
        '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
                '<li><a href="###" onclick="updatepayPass()" class="popbtn_ok">确认</a></li>' +
                
            '</ul>' +
        '</div>' +
                  
               '</div>' +
           "</div>");
        
        payPassContent = $("#payPassContent");
    } 
    showPopu("payPassContent", 500, 300);
    $("#popuDivMain").attr('onclick', '');
}


var discountContent = null;
function showDiscountSet() {
    if (discountContent == null) {

        $.post('/Yikatong/DiscountGet', function (msg) {
            if (msg.Result) {
                $("body").append("<div class='popuDivContent' id='discountContent'>" +
                    '<div class="pop_content">' +
                    '<div class="title"><h4>折扣设置</h4></div>' +
                    '<ul class="pop_ul">' +
                    '<li><span class="tit">折扣(输入9.5 则为9.5折，默认9.8折)</span></li>' +
                    '<li>' +
                    '<input type="text" value="' + (1 - msg.Data.discount)*10 + '" id="discountRate" name = "discountRate" class="czinputother inputnums" maxlength="3">' +
                    '</li>' +
                    '</ul>' +
                    '<div class="pop_btns clearfix" style="padding-left: 0">' +
                    '<ul>' +
                    '<li><a href="###" onclick="applyDiscountSet()" class="popbtn_ok">确认提交</a></li>' +
                    '</ul>' +
                    '</div>' +
                    '<a class="pop_close" onClick="closePopu()"></a>' +
                    '</div>' +
                    "</div>");
                showPopu("discountContent", 400, 300);
            } else {
                showPopuMessage("failure", msg.Message);
            }
        });
    }
  
}
//检查是否是客户端登陆提示框
var clientContent;

function ClientPop() {
    if (clientContent == null) {
        $("body").append("<div class='popuDivContent' id='clientContent'>" +
               '<div class="pop_content">' +
                 '<div class="title"><h4 class="warning"><span></span>充值缴费请使用微客户端</h4></div>' +
                 '<div class="pop_info">' +
                    	'<p><a href="https://passport.aibianli.cn/home/downloadClient" target="_blank">下载爱便利微客户端</a></p>' +
                    '</div>' +
                   '<a class="pop_close" onClick="closePopu()"></a>' +
               '</div>' +
           "</div>");

        clientContent = $("#clientContent");

    }
    showPopu("clientContent", 0, 0);
}
var ChargeContent = null;
//充值、开卡调用弹出框 
function ChargePop(result, message,info, btnhref1, btntxt1, btnhref2, btntxt2) {



    if (ChargeContent == null) {
        $("body").append("<div class='popuDivContent' id='ChargeContent'>"+
                '<div class="pop_content">' +
                  '<div id="poptitle" class="title"></div>' +
                 '<div class="pop_info">'+
                    	'<p id="pop_info_item"></p>'+
                        '<p>如有任何疑问请拨打客服热线 <span class="meifont">96533</span> 进行咨询</p>'+
                    '</div>'+
                '<div class="pop_btns clearfix">'+
                        '<ul id="btnli">'+
                           
                        '</ul>'+
                   '</div>'+

                    '<a class="pop_close" onClick="closePopu()"></a>' +
                '</div>'+ 
            "</div>");

        ChargeContent = $("#ChargeContent");
         
    } 
    var title = "";
    switch (result) {
        case "success":
            title = '<h4><span></span>' + message + '</h4>'; break;
        case "failure":
            title = ' <h4 class="failure"><span></span>' + message + '</h4>'; break;
        case "warning":
            title = '<h4 class="warning"><span></span>' + message + '</h4>'; break;
        default:
            $("#popuDivContent").children().html(info); closePopu(); return false;
            break;
    }
    $("#poptitle").html(title);
    $("#pop_info_item").html("");
    $("#pop_info_item").html(info);

    $("#btnli").html('<li><a href="' + btnhref1 + '" class="popbtn_ok">' + btntxt1 + '</a></li><li><a href="' + btnhref2 + '" class="popbtn_no">' + btntxt2 + '</a></li>');

    showPopu("ChargeContent",0,0);
}
 
//弹出层
var popuDivMain = null;
var popuDivContent = null;
function showPopu(contentDiv, w, h) {
    if (popuDivMain == null) {
        $("body").append("<div id='popuDivMain' onclick='closePopu(true)'></div>");
        popuDivMain = $("#popuDivMain");
    } 
    popuDivContent = $("#" + contentDiv);
    closePopu();
    
    popuDivContent.css("width", "");
    popuDivContent.css("height", "");


    var popwidth = popuDivContent.width();
    var popheight = popuDivContent.height(); 
    
    var win_h = $(window).height();
    var win_w = $(window).width();
    
    if (win_h == 0) {
        win_h = 800;
        popuDivContent.css({ "position": "absolute" });
    }
    if (win_w == 0) {
        win_w = 1024;
    }
    var popleft = (win_w - w-20) / 2;
    var poptop = (win_h - h - 20) / 2;

    if (contentDiv == "ChargeContent" || contentDiv == "simContent" || contentDiv == "clientContent") {
        popleft -= ($(window).width() - $('#content').width()) / 2;

        poptop -= ($('#header').height() + $('.site-notice').height())/2;
    }


    popuDivContent.css({ "left": +popleft + "px", "top": +poptop + "px", "width": +popwidth+ "px", "height": +popheight + "px"});

    popuDivMain.fadeIn();
    popuDivContent.fadeIn();
}

function closePopu(checkEvent) {
    popuDivMain.hide();
    popuDivContent.hide();
    if (ConfirmPop != undefined) ConfirmPop.hide();
    if (msgContent != undefined) msgContent.hide();
    if (OrderConfirm != undefined) OrderConfirm.hide();
    if (showCartPop != undefined) showCartPop.hide();
    if (ChargeContent != undefined) ChargeContent.hide();
    if (simContent != undefined) simContent.hide();
    if (clientContent != undefined) clientContent.hide();
    if (huolibaoContent != undefined) huolibaoContent.hide();
    if (ConfirmExchange != undefined) ConfirmExchange.hide();
    if (showIsNewCartPop != undefined) showIsNewCartPop.hide();
    if (UserInfoPop != undefined) UserInfoPop.hide();
    if (showOrderMeeting != undefined) showOrderMeeting.hide();
    if (SalerpopContent != undefined) SalerpopContent.hide();
    if (SetUtilityBillsContent != undefined) SetUtilityBillsContent.hide();
    if (CreditApplyContent != undefined) CreditApplyContent.hide();
    if (TouristContent != undefined) TouristContent.hide();
    if (couponContent != undefined) couponContent.hide();
    if (jifenContent != undefined) jifenContent.hide();
    if (discountContent != undefined) discountContent.hide();
    if (passWordContent != undefined) passWordContent.hide();
    if (payPassContent != undefined) payPassContent.hide();
    if (rePriceContent != undefined) rePriceContent.hide();
    if (applylctpopContent != undefined) applylctpopContent.hide();
    if (machineApplyContent != undefined) machineApplyContent.hide();
    if (transferContent != undefined) transferContent.hide();
    if (MTwoContent != undefined) MTwoContent.hide();
    if (innerJoinContent != undefined) innerJoinContent.hide();
    if (reCommendContent != undefined) reCommendContent.hide();
    if (KuaiJIanZhengChangQianShou_Content != undefined) KuaiJIanZhengChangQianShou_Content.hide();    
    if (reformContent != undefined) reformContent.hide();
    if (couponBuyContent != undefined) couponBuyContent.hide();
    if (decorateBuyContent != undefined) decorateBuyContent.hide();
    if (acctptGoodContent != undefined) acctptGoodContent.hide();
    if (checkEvent&&afterEvent != null) {
        afterEvent();
        afterEvent = null;
    }
}
//积分兑换
var jifenContent = null;
function showJFsetMessage(cur) {
    if (jifenContent == null) {
        $("body").append("<div class='popuDivContent' id='jifenContent'></div>");
        jifenContent = $("#jifenContent");
    }

    jifenContent.html('<div class="pop_content">' +

          '<div class="title">' +
              '<h4 class="success">积分兑换</h4>' +
          '</div>' +
          //
          '<ul class="pop_choose">' + 
              '<li><span class="tit" id="spanStyleInfo">当前积分：' + cur.toFixed(2) + '</span></li>' +
              '<li><span class="tit" id="spanStyleInfo">兑换规则：50积分=0.5元优惠券</span></li>' +
               '<li><span class="tit" id="spanStyleInfo">兑换结果：' + parseInt(cur / 50)*0.5 + '元 [剩余积分：' + cur % 50 + ']</span></li>' +
            
          '</ul>' + 
        '<div class="pop_info">' + 
            '<p id="pop_info_item">优惠券可在你购物车结算时进行优惠，每件现金优惠0.5元</p>' +
        '</div>' +
          '<div class="pop_btns clearfix" style="padding-left: 0">' +
              '<ul>' +
                   '<li><a href="###" onclick = "creditsExchange()" class="popbtn_ok">兑换</a></li>' +
                   '<li><a href="###" onclick = "closePopu()" class="popbtn_ok">取消</a></li>' +
              '</ul>' +
          '</div>' +
          '<a class="pop_close" onclick="closePopu();"></a>' +
      '</div>');
    showPopu("jifenContent", $('#jifenContent').width(), $('#jifenContent').height());
}

//优惠券 
var couponContent = null;
function showCouponMessage() {
    if (couponContent == null) {
        $("body").append("<div class='popuDivContent' id='couponContent'></div>");
        couponContent = $("#couponContent");
    }
    $.post('/Coupon/GetLevelList', function (res) {
        if (res.Data == null) { showPopuMessage("warning", "暂无优惠券"); }
        var data = res.Data;
        var html = "";
        for (var i = 0; i < data.length; i++) {
            var checked = "";
            if (data[i].Checked == true) {
                checked +='checked = "true"';
            }
           // html += '<li><input type="radio" name="level" ' + checked + ' value = "' + data[i].Level + '"> ' + data[i].CouponValue + ' 元&nbsp; </li>';
            html += '<li><input type="radio" name="level" ' + checked + ' value = "' + data[i].Level + '"> ' + data[i].CouponValue + ' 元&nbsp; 【剩余 <span class="meifont">' + data[i].Amount + ' </span>元】</li>';
        }
        couponContent.html('<div class="pop_content">' +
            '<div class="title">' +
            '<h4 class="success">优惠券设置</h4>' +
            '</div>' +
            '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
            
            html+
            '</ul>' +
            '</div>' +
            '<a class="pop_close" onclick="closePopu();"></a>' +
            '</div>');
        showPopu("couponContent", $('#couponContent').width(), $('#couponContent').height());

        $('input[name="level"]').change(function () {
            $.post('/CouPon/SetLevel', { level: $(this).val() }, function (msg) {
                 
                if (msg.Result) {
                    showPopuMessage("success", msg.Message);
                }
                else {
                    //  messagePop("failure", "查询卡时失败:" + msg.Message);
                    showPopuMessage("failure", msg.Message);
                }
            });

        });
    });


}
//简单弹出消息框 只弹出消息
var msgContent = null;
function showPopuMessage(className, message, redirectUrl) {
    if (msgContent == null) {
        $("body").append("<div class='popuDivContent' id='msgContent'></div>");
        msgContent = $("#msgContent");
    }
    var title = "";
    switch (className) {
        case "success":
            title = '<h4><span></span>' + message + '</h4><br><br>'; break;
        case "failure":
            title = ' <h4 class="failure"><span></span>' + message + '</h4><br><br>'; break;
        case "warning":
            title = '<h4 class="warning"><span></span>' + message + '</h4><br><br>'; break;
    }
   

   
    if (redirectUrl != undefined) {
        title += "[5秒自动刷新]";
        setTimeout("window.location='" + redirectUrl + "'", 5000);
         
    }
    msgContent.html("<div class='pop_content'> <div class='title'>" + title + "</div><a class='pop_close' onclick='closePopu()'></a></div>");
        showPopu("msgContent", 600, 180);

}
//简单确认框只弹出 是否确认 并提交表单
var ConfirmPop = null;
function showConfirm(message,dofun) {
    if (ConfirmPop == null) {
        $("body").append("<div class='popuDivContent' id='ConfirmContent'></div>");
        ConfirmPop = $("#ConfirmContent");
    }
    var namefun = typeof (dofun) == "undefined" ? "formSub()" : dofun ;
    ConfirmPop.html('<div class="pop_content">'+
      
            '<div class="title">'+
                '<h4 class="warning"><span></span>' + message + '</h4>'+
            '</div>'+
            '<div class="pop_btns clearfix" style="padding-left: 0">'+
                '<ul>'+
                     '<li><a href="javascript:void(0);" onclick = "' + namefun + '" class="popbtn_ok">确认提交</a></li>' +
                     '<li><a href="javascript:void(0);" onclick = "closePopu();" class="popbtn_ok">取消</a></li>' +
                '</ul>'+
            '</div>'+
            '<a class="pop_close" onclick="closePopu();"></a>' +
        '</div>');

    showPopu("ConfirmContent", $('#ConfirmContent').width(), $('#ConfirmContent').height());
}


//表单提交判断
function formSub() {
    closePopu();
    if (ConfirmPop.is(':hidden')) {
        $('#form1').submit();
    }
}


//关于订单确认框 （确认付款、确认取消订单、确认收货）
var OrderConfirm = null;
function showOrderPop(message) {
    if (OrderConfirm == null) {
        $("body").append("<div class='popuDivContent' id='OrderConfirm'></div>");
        OrderConfirm = $("#OrderConfirm");
    }
    OrderConfirm.html('<div class="pop_content">' +

            '<div class="title">' +
                '<h4 class="warning"><span></span>' + message + '</h4>' +
            '</div>' +
            '<div class="pop_btns clearfix" style="padding-left: 0">' +
                '<ul>' +
                     '<li><a href="javascript:void(0);" onclick = "OrderPop.submitOrder();" class="popbtn_ok">确认提交</a></li>' +
                     '<li><a href="javascript:void(0);" onclick = "closePopu();" class="popbtn_ok">取消</a></li>' +
                '</ul>' +
            '</div>' +
            '<a class="pop_close" onclick="closePopu();"></a>' +
        '</div>');
    showPopu("OrderConfirm", 400, 212);
}


// 添加购物车 新品无库存 需要客户二次确认
var showIsNewCartPop = null;
function showIsNewCartMessge(message,productId, num, saleMode, isnew,styleId) {

    if (showIsNewCartPop == null) {
        $("body").append("<div class='popuDivContent' id='showIsNewCartPop'></div>");
        showIsNewCartPop = $("#showIsNewCartPop");
    }
    var dofun = "";
    if (styleId == undefined) {
        dofun = '<li><a href="###" onclick="P.addNew(' + productId + ',' + num + ',' + saleMode + ',' + isnew + ')" class="popbtn_ok">继续订购</a></li>';
    } else {
        dofun = '<li><a href="###" onclick="P.addNew(' + productId + ',' + num + ',' + saleMode + ',' + isnew + ',' + styleId + ')" class="popbtn_ok">继续订购</a></li>';
    }
    
    var  title = '<h4 class="warning"><span></span>' + message + '</h4>';
   
     
    showIsNewCartPop.html('<div class="pop_content">' +
            '<div class="title">' +
               title +
            '</div>' +
            '<div class="pop_btns clearfix" style="padding-left: 0">' +
                '<ul>' +

                dofun+
                         '<li><a href="javascript:void()" onclick="closePopu()" class="popbtn_ok">返回</a></li>' +
                    '</ul>' +
                '</div>' +
                '<a class="pop_close" onclick="closePopu()"></a>' +
            '</div>');
    
    showPopu("showIsNewCartPop", 400, 212);
    return false;
}

// 添加购物车 成功 则跳转 否则 提示错误 联系客服
var showCartPop = null;
function showCartMessge(className, message) {

    if (showCartPop == null) {
        $("body").append("<div class='popuDivContent' id='showCartPop'></div>");
        showCartPop = $("#showCartPop");
    }

    var title = "";
    switch (className) {
        case "success":
            title = '<h4><span></span>' + message + '</h4>'; break;
        case "failure":
            title = ' <h4 class="failure"><span></span>' + message + '</h4>'; break;
        case "warning":
            title = '<h4 class="warning"><span></span>' + message + '</h4>'; break;
    }

    ///cart?cartType=4

 
    
    var hrefUrl = "/cart";
    if ($('#header').length == 0) {
        hrefUrl = "/cart/outletcart";
        if (typeof (RefreshCart) != "undefined") //刷新购物车数量 只针对门店页面使用，使用前先判断对象是否定义
            RefreshCart();
    }
    if (curProduct.saleMode == -1 && curProduct.styleId!= -1) {
        hrefUrl += "?cartType=4";
    }
    if (className == "success") {
        var htmlContent = '<div class="pop_content">' +
            '<div class="title">' +
            title +
            '</div>' +
            '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
            '<li><a href="' + hrefUrl + '" class="popbtn_ok">去结算</a></li>' +
            '<li><a href="javascript:void()" onclick="closePopu()" class="popbtn_ok">继续购物</a></li>' +
            '</ul>' +
            '</div>' +
            '<a class="pop_close" onclick="closePopu()"></a>' +
            '</div>';
        if (window.location.href.indexOf("fromMendian=yes") > 0) {
            htmlContent = '<div class="pop_content">' +
            '<div class="title">' +
            title +
            '</div>' +
            '<div class="pop_btns clearfix" style="padding-left: 0">' +
            '<ul>' +
            '<li><a href="javascript:void()" onclick="closePopu()" class="popbtn_ok">继续购物</a></li>' +
            '</ul>' +
            '</div>' +
            '<a class="pop_close" onclick="closePopu()"></a>' +
            '</div>';
        }
        showCartPop.html(htmlContent);
    } else {
        showCartPop.html('<div class="pop_content">' +
                '<div class="title">' +
                    title +
                '</div>' + 
                //'<div class="pop_info">' + 
                //  '<p>请拨打客服热线<span class="meifont">96533</span>进行咨询</p>'+
                //'</div>'+
                '<a class="pop_close" onclick="closePopu()"></a>' +
            '</div>');

    }
    showPopu("showCartPop", 400, 212);
}

// 添加购物车 成功 则跳转 否则 提示错误 联系客服
var showOrderMeeting = null;
function showOrderMeetingMessge(className, message) {

    if (showOrderMeeting == null) {
        $("body").append("<div class='popuDivContent' id='showOrderMeeting'></div>");
        showOrderMeeting = $("#showOrderMeeting");
    }

    var title = "";
    switch (className) {
        case "success":
            title = '<h4><span></span>' + message + '</h4>'; break;
        case "failure":
            title = ' <h4 class="failure"><span></span>' + message + '</h4>'; break;
        case "warning":
            title = '<h4 class="warning"><span></span>' + message + '</h4>'; break;
    }
    if (className == "success") {
        showOrderMeeting.html('<div class="pop_content">' +
                '<div class="title">' +
                   title +
                '</div>' +
                '<div class="pop_btns clearfix" style="padding-left: 0">' +
                    '<ul>' +
                         '<li><a href="/ProductOrder/OrderMeeting" class="popbtn_ok">自助发货</a></li>' +
                         '<li><a href="javascript:void()" onclick="closePopu()" class="popbtn_ok">继续购物</a></li>' +
                    '</ul>' +
                '</div>' +
                '<a class="pop_close" onclick="closePopu()"></a>' +
            '</div>');
    } else {
        showOrderMeeting.html('<div class="pop_content">' +
                '<div class="title">' +
                    title +
                '</div>' +
                //'<div class="pop_info">' +
                //  '<p>请拨打客服热线<span class="meifont">96533</span>进行咨询</p>' +
                //'</div>' +
                '<a class="pop_close" onclick="closePopu()"></a>' +
            '</div>');

    }
    showPopu("showOrderMeeting", 400, 212);
}

var UserInfoPop = null;
//客户经理信息弹出框
function openUserInfo(userid) {

    $.post("/Merchant/GetEmployeeInfo", { userid: userid }, function (data) {
        if (UserInfoPop == null) {
            $("body").append("<div class='popuDivContent' id='UserInfoPop'></div>");
            UserInfoPop = $("#UserInfoPop");
        }
       
        var html = "<div class='pop_content'><h2>你的客户经理：</h2>";
        html += "<div style='position:absultion;float:right;width:180px;height:200px'><img style='width:180px;height:200px' src='" + data.Data.HeadImg + "' /></div>";
        html += '<ul style="font-size:24px">'+
        '<li>姓名：<span>' + data.Data.Name + '</span></li>' +
                    '<li>职位：<span>' + data.Data.RoleName + '</span></li>' +
                    '<li>性别：<span>' + data.Data.Sex + '</span></li>' +
                    '<li>电话：<span>' + data.Data.Mobile + '</span></li>' +
                    '<li>提示：<span style="color: red;">动态令牌收取30元押金。</span></li>'+
                '</ul>';

        html += '<br/>';
        html += '<br/>';
       
        html += '<div style="font-size:16px">' +
        '亲，我是您的客户经理 ' + data.Data.Name + '，竭诚为您服务，请随时拨打我的手机 ' + data.Data.Mobile + '，为您服务！<br>' +
        '<span style="color: red;">   温馨提醒：近期有不少不法分子、前离职人员冒充爱便利客户经理的同事、朋友去店里收取充值款，为了避免给您的财产造成，如遇到此类情况请务必与您的客户经理进行核对，如遇到冒充分子可直接报警。爱便利感谢您的合作，祝您猴年走大运，发大财！</span>'+
    '</div>  <a class="pop_close" onclick="closePopu()"></a></div>';


        UserInfoPop.html(html);

        showPopu("UserInfoPop", 680, 400);
    }); 
}
var afterEvent = null;
var beforeEvent = null;

//兑奖信息弹出框

var ConfirmExchange = null;
function ConfirmExchangePop(id, o) {
    
    if (ConfirmExchange == null) {
        $("body").append("<div class='popuDivContent' id='ConfirmExchange'></div>");
        ConfirmExchange = $("#ConfirmExchange");
    }
    ConfirmExchange.html('<div class="pop_content">' +

            '<div class="title">' +
                '<h4 class="success">兑奖信息</h4>' +
            '</div>' +

            '<ul class="pop_choose">' +
             //'<li><span class="tit">可兑奖总量：' + o.num + '</span></li>' +
                '<li><span class="tit">兑奖数量:</span>'+
                    '<span class="pop_count_field"><a href="javascript:;" class="cut" title="数量 - 1" onclick="ExchangenumDown(\'pro_count\')">+</a>' +
                        '<input type="text" id="pro_count" name="pro_count" value="1" maxlength="3">' +
                        '<a href="javascript:;" class="plus" title="数量 + 1" onclick="ExchangenumUp(\'pro_count\','+o.num+')">-</a> </span><em>件</em>' +
                '</li>' +
                '<li><span class="tit" id="spanStyleInfo">商品名称：' + o.name + '</span></li>' +
                '<li><span class="tit" id="spanStyleInfo">兑奖日期：' + o.start +'至'+o.end + '</span></li>' +
                
            '</ul>' +
            '<div class="pop_btns clearfix" style="padding-left: 0">' +
                '<ul>' +
                     '<li><a href="###" onclick = "submitExcent(' + id + ')" class="popbtn_ok">提交</a></li>' +
                     '<li><a href="###" onclick = "closePopu()" class="popbtn_ok">取消</a></li>' +
                '</ul>' +
            '</div>' +
            '<a class="pop_close" onclick="closePopu();"></a>' +
        '</div>');
    showPopu("ConfirmExchange", $('#ConfirmExchange').width(), $('#ConfirmExchange').height());
}
//货利宝详情页
var huolibaoContent = null;
function showHuolibao() {
    if (huolibaoContent == null) {
        $("body").append("<div class='popuDivContent' id='huolibaoContent'></div>");
        huolibaoContent = $("#huolibaoContent");
    }

    huolibaoContent.html('<div class="pop_content">' +

            '<div class="title">' +
                '<h4 class="success">货利宝是什么?</h4>' +
            '</div><br/>' +
            '<div style="font-size:16px">' +
        
        ' 1、货利宝是爱便利与第三方金融机构合作的余额增值类产品；商家转入货利宝的钱，是购买了金额机构运作的理财产品，收益基础为年化收益；年化收益率在6%至16%；<br/>'+
'2、货利宝在基金收益基础上，推出共享共赢计划；当月超过平台基础订货量的比值，将作为加成收益部分；（用户订货越多，加成收益越高）<br/>'+
    '3、用户收益=基础收益+订货加成收益；<br/>'+
    '&nbsp;&nbsp;&nbsp;&nbsp;用户当日实际收益=（货利宝确认金额/10000）*（当日公布的基金每万份收益+订货每万份加成收益）<br/>' +
    '</div>  <a class="pop_close" onclick="closePopu()"></a></div>');
    showPopu("huolibaoContent", $('#huolibaoContent').width(), $('#huolibaoContent').height());
}


//游客信息添加

var TouristContent = null;
function TouristPop(scenicId,ticketId,isSimple) {
    if (TouristContent == null) {
        $("body").append("<div class='popuDivContent' id='TouristContent'></div>");
        TouristContent = $("#TouristContent");
    }

    var flex = isSimple ? '' : 
           '<tr>' +
           '<td height="47"><b>身份证号：</b></td>' +
        '<td height="30"><input type="text" id = "ContacterIdCard"  name="ContacterIdCard"   value = ""></td>' +
          '</tr>' +
            '<tr>' +
           '<td height="47"><b>密码：</b></td>' +
        '<td height="30"><input type="text" id = "Password"  name="Password"   value = ""></td>' +
          '</tr>' +
           
            '<tr>' +
           '<tr>' +

             '<tr>' +
           '<td height="47"><b>职业：</b></td>' +
        '<td height="30"><input type="text" id = "Occupation"  name="Occupation"   value = ""></td>' +
          '</tr>' +
             '<tr>' +
           '<td height="47"><b>邮箱：</b></td>' +
        '<td height="30"><input type="text" id = "Email"  name="Email"   value = ""></td>' +
          '</tr>' +
             '<tr>' +
           '<td height="47"><b>保险卡序列号：</b></td>' +
        '<td height="30"><input type="text" id = "Sequence_code"  name="Sequence_code"   value = ""></td>' +
          '</tr>';
    TouristContent.html(
 '<div class="pop_content clearfix">' +
   '<div class="pop_content_con">'+
            	'<table border="0" cellspacing="0" cellpadding="0" style="font-size:14px;">'+
                  
      '<tr>'+
        '<td height="47"><b>客户信息：</b></td>'+
      '</tr>'+
      '<tr>'+
        '<td class="visitDetail">信息填写不全、不准确，不通过。'+
        '</td>'+
      '</tr>'+
      '<tr>'+
        '<td>'+
        '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size:14px;">'+
        
          '<tr> <input type="hidden" id = "Card_type"  name="Card_type"   value = "">' +
           '<td height="47"><b>姓名：</b></td>' +
        '<td height="30"><input type="text" name="Name" id = "Name" value = ""></td>' +
          '</tr>' +
     
           '<td height="47"><b>手机号：</b></td>' +
        '<td height="30"><input type="text" id = "Tel"  name="Tel"   value = ""></td>' +
          '</tr>' +
             '<td height="47"><b>地址：</b></td>' +
        '<td height="30"><input type="text" id = "Address"  name="Address"   value = ""></td>' +
          '</tr>' +
           '<tr>' +
           '<td height="47"><b>性别：</b></td>' +
        '<td height="30"><input type="radio" name="ContacterSex" checked = "true" value = "0"> 男&nbsp;<input type="radio" name="ContacterSex" value = "1"> 女</td>' +
          '</tr>' +
             flex+
 
        '</table>'+
             
        '</td>'+
      '</tr>'+
    '</table>'+
'</td>'+
'</tr>'+
'</table>'+
'</div>' +

'<div class="pop_btns clearfix">'+
    '<ul>'+
        '<li style="margin-left:130px;"><a href="###" class="popbtn_ok" onclick="getTourictCode(' + scenicId + ',' + ticketId + ')">获取验证码</a></li>' +
   '</ul>'+
'</div>'+
'<a class="pop_close" onClick="closePopu()"></a>' +
'</div>'
);
    showPopu("TouristContent", $('#TouristContent').width(), $('#TouristContent').height());
}



var MTwoContent = null;
function MTwoPop(id,  AreaName, AreaNo, Consignee, ConsigneeMobile, MerchantAddress) {
    if (MTwoContent == null) {
        $("body").append("<div class='popuDivContent' id='MTwoContent'></div>");
        MTwoContent = $("#MTwoContent");
    }
    var ad1 = ad2 = ad3 = ad4 = ad5 = ad6 = ad7 = ad8 = ad9=ad10="";
    var jc = '<input id="d" type="radio" name="fx" checked="checked">东<input id="x" type="radio" name="fx">西<input id="n" type="radio" name="fx">南<input id="b" type="radio" name="fx">北';
    var fx = '<input id="dd" type="radio" name="fxs" checked="checked">东<input id="xx" type="radio" name="fxs">西<input id="nn" type="radio" name="fxs">南<input id="bb" type="radio" name="fxs">北';
    if (id === undefined) {
        id = 0;
        AreaName = "";
        AreaNo = "";
        Consignee = "";
        ConsigneeMobile = "";
        MerchantAddress = "";
        
    } else {
        var p = MerchantAddress.split(',');
         ad1 = p[0].replace('主要建筑:', '');
         ad2 = p[1].replace('社区名称:', '');
         ad3 = p[2].replace('区', '');
         ad4 = p[3].split('路与')[0];
         ad5 = p[3].split('路交叉口')[0];
         ad6 = p[3].split('路交叉口')[1].split('向')[1][0];
         ad7 = p[3].split('路交叉口')[1].match(/\d+/)[0];
         ad8 = p[3][p[3].length - 1];
         ad9 = p[4].replace('店铺名称:', '')[1];
         if (ad6 == "东") {
             jc = '<input id="d" type="radio" name="fx" checked="checked">东<input id="x" type="radio" name="fx">西<input id="n" type="radio" name="fx">南<input id="b" type="radio" name="fx">北'
         }
         if (ad6 == "南") {
             jc = '<input id="d" type="radio" name="fx">东<input id="x" type="radio" name="fx">西<input id="n" type="radio" name="fx"  checked="checked">南<input id="b" type="radio" name="fx">北'
         }
         if (ad6 == "西") {
             jc = '<input id="d" type="radio" name="fx" checked="checked">东<input id="x" type="radio" name="fx"  checked="checked">西<input id="n" type="radio" name="fx">南<input id="b" type="radio" name="fx">北'
         }
         if (ad6 == "北") {
             jc = '<input id="d" type="radio" name="fx" checked="checked">东<input id="x" type="radio" name="fx">西<input id="n" type="radio" name="fx">南<input id="b" type="radio" name="fx"  checked="checked">北'
         }


         if (ad8 == "东") {
             fx = '<input id="dd" type="radio" name="fxs" checked="checked">东<input id="xx" type="radio" name="fxs">西<input id="nn" type="radio" name="fxs">南<input id="bb" type="radio" name="fxs">北'
         }
         if (ad8 == "南") {
             fx = '<input id="dd" type="radio" name="fxs">东<input id="xx" type="radio" name="fxs">西<input id="nn" type="radio" name="fxs"  checked="checked">南<input id="bb" type="radio" name="fxs">北'
         }
         if (ad8 == "西") {
             fx = '<input id="dd" type="radio" name="fxs" checked="checked">东<input id="xx" type="radio" name="fxs"  checked="checked">西<input id="nn" type="radio" name="fxs">南<input id="bb" type="radio" name="fxs">北'
         }
         if (ad8 == "北") {
             fx = '<input id="dd" type="radio" name="fxs" checked="checked">东<input id="xx" type="radio" name="fxs">西<input id="nn" type="radio" name="fxs">南<input id="bb" type="radio" name="fxs"  checked="checked">北'
         }
        
    }
   

    //var ad5 = p[5].replace('社区名称:', '');
    MTwoContent.html(
         '<div class="pop_content clearfix">' +
           '<div class="pop_content_con">' +
           '<form id ="Mtwo" ><input id="Id" name="Id" type="hidden" value="' + id + '"><input id="MerchantAddress" name="MerchantAddress" type="hidden" value="' + MerchantAddress + '"><input id="AreaNo" name="AreaNo" type="hidden" value="' + AreaNo + '" >' +
            	        '<table border="0" cellspacing="0" cellpadding="0" style="font-size:14px;">' +

              '<tr>' +
                '<td height="32"><b>地址信息：</b></td>' +
              '</tr>' + 
              '<tr>' +
                '<td>' +
                '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size:14px;">' +
                   '<tr>' +
                   '<td height="32"><b>店铺名称：</b></td>' +
                '<td height="30"><input type="text" name="Name" id = "Name" value = "' + ad9 + '"><span style="color: red; padding-left: 5px;">例如：xx路--爱便利超市 </span></td>' +
                  '</tr>' + 
                    '<tr>' +
                   '<td height="32"><b>联系人：</b></td>' +
                '<td height="30"><input type="text" name="Consignee" id = "Consignee" value = "' + Consignee + '"></td>' +
                  '</tr>' +
                    '<tr>' +
                   '<td height="32"><b>手机号：</b></td>' +
                '<td height="30"><input type="text" id = "ConsigneeMobile"  name="ConsigneeMobile"   value = "' + ConsigneeMobile + '"></td>' +
                  '</tr>' +
                   '<tr>' +
                   '<td height="32"><b>主要建筑：</b></td>' +
                '<td height="30"><input id="ad1" name="ad1" type="text" value="'+ad1+'" class="ad"><span style="color: red; padding-left: 20px;">例如：神马集团</span></td>' +
                  '</tr>' +
                   '<tr>' +
                   '<td height="32"><b>社区名称：</b></td>' +
                '<td height="30"><input id="ad2" name="ad2" type="text" value="' + ad2 + '" class="ad"><span style="color: red; padding-left: 20px;">例如：金城东苑 </span></td>' +
                  '</tr>' +
                   '<tr>' +
                   '<td height="32"><b>哪个区：</b></td>' +
                '<td height="30"><input id="ad3" name="ad3" type="text" value="' + ad3 + '" class="ad">&nbsp;区<span style="color: red; padding-left: 5px;">例如：金水 </span></td>' +
                  '</tr>' +
                   '<tr>' +
                   '<td height="32"><b>哪个路：</b></td>' +
                '<td height="30"> <input id="ad4" name="ad4" type="text" value="' + ad4 + '" class="ad">&nbsp;路<span style="color: red; padding-left: 5px;">例如：红专</span></td>' +
                  '</tr>' +
                   '<tr>' +
                   '<td height="32"><b>与那个路：</b></td>' +
                '<td height="30"><input id="ad5" name="ad5" type="text" value="'+ad5+'" class="ad">&nbsp;路<span style="color: red; padding-left: 5px;">例如：姚寨 </span></td>' +
                  '</tr>' +
                   '<tr>' +
                   '<td height="32"><b>交叉口向:</b></td>' +
                '<td height="30"> '+jc+'</td>' +
                  '</tr>' +
                   '<tr>' +
                   '<td height="32"><b>多少：</b></td>' +
                '<td height="30"><input id="ad7" name="ad7" type="text" value="' + ad7 + '" class="ad">&nbsp;米<span style="color: red; padding-left: 5px;">例如：200</span></td>' +
                  '</tr>' +
                   '<tr>' +
                   '<td height="32"><b>方向：</b></td>' +
                '<td height="30">'+fx+'</td>' +
                  '</tr>' +
                
                         '<tr>' +
                   '<td height="32"><b>商户区域：</b></td>' +
                '<td height="30">'+
                '<select id="AreaName" name="AreaName" class="valid"><option rel="' + AreaNo + '" value="' + AreaName + '">' + AreaName + '</option>'+
                   
            '</select></td>' +
                  '</tr>' +
                '</table>' +

                '</td>' +
              '</tr>' +
            '</table>' +
        '</td>' +
        '</tr>' +

        '</table>' +
        '</div>' +

        '<div class="pop_btns clearfix">' +
            '<ul>' +
                '<li style=""><a href="###" class="popbtn_ok addMTwo">提交</a></li>' +
           '</ul>' +
        '</div>' +
        '<a class="pop_close" onClick="closePopu()"></a>' +
        '</div>'
        );
    showPopu("MTwoContent", $('#MTwoContent').width(), $('#MTwoContent').height());

    $("#AreaName").change(function () {
        $("#AreaNo").val($("#AreaName").find("option:selected").attr("rel"));
    });
    $('.addMTwo').click(function () {
        if (setAddress()) {
            $.post('/Merchant/AddDelivery', {Id:$('#Id').val(), Consignee: $('#Consignee').val(), ConsigneeMobile: $('#ConsigneeMobile').val(), MerchantAddress: $('#MerchantAddress').val(), AreaNo: $('#AreaNo').val(), AreaName: $('#AreaName').val() }, function (res) {
                var mess = "添加";
                if ($('#Id').val() != 0) {
                    mess = "修改";
                }
                if (res.Result) {
                   
                    showPopuMessage("success", "二批商地址" + mess + "成功！");

                } else {

                    showPopuMessage("failure", "二批商地址" + mess + "失败！");
                }
                window.location.reload();//刷新当前页面.

            });
        } 
    });

    $.post('/Merchant/GetAreaInfo', function (res) {
        if (res.Result) {
            
           $.each(res.Data, function (val, item) {
               
                $('#AreaName').append(
                    $('<option></option>').val(item.Name).html(item.Name).attr('rel', item.Id+"")
                );
            });
        }
    })
}

function setAddress() {
    if ($("#AreaNo").val() <= 0) {
        alert("请选择合法的商户区域");
        return false;
    }

    var pat = "^1[34578]{1}[0-9]{9}$";
    var consigneeMobile = $('#ConsigneeMobile').val();
    var r = consigneeMobile.replace(/\s/g, '').match(pat);
    if (r == null) {
        alert('请输入正确的手机号');
        return false;
    }
    var ad1 = $('#ad1').val();
    var ad2 = $('#ad2').val();
    var ad3 = $('#ad3').val();
    var ad4 = $('#ad4').val();
    var ad5 = $('#ad5').val();
    //    var ad6 = $('#ad6').val();
    var ad7 = $('#ad7').val();
    // var ad8 = $('#ad8').val();
    var ad9 = $('#Name').val();
    if (ad1 == "") {

        alert('请输入主要建筑');
        return false;

    } else if (ad2 == "") {

        alert('请输入社区名称');
        return false;
    }
    else if (ad3 == "") {

        alert('请输入哪个区');
        return false;
    }
    else if (ad4 == "") {

        alert('请输入哪个路');
        return false;
    }
    else if (ad5 == "") {

        alert('请输入与哪个路');
        return false;
    }
    else if (ad7 == "") {

        alert('请输入多少米');
        return false;
    } if (ad9 == "") {

        alert('请输入门头信息');
        return false;
    }


    var ad6 = "";
    var ad8 = "";

    if (document.getElementById("d").checked == true) {

        ad6 = "东";
    } else if (document.getElementById("x").checked == true) {

        ad6 = "西";

    }
    else if (document.getElementById("n").checked == true) {

        ad6 = "南";

    }
    else if (document.getElementById("b").checked == true) {

        ad6 = "北";

    }



    if (document.getElementById("dd").checked == true) {

        ad8 = "东";
    } else if (document.getElementById("xx").checked == true) {

        ad8 = "西";

    }
    else if (document.getElementById("nn").checked == true) {

        ad8 = "南";

    }
    else if (document.getElementById("bb").checked == true) {

        ad8 = "北";

    }

    var address = "主要建筑:" + ad1 + ",社区名称:" + ad2 + "," + ad3 + "区," + ad4 + "路与" + ad5 + "路交叉口向" + ad6 + ad7 + "米路" + ad8 + ",门头信息:" + ad9;


    $("#MerchantAddress").val(address);

    return true;
}
//客户经理拜访
var SalerpopContent = null;
function Salerpop(id,name,tel,headimg) {
    if (SalerpopContent == null) {
        $("body").append("<div class='popuDivContent' id='SalerpopContent'></div>");
        SalerpopContent = $("#SalerpopContent");
    }

    SalerpopContent.html(
    '<div class="pop_content clearfix">' +
  
            '<div class="pop_content_con">'+
            	'<table border="0" cellspacing="0" cellpadding="0" style="font-size:14px;">'+
                  '<tr>'+
                    '<td width="177" valign="top"><img id="headimg" src="' + headimg + '" width="150" height="180" style="padding:3px; border:solid 1px #f0f0f0;" /></td>' +
                    '<td width="423" valign="top">'+
                    	'<table width="422" border="0" cellspacing="0" cellpadding="0">'+
                          '<tr>'+
                            '<td width="422">客户经理：<span class="meifont salername">' + name + '</span><br>' +
    '联系电话：<span class="meifont">' + tel + '</span><br></td>' +
      '</tr>'+
      '<tr>'+
        '<td height="47"><b>今日解决问题：</b></td>'+
      '</tr>'+
      '<tr>'+
        '<td class="visitDetail">'+
        '</td>'+
      '</tr>'+
      '<tr>'+
        '<td>'+
        '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size:14px;">'+
          '<tr>'+
            '<td width="595" height="43"> <b>亲~~~你觉得这个客户经理中不中啊？</b></td>'+
          '</tr>'+
          '<tr>'+
            '<td height="30"><input type="radio" name="IsAgree" checked = "true" value = "1"> 真中&nbsp;<input type="radio" name="IsAgree" value = "0"> 不中</td>' +
          '</tr>'+
          '<tr>'+
            '<td><textarea name="Suggest"  placeholder="您想给他提的建议是......" id = "Suggest" cols="50" rows="3" ></textarea></td>' +
          '</tr>' +
          '<tr>' +
           '<td width="595" height="43"> <b>希望您给他打个印象分哦！</b></td>' +
           '</tr>' +
          '<tr>'+  
            '<td height="31">他的态度：<span class="nostart"><u class="width3"></u><i class="click_num ScoreA"><ul><li></li><li></li><li></li><li></li><li></li></ul></i></span><em style="display:inline-block; padding-left:10px;"><span class = "meifont ScoreAA">3</span>分</em></td>' +
          '</tr>'+
          '<tr>'+
            '<td>拜访频度：<span class="nostart"><u class="width3"></u><i class="click_num ScoreB"><ul><li></li><li></li><li></li><li></li><li></li></ul></i></span><em style="display:inline-block; padding-left:10px;"><span class = "meifont ScoreBB">3</span>分</em></td>' +
          '</tr>'+
        '</table>'+
                            
              '<input type="hidden" name="ScoreA" id = "ScoreA" value = "3"/>' +
              '<input type="hidden" name="ScoreB" id = "ScoreB" value = "3"/>' +
        '</td>'+
      '</tr>'+
    '</table>'+
'</td>'+
'</tr>'+
'</table>'+
'</div>' +

'<div class="pop_btns clearfix">'+
    '<ul>'+
        '<li style="margin-left:130px;"><a href="###" class="popbtn_ok addVisitDetail">提交评价</a></li>'+
   '</ul>'+
'</div>'+
'<a class="pop_close" onClick="closePopu()"></a>' +
'</div>'
);

    $(".ScoreA").find("li").click(
    function () {
       var v = $(this).index() + 1
        $(this).parent().parent().siblings("u").removeClass().addClass("width" + v);
        $('#ScoreA').val(v);
        $('.ScoreAA').text(v);
    }
)

    $(".ScoreB").find("li").click(
    function () {
       var v = $(this).index() + 1
        $(this).parent().parent().siblings("u").removeClass().addClass("width" + v);
        $('#ScoreB').val(v);
        $('.ScoreBB').text(v);
    }
)
    $.post('/Visit/GetVisitRecordDetails', { id: id }, function (result) {
        var data = result.Data;
        var infohtml = "";
        for (var i = 0 ; i < data.length; i++) {
            infohtml += data[i].VisitName + ":" + data[i].VisitContent +"<br/>";
        }
        $('.visitDetail').html(infohtml);

        showPopu("SalerpopContent", $('#SalerpopContent').width(), $('#SalerpopContent').height());

        $('.addVisitDetail').click(function () {
            var Score = "他的态度," + $('#ScoreA').val() + "分;拜访频度," + $('#ScoreB').val() + "分;";
            $.post('Visit/AddDetails', {id: id,Score:Score,Suggest:$('#Suggest').val(),IsAgree:$('input[name="IsAgree"]:checked').val() == "0"?false:true}, function (result) {
                if (result.Result) {
                    showPopuMessage("success", result.Message);
                } else {
                    showPopuMessage("failure", result.Message);
                }
            });
        });
    });
 
}

//一卡通签约 短信验证

var CreditApplyContent = null;
function CreditApplyContentPop(id) {
    if (CreditApplyContent == null) {
        $("body").append("<div class='popuDivContent' id='CreditApplyContent'></div>");
        CreditApplyContent = $("#CreditApplyContent");
    }
    CreditApplyContent.html('<div class="pop_content">' +

           '<div class="title">' +
               '<h4 class="success">签约提交</h4>' +
           '</div>' +
          
           '<ul class="pop_choose">' +
           
               '<li><span class="tit" id="spanStyleInfo">手机号：   <input type="text" id="SignAgreementMobile"  name="SignAgreementMobile" value="" maxlength="11"> </span></li>' +
               '<li><span class="tit" id="spanStyleInfo">验证码： <input type="text" id="code" name="code" value="" size ="5" maxlength="6"> <a href="###" onclick="getCode(\'#SignAgreementMobile\')" >获取验证码</a> </span></li>' +

           '</ul>' +
           '<div class="pop_btns clearfix" style="padding-left: 0">' +
               '<ul>' +
                    '<li><a href="###" onclick = "SumbitCreditApply('+id+')" class="popbtn_ok">签约</a></li>' +
                    '<li><a href="###" onclick = "closePopu()" class="popbtn_ok">取消</a></li>' +
               '</ul>' +
           '</div>' +
             
           '<a class="pop_close" onclick="closePopu();"></a>' +
       '</div>');
    showPopu("CreditApplyContent", 400, 212);       
}

function getCode(o) {
    var mobile = $(o).val();
    if (mobile == "") {
        showPopuMessage("worning","请填写手机号");
        $(o).focus();
        return;
    }
    $.post("/Merchant/SendVerifyMobileCode", { mobile: mobile, verify: verify }, function (result) {
        if (!result.Result) {
            alert("发送短信失败," + result.Message + ",请重试");
        }
        else {
            alert("短信成功发送到指定手机,请查收验证");
        }
    }).error(function (msg) {
        // console.dir(msg.status+msg.statusText);
        alert("短信接口问题,请联系业务经理");
    });;
}

function SumbitCreditApply(id) {
    var mobile = $('#SignAgreementMobile').val(), code = $('#code').val();
    if (code.length == 6) {
        $.post('/CreditApply/CreateApply', { id: id,mobile:mobile,code:code }, function (data) {

            if (data.Result) {
                showPopuMessage("success", data.Message);
                $('.userreg-form a').removeAttr('onclick');
                $('.userreg-form a span').text('已开通');
            }
            else {
                showPopuMessage("failure", data.Message);
            }
        });
    }
}

var SetUtilityBillsContent = null; 
function SetUtilityBillsPop() {
    if (SetUtilityBillsContent == null) {
        $("body").append("<div class='popuDivContent' id='SetUtilityBillsContent'></div>");
        SetUtilityBillsContent = $("#SetUtilityBillsContent");
    }

    SetUtilityBillsContent.html('<div class="pop_content">' +

           '<div class="title">' +
               '<h4 class="success">便民设置</h4>' +
           '</div>' +

           '<ul class="pop_choose">' +

               '<li><span class="tit">保留金额： <input type="text" id="Amount"  onkeyup="showError(this)" name="Amount" value="1000" maxlength="11"> 元  <span class="errmsg"><i></i></span></span> </li>' +
               //'<li><span class="tit" id="spanStyleInfo">验证码： <input type="text" id="code" name="code" value="" size ="5" maxlength="6"> <a href="###" onclick="getCode(\'#SignAgreementMobile\')" >获取验证码</a> </span></li>' +

           '</ul>' +
             //'<div class="pop_info">' +
             //     '<p>便民余额最小保留金额大于部分自动转入货利宝</p>' +
             //'</div>' +
           '<div class="pop_btns clearfix" style="padding-left: 0">' +
               '<ul>' +
                    '<li><a href="###" onclick = "SumbitSetUtilityBills()" class="popbtn_ok">设置</a></li>' +
                    '<li><a href="###" onclick = "closePopu()" class="popbtn_ok">取消</a></li>' +
               '</ul>' +
           '</div>' +

           '<a class="pop_close" onclick="closePopu();"></a>' +
       '</div>');

    
    $('.errmsg i').hide();
    showPopu("SetUtilityBillsContent", 400, 212);
}



function SubmitacctptGoodConfirm() {
    var name = $('#publishgoodName').val();
    var mobile = $('#publishgoodMobile').val();
    var num = $('#publishgoodNum').val();
    var price = $('#publishgoodPrice').val();
    var pid = $('#publishgoodid').val();
    $.post('/PublishGood/submitpublishgood', { publishId: pid, name: name, num: num, price: price, mobile: mobile }, function (result) {
        if (result.Result) {
            showPopuMessage("success", result.Message);
        } else {
            showPopuMessage("warning", result.Message);
        }

        $('#publishgoodName').val('');
        $('#publishgoodMobile').val('');
        $('#publishgoodNum').val('');
        $('#publishgoodPrice').val('');
    });

}