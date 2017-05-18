console.log('injected! -- by bajdcc');
var needjQuery = function (need) {
    if (typeof (jQuery) !== 'undefined') {
        if (!need) return true;
        var re = /(\d+)\.(\d+)\.(\d+)/,
            cur = re.exec(jQuery.fn.jquery),
            need = re.exec(need);
        return (need[1] <= cur[1] && need[2] <= cur[2] && need[3] <= cur[3]);
    } else return true;
}
//jQuery = $ = null;
if (needjQuery('1.11.1')) {
    jQuery = $ = null;
    console.log('load jquery');
    document.write("<scr" + "ipt src=\"js" + "/jquery-1.11.1.min.js\">" + "</scr" + "ipt>");
}
//document.write("<style src='//cdn.bajdcc.com/bower_components/bootstrap/dist/css/bootstrap.min.css'><style>");
setTimeout(function () {
    $("<link>")
        .attr({
            rel: "stylesheet",
            type: "text/css",
            href: "inject/inject.css"
        })
        .appendTo("head");
    $("<link>")
        .attr({
            rel: "stylesheet",
            type: "text/css",
            href: "css/font-awesome.min.css"
        })
        .appendTo("head");
    $("<link>")
        .attr({
            rel: "stylesheet",
            type: "text/css",
            href: "css/pace-theme-minimal.css"
        })
        .appendTo("head");
}, 500);
//$(document).ready(
//    function () {
setTimeout(function () {
    var div_ = $("<div id='_cc_tips'></div>");
    $("body").append(div_);
    var showTip = function (elapse) {
        var __addTips__ = function (args) {
            for (var _div_ = $("<div></div>"), i = 0; i < args.length; i++) {
                var _new_ = $("<span></span>");
                _new_.html(args[i]);
                _div_.append(_new_);
            }
            var _p_ = $("<p></p>");
            _p_.append(_div_);
            $("#_cc_tips").append(_p_);
            __hover__(_p_, elapse * 1000);
            __fadeIn__(_p_, elapse * 1000);
        };

        var __hover__ = function (element, elapse) {
            /*element.hover(function () {
             $(this).stop().fadeIn("fast");
             }, __fadeOut__(element, 1000));
             element.mouseover(function () {
             $(this).stop(true, false);
             });*/
            element.click(function () {
                $(this).stop().delay(1000).fadeOut("fast", function () {
                    $(this).remove();
                });
            });
        };

        var __fadeIn__ = function (element, elapse) {
            element.css("opacity", 0);
            element.css("display", "none");
            element.animate({
                height: 'show'
            }, 1000, function () {
                $(this).css("display", "none");
                $(this).css("opacity", "");
            }).fadeIn(1000).delay(elapse).fadeOut(2000, function () {
                $(this).css("opacity", 0);
                $(this).css("display", "block");
            }).animate({
                height: 'hide'
            }, 1000, function () {
                $(this).remove();
            });
        };

        var __fadeOut__ = function (element, elapse) {
            return function () {
                element.css("opacity", "");
                element.css("display", "block");
                element.delay(elapse).fadeOut(2000, function () {
                    $(this).css("opacity", 0);
                    $(this).css("display", "block");
                }).animate({
                    height: 'hide'
                }, 1000, function () {
                    $(this).remove();
                });
            };
        };

        var worker = function () {
        };

        return function () {
            __addTips__(arguments);
        };
    };

    $.fn.showTip = showTip;
    //window.showTip = showTip.bind(window);

    function gup(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(location.href);
        if (results === null) {
            return null;
        }
        else {
            return results[1];
        }
    }

    console.log('popup!');
    showTip(120)("<h4 align='center'>======== &nbsp; 通知 &nbsp; ========</h4>",
        "<a href='/jump'><h3>【您已进入代理模式！】</h3></a>", "&nbsp;",
        "<h5 align='right'>———— 2017 &copy; bajdcc</h5>");
    var url = decodeURIComponent(gup('url'));
    if (url.search('http') !== 0) {
        url = 'http://' + url;
    }
    showTip(30)("<a href='" + url + "'><h4>回到原页面</h4></a>");
    showTip(10)(new Date().toLocaleString(), "<h5>处理时间：" + (1000.0 * injected_time_bajdcc).toFixed(2) + " ms</h5>");
    setTimeout(function () {
        $("<scr" + "ipt src=\"inject/www/" + url.match(/http:\/\/([^\/]+)/i)[0].slice(7) + ".js\">" + "</scr" + "ipt>").appendTo($("body"));
    }, 0);
}, 2000);
//    });
document.write("<scr" + "ipt src=\"js/pace.min.js\">" + "</scr" + "ipt>");