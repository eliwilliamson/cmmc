!function(a,b){var c=a();a.fn.dropdownHover=function(d){return c=c.add(this.parent()),this.each(function(){var e,f=a(this),g=f.parent(),h={delay:500,instantlyCloseOthers:!0},i={delay:a(this).data("delay"),instantlyCloseOthers:a(this).data("close-others")},j=a.extend(!0,{},h,d,i);g.hover(function(a){return g.hasClass("open")||f.is(a.target)?(j.instantlyCloseOthers===!0&&c.removeClass("open"),b.clearTimeout(e),void g.addClass("open")):!0},function(){e=b.setTimeout(function(){g.removeClass("open")},j.delay)}),f.hover(function(){j.instantlyCloseOthers===!0&&c.removeClass("open"),b.clearTimeout(e),g.addClass("open")}),g.find(".dropdown-submenu").each(function(){var c,d=a(this);d.hover(function(){b.clearTimeout(c),d.children(".dropdown-menu").show(),d.siblings().children(".dropdown-menu").hide()},function(){var a=d.children(".dropdown-menu");c=b.setTimeout(function(){a.hide()},j.delay)})})})},a(document).ready(function(){a('[data-hover="dropdown"]').dropdownHover()})}(jQuery,this);