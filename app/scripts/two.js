var P = (function () {
    var p = {};
    //选择规格
    p.setStyle = function (styleId,styleName) {
        curProduct.styleId = styleId;
        var obj = $("#astyle" + styleId);
        $(obj).addClass('hover').parent().parent().find("dt a").not(obj).removeClass("hover");
        if (styleName) {
            $("#pro_style").text(styleName);
        }
    };

    p.showFreshProduct = function (id) {
        $.post("/FreshProduct/GetStyle", { id: id }, function (d) {
            $("#spanStyleInfo").text("选择规格");
            if (d.Data.length == 0) return;

            $("#styleDetail").empty();
            $(d.Data).each(function (index) {
                var objStyle = d.Data[index];
                $("<dt><a href='javascript:P.setStyle(" + objStyle.Id + ")' id='astyle" + objStyle.Id + "'>[" + objStyle.S_StandardName + "],单价：" + objStyle.Unitprice.toFixed(2) + "元    合计：" + objStyle.S_SalePrice + "元，库：" + objStyle.S_Stock + "件，由" + objStyle.S_Su_Name + "提供</a></dt>").appendTo($("#styleDetail"));
            });
            curProduct.IsFresh = true;
            showPopu("popuDivContent", 420, 480);
            P.setStyle(d.Data[0].Id);
            $('#pro_count').val(2);
        }
        )
    };

    //显示详细(规格或包)saleMode可在curProduct里设置，这里为可选
    p.showProductDetail = function (productId, saleMode) {
        curProduct.IsFresh = false;
        var proli = $("#product_" + productId);
        curProduct.num = $('#buyNum_' + productId).val() || 1;//首页列表没有数量，所以要防御编程
        curProduct.isPackage = proli.attr("isPackage") === "True";
        if (curProduct.isPackage) {
            curProduct.styleId = 0;
        } else {
            curProduct.styleId = -1;
        }
        curProduct.productId = productId;
        if (saleMode != undefined) {
            curProduct.saleMode = saleMode;
        }
        //零元购活动id
        if (proli.attr("activityId")) {
            curProduct.activityId = proli.attr("activityId");
        } else {
            curProduct.activityId = 0;
        }
        $("#styleDetail").html("");
        $("#pro_count").val(curProduct.num);



        if (curProduct.isPackage) {
            $.post("/Product/GetProductPackage", { productId: productId }, function (data) {
                $('.pStyle').parent().remove();
                $('.pTitle').parent().remove();
                var d = data.Data;
                $("#spanStyleInfo").text("包内商品如下:");
                for (var i = 0; i < d.length; i++) {
                    var item = d[i];
                    $("#styleDetail").append('<li><div style="width:250px">' + item.Product.ProductName + ' ' + item.StyleName + ' ' + item.Num + ' 件 单价 ¥' + item.SoldPrice + '</div></li>');
                }
                showPopu("popuDivContent", 420, 280);
            });
        } else {
            $.post("/Product/GetStyle", { productId: productId }, function (d) {
                $("#spanStyleInfo").text("选择规格");
                if (d.Data.length == 0) return;
              
                $(d.Data).each(function (index) {
                    var objStyle = d.Data[index];
                    $("<dt><a href='javascript:P.setStyle(" + objStyle.Id + ")' id='astyle" + objStyle.Id + "'>" + objStyle.Name + "</a></dt>").appendTo($("#styleDetail"));
                });
                showPopu("popuDivContent", 420, 280);
                P.setStyle(d.Data[0].Id);
            });
        }
    };


   // p.addTC = function(

    //saleMode默认为0 styleId为0时会自动找第一个
    p.addToCart = function (productId, styleId, num, saleMode) {
        if (num <= 0) {
            alert("请选择数量");
            return false;
        }
        if (num > 100&&saleMode !=2) {
            alert("每次请选择少于100数量的单品");
            return false;
        }
        //if (styleId < 0) {
        //    alert("请选择规格");
        //    return false;
        //}
        if (productId <= 0 && !curProduct.IsFresh) {
            alert("请选择商品");
            return false;
        }
        $('#popuDivContent').hide();
        
        var isnew = false;
        if (saleMode == 25) {
            isnew = true;
        }
        $.post("/cart/AddToCart", { productId: productId, styleId: styleId, num: num, saleMode: saleMode, isNew: isnew,isFresh:curProduct.IsFresh }, function (data) {
           
            if (data.Result) {
                showCartMessge("success", "添加到购物车成功");
                var n = $(".cartNum").eq(0).text();
                n = parseInt(n) + parseInt(num);
                $(".cartNum").text(n);
                a = 1;
                return true;
            }
            else {
                if (data.Message.indexOf('批发市场产品2日准时配送到') > -1) {
                     return showIsNewCartMessge(data.Message, productId, num, saleMode, true, styleId);
                    
                } else {
                    showCartMessge("failure", "添加到购物车失败:" + data.Message);
                }
                return false;
            }
        });
        
    };
    p.addTC = function (productId, num, saleMode) {
        if (num <= 0) {
            alert("请选择数量");
            return false;
        }
        if (num > 100 && saleMode != 2 && saleMode != 30) {
            alert("每次请选择少于100数量的单品");
            return false;
        }
        if (productId <= 0) {
            alert("请选择商品");
            return false;
        }
        if (curProduct.saleMode == 2 || curProduct.saleMode == 30) {
           
            P.addToOrderMeeting(productId, 0, num);
            
        } else {
            var isnew = false;
            if (saleMode == 25) {
                isnew = true;
            }
            $.post("/cart/AddTC", { productId: productId, num: num, saleMode: saleMode ,isNew:isnew}, function (data) { 
                if (data.Result) {
                    showCartMessge("success", "添加到购物车成功");
                    var n = $(".cartNum").eq(0).text();
                    if (typeof(_isOutLetSearch) != "undefined")
                        n = $("#cartCountTip_i").eq(0).text();
                    n = parseInt(n) + parseInt(num);
                    $(".cartNum").text(n);
                    if (typeof (_isOutLetSearch) != "undefined")
                        $('#cartCountTip_i').text(n); //门店购物页面修改购物车
                    a = 1;
                    return true;
                }
                else {
                    if (data.Message.indexOf('批发市场产品2日准时配送到') > -1) {
                        showIsNewCartMessge(data.Message,productId,num,saleMode,true);
                    } else {
                        showCartMessge("failure", "添加到购物车失败:" + data.Message);
                    }
                    return false;
                }
            });
        }
        return true;

    };
    //添加新品无库存2次确认订货 
    p.addNew = function (productId, num, saleMode, isnew, styleId) {
        if (styleId == undefined) {
            $.post("/cart/AddTC", { productId: productId, num: num, saleMode: saleMode, isnew: isnew }, function (data) {

                if (data.Result) {
                  //  showCartMessge("success", "添加到购物车成功");

                    var n = $(".cartNum").eq(0).text();
                    n = parseInt(n) + parseInt(num);
                    $(".cartNum").text(n);
                    a = 1;
                    return true;
                }
                else {

                    showCartMessge("failure", "添加到购物车失败:" + data.Message);

                    return false;
                }
            });
        } else {
            $.post("/cart/AddToCart", { productId: productId, num: num, saleMode: saleMode, isnew: isnew, styleId: styleId }, function (data) {

                if (data.Result) {
                //    showCartMessge("success", "添加到购物车成功");
                    var n = $(".cartNum").eq(0).text();
                    n = parseInt(n) + parseInt(num);
                    $(".cartNum").text(n);
                    a = 1;
                    return true;
                }
                else {

                    showCartMessge("failure", "添加到购物车失败:" + data.Message);
                    return false;
                }
            });
        }
    }


    //添加到订货会订单
    p.addToOrderMeeting= function (productId, styleId, num) {
        if (num <= 0) {
            alert("请选择数量");
            return false;
        }
       
        if (productId <= 0) {
            alert("请选择商品");
            return false;
        }

        $.post("/ProductOrder/AddToOrderMeeting", { productId: productId, styleId: styleId, num: num, salemode: curProduct.saleMode }, function (data) {
            if (data.Result) {
                showOrderMeetingMessge("success", "添加到订货会订单成功");

             
                return true;
            }
            else {
                showOrderMeetingMessge("failure", "添加到订货会订单失败:" + data.Message);
                return false;
            }
        });
        return true;
    };

    p.addToCartFromActivity = function (activityId, num) {
        if (num <= 0) {
            showPopuMessage("worning", "请选择数量");
            return false;
        }
        if (activityId <= 0) {
            showPopuMessage("worning", "没有这个活动");
            return false;
        }
        $.post("/cart/AddToCartFromActivity", { activityId: activityId,num: num }, function (data) {
            if (data.Result) {
                showCartMessge("success", "添加到购物车成功");
            
                var n = $(".cartNum").eq(0).text();
                n = parseInt(n) + parseInt(num);
                $(".cartNum").text(n);
                return true;
            }
            else {
               
                    showCartMessge("failure", "添加到购物车失败:" + data.Message);
                
                return false;
            }
        });
        return true;
    };
    
    p.addToCartFromPuke = function (productId, num, puketype,pukeid) {
        if (num <= 0) {
            showPopuMessage("worning", "请选择数量");
            return false;
        }
        if (productId <= 0) {
            showPopuMessage("worning", "没有这个活动");
            return false;
        }
        //$("#styleDetail").html("");
        //$("#pro_count").val(curProduct.num);
        //showPopu("popuDivContent", 420, 280);
        $.post("/cart/AddToCartFromPuke", { productId: productId, num: num, puketype: puketype, pukeid: pukeid }, function (data) {
            if (data.Result) {
                showCartMessge("success", "添加到购物车成功");
                var n = $(".cartNum").eq(0).text();
                n = parseInt(n) + parseInt(num);
                $(".cartNum").text(n);
                return true;
            }
            else {

                showCartMessge("failure", "添加到购物车失败:" + data.Message);

                return false;
            }
        });
        return true;
    };

    p.numPukeUp = function (objName, id,productId, pukeid) {
        var obj = $("#" + objName);
        var max = parseInt(obj.attr('max'));
        var n = parseInt(obj.val());
        n += 1;
        if (max && n > max) {
            n = max;
        }
        obj.val(n);
        //obj.focus();
        changePukeNum(id, n, pukeid);

    };
    function changePukeNum(id,n_Clone,pukeid) {
        var num=$("#buyNum_"+id).val();
        if(isNaN(num))
        {
            $("#buyNum_"+id).val(n_Clone);
            showPopuMessage("warning","输入格式不正确");
            return false;
        }

        if(num > 100){
            $("#buyNum_"+id).val(n_Clone);
            showPopuMessage("warning","单次购买不得超过100件");
            return false;
        }

        $.post("/cart/ChangePukeCartNum", { id: id, num: num ,cartType:0, pukeid:pukeid}, function (result) {
            if(result.Result)
            {
                var num=$("#buyNum_"+id).val();
                $("#buyNum_"+id).attr('ref',num);
            }
            else{
                $("#buyNum_"+id).val(n_Clone);
                showPopuMessage("failure","修改数量失败:"+result.Message);
            }
            timeOut=null;
        });
    }

    p.numUp = function (objName) {
        var obj = $("#" + objName);
        var max = parseInt(obj.attr('max'));
        var n = parseInt(obj.val());
        n += 1;
        if (max && n > max) {
            n = max;
        }
        obj.val(n);
        obj.focus();
    };
    p.numDown = function (objName) { 
        var obj = $("#" + objName);
        var min = parseInt(obj.attr('min'));
        var n = parseInt(obj.val());
        if (curProduct.saleMode == 3 && min != 0 && n <= min) {
            showCartMessge("warning", "该货品属于真便宜套餐起订" + min + "件");
            return false;
        }

        n -= 1;
        if (n < 1)
            n = 1;

        if (min && n < min) {
            n = min;
        }
        obj.val(n);
        obj.focus();
    }
    return p;
}());

