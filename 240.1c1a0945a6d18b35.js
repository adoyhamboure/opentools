(self.webpackChunkopentools=self.webpackChunkopentools||[]).push([[240],{9450:le=>{function j(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const i=e[t],u=typeof i;("object"===u||"function"===u)&&!Object.isFrozen(i)&&j(i)}),e}class v{constructor(t){void 0===t.data&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function U(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function N(e,...t){const i=Object.create(null);for(const u in e)i[u]=e[u];return t.forEach(function(u){for(const b in u)i[b]=u[b]}),i}const ae=e=>!!e.scope;class ve{constructor(t,i){this.buffer="",this.classPrefix=i.classPrefix,t.walk(this)}addText(t){this.buffer+=U(t)}openNode(t){if(!ae(t))return;const i=((e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const i=e.split(".");return[`${t}${i.shift()}`,...i.map((u,b)=>`${u}${"_".repeat(b+1)}`)].join(" ")}return`${t}${e}`})(t.scope,{prefix:this.classPrefix});this.span(i)}closeNode(t){ae(t)&&(this.buffer+="</span>")}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const ue=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class Q{constructor(){this.rootNode=ue(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const i=ue({scope:t});this.add(i),this.stack.push(i)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,i){return"string"==typeof i?t.addText(i):i.children&&(t.openNode(i),i.children.forEach(u=>this._walk(t,u)),t.closeNode(i)),t}static _collapse(t){"string"!=typeof t&&t.children&&(t.children.every(i=>"string"==typeof i)?t.children=[t.children.join("")]:t.children.forEach(i=>{Q._collapse(i)}))}}class Pe extends Q{constructor(t){super(),this.options=t}addText(t){""!==t&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,i){const u=t.root;i&&(u.scope=`language:${i}`),this.add(u)}toHTML(){return new ve(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function $(e){return e?"string"==typeof e?e:e.source:null}function fe(e){return D("(?=",e,")")}function He(e){return D("(?:",e,")*")}function je(e){return D("(?:",e,")?")}function D(...e){return e.map(i=>$(i)).join("")}function q(...e){return"("+(function Ue(e){const t=e[e.length-1];return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}(e).capture?"":"?:")+e.map(u=>$(u)).join("|")+")"}function ge(e){return new RegExp(e.toString()+"|").exec("").length-1}const Ge=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function m(e,{joinWith:t}){let i=0;return e.map(u=>{i+=1;const b=i;let _=$(u),c="";for(;_.length>0;){const r=Ge.exec(_);if(!r){c+=_;break}c+=_.substring(0,r.index),_=_.substring(r.index+r[0].length),"\\"===r[0][0]&&r[1]?c+="\\"+String(Number(r[1])+b):(c+=r[0],"("===r[0]&&i++)}return c}).map(u=>`(${u})`).join(t)}const he="[a-zA-Z]\\w*",ee="[a-zA-Z_]\\w*",pe="\\b\\d+(\\.\\d+)?",de="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ee="\\b(0b[01]+)",G={begin:"\\\\[\\s\\S]",relevance:0},ze={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[G]},Xe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[G]},K=function(e,t,i={}){const u=N({scope:"comment",begin:e,end:t,contains:[]},i);u.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const b=q("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return u.contains.push({begin:D(/[ ]+/,"(",b,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),u},Ze=K("//","$"),Je=K("/\\*","\\*/"),Ve=K("#","$");var F=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:he,UNDERSCORE_IDENT_RE:ee,NUMBER_RE:pe,C_NUMBER_RE:de,BINARY_NUMBER_RE:Ee,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=D(t,/.*\b/,e.binary,/\b.*/)),N({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(i,u)=>{0!==i.index&&u.ignoreMatch()}},e)},BACKSLASH_ESCAPE:G,APOS_STRING_MODE:ze,QUOTE_STRING_MODE:Xe,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:K,C_LINE_COMMENT_MODE:Ze,C_BLOCK_COMMENT_MODE:Je,HASH_COMMENT_MODE:Ve,NUMBER_MODE:{scope:"number",begin:pe,relevance:0},C_NUMBER_MODE:{scope:"number",begin:de,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:Ee,relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[G,{begin:/\[/,end:/\]/,relevance:0,contains:[G]}]}]},TITLE_MODE:{scope:"title",begin:he,relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:ee,relevance:0},METHOD_GUARD:{begin:"\\.\\s*"+ee,relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(t,i)=>{i.data._beginMatch=t[1]},"on:end":(t,i)=>{i.data._beginMatch!==t[1]&&i.ignoreMatch()}})}});function st(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function rt(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function ct(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=st,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function ot(e,t){Array.isArray(e.illegal)&&(e.illegal=q(...e.illegal))}function lt(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function at(e,t){void 0===e.relevance&&(e.relevance=1)}const ut=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const i=Object.assign({},e);Object.keys(e).forEach(u=>{delete e[u]}),e.keywords=i.keywords,e.begin=D(i.beforeMatch,fe(i.begin)),e.starts={relevance:0,contains:[Object.assign(i,{endsParent:!0})]},e.relevance=0,delete i.beforeMatch},ft=["of","and","for","in","not","or","if","then","parent","list","value"],gt="keyword";function be(e,t,i=gt){const u=Object.create(null);return"string"==typeof e?b(i,e.split(" ")):Array.isArray(e)?b(i,e):Object.keys(e).forEach(function(_){Object.assign(u,be(e[_],t,_))}),u;function b(_,c){t&&(c=c.map(r=>r.toLowerCase())),c.forEach(function(r){const a=r.split("|");u[a[0]]=[_,ht(a[0],a[1])]})}}function ht(e,t){return t?Number(t):function pt(e){return ft.includes(e.toLowerCase())}(e)?0:1}const _e={},C=e=>{console.error(e)},Me=(e,...t)=>{console.log(`WARN: ${e}`,...t)},P=(e,t)=>{_e[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),_e[`${e}/${t}`]=!0)},z=new Error;function we(e,t,{key:i}){let u=0;const b=e[i],_={},c={};for(let r=1;r<=t.length;r++)c[r+u]=b[r],_[r+u]=!0,u+=ge(t[r-1]);e[i]=c,e[i]._emit=_,e[i]._multi=!0}function _t(e){(function bt(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function dt(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw C("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),z;if("object"!=typeof e.beginScope||null===e.beginScope)throw C("beginScope must be object"),z;we(e,e.begin,{key:"beginScope"}),e.begin=m(e.begin,{joinWith:""})}}(e),function Et(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw C("skip, excludeEnd, returnEnd not compatible with endScope: {}"),z;if("object"!=typeof e.endScope||null===e.endScope)throw C("endScope must be object"),z;we(e,e.end,{key:"endScope"}),e.end=m(e.end,{joinWith:""})}}(e)}function Mt(e){function t(c,r){return new RegExp($(c),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class i{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,r]),this.matchAt+=ge(r)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const r=this.regexes.map(a=>a[1]);this.matcherRe=t(m(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(r);if(!a)return null;const x=a.findIndex((W,ne)=>ne>0&&void 0!==W),M=this.matchIndexes[x];return a.splice(0,x),Object.assign(a,M)}}class u{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const a=new i;return this.rules.slice(r).forEach(([x,M])=>a.addRule(x,M)),a.compile(),this.multiRegexes[r]=a,a}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(r,a){this.rules.push([r,a]),"begin"===a.type&&this.count++}exec(r){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let x=a.exec(r);if(this.resumingScanAtSamePosition()&&(!x||x.index!==this.lastIndex)){const M=this.getMatcher(0);M.lastIndex=this.lastIndex+1,x=M.exec(r)}return x&&(this.regexIndex+=x.position+1,this.regexIndex===this.count&&this.considerAll()),x}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=N(e.classNameAliases||{}),function _(c,r){const a=c;if(c.isCompiled)return a;[rt,lt,_t,ut].forEach(M=>M(c,r)),e.compilerExtensions.forEach(M=>M(c,r)),c.__beforeBegin=null,[ct,ot,at].forEach(M=>M(c,r)),c.isCompiled=!0;let x=null;return"object"==typeof c.keywords&&c.keywords.$pattern&&(c.keywords=Object.assign({},c.keywords),x=c.keywords.$pattern,delete c.keywords.$pattern),x=x||/\w+/,c.keywords&&(c.keywords=be(c.keywords,e.case_insensitive)),a.keywordPatternRe=t(x,!0),r&&(c.begin||(c.begin=/\B|\b/),a.beginRe=t(a.begin),!c.end&&!c.endsWithParent&&(c.end=/\B|\b/),c.end&&(a.endRe=t(a.end)),a.terminatorEnd=$(a.end)||"",c.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(c.end?"|":"")+r.terminatorEnd)),c.illegal&&(a.illegalRe=t(c.illegal)),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map(function(M){return function wt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return N(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:xe(e)?N(e,{starts:e.starts?N(e.starts):null}):Object.isFrozen(e)?N(e):e}("self"===M?c:M)})),c.contains.forEach(function(M){_(M,a)}),c.starts&&_(c.starts,r),a.matcher=function b(c){const r=new u;return c.contains.forEach(a=>r.addRule(a.begin,{rule:a,type:"begin"})),c.terminatorEnd&&r.addRule(c.terminatorEnd,{type:"end"}),c.illegal&&r.addRule(c.illegal,{type:"illegal"}),r}(a),a}(e)}function xe(e){return!!e&&(e.endsWithParent||xe(e.starts))}class Ot extends Error{constructor(t,i){super(t),this.name="HTMLInjectionError",this.html=i}}const te=U,Oe=N,Re=Symbol("nomatch"),ye=function(e){const t=Object.create(null),i=Object.create(null),u=[];let b=!0;const _="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Pe};function a(n){return r.noHighlightRe.test(n)}function M(n,l,h){let d="",w="";"object"==typeof l?(d=n,h=l.ignoreIllegals,w=l.language):(P("10.7.0","highlight(lang, code, ...args) has been deprecated."),P("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),w=n,d=l),void 0===h&&(h=!0);const S={code:d,language:w};Y("before:highlight",S);const B=S.result?S.result:W(S.language,S.code,h);return B.code=S.code,Y("after:highlight",B),B}function W(n,l,h,d){const w=Object.create(null);function S(s,o){return s.keywords[o]}function B(){if(!f.keywords)return void O.addText(E);let s=0;f.keywordPatternRe.lastIndex=0;let o=f.keywordPatternRe.exec(E),g="";for(;o;){g+=E.substring(s,o.index);const p=k.case_insensitive?o[0].toLowerCase():o[0],R=S(f,p);if(R){const[T,Gt]=R;O.addText(g),g="",w[p]=(w[p]||0)+1,w[p]<=7&&(V+=Gt),T.startsWith("_")?g+=o[0]:A(o[0],k.classNameAliases[T]||T)}else g+=o[0];s=f.keywordPatternRe.lastIndex,o=f.keywordPatternRe.exec(E)}g+=E.substring(s),O.addText(g)}function y(){null!=f.subLanguage?function Z(){if(""===E)return;let s=null;if("string"==typeof f.subLanguage){if(!t[f.subLanguage])return void O.addText(E);s=W(f.subLanguage,E,!0,De[f.subLanguage]),De[f.subLanguage]=s._top}else s=ie(E,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(V+=s.relevance),O.__addSublanguage(s._emitter,s.language)}():B(),E=""}function A(s,o){""!==s&&(O.startScope(o),O.addText(s),O.endScope())}function ke(s,o){let g=1;const p=o.length-1;for(;g<=p;){if(!s._emit[g]){g++;continue}const R=k.classNameAliases[s[g]]||s[g],T=o[g];R?A(T,R):(E=T,B(),E=""),g++}}function Te(s,o){return s.scope&&"string"==typeof s.scope&&O.openNode(k.classNameAliases[s.scope]||s.scope),s.beginScope&&(s.beginScope._wrap?(A(E,k.classNameAliases[s.beginScope._wrap]||s.beginScope._wrap),E=""):s.beginScope._multi&&(ke(s.beginScope,o),E="")),f=Object.create(s,{parent:{value:f}}),f}function Ie(s,o,g){let p=function $e(e,t){const i=e&&e.exec(t);return i&&0===i.index}(s.endRe,g);if(p){if(s["on:end"]){const R=new v(s);s["on:end"](o,R),R.isMatchIgnored&&(p=!1)}if(p){for(;s.endsParent&&s.parent;)s=s.parent;return s}}if(s.endsWithParent)return Ie(s.parent,o,g)}function Pt(s){return 0===f.matcher.regexIndex?(E+=s[0],1):(oe=!0,0)}function jt(s){const o=s[0],g=l.substring(s.index),p=Ie(f,s,g);if(!p)return Re;const R=f;f.endScope&&f.endScope._wrap?(y(),A(o,f.endScope._wrap)):f.endScope&&f.endScope._multi?(y(),ke(f.endScope,s)):R.skip?E+=o:(R.returnEnd||R.excludeEnd||(E+=o),y(),R.excludeEnd&&(E=o));do{f.scope&&O.closeNode(),!f.skip&&!f.subLanguage&&(V+=f.relevance),f=f.parent}while(f!==p.parent);return p.starts&&Te(p.starts,s),R.returnEnd?0:o.length}let J={};function Be(s,o){const g=o&&o[0];if(E+=s,null==g)return y(),0;if("begin"===J.type&&"end"===o.type&&J.index===o.index&&""===g){if(E+=l.slice(o.index,o.index+1),!b){const p=new Error(`0 width match regex (${n})`);throw p.languageName=n,p.badRule=J.rule,p}return 1}if(J=o,"begin"===o.type)return function Ht(s){const o=s[0],g=s.rule,p=new v(g),R=[g.__beforeBegin,g["on:begin"]];for(const T of R)if(T&&(T(s,p),p.isMatchIgnored))return Pt(o);return g.skip?E+=o:(g.excludeBegin&&(E+=o),y(),!g.returnBegin&&!g.excludeBegin&&(E=o)),Te(g,s),g.returnBegin?0:o.length}(o);if("illegal"===o.type&&!h){const p=new Error('Illegal lexeme "'+g+'" for mode "'+(f.scope||"<unnamed>")+'"');throw p.mode=f,p}if("end"===o.type){const p=jt(o);if(p!==Re)return p}if("illegal"===o.type&&""===g)return 1;if(ce>1e5&&ce>3*o.index)throw new Error("potential infinite loop, way more iterations than matches");return E+=g,g.length}const k=I(n);if(!k)throw C(_.replace("{}",n)),new Error('Unknown language: "'+n+'"');const $t=Mt(k);let re="",f=d||$t;const De={},O=new r.__emitter(r);!function Ut(){const s=[];for(let o=f;o!==k;o=o.parent)o.scope&&s.unshift(o.scope);s.forEach(o=>O.openNode(o))}();let E="",V=0,L=0,ce=0,oe=!1;try{if(k.__emitTokens)k.__emitTokens(l,O);else{for(f.matcher.considerAll();;){ce++,oe?oe=!1:f.matcher.considerAll(),f.matcher.lastIndex=L;const s=f.matcher.exec(l);if(!s)break;const g=Be(l.substring(L,s.index),s);L=s.index+g}Be(l.substring(L))}return O.finalize(),re=O.toHTML(),{language:n,value:re,relevance:V,illegal:!1,_emitter:O,_top:f}}catch(s){if(s.message&&s.message.includes("Illegal"))return{language:n,value:te(l),illegal:!0,relevance:0,_illegalBy:{message:s.message,index:L,context:l.slice(L-100,L+100),mode:s.mode,resultSoFar:re},_emitter:O};if(b)return{language:n,value:te(l),illegal:!1,relevance:0,errorRaised:s,_emitter:O,_top:f};throw s}}function ie(n,l){l=l||r.languages||Object.keys(t);const h=function ne(n){const l={value:te(n),illegal:!1,relevance:0,_top:c,_emitter:new r.__emitter(r)};return l._emitter.addText(n),l}(n),d=l.filter(I).filter(Ae).map(y=>W(y,n,!1));d.unshift(h);const w=d.sort((y,A)=>{if(y.relevance!==A.relevance)return A.relevance-y.relevance;if(y.language&&A.language){if(I(y.language).supersetOf===A.language)return 1;if(I(A.language).supersetOf===y.language)return-1}return 0}),[S,B]=w,Z=S;return Z.secondBest=B,Z}function se(n){let l=null;const h=function x(n){let l=n.className+" ";l+=n.parentNode?n.parentNode.className:"";const h=r.languageDetectRe.exec(l);if(h){const d=I(h[1]);return d||(Me(_.replace("{}",h[1])),Me("Falling back to no-highlight mode for this block.",n)),d?h[1]:"no-highlight"}return l.split(/\s+/).find(d=>a(d)||I(d))}(n);if(a(h))return;if(Y("before:highlightElement",{el:n,language:h}),n.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(n)),r.throwUnescapedHTML))throw new Ot("One of your code blocks includes unescaped HTML.",n.innerHTML);l=n;const d=l.textContent,w=h?M(d,{language:h,ignoreIllegals:!0}):ie(d);n.innerHTML=w.value,function yt(n,l,h){const d=l&&i[l]||h;n.classList.add("hljs"),n.classList.add(`language-${d}`)}(n,h,w.language),n.result={language:w.language,re:w.relevance,relevance:w.relevance},w.secondBest&&(n.secondBest={language:w.secondBest.language,relevance:w.secondBest.relevance}),Y("after:highlightElement",{el:n,result:w,text:d})}let Se=!1;function X(){"loading"!==document.readyState?document.querySelectorAll(r.cssSelector).forEach(se):Se=!0}function I(n){return n=(n||"").toLowerCase(),t[n]||t[i[n]]}function Ne(n,{languageName:l}){"string"==typeof n&&(n=[n]),n.forEach(h=>{i[h.toLowerCase()]=l})}function Ae(n){const l=I(n);return l&&!l.disableAutodetect}function Y(n,l){const h=n;u.forEach(function(d){d[h]&&d[h](l)})}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function kt(){Se&&X()},!1),Object.assign(e,{highlight:M,highlightAuto:ie,highlightAll:X,highlightElement:se,highlightBlock:function vt(n){return P("10.7.0","highlightBlock will be removed entirely in v12.0"),P("10.7.0","Please use highlightElement now."),se(n)},configure:function St(n){r=Oe(r,n)},initHighlighting:()=>{X(),P("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function At(){X(),P("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function Tt(n,l){let h=null;try{h=l(e)}catch(d){if(C("Language definition for '{}' could not be registered.".replace("{}",n)),!b)throw d;C(d),h=c}h.name||(h.name=n),t[n]=h,h.rawDefinition=l.bind(null,e),h.aliases&&Ne(h.aliases,{languageName:n})},unregisterLanguage:function It(n){delete t[n];for(const l of Object.keys(i))i[l]===n&&delete i[l]},listLanguages:function Bt(){return Object.keys(t)},getLanguage:I,registerAliases:Ne,autoDetection:Ae,inherit:Oe,addPlugin:function Ct(n){(function Dt(n){n["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=l=>{n["before:highlightBlock"](Object.assign({block:l.el},l))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=l=>{n["after:highlightBlock"](Object.assign({block:l.el},l))})})(n),u.push(n)},removePlugin:function Lt(n){const l=u.indexOf(n);-1!==l&&u.splice(l,1)}}),e.debugMode=function(){b=!1},e.safeMode=function(){b=!0},e.versionString="11.8.0",e.regex={concat:D,lookahead:fe,either:q,optional:je,anyNumberOfTimes:He};for(const n in F)"object"==typeof F[n]&&j(F[n]);return Object.assign(e,F),e},H=ye({});H.newInstance=()=>ye({}),le.exports=H,H.HighlightJS=H,H.default=H},1240:(le,j,v)=>{"use strict";v.r(j),v.d(j,{HighlightJS:()=>U,default:()=>N});var U=v(9450);const N=U}}]);