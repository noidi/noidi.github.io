(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const _ of o)if(_.type==="childList")for(const s of _.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const _={};return o.integrity&&(_.integrity=o.integrity),o.referrerPolicy&&(_.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?_.credentials="include":o.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function i(o){if(o.ep)return;o.ep=!0;const _=n(o);fetch(o.href,_)}})();var ee,h,De,Fe,L,we,Ve,re,V={},ae=[],et=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,he=Array.isArray;function P(t,e){for(var n in e)t[n]=e[n];return t}function Re(t){var e=t.parentNode;e&&e.removeChild(t)}function tt(t,e,n){var i,o,_,s={};for(_ in e)_=="key"?i=e[_]:_=="ref"?o=e[_]:s[_]=e[_];if(arguments.length>2&&(s.children=arguments.length>3?ee.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)s[_]===void 0&&(s[_]=t.defaultProps[_]);return Z(t,s,i,o,null)}function Z(t,e,n,i,o){var _={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++De,__i:-1,__u:0};return o==null&&h.vnode!=null&&h.vnode(_),_}function te(t){return t.children}function D(t,e){this.props=t,this.context=e}function T(t,e){if(e==null)return t.__?T(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?T(t):null}function nt(t,e,n){var i,o=t.__v,_=o.__e,s=t.__P;if(s)return(i=P({},o)).__v=o.__v+1,h.vnode&&h.vnode(i),ve(s,i,o,t.__n,s.ownerSVGElement!==void 0,32&o.__u?[_]:null,e,_??T(o),!!(32&o.__u),n),i.__v=o.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=_&&Be(i),i}function Be(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Be(t)}}function Se(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!K.__r++||we!==h.debounceRendering)&&((we=h.debounceRendering)||Ve)(K)}function K(){var t,e,n,i=[],o=[];for(L.sort(re);t=L.shift();)t.__d&&(n=L.length,e=nt(t,i,o)||e,n===0||L.length>n?(se(i,e,o),o.length=i.length=0,e=void 0,L.sort(re)):e&&h.__c&&h.__c(e,ae));e&&se(i,e,o),K.__r=0}function qe(t,e,n,i,o,_,s,l,c,f,a){var r,k,u,m,x,g=i&&i.__k||ae,v=e.length;for(n.__d=c,it(n,e,g),c=n.__d,r=0;r<v;r++)(u=n.__k[r])!=null&&typeof u!="boolean"&&typeof u!="function"&&(k=u.__i===-1?V:g[u.__i]||V,u.__i=r,ve(t,u,k,o,_,s,l,c,f,a),m=u.__e,u.ref&&k.ref!=u.ref&&(k.ref&&de(k.ref,null,u),a.push(u.ref,u.__c||m,u)),x==null&&m!=null&&(x=m),65536&u.__u||k.__k===u.__k?c=Ie(u,c,t):typeof u.type=="function"&&u.__d!==void 0?c=u.__d:m&&(c=m.nextSibling),u.__d=void 0,u.__u&=-196609);n.__d=c,n.__e=x}function it(t,e,n){var i,o,_,s,l,c=e.length,f=n.length,a=f,r=0;for(t.__k=[],i=0;i<c;i++)s=i+r,(o=t.__k[i]=(o=e[i])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?Z(null,o,null,null,null):he(o)?Z(te,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?Z(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=ot(o,n,s,a),o.__i=l,_=null,l!==-1&&(a--,(_=n[l])&&(_.__u|=131072)),_==null||_.__v===null?(l==-1&&r--,typeof o.type!="function"&&(o.__u|=65536)):l!==s&&(l===s+1?r++:l>s?a>c-s?r+=l-s:r--:l<s?l==s-1&&(r=l-s):r=0,l!==i+r&&(o.__u|=65536))):(_=n[s])&&_.key==null&&_.__e&&!(131072&_.__u)&&(_.__e==t.__d&&(t.__d=T(_)),fe(_,_,!1),n[s]=null,a--);if(a)for(i=0;i<f;i++)(_=n[i])!=null&&!(131072&_.__u)&&(_.__e==t.__d&&(t.__d=T(_)),fe(_,_))}function Ie(t,e,n){var i,o;if(typeof t.type=="function"){for(i=t.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=t,e=Ie(i[o],e,n));return e}t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ot(t,e,n,i){var o=t.key,_=t.type,s=n-1,l=n+1,c=e[n];if(c===null||c&&o==c.key&&_===c.type&&!(131072&c.__u))return n;if(i>(c!=null&&!(131072&c.__u)?1:0))for(;s>=0||l<e.length;){if(s>=0){if((c=e[s])&&!(131072&c.__u)&&o==c.key&&_===c.type)return s;s--}if(l<e.length){if((c=e[l])&&!(131072&c.__u)&&o==c.key&&_===c.type)return l;l++}}return-1}function xe(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||et.test(e)?n:n+"px"}function W(t,e,n,i,o){var _;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||xe(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||xe(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")_=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?i?n.u=i.u:(n.u=Date.now(),t.addEventListener(e,_?Ce:Ee,_)):t.removeEventListener(e,_?Ce:Ee,_);else{if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function Ee(t){if(this.l){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(h.event?h.event(t):t)}}function Ce(t){if(this.l)return this.l[t.type+!0](h.event?h.event(t):t)}function ve(t,e,n,i,o,_,s,l,c,f){var a,r,k,u,m,x,g,v,b,E,q,O,ke,I,ie,S=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),_=[l=e.__e=n.__e]),(a=h.__b)&&a(e);e:if(typeof S=="function")try{if(v=e.props,b=(a=S.contextType)&&i[a.__c],E=a?b?b.props.value:a.__:i,n.__c?g=(r=e.__c=n.__c).__=r.__E:("prototype"in S&&S.prototype.render?e.__c=r=new S(v,E):(e.__c=r=new D(v,E),r.constructor=S,r.render=rt),b&&b.sub(r),r.props=v,r.state||(r.state={}),r.context=E,r.__n=i,k=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),S.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=P({},r.__s)),P(r.__s,S.getDerivedStateFromProps(v,r.__s))),u=r.props,m=r.state,r.__v=e,k)S.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(S.getDerivedStateFromProps==null&&v!==u&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,E),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,E)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(r.props=v,r.state=r.__s,r.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(j){j&&(j.__=e)}),q=0;q<r._sb.length;q++)r.__h.push(r._sb[q]);r._sb=[],r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,E),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(u,m,x)})}if(r.context=E,r.props=v,r.__P=t,r.__e=!1,O=h.__r,ke=0,"prototype"in S&&S.prototype.render){for(r.state=r.__s,r.__d=!1,O&&O(e),a=r.render(r.props,r.state,r.context),I=0;I<r._sb.length;I++)r.__h.push(r._sb[I]);r._sb=[]}else do r.__d=!1,O&&O(e),a=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++ke<25);r.state=r.__s,r.getChildContext!=null&&(i=P(P({},i),r.getChildContext())),k||r.getSnapshotBeforeUpdate==null||(x=r.getSnapshotBeforeUpdate(u,m)),qe(t,he(ie=a!=null&&a.type===te&&a.key==null?a.props.children:a)?ie:[ie],e,n,i,o,_,s,l,c,f),r.base=e.__e,e.__u&=-161,r.__h.length&&s.push(r),g&&(r.__E=r.__=null)}catch(j){e.__v=null,c||_!=null?(e.__e=l,e.__u|=c?160:32,_[_.indexOf(l)]=null):(e.__e=n.__e,e.__k=n.__k),h.__e(j,e,n)}else _==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=_t(n.__e,e,n,i,o,_,s,c,f);(a=h.diffed)&&a(e)}function se(t,e,n){for(var i=0;i<n.length;i++)de(n[i],n[++i],n[++i]);h.__c&&h.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(_){_.call(o)})}catch(_){h.__e(_,o.__v)}})}function _t(t,e,n,i,o,_,s,l,c){var f,a,r,k,u,m,x,g=n.props,v=e.props,b=e.type;if(b==="svg"&&(o=!0),_!=null){for(f=0;f<_.length;f++)if((u=_[f])&&"setAttribute"in u==!!b&&(b?u.localName===b:u.nodeType===3)){t=u,_[f]=null;break}}if(t==null){if(b===null)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,v.is&&v),_=null,l=!1}if(b===null)g===v||l&&t.data===v||(t.data=v);else{if(_=_&&ee.call(t.childNodes),g=n.props||V,!l&&_!=null)for(g={},f=0;f<t.attributes.length;f++)g[(u=t.attributes[f]).name]=u.value;for(f in g)u=g[f],f=="children"||(f=="dangerouslySetInnerHTML"?r=u:f==="key"||f in v||W(t,f,null,u,o));for(f in v)u=v[f],f=="children"?k=u:f=="dangerouslySetInnerHTML"?a=u:f=="value"?m=u:f=="checked"?x=u:f==="key"||l&&typeof u!="function"||g[f]===u||W(t,f,u,g[f],o);if(a)l||r&&(a.__html===r.__html||a.__html===t.innerHTML)||(t.innerHTML=a.__html),e.__k=[];else if(r&&(t.innerHTML=""),qe(t,he(k)?k:[k],e,n,i,o&&b!=="foreignObject",_,s,_?_[0]:n.__k&&T(n,0),l,c),_!=null)for(f=_.length;f--;)_[f]!=null&&Re(_[f]);l||(f="value",m!==void 0&&(m!==t[f]||b==="progress"&&!m||b==="option"&&m!==g[f])&&W(t,f,m,g[f],!1),f="checked",x!==void 0&&x!==t[f]&&W(t,f,x,g[f],!1))}return t}function de(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){h.__e(i,n)}}function fe(t,e,n){var i,o;if(h.unmount&&h.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||de(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(_){h.__e(_,e)}i.base=i.__P=null,t.__c=void 0}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&fe(i[o],e,n||typeof t.type!="function");n||t.__e==null||Re(t.__e),t.__=t.__e=t.__d=void 0}function rt(t,e,n){return this.constructor(t,n)}function st(t,e,n){var i,o,_,s;h.__&&h.__(t,e),o=(i=typeof n=="function")?null:n&&n.__k||e.__k,_=[],s=[],ve(e,t=(!i&&n||e).__k=tt(te,null,[t]),o||V,V,e.ownerSVGElement!==void 0,!i&&n?[n]:o?null:e.firstChild?ee.call(e.childNodes):null,_,!i&&n?n:o?o.__e:e.firstChild,i,s),t.__d=void 0,se(_,t,s)}ee=ae.slice,h={__e:function(t,e,n,i){for(var o,_,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((_=o.constructor)&&_.getDerivedStateFromError!=null&&(o.setState(_.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,i||{}),s=o.__d),s)return o.__E=o}catch(l){t=l}throw t}},De=0,Fe=function(t){return t!=null&&t.constructor==null},D.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof t=="function"&&(t=t(P({},n),this.props)),t&&P(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Se(this))},D.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Se(this))},D.prototype.render=te,L=[],Ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,re=function(t,e){return t.__v.__b-e.__v.__b},K.__r=0;var le,w,oe,Pe,He=0,je=[],G=[],p=h,Le=p.__b,Ue=p.__r,Ne=p.diffed,Ae=p.__c,Te=p.unmount,Me=p.__;function ft(t,e){p.__h&&p.__h(w,t,He||e),He=0;var n=w.__H||(w.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:G}),n.__[t]}function We(t,e){var n=ft(le++,7);return ct(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function lt(){for(var t;t=je.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(z),t.__H.__h.forEach(ue),t.__H.__h=[]}catch(e){t.__H.__h=[],p.__e(e,t.__v)}}p.__b=function(t){w=null,Le&&Le(t)},p.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Me&&Me(t,e)},p.__r=function(t){Ue&&Ue(t),le=0;var e=(w=t.__c).__H;e&&(oe===w?(e.__h=[],w.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=G,n.__N=n.i=void 0})):(e.__h.forEach(z),e.__h.forEach(ue),e.__h=[],le=0)),oe=w},p.diffed=function(t){Ne&&Ne(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(je.push(e)!==1&&Pe===p.requestAnimationFrame||((Pe=p.requestAnimationFrame)||ut)(lt)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==G&&(n.__=n.__V),n.i=void 0,n.__V=G})),oe=w=null},p.__c=function(t,e){e.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(i){return!i.__||ue(i)})}catch(i){e.some(function(o){o.__h&&(o.__h=[])}),e=[],p.__e(i,n.__v)}}),Ae&&Ae(t,e)},p.unmount=function(t){Te&&Te(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{z(i)}catch(o){e=o}}),n.__H=void 0,e&&p.__e(e,n.__v))};var Oe=typeof requestAnimationFrame=="function";function ut(t){var e,n=function(){clearTimeout(i),Oe&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(n,100);Oe&&(e=requestAnimationFrame(n))}function z(t){var e=w,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),w=e}function ue(t){var e=w;t.__c=t.__(),w=e}function ct(t,e){return!t||t.length!==e.length||e.some(function(n,i){return n!==t[i]})}function ne(){throw new Error("Cycle detected")}var at=Symbol.for("preact-signals");function pe(){if(N>1)N--;else{for(var t,e=!1;F!==void 0;){var n=F;for(F=void 0,ce++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Ge(n))try{n.c()}catch(o){e||(t=o,e=!0)}n=i}}if(ce=0,N--,e)throw t}}var d=void 0,F=void 0,N=0,ce=0,J=0;function Ze(t){if(d!==void 0){var e=t.n;if(e===void 0||e.t!==d)return e={i:0,S:t,p:d.s,n:void 0,t:d,e:void 0,x:void 0,r:e},d.s!==void 0&&(d.s.n=e),d.s=e,t.n=e,32&d.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=d.s,e.n=void 0,d.s.n=e,d.s=e),e}}function $(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}$.prototype.brand=at;$.prototype.h=function(){return!0};$.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};$.prototype.U=function(t){if(this.t!==void 0){var e=t.e,n=t.x;e!==void 0&&(e.x=n,t.e=void 0),n!==void 0&&(n.e=e,t.x=void 0),t===this.t&&(this.t=n)}};$.prototype.subscribe=function(t){var e=this;return me(function(){var n=e.value,i=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=i}})};$.prototype.valueOf=function(){return this.value};$.prototype.toString=function(){return this.value+""};$.prototype.toJSON=function(){return this.value};$.prototype.peek=function(){return this.v};Object.defineProperty($.prototype,"value",{get:function(){var t=Ze(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(d instanceof H&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){ce>100&&ne(),this.v=t,this.i++,J++,N++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{pe()}}}});function R(t){return new $(t)}function Ge(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function ze(t){for(var e=t.s;e!==void 0;e=e.n){var n=e.S.n;if(n!==void 0&&(e.r=n),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Ke(t){for(var e=t.s,n=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):n=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}t.s=n}function H(t){$.call(this,void 0),this.x=t,this.s=void 0,this.g=J-1,this.f=4}(H.prototype=new $).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===J))return!0;if(this.g=J,this.f|=1,this.i>0&&!Ge(this))return this.f&=-2,!0;var t=d;try{ze(this),d=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return d=t,Ke(this),this.f&=-2,!0};H.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}$.prototype.S.call(this,t)};H.prototype.U=function(t){if(this.t!==void 0&&($.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};H.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};H.prototype.peek=function(){if(this.h()||ne(),16&this.f)throw this.v;return this.v};Object.defineProperty(H.prototype,"value",{get:function(){1&this.f&&ne();var t=Ze(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function ht(t){return new H(t)}function Je(t){var e=t.u;if(t.u=void 0,typeof e=="function"){N++;var n=d;d=void 0;try{e()}catch(i){throw t.f&=-2,t.f|=8,ye(t),i}finally{d=n,pe()}}}function ye(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Je(t)}function vt(t){if(d!==this)throw new Error("Out-of-order effect");Ke(this),d=t,this.f&=-2,8&this.f&&ye(this),pe()}function B(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}B.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};B.prototype.S=function(){1&this.f&&ne(),this.f|=1,this.f&=-9,Je(this),ze(this),N++;var t=d;return d=this,vt.bind(this,t)};B.prototype.N=function(){2&this.f||(this.f|=2,this.o=F,F=this)};B.prototype.d=function(){this.f|=8,1&this.f||ye(this)};function me(t){var e=new B(t);try{e.c()}catch(n){throw e.d(),n}return e.d.bind(e)}var _e;function M(t,e){h[t]=e.bind(null,h[t]||function(){})}function X(t){_e&&_e(),_e=t&&t.S()}function Xe(t){var e=this,n=t.data,i=pt(n);i.value=n;var o=We(function(){for(var _=e.__v;_=_.__;)if(_.__c){_.__c.__$f|=4;break}return e.__$u.c=function(){var s;!Fe(o.peek())&&((s=e.base)==null?void 0:s.nodeType)===3?e.base.data=o.peek():(e.__$f|=1,e.setState({}))},ht(function(){var s=i.value.value;return s===0?0:s===!0?"":s||""})},[]);return o.value}Xe.displayName="_st";Object.defineProperties($.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Xe},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});M("__b",function(t,e){if(typeof e.type=="string"){var n,i=e.props;for(var o in i)if(o!=="children"){var _=i[o];_ instanceof $&&(n||(e.__np=n={}),n[o]=_,i[o]=_.peek())}}t(e)});M("__r",function(t,e){X();var n,i=e.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(o){var _;return me(function(){_=this}),_.c=function(){i.__$f|=1,i.setState({})},_}())),X(n),t(e)});M("__e",function(t,e,n,i){X(),t(e,n,i)});M("diffed",function(t,e){X();var n;if(typeof e.type=="string"&&(n=e.__e)){var i=e.__np,o=e.props;if(i){var _=n.U;if(_)for(var s in _){var l=_[s];l!==void 0&&!(s in i)&&(l.d(),_[s]=void 0)}else n.U=_={};for(var c in i){var f=_[c],a=i[c];f===void 0?(f=dt(n,c,a,o),_[c]=f):f.o(a,o)}}}t(e)});function dt(t,e,n,i){var o=e in t&&t.ownerSVGElement===void 0,_=R(n);return{o:function(s,l){_.value=s,i=l},d:me(function(){var s=_.value.value;i[e]!==s&&(i[e]=s,o?t[e]=s:s?t.setAttribute(e,s):t.removeAttribute(e))})}}M("unmount",function(t,e){if(typeof e.type=="string"){var n=e.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var o in i){var _=i[o];_&&_.d()}}}}else{var s=e.__c;if(s){var l=s.__$u;l&&(s.__$u=void 0,l.d())}}t(e)});M("__h",function(t,e,n,i){(i<3||i===9)&&(e.__$f|=2),t(e,n,i)});D.prototype.shouldComponentUpdate=function(t,e){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var i in e)return!0;for(var o in t)if(o!=="__source"&&t[o]!==this.props[o])return!0;for(var _ in this.props)if(!(_ in t))return!0;return!1};function pt(t){return We(function(){return R(t)},[])}var yt=0;function y(t,e,n,i,o,_){var s,l,c={};for(l in e)l=="ref"?s=e[l]:c[l]=e[l];var f={type:t,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--yt,__i:-1,__u:0,__source:o,__self:_};if(typeof t=="function"&&(s=t.defaultProps))for(l in s)c[l]===void 0&&(c[l]=s[l]);return h.vnode&&h.vnode(f),f}const mt="_",Qe=y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"})}),Ye=y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"})}),Q=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö","_","👍️","👎️","😄","😢","❤️",Ye,Qe],C=R(""),U=R([]),A=R([]),ge=t=>t.slice(0,t.length/2),be=t=>t.slice(t.length/2),$e=()=>{U.value=ge(Q),A.value=be(Q)};$e();let Y=!1;const gt=()=>{if(!Y){document.documentElement.requestFullscreen(),Y=!0;return}const t=[...A.value];if(t.length===0){$e();return}else t.length===1?(U.value=t,A.value=[]):(U.value=ge(t),A.value=be(t))},bt=()=>{if(!Y){document.documentElement.requestFullscreen(),Y=!0;return}const t=[...U.value];if(t.length===1){const e=t[0];e===mt?C.value+=" ":e===Ye?C.value=C.value.slice(0,C.value.length-1):e===Qe?C.value="":C.value=C.value+t[0],$e()}else U.value=ge(t),A.value=be(t)},$t=()=>y("div",{class:"input",children:C.value}),kt=()=>y("div",{class:"progress-row",children:Q.map(t=>{let e="PREVIOUS";return U.value.includes(t)?e="CURRENT":A.value.includes(t)&&(e="NEXT"),y("div",{class:"progress-row__symbol","data-state":e,children:t})})}),wt=({className:t})=>y("div",{class:`candidates ${t}`,children:U.value.map(e=>y("div",{class:"candidates__symbol",children:e}))}),St=()=>y("div",{class:"fixed inset-0 flex",children:[y("div",{class:"flex-grow",onClick:gt}),y("div",{class:"flex-grow",onClick:bt})]});function xt(){return y("div",{class:"flex flex-col gap-2 h-full",style:{"--alphabet-length":Q.length},children:[y($t,{}),y(wt,{className:"flex-grow"}),y(kt,{}),y(St,{})]})}st(y(xt,{}),document.getElementById("app"));
