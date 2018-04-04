!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.astro=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";var n,o={},e="querySelector"in document&&"addEventListener"in t&&"classList"in document.createElement("_"),i={selector:"[data-nav-toggle]",toggleActiveClass:"active",navActiveClass:"active",initClass:"js-astro",callback:function(){}},s=function(t){var n={},o=!1,e=0,a=arguments.length;"[object Boolean]"===Object.prototype.toString.call(t)&&(o=t,e++);for(var i=function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o&&"[object Object]"===Object.prototype.toString.call(t[e])?n[e]=buoy.extend(!0,n[e],t[e]):n[e]=t[e])};e<a;e++){i(arguments[e])}return n},a=function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;0<=--n&&e.item(n)!==this;);return-1<n});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null};o.toggleNav=function(t,e,n){var o=s(o||i,n||{}),a=document.querySelector(e);t.classList.toggle(o.toggleActiveClass),a.classList.toggle(o.navActiveClass),o.callback(t,e)};var r=function(t){var e=a(t.target,n.selector);e&&("a"===e.tagName.toLowerCase()&&t.preventDefault(),o.toggleNav(e,e.getAttribute("data-nav-toggle"),n))};return o.destroy=function(){n&&(document.documentElement.classList.remove(n.initClass),document.removeEventListener("click",r,!1),n=null)},o.init=function(t){e&&(o.destroy(),n=s(i,t||{}),document.documentElement.classList.add(n.initClass),document.addEventListener("click",r,!1))},o});var stickyNav=function(t,e,n){t=t,e=e,n=n;var o=0,a=function(){document.documentElement.scrollTop>e?0===o&&(t.classList.add(n),o=1):(t.classList.remove(n),o=0)};return stickyNav.init=function(){a(),window.addEventListener("scroll",a,!1)},stickyNav.init()};!function(t,e){var n=e(t,t.document);t.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window,function(o,l){"use strict";if(l.getElementsByClassName){var s,d,u=l.documentElement,c=o.Date,a=o.HTMLPictureElement,i="addEventListener",f="getAttribute",e=o[i],m=o.setTimeout,n=o.requestAnimationFrame||m,v=o.requestIdleCallback,g=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],y={},h=Array.prototype.forEach,p=function(t,e){return y[e]||(y[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),y[e].test(t[f]("class")||"")&&y[e]},z=function(t,e){p(t,e)||t.setAttribute("class",(t[f]("class")||"").trim()+" "+e)},b=function(t,e){var n;(n=p(t,e))&&t.setAttribute("class",(t[f]("class")||"").replace(n," "))},E=function(e,n,t){var o=t?i:"removeEventListener";t&&E(e,n),r.forEach(function(t){e[o](t,n)})},C=function(t,e,n,o,a){var i=l.createEvent("CustomEvent");return n||(n={}),n.instance=s,i.initCustomEvent(e,!o,!a,n),t.dispatchEvent(i),i},A=function(t,e){var n;!a&&(n=o.picturefill||d.pf)?n({reevaluate:!0,elements:[t]}):e&&e.src&&(t.src=e.src)},w=function(t,e){return(getComputedStyle(t,null)||{})[e]},L=function(t,e,n){for(n=n||t.offsetWidth;n<d.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},S=(zt=[],bt=pt=[],Et=function(){var t=bt;for(bt=pt.length?zt:pt,yt=!0,ht=!1;t.length;)t.shift()();yt=!1},(Ct=function(t,e){yt&&!e?t.apply(this,arguments):(bt.push(t),ht||(ht=!0,(l.hidden?m:n)(Et)))})._lsFlush=Et,Ct),N=function(n,t){return t?function(){S(n)}:function(){var t=this,e=arguments;S(function(){n.apply(t,e)})}},t=function(t){var n,o=0,a=125,e=666,i=e,s=function(){n=!1,o=c.now(),t()},r=v?function(){v(s,{timeout:i}),i!==e&&(i=e)}:N(function(){m(s)},!0);return function(t){var e;(t=!0===t)&&(i=44),n||(n=!0,(e=a-(c.now()-o))<0&&(e=0),t||e<9&&v?r():m(r,e))}},k=function(t){var e,n,o=99,a=function(){e=null,t()},i=function(){var t=c.now()-n;t<o?m(i,o-t):(v||a)(a)};return function(){n=c.now(),e||(e=m(i,o))}},M=(X=/^img$/i,Y=/^iframe$/i,Z="onscroll"in o&&!/glebot/.test(navigator.userAgent),nt=et=tt=0,ot=-1,at=function(t){nt--,t&&t.target&&E(t.target,at),(!t||nt<0||!t.target)&&(nt=0)},it=function(t,e){var n,o=t,a="hidden"==w(l.body,"visibility")||"hidden"!=w(t,"visibility");for(I-=e,J+=e,U-=e,G+=e;a&&(o=o.offsetParent)&&o!=l.body&&o!=u;)(a=0<(w(o,"opacity")||1))&&"visible"!=w(o,"overflow")&&(n=o.getBoundingClientRect(),a=G>n.left&&U<n.right&&J>n.top-1&&I<n.bottom+1);return a},rt=t(st=function(){var t,e,n,o,a,i,s,r,c;if((D=d.loadMode)&&nt<8&&(t=j.length)){e=0,ot++,null==Q&&("expand"in d||(d.expand=500<u.clientHeight&&500<u.clientWidth?500:370),K=d.expand,Q=K*d.expFactor),et<Q&&nt<1&&2<ot&&2<D&&!l.hidden?(et=Q,ot=0):et=1<D&&1<ot&&nt<6?K:tt;for(;e<t;e++)if(j[e]&&!j[e]._lazyRace)if(Z)if((r=j[e][f]("data-expand"))&&(i=1*r)||(i=et),c!==i&&(H=innerWidth+i*V,$=innerHeight+i,s=-1*i,c=i),n=j[e].getBoundingClientRect(),(J=n.bottom)>=s&&(I=n.top)<=$&&(G=n.right)>=s*V&&(U=n.left)<=H&&(J||G||U||I)&&(d.loadHidden||"hidden"!=w(j[e],"visibility"))&&(R&&nt<3&&!r&&(D<3||ot<4)||it(j[e],i))){if(vt(j[e]),a=!0,9<nt)break}else!a&&R&&!o&&nt<4&&ot<4&&2<D&&(F[0]||d.preloadAfterLoad)&&(F[0]||!r&&(J||G||U||I||"auto"!=j[e][f](d.sizesAttr)))&&(o=F[0]||j[e]);else vt(j[e]);o&&!a&&vt(o)}}),lt=N(ct=function(t){z(t.target,d.loadedClass),b(t.target,d.loadingClass),E(t.target,ut)}),ut=function(t){lt({target:t.target})},dt=function(t,e){try{t.contentWindow.location.replace(e)}catch(j){t.src=e}},ft=function(t){var e,n=t[f](d.srcsetAttr);(e=d.customMedia[t[f]("data-media")||t[f]("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},mt=N(function(t,e,n,o,a){var i,s,r,c,l,u;(l=C(t,"lazybeforeunveil",e)).defaultPrevented||(o&&(n?z(t,d.autosizesClass):t.setAttribute("sizes",o)),s=t[f](d.srcsetAttr),i=t[f](d.srcAttr),a&&(c=(r=t.parentNode)&&g.test(r.nodeName||"")),u=e.firesLoad||"src"in t&&(s||i||c),l={target:t},u&&(E(t,at,!0),clearTimeout(P),P=m(at,2500),z(t,d.loadingClass),E(t,ut,!0)),c&&h.call(r.getElementsByTagName("source"),ft),s?t.setAttribute("srcset",s):i&&!c&&(Y.test(t.nodeName)?dt(t,i):t.src=i),a&&(s||c)&&A(t,{src:i})),t._lazyRace&&delete t._lazyRace,b(t,d.lazyClass),S(function(){(!u||t.complete&&1<t.naturalWidth)&&(u?at(l):nt--,ct(l))},!0)}),gt=function(){if(!R){if(c.now()-T<999)return void m(gt,999);var t=k(function(){d.loadMode=3,rt()});R=!0,d.loadMode=3,rt(),e("scroll",function(){3==d.loadMode&&(d.loadMode=2),t()},!0)}},{_:function(){T=c.now(),j=l.getElementsByClassName(d.lazyClass),F=l.getElementsByClassName(d.lazyClass+" "+d.preloadClass),V=d.hFac,e("scroll",rt,!0),e("resize",rt,!0),o.MutationObserver?new MutationObserver(rt).observe(u,{childList:!0,subtree:!0,attributes:!0}):(u[i]("DOMNodeInserted",rt,!0),u[i]("DOMAttrModified",rt,!0),setInterval(rt,999)),e("hashchange",rt,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){l[i](t,rt,!0)}),/d$|^c/.test(l.readyState)?gt():(e("load",gt),l[i]("DOMContentLoaded",rt),m(gt,2e4)),j.length?(st(),S._lsFlush()):rt()},checkElems:rt,unveil:vt=function(t){var e,n=X.test(t.nodeName),o=n&&(t[f](d.sizesAttr)||t[f]("sizes")),a="auto"==o;(!a&&R||!n||!t.src&&!t.srcset||t.complete||p(t,d.errorClass))&&(e=C(t,"lazyunveilread").detail,a&&_.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,nt++,mt(t,e,a,o,n))}}),_=(B=N(function(t,e,n,o){var a,i,s;if(t._lazysizesWidth=o,o+="px",t.setAttribute("sizes",o),g.test(e.nodeName||""))for(i=0,s=(a=e.getElementsByTagName("source")).length;i<s;i++)a[i].setAttribute("sizes",o);n.detail.dataAttr||A(t,n.detail)}),W=function(t,e,n){var o,a=t.parentNode;a&&(n=L(t,a,n),(o=C(t,"lazybeforesizes",{width:n,dataAttr:!!e})).defaultPrevented||(n=o.detail.width)&&n!==t._lazysizesWidth&&B(t,a,o,n))},{_:function(){q=l.getElementsByClassName(d.autosizesClass),e("resize",O)},checkElems:O=k(function(){var t,e=q.length;if(e)for(t=0;t<e;t++)W(q[t])}),updateElem:W}),x=function(){x.i||(x.i=!0,_._(),M._())};return function(){var t,e={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};for(t in d=o.lazySizesConfig||o.lazysizesConfig||{},e)t in d||(d[t]=e[t]);o.lazySizesConfig=d,m(function(){d.init&&x()})}(),s={cfg:d,autoSizer:_,loader:M,init:x,uP:A,aC:z,rC:b,hC:p,fire:C,gW:L,rAF:S}}var q,B,W,O,j,F,R,P,D,T,H,$,I,U,G,J,K,Q,V,X,Y,Z,tt,et,nt,ot,at,it,st,rt,ct,lt,ut,dt,ft,mt,vt,gt,yt,ht,pt,zt,bt,Et,Ct}),astro.init();var stickyNavigation=stickyNav(document.querySelector("#nav"),28,"small");window.addEventListener("hashchange",function(){document.querySelector("#nav > ul").classList.remove("active"),document.querySelector("#nav > a").classList.remove("active")});var clickEvent=function(){return"ontouchstart"in document==!0?"touchstart":"click"},contactButtons=document.querySelectorAll("a.button[href='/#contact']");for(i=0;i<contactButtons.length;i++)contactButtons[i].addEventListener(clickEvent(),function(t){"#contact"==t.target.hash&&(scroll&&scroll.animateScroll(document.querySelector(t.target.hash)),document.querySelector('#contact select[name="onderwerp"').value=t.target.text)});var url=new URL(window.location.href),success=url.searchParams.get("success"),message=document.querySelector(".success");success&&message&&message.classList.contains("hidden")&&message.classList.remove("hidden");