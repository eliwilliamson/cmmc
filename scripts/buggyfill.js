!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.viewportUnitsBuggyfill=b()}(this,function(){"use strict";function a(a,b){var c;return function(){var d=this,e=arguments,f=function(){a.apply(d,e)};clearTimeout(c),c=setTimeout(f,b)}}function b(){try{return window.self!==window.top}catch(a){return!0}}function c(c){t||(c===!0&&(c={force:!0}),p=c||{},p.isMobileSafari=z,p.isBadStockAndroid=A,(p.force||z||x||A||y||p.hacks&&p.hacks.required(p))&&(p.hacks&&p.hacks.initialize(p),t=!0,s=document.createElement("style"),s.id="patched-viewport",document.head.appendChild(s),l(function(){var c=a(e,p.refreshDebounceWait||100);window.addEventListener("orientationchange",c,!0),window.addEventListener("pageshow",c,!0),(p.force||x||b())&&(window.addEventListener("resize",c,!0),p._listeningToResize=!0),p.hacks&&p.hacks.initializeEvents(p,e,c),e()})))}function d(){s.textContent=h()}function e(){t&&(f(),setTimeout(function(){d()},1))}function f(){return r=[],w.call(document.styleSheets,function(a){"patched-viewport"!==a.ownerNode.id&&a.cssRules&&(a.media&&a.media.mediaText&&window.matchMedia&&!window.matchMedia(a.media.mediaText).matches||w.call(a.cssRules,g))}),r}function g(a){if(7===a.type){var b;try{b=a.cssText}catch(c){return}return v.lastIndex=0,void(v.test(b)&&(r.push([a,null,b]),p.hacks&&p.hacks.findDeclarations(r,a,null,b)))}if(!a.style){if(!a.cssRules)return;return void w.call(a.cssRules,function(a){g(a)})}w.call(a.style,function(b){var c=a.style.getPropertyValue(b);v.lastIndex=0,v.test(c)&&(r.push([a,b,c]),p.hacks&&p.hacks.findDeclarations(r,a,b,c))})}function h(){q=k();var a,b,c=[],d=[];return r.forEach(function(e){var f=i.apply(null,e),g=f.selector.length?f.selector.join(" {\n")+" {\n":"",h=new Array(f.selector.length+1).join("\n}");return g&&g===a?(g&&!a&&(a=g,b=h),void d.push(f.content)):(d.length&&(c.push(a+d.join("\n")+b),d.length=0),void(g?(a=g,b=h,d.push(f.content)):(c.push(f.content),a=null,b=null)))}),d.length&&c.push(a+d.join("\n")+b),y&&c.push("* { content: normal !important; }"),c.join("\n\n")}function i(a,b,c){var d,e=[];d=c.replace(v,j),p.hacks&&(d=p.hacks.overwriteDeclaration(a,b,d)),b&&(e.push(a.selectorText),d=b+": "+d+";");for(var f=a.parentRule;f;)e.unshift("@media "+f.media.mediaText),f=f.parentRule;return{selector:e,content:d}}function j(a,b,c){var d=q[c],e=parseFloat(b)/100;return e*d+"px"}function k(){var a=window.innerHeight,b=window.innerWidth;return{vh:a,vw:b,vmax:Math.max(b,a),vmin:Math.min(b,a)}}function l(a){var b=0,c=function(){b--,b||a()};w.call(document.styleSheets,function(a){a.href&&m(a.href)!==m(location.href)&&(b++,n(a.ownerNode,c))}),b||a()}function m(a){return a.slice(0,a.indexOf("/",a.indexOf("://")+3))}function n(a,b){o(a.href,function(){var c=document.createElement("style");c.media=a.media,c.setAttribute("data-href",a.href),c.textContent=this.responseText,a.parentNode.replaceChild(c,a),b()},b)}function o(a,b,c){var d=new XMLHttpRequest;if("withCredentials"in d)d.open("GET",a,!0);else{if("undefined"==typeof XDomainRequest)throw new Error("cross-domain XHR not supported");d=new XDomainRequest,d.open("GET",a)}return d.onload=b,d.onerror=c,d.send(),d}var p,q,r,s,t=!1,u=window.navigator.userAgent,v=/([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,w=[].forEach,x=!1,y=u.indexOf("Opera Mini")>-1,z=/(iPhone|iPod|iPad).+AppleWebKit/i.test(u)&&function(){var a=/Version\/(\d+)/.exec(window.navigator.userAgent);return a.length>1&&parseInt(a[1])<8}(),A=function(){var a=u.indexOf(" Android ")>-1;if(!a)return!1;var b=u.indexOf("Version/")>-1;if(!b)return!1;var c=parseFloat((u.match("Android ([0-9.]+)")||[])[1]);return 4.4>=c}();return{version:"0.4.2",findProperties:f,getCss:h,init:c,refresh:e}});