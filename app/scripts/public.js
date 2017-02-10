//ds.base
var pagenum = null
; (function (global, document, undefined) {
    var
	ds = global.ds = {

	    requestAnimationFrame: (function () {
	        var handler = global.requestAnimationFrame || global.webkitRequestAnimationFrame ||
				global.mozRequestAnimationFrame || global.msRequestAnimationFrame ||
				global.oRequestAnimationFrame || function (callback) {
				    return global.setTimeout(callback, 1000 / 60);
				};
	        return function (callback) {
	            return handler(callback);
	        };
	    })(),
	    animate: (function () {
	        var
			easeOut = function (pos) { return (Math.pow((pos - 1), 3) + 1); };
	        getCurrCSS = global.getComputedStyle ? function (elem, name) {
	            return global.getComputedStyle(elem, null)[name];
	        } : function (elem, name) {
	            return elem.currentStyle[name];
	        };
	        return function (elem, name, to, duration, callback, easing) {
	            var
				from = parseFloat(getCurrCSS(elem, name)) || 0,
				style = elem.style,
				tMark = new Date(),
				size = 0;
	            function fx() {
	                var elapsed = +new Date() - tMark;
	                if (elapsed >= duration) {
	                    style[name] = to + 'px';
	                    return;
	                }
	                style[name] = (from + size * easing(elapsed / duration)) + 'px';
	                ds.requestAnimationFrame(fx);
	            };
	            to = parseFloat(to) || 0;
	            duration = ~~duration || 200;
	            easing = easing || easeOut;
	            size = to - from;
	            fx();
	            return this;
	        };
	    })(),
	    //Cookies
	    getCookie: function (name) {
	        var ret = new RegExp('(?:^|[^;])' + name + '=([^;]+)').exec(document.cookie);
	        return ret ? decodeURIComponent(ret[1]) : '';
	    },
	    setCookie: function (name, value, expir) {
	        var cookie = name + '=' + encodeURIComponent(value);
	        if (expir !== void 0) {
	            var now = new Date();
	            now.setDate(now.getDate() + ~~expir);
	            cookie += '; expires=' + now.toGMTString();
	        }
	        document.cookie = cookie;
	    },
	    isIE6: !-[1, ] && !global.XMLHttpRequest
	};

})(this, document);
; (function (global) { var ds = global.ds || (global.ds = {}); var rarg1 = /\$1/g, rgquote = /\\"/g, rbr = /([\r\n])/g, rchars = /(["\\])/g, rdbgstrich = /\\\\/g, rfuns = /<%\s*(\w+|.)([\s\S]*?)\s*%>/g, rbrhash = { '10': 'n', '13': 'r' }, helpers = { '=': { render: '__.push($1);' } }; ds.tmpl = function (tmpl, data) { var render = new Function('_data', 'var __=[];__.data=_data;' + 'with(_data){__.push("' + tmpl.replace(rchars, '\\$1').replace(rfuns, function (a, key, body) { body = body.replace(rbr, ';').replace(rgquote, '"').replace(rdbgstrich, '\\'); var helper = helpers[key], tmp = !helper ? key + body : typeof helper.render === 'function' ? helper.render.call(ds, body, data) : helper.render.replace(rarg1, body); return '");' + tmp + '__.push("'; }).replace(rbr, function (a, b) { return '\\' + (rbrhash[b.charCodeAt(0)] || b); }) + '");}return __.join("");'); return data ? render.call(data, data) : render; }; ds.tmpl.helper = helpers; })(this);




function popupbox() {
    var win_h = $(window).height();
    var win_w = $(window).width();
    var popuDivMain = $("#popuDivMain");
    var popuDivContent = $("#popuDivContent");
    var popwidth = popuDivContent.width();
    var popheight = popuDivContent.height();

    var popleft = (win_w - popwidth) / 2;
    var poptop = (win_h - popheight) / 2;
    popuDivContent.css({ "left": +popleft + "px", "top": +poptop + "px", "width": +popwidth + "px", "height": +popheight + "px" });

    if (popuDivContent.is(':hidden') == false) {
        popuDivMain.fadeOut(300);
        popuDivContent.fadeOut(100).removeAttr("style");

    }
    else {
        popuDivMain.fadeIn(100);
        popuDivContent.fadeIn(300);
    }

}

$(function () {
    $("#menu li > a").removeClass('current');
    $("#menu li > a").eq(pagenum).addClass('current');
    $("#menu li").hover(
	  //alert(index2);
	  function () {
	      $(this).find('a:eq(0)').addClass('hover');
	      var index2 = $(this).index();
	      var divheight = $(this).find('div:eq(0)').height();
	      if (index2 != pagenum) {
	          //$(this).find('div:eq(0)').height(0);
	          $(this).find('div:eq(0)').height(0).show(50, function () {
	              ds.animate($(this)[0], 'height', divheight, 320)
	              //$(this).animate({'height':300},200)
	          }
              )
	          //$(this).find('div:eq(0)').animate({'height':300},200)
	      }
	      return;
	  }, function () {
	      //ds.animate($(this).find('div:eq(0)')[0],'height',0, 320)
	      $(this).find('div:eq(0)').hide();
	      $(this).find('a:eq(0)').removeClass('hover');
	  }
)
})

