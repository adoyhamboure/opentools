"use strict";(self.webpackChunkopentools=self.webpackChunkopentools||[]).push([[721],{9721:(Q,h,m)=>{function y(){const o=window,s=document;var g="hljs-ln",O="hljs-ln-line",b="hljs-ln-code",C="hljs-ln-numbers",p="hljs-ln-n",d="data-line-number",L=/\r\n|\r|\n/g;function E(e){try{var n=s.querySelectorAll("code.hljs,code.nohighlight");for(var t in n)n.hasOwnProperty(t)&&(H(n[t])||A(n[t],e))}catch(r){o.console.error("LineNumbers error: ",r)}}function H(e){return e.classList.contains("nohljsln")}function A(e,n){"object"==typeof e&&function G(e){o.setTimeout(e,0)}(function(){e.innerHTML=j(e,n)})}function j(e,n){var t=function k(e,n){return{singleLine:P(n=n||{}),startFrom:V(e,n)}}(e,n);return w(e),function R(e,n){var t=M(e);if(""===t[t.length-1].trim()&&t.pop(),t.length>1||n.singleLine){for(var r="",a=0,i=t.length;a<i;a++)r+=c('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[O,C,p,d,b,a+n.startFrom,t[a].length>0?t[a]:" "]);return c('<table class="{0}">{1}</table>',[g,r])}return e}(e.innerHTML,t)}function P(e){return!!e.singleLine&&e.singleLine}function V(e,n){var r=1;isFinite(n.startFrom)&&(r=n.startFrom);var a=function U(e,n){return e.hasAttribute(n)?e.getAttribute(n):null}(e,"data-ln-start-from");return null!==a&&(r=function q(e,n){if(!e)return n;var t=Number(e);return isFinite(t)?t:n}(a,1)),r}function w(e){var n=e.childNodes;for(var t in n)if(n.hasOwnProperty(t)){var r=n[t];T(r.textContent)>0&&(r.childNodes.length>0?w(r):K(r.parentNode))}}function K(e){var n=e.className;if(/hljs-/.test(n)){for(var t=M(e.innerHTML),r=0,a="";r<t.length;r++)a+=c('<span class="{0}">{1}</span>\n',[n,t[r].length>0?t[r]:" "]);e.innerHTML=a.trim()}}function M(e){return 0===e.length?[]:e.split(L)}function T(e){return(e.trim().match(L)||[]).length}function c(e,n){return e.replace(/\{(\d+)\}/g,function(t,r){return void 0!==n[r]?n[r]:t})}o.hljs?(o.hljs.initLineNumbersOnLoad=function D(e){"interactive"===s.readyState||"complete"===s.readyState?E(e):o.addEventListener("DOMContentLoaded",function(){E(e)})},o.hljs.lineNumbersBlock=A,o.hljs.lineNumbersValue=function I(e,n){if("string"==typeof e){var t=document.createElement("code");return t.innerHTML=e,j(t,n)}},function _(){var e=s.createElement("style");e.type="text/css",e.innerHTML=c(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[g,p,d]),s.getElementsByTagName("head")[0].appendChild(e)}()):o.console.error("highlight.js not detected!"),document.addEventListener("copy",function(e){var t,n=window.getSelection();(function B(e){for(var n=e;n;){if(n.className&&-1!==n.className.indexOf("hljs-ln-code"))return!0;n=n.parentNode}return!1})(n.anchorNode)&&(t=-1!==window.navigator.userAgent.indexOf("Edge")?function F(e){for(var n=e.toString(),t=e.anchorNode;"TD"!==t.nodeName;)t=t.parentNode;for(var r=e.focusNode;"TD"!==r.nodeName;)r=r.parentNode;var a=parseInt(t.dataset.lineNumber),i=parseInt(r.dataset.lineNumber);if(a!=i){var l=t.textContent,u=r.textContent;if(a>i){var f=a;a=i,i=f,f=l,l=u,u=f}for(;0!==n.indexOf(l);)l=l.slice(1);for(;-1===n.lastIndexOf(u);)u=u.slice(0,-1);for(var v=l,X=function S(e){for(var n=e;"TABLE"!==n.nodeName;)n=n.parentNode;return n}(t),N=a+1;N<i;++N){var z=c('.{0}[{1}="{2}"]',[b,d,N]);v+="\n"+X.querySelector(z).textContent}return v+"\n"+u}return n}(n):n.toString(),e.clipboardData.setData("text/plain",t),e.preventDefault())})}m.r(h),m.d(h,{activateLineNumbers:()=>y})}}]);