$(function () {
    //列表 show product detail
    $('.product_list').delegate('li', 'mouseenter', function () {
        var self = $(this);
        if (self.hasClass('more')) {
            return false;
        }
    
        var mask = self.data('picMask'),
            picElem = self.find('a.pic');

        if (!mask) {
            mask = $("<i>").html('<s></s><em>详情</em>').addClass('mask');
            self.data('picMask', mask);
            picElem.prepend(mask);
            var productId = self.attr("productId");
            var obj = $("#pricePoly_" + productId);
            if (obj.html() == "") {
                $.post("/Product/GetPricePloy", { productId: productId,num:2, saleMode: curProduct.saleMode }, function (data) {
                    obj.html(data);
                });
            }
        }
        mask.stop().show().animate({ opacity: 1 }, 360, function () {
            if (!$.support.opacity) {
                mask.css('filter', 'none');
            }
        });
    })
    .delegate('li', 'mouseleave', function () {
        var self = $(this);
        if (self.hasClass('more')) {
            return false;
        }
        var mask = self.data('picMask'),
            picElem = self.find('a.pic');
        mask.stop().animate({ opacity: 0 }, 360, function () {
            mask.hide();
        });
    });
    var productIds = new Array();
    var activityIds = new Array();
    //根据价格策略修改最小订购件数
    $('.product_list li[productid]').each(function () {
        var productId = $(this).attr('productid');
        var activityId = $(this).attr('activityid');
        productIds.push(productId);
        if (activityId != undefined) {
            activityIds.push(activityId);
        } else {
            activityIds.push(-1);
        }
        
       // if (activityId != undefined) return;
        //var obj = $(this).find(".sell_out em");
       
        /*if (curProduct.saleMode == 2) {
            $(this).find("a.pic").attr("href", "#");
            $(this).find("a.pic").click(function () { return false; });
            //$(this).remove(".pic .mask em");
        }*/
        
       
    });
    if (productIds.length != 0 || activityIds.length != 0) {
        if (curProduct.saleMode != -1) {
            $.ajax(
            {
                url: "/Product/GetPricePloyMinNum",
                data: { "productIds": productIds, "activityIds": activityIds, saleMode: curProduct.saleMode },
                dataType: "json",
                type: "POST",
                traditional: true,
                success: function (data) {
                    if (data.Result) {
                        $.each(data.Data, function (k, v) {
                            if (v.activityId == -1) {
                                var obj = $('.product_list li[productid=' + v.productid + ']').find(".sell_out em");
                                if (v.productPrice) {
                                    obj.text("￥" + v.productPrice);
                                } 
                                $('.product_list li[productid=' + v.productid + ']').find(".sell_out text").text(v.AvailableNum == 0 ? "补货" : "库:" +  v.AvailableNum+ "件");

                               
                              
                                var o = parseInt(v.minNum);
                                var i = parseInt($("#buyNum_" + v.productid).val());
                                if (o > i) {
                                    $("#buyNum_" + v.productid).val(o);
                                }

                                $("#buyNum_" + v.productid).attr('max', v.maxNum);
                                $("#buyNum_" + v.productid).attr('min', v.minNum);
                            }
                          
                        });
                       
                    }
                }
            }
            );
        }
        
    }
     
    //加入订货会订单还是购物车(这里这样想不太好，如果有变动，再重构)
    if (curProduct.saleMode == 2 || curProduct.saleMode == 30 ) {
        $("#popuDivContent .popbtn_ok").text("加入订货会订单").click(function () {
            var a = P.addToOrderMeeting(curProduct.productId, curProduct.styleId, $('#pro_count').val());
        });
    } else {
        $("#popuDivContent .popbtn_ok").click(function () {
            var a = false;
            var num = $('#pro_count').val();
            if (curProduct.activityId >0) {//活动ID大于0则按活动算
                a = P.addToCartFromActivity(curProduct.activityId, num);
            } else { 
                    a = P.addToCart(curProduct.productId, curProduct.styleId, num, curProduct.saleMode); 
            }
        });
    }
});