//全局导航
jQuery(function ($) {
    var shell = $('#gloabl_categorys');
    if (!shell.length) { return; }

    var
	panelDisplayed = false,
	subPanelDisplayed = false,
	supportOpacity = $.support.opacity,
	catWrap = $('#global_categorys_catwrap'),
	catPanel = shell.find('.nav_cats').eq(0),
	subPanel = shell.find('.nav_subcat_wrap').eq(0),
	panel = $('#global_categorys_inner').css('opacity', 0),
	panelMinWidth = panel.width(),
	panelMaxWidth = panelMinWidth + subPanel.width();
    if (pagenum == 0) {
        panel.show().css('opacity', 1);

        var panelTimer;

        panel.hover(function () {
            panel.stop().animate({ "width": panelMaxWidth }, 100)

        }, function () {
            panel.stop().animate({ "width": panelMinWidth }).css({ 'overflow': 'hidden' });
        });

    }
    else {
        var panelTimer;
        shell.hover(function () {
            clearTimeout(panelTimer);
            panelTimer = setTimeout(showCategory, 16);
        }, function () {
            clearTimeout(panelTimer);
            panelTimer = setTimeout(hideCategory, 200);
        });
        function showCategory() {
            if (supportOpacity) {
                panel.stop().show().animate({ opacity: 1 }, 200, function () {
                    panelDisplayed = true;
                });
            }
            else {
                panel.show().css('opacity', 1);
                panelDisplayed = true;
            }
        }
    }
    function hideCategory() {
        if (!panelDisplayed) { return; }
        if (supportOpacity) {

            panel.stop().animate({ opacity: 0 }, 200, function () {
                panel.hide().css('width', panelMinWidth);
                catWrap.css('overflow', 'hidden');
                if (prevSubCatTrigger) {
                    prevSubCatTrigger.removeClass('current');
                }
                subPanelDisplayed = false;
                panelDisplayed = false;
            });

        }
        else {
            panel.hide().css('width', panelMinWidth).css('opacity', 0);
            catWrap.css('overflow', 'hidden');
            if (prevSubCatTrigger) {
                prevSubCatTrigger.removeClass('current');
            }
            subPanelDisplayed = false;
            panelDisplayed = false;
        }
        catPanel.unbind('mousemove', pointHandler);
    };


    var
	subDelay = 100,
	catTimer, pointTimer,
	cachePoints = [0, 0, 0],
	currSubCat, prevSubCat,
	currSubCatTrigger, prevSubCatTrigger;
    catPanel.delegate('li', 'mouseenter', function (e) {
        clearTimeout(catTimer);
        var target, targetId = this.getAttribute('data-target');
        if (targetId && (target = $('#' + targetId)).length && prevSubCat !== target) {
            currSubCat = target;
            currSubCatTrigger = $(this);
            if (e.pageX > cachePoints[0]) {
                catTimer = setTimeout(showSubCat, subDelay);
            }
            else {
                showSubCat();
            }
        }
    });
    subPanel.bind('mouseenter', function () {
        clearTimeout(catTimer);
    });

    function pointHandler(e) {
        clearTimeout(pointTimer);
        pointTimer = setTimeout(function () {
            cachePoints.splice(0, 1);
            cachePoints.push(e.pageX);
        }, 16);
    }
    function showSubCat() {

        if (prevSubCat) {
            prevSubCatTrigger.removeClass('current');
            prevSubCat.hide();
        }
        if (!subPanelDisplayed) {

            subPanelDisplayed = true;
            ds.animate(panel[0], 'width', panelMaxWidth, 320, function () {
                catWrap.css('overflow', 'visible');
            });

            catPanel.bind('mousemove', pointHandler);
        }

        currSubCatTrigger.addClass('current');
        prevSubCatTrigger = currSubCatTrigger;
        prevSubCat = currSubCat.show();
    }
});


/*全局购物车下拉*/
jQuery(function ($) {
    var shell = $('#global_user_cart');
    if (!shell.length) { return; }
    a = 1;
    var
    timer,
    panel = shell.find('.user_cart_inner').eq(0).hide();
    shell.hover(function () {
        if (a == 1) {
            $.post("/cart/CartPart", { cartType: 0 }, function (result) {
                $("#header_cartlist").html(result);
                a = 2;
            });
        }
        clearTimeout(timer);
        timer = setTimeout(function () {

            panel.animate({ opacity: 1 }, 100).slideDown(200, function () {
                panel.css('display', 'block');
            });
        }, 120);
    }, function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            panel.fadeOut();
        }, 100);
    });
});
//导航跟随	

function menuFixed(id) {
    var obj = document.getElementById(id);
    var _getHeight = obj.offsetTop;

    window.onscroll = function () {
        changePos(id, _getHeight);
    }
}
function changePos(id, height) {
    var obj = document.getElementById(id);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (pagenum == 0) {
    }
    else {
        if (scrollTop < height) {
            obj.style.cssText = "position:relative; ";

        } else {
            obj.style.cssText = "position:fixed;top:0; left:0px";
        }
    }
    //var scrollTop2=scrollTop-height-55
    ////alert(pagenum)
    //if (pagenum==0){
    //	if (scrollTop < height) {
    //		$('#global_categorys_inner').show().css({"opacity":"1"});
    //		}
    //	else{
    //		$('#global_categorys_inner').hide().css({"opacity":"0"});
    //		}
    //}
}

window.onload = function () {
    menuFixed('nav');
}
