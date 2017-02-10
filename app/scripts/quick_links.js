jQuery(function ($) {
    //创建DOM
    var
	quickHTML = '<div class="quick_links_panel"><div id="quick_links" class="quick_links">' +
				'<a href="#" class="return_top"><i class="top"></i><span>返回顶部</span></a>' +
				'<a href="#" class="my_qlinks"><i class="setting"></i><span>管理中心</span></a>' +
                //  '<a href="#" class="notice_lists"><i class="notice"></i><span>活动公告</span><em class="num">4</em></a>' +
                '<a href="#" class="notice_lists"><i class="notice"></i><span>活动公告</span></a>' +
				'<a href="#" class="message_list" ><i class="message"></i><span>财务统计</span></a>' +
				//'<a href="#" class="cart_list"><i class="cart"></i><span>购物车</span><em class="num">10</em></a>' +
				'<a href="#" class="leave_message"><i class="qa"></i><span>联系客服</span></a></div><div class="quick_toggle">' +
				'<a href="javascript:;" class="toggle" title="展开/收起">×</a>' +
				'</div></div><div id="quick_links_pop" class="quick_links_pop hide"></div>',
	quickShell = $(document.createElement('div')).html(quickHTML).addClass('quick_links_wrap'),
	quickLinks = quickShell.find('.quick_links');
    quickPanel = quickLinks.parent();
    quickShell.appendTo('body');

    //具体数据操作 
    var
	quickPopXHR,
	loadingTmpl = '<div class="loading" style="padding:30px 80px"><i></i><span>Loading...</span></div>',
	popTmpl = '<div class="title"><h3><i></i><%=title%></h3></div><div class="pop_panel"><%=content%></div><div class="arrow"><i></i></div><div class="fix_bg"></div>',
	quickPop = quickShell.find('#quick_links_pop'),
	quickDataFns = {
	    //个人中心
	    my_qlinks: {
	        title: '管理中心',
	        content: '<div class="links"><ul>' +
			'<li><a href="/SalesOrder">订单管理</a></li>' +
			'<li><a href="/ChargeOrder/List">缴费充值</a></li>' +
			'<li><a href="/Transaction/FinanceReport">财务统计</a></li>' +
			'<li><a href="/RefundRecord/list">自助退款</a></li>' +
            '<li><a href="/Charge/Submit">在线充值</a></li>' +
			'<li><a href="/Merchant/UpdatePassword">修改密码</a></li>' +
			'</ul></div>',
	        init: $.noop
	    },
	    //活动公告
	    notice_lists: {
	        title: '活动公告',
	        content: loadingTmpl,
	        init: function (ops) {
	            $.post('/News/TitleList', { c: '4' }, function (data) {
	                //var html = '<div class="no_data"><i></i><span>暂无消息</span></div>';
	                //console.dir(data);

	                // "<li><a target='_blank' href='/News/Detail?id=" + data.Data[i].Id + "' style='display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;'><i></i>" + data.Data[i].Title + "</a></li>"
	                var html = "";
	                if (data.Result) {
	                    html = '<ul>';
	                    for (var i = 0; i < data.Data.length; i++) {

	                        html += "<li><a href='/News/Detail?id=" + data.Data[i].Id + "'>" + data.Data[i].Title + "</a></li>";
	                    }
	                    html += '</ul>';

	                }
	                else {
	                    html = "服务器繁忙稍后再试！";
	                }
	                quickPop.html(ds.tmpl(popTmpl, {
	                    title: ops.title,
	                    content: '<div class="links">' + html + '</div>'
	                }));
	            });
	        }
	    },
	    //财务统计
	    message_list: {
	        title: '财务统计',
	        content: loadingTmpl,
	        init: function (ops) {
	            $.post('/Transaction/GetAcountInfo', function (data) {
	                //var html = '<div class="no_data"><i></i><span>暂无消息</span></div>';
	                //console.dir(data);
	                var html = "";
	                if (data.Result) {
	                    html = '<ul>' +
                        '<li><a href=""><span class="tips"><em class="num"><b>' + data.Data.dayPay + ' 元</b></em></span>今日消费</a></li>' +
                        '<li><a href=""><span class="tips"><em class="num"><b>' + data.Data.dic1 + ' 元</b></em></span>今日便民消费</a></li>' +
                        '<li><a href=""><span class="tips"><em class="num"><b>' + data.Data.dic2 + ' 元</b></em></span>今日订货消费</a></li>' +
                        '<li><a href=""><span class="tips"><em class="num"><b>' + data.Data.dic3 + ' 元</b></em></span>今日充值消费</a></li>' +
                        '<li><a href=""><span class="tips"><em class="num"><b>' + data.Data.dic4 + ' 元</b></em></span>便民余额</a></li>' +
                        '<li><a href=""><span class="tips"><em class="num"><b>' + data.Data.dic5 + ' 元</b></em></span>订货余额</a></li>' +
                        '<li><a href=""><span class="tips"><em class="num"><b>' + data.Data.dic6 + ' 元</b></em></span>充值余额</a></li>' +
                         //'<li><a href=""><span class="tips"><em class="num"><b>' + data.Data.dic7 + ' 元</b></em></span>信用余额</a></li>' +
                        '</ul>';
	                }
	                else {
	                    html = "服务器繁忙稍后再试！";
	                }
	                quickPop.html(ds.tmpl(popTmpl, {
	                    title: ops.title,
	                    content: '<div class="links">' + html + '</div>'
	                }));
	            });
	        }
	    },
	    //联系客服
	    leave_message: {
	        title: '在线客服',
	        content: loadingTmpl,
	        init: function (ops) {

	            var html, html2
	            html2 = '<div class="title" style="border-top:solid 1px #eee"><h3><i></i>投诉建议</h3></div>';
	            html = '<div class="links"><ul class="QQlist">' +
                        '<li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1710046303&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1710046303:51" alt="点击这里给我发消息" title="点击这里给我发消息"/> 在线客服 小爱</a></li>' +
                        '<li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2646450821&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:2646450821:51" alt="点击这里给我发消息" title="点击这里给我发消息"/> 在线客服 小便</a></li>' +
                        '<li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2424106234&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:2424106234:51" alt="点击这里给我发消息" title="点击这里给我发消息"/> 在线客服 小利</a></li>' +
                        '<li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2424106234&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:2424106234:51" alt="点击这里给我发消息" title="点击这里给我发消息"/> 技术客服 小平</a></li>' +
                        '<li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1710046303&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1710046303:51" alt="点击这里给我发消息" title="点击这里给我发消息"/> 技术客服 小台</a></li>' +
                        '</ul></div>';
	            quickPop.html(ds.tmpl(popTmpl, {
	                title: ops.title,
	                content: html + html2
	            }));
	        }

	    }
	};


    //showQuickPop
    var
	prevPopType,
	prevTrigger,
	doc = $(document),
	popDisplayed = false,
	hideQuickPop = function () {
	    if (prevTrigger) {
	        prevTrigger.removeClass('current');
	    }
	    popDisplayed = false;
	    prevPopType = '';
	    quickPop.hide();
	},
	showQuickPop = function (type) {
	    if (quickPopXHR && quickPopXHR.abort) {
	        quickPopXHR.abort();
	    }
	    if (type !== prevPopType) {
	        var fn = quickDataFns[type];
	        quickPop.html(ds.tmpl(popTmpl, fn));
	        fn.init.call(this, fn);
	    }
	    doc.unbind('click.quick_links').one('click.quick_links', hideQuickPop);

	    quickPop[0].className = 'quick_links_pop quick_' + type;
	    popDisplayed = true;
	    prevPopType = type;
	    quickPop.show();
	};
    quickShell.bind('click.quick_links', function (e) {
        e.stopPropagation();
    });

    //通用事件处理
    var
	view = $(window),
	quickLinkCollapsed = !!ds.getCookie('ql_collapse'),
	getHandlerType = function (className) {
	    return className.replace(/current/g, '').replace(/\s+/, '');
	},
	showPopFn = function () {
	    var type = getHandlerType(this.className);
	    if (popDisplayed && type === prevPopType) {
	        return hideQuickPop();
	    }
	    showQuickPop(this.className);
	    if (prevTrigger) {
	        prevTrigger.removeClass('current');
	    }
	    prevTrigger = $(this).addClass('current');
	},
	quickHandlers = {

	    my_qlinks: showPopFn,
	    message_list: showPopFn,
	    //cart_list: showPopFn,
	    notice_lists: showPopFn,
	    leave_message: showPopFn,
	    //返回顶部
	    return_top: function () {
	        // ds.scrollTo(0, 0);
	        window.location = "#";
	        hideReturnTop();
	    },
	    toggle: function () {
	        quickLinkCollapsed = !quickLinkCollapsed;

	        quickShell[quickLinkCollapsed ? 'addClass' : 'removeClass']('quick_links_min');
	        ds.setCookie('ql_collapse', quickLinkCollapsed ? '1' : '', 30);
	    }
	};
    quickShell.delegate('a', 'click', function (e) {
        var type = getHandlerType(this.className);
        if (type && quickHandlers[type]) {
            quickHandlers[type].call(this);
            e.preventDefault();
        }
    });

    //Return top
    var scrollTimer, resizeTimer, minWidth = 1350;

    function resizeHandler() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(checkScroll, 160);
    }
    function checkResize() {
        quickShell[view.width() > 1340 ? 'removeClass' : 'addClass']('quick_links_dockright');
    }
    function scrollHandler() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkResize, 160);
    }
    function checkScroll() {
        view.scrollTop() > 100 ? showReturnTop() : hideReturnTop();
    }
    function showReturnTop() {
        quickPanel.addClass('quick_links_allow_gotop');
    }
    function hideReturnTop() {
        quickPanel.removeClass('quick_links_allow_gotop');
    }

    view.bind('scroll.go_top', resizeHandler).bind('resize.quick_links', scrollHandler);
    quickLinkCollapsed && quickShell.addClass('quick_links_min');
    resizeHandler();
    scrollHandler();
});