(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const _ of o)if(_.type==="childList")for(const f of _.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const _={};return o.integrity&&(_.integrity=o.integrity),o.referrerPolicy&&(_.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?_.credentials="include":o.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function i(o){if(o.ep)return;o.ep=!0;const _=n(o);fetch(o.href,_)}})();var Y,h,Fe,Be,U,Se,Re,_e,B={},ce=[],it=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ae=Array.isArray;function P(t,e){for(var n in e)t[n]=e[n];return t}function Ie(t){var e=t.parentNode;e&&e.removeChild(t)}function ot(t,e,n){var i,o,_,f={};for(_ in e)_=="key"?i=e[_]:_=="ref"?o=e[_]:f[_]=e[_];if(arguments.length>2&&(f.children=arguments.length>3?Y.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)f[_]===void 0&&(f[_]=t.defaultProps[_]);return Z(t,f,i,o,null)}function Z(t,e,n,i,o){var _={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Fe,__i:-1,__u:0};return o==null&&h.vnode!=null&&h.vnode(_),_}function ee(t){return t.children}function V(t,e){this.props=t,this.context=e}function M(t,e){if(e==null)return t.__?M(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?M(t):null}function _t(t,e,n){var i,o=t.__v,_=o.__e,f=t.__P;if(f)return(i=P({},o)).__v=o.__v+1,h.vnode&&h.vnode(i),he(f,i,o,t.__n,f.ownerSVGElement!==void 0,32&o.__u?[_]:null,e,_??M(o),!!(32&o.__u),n),i.__v=o.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=_&&je(i),i}function je(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return je(t)}}function xe(t){(!t.__d&&(t.__d=!0)&&U.push(t)&&!K.__r++||Se!==h.debounceRendering)&&((Se=h.debounceRendering)||Re)(K)}function K(){var t,e,n,i=[],o=[];for(U.sort(_e);t=U.shift();)t.__d&&(n=U.length,e=_t(t,i,o)||e,n===0||U.length>n?(re(i,e,o),o.length=i.length=0,e=void 0,U.sort(_e)):e&&h.__c&&h.__c(e,ce));e&&re(i,e,o),K.__r=0}function qe(t,e,n,i,o,_,f,l,c,s,a){var r,$,u,y,x,m=i&&i.__k||ce,v=e.length;for(n.__d=c,rt(n,e,m),c=n.__d,r=0;r<v;r++)(u=n.__k[r])!=null&&typeof u!="boolean"&&typeof u!="function"&&($=u.__i===-1?B:m[u.__i]||B,u.__i=r,he(t,u,$,o,_,f,l,c,s,a),y=u.__e,u.ref&&$.ref!=u.ref&&($.ref&&ve($.ref,null,u),a.push(u.ref,u.__c||y,u)),x==null&&y!=null&&(x=y),65536&u.__u||$.__k===u.__k?c=We(u,c,t):typeof u.type=="function"&&u.__d!==void 0?c=u.__d:y&&(c=y.nextSibling),u.__d=void 0,u.__u&=-196609);n.__d=c,n.__e=x}function rt(t,e,n){var i,o,_,f,l,c=e.length,s=n.length,a=s,r=0;for(t.__k=[],i=0;i<c;i++)f=i+r,(o=t.__k[i]=(o=e[i])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?Z(null,o,null,null,null):ae(o)?Z(ee,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?Z(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=ft(o,n,f,a),o.__i=l,_=null,l!==-1&&(a--,(_=n[l])&&(_.__u|=131072)),_==null||_.__v===null?(l==-1&&r--,typeof o.type!="function"&&(o.__u|=65536)):l!==f&&(l===f+1?r++:l>f?a>c-f?r+=l-f:r--:l<f?l==f-1&&(r=l-f):r=0,l!==i+r&&(o.__u|=65536))):(_=n[f])&&_.key==null&&_.__e&&!(131072&_.__u)&&(_.__e==t.__d&&(t.__d=M(_)),fe(_,_,!1),n[f]=null,a--);if(a)for(i=0;i<s;i++)(_=n[i])!=null&&!(131072&_.__u)&&(_.__e==t.__d&&(t.__d=M(_)),fe(_,_))}function We(t,e,n){var i,o;if(typeof t.type=="function"){for(i=t.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=t,e=We(i[o],e,n));return e}t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ft(t,e,n,i){var o=t.key,_=t.type,f=n-1,l=n+1,c=e[n];if(c===null||c&&o==c.key&&_===c.type&&!(131072&c.__u))return n;if(i>(c!=null&&!(131072&c.__u)?1:0))for(;f>=0||l<e.length;){if(f>=0){if((c=e[f])&&!(131072&c.__u)&&o==c.key&&_===c.type)return f;f--}if(l<e.length){if((c=e[l])&&!(131072&c.__u)&&o==c.key&&_===c.type)return l;l++}}return-1}function Ee(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||it.test(e)?n:n+"px"}function W(t,e,n,i,o){var _;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||Ee(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||Ee(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")_=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?i?n.u=i.u:(n.u=Date.now(),t.addEventListener(e,_?He:Ce,_)):t.removeEventListener(e,_?He:Ce,_);else{if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function Ce(t){if(this.l){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(h.event?h.event(t):t)}}function He(t){if(this.l)return this.l[t.type+!0](h.event?h.event(t):t)}function he(t,e,n,i,o,_,f,l,c,s){var a,r,$,u,y,x,m,v,g,E,I,D,we,j,ne,S=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),_=[l=e.__e=n.__e]),(a=h.__b)&&a(e);e:if(typeof S=="function")try{if(v=e.props,g=(a=S.contextType)&&i[a.__c],E=a?g?g.props.value:a.__:i,n.__c?m=(r=e.__c=n.__c).__=r.__E:("prototype"in S&&S.prototype.render?e.__c=r=new S(v,E):(e.__c=r=new V(v,E),r.constructor=S,r.render=lt),g&&g.sub(r),r.props=v,r.state||(r.state={}),r.context=E,r.__n=i,$=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),S.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=P({},r.__s)),P(r.__s,S.getDerivedStateFromProps(v,r.__s))),u=r.props,y=r.state,r.__v=e,$)S.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(S.getDerivedStateFromProps==null&&v!==u&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,E),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,E)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(r.props=v,r.state=r.__s,r.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(q){q&&(q.__=e)}),I=0;I<r._sb.length;I++)r.__h.push(r._sb[I]);r._sb=[],r.__h.length&&f.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,E),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(u,y,x)})}if(r.context=E,r.props=v,r.__P=t,r.__e=!1,D=h.__r,we=0,"prototype"in S&&S.prototype.render){for(r.state=r.__s,r.__d=!1,D&&D(e),a=r.render(r.props,r.state,r.context),j=0;j<r._sb.length;j++)r.__h.push(r._sb[j]);r._sb=[]}else do r.__d=!1,D&&D(e),a=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++we<25);r.state=r.__s,r.getChildContext!=null&&(i=P(P({},i),r.getChildContext())),$||r.getSnapshotBeforeUpdate==null||(x=r.getSnapshotBeforeUpdate(u,y)),qe(t,ae(ne=a!=null&&a.type===ee&&a.key==null?a.props.children:a)?ne:[ne],e,n,i,o,_,f,l,c,s),r.base=e.__e,e.__u&=-161,r.__h.length&&f.push(r),m&&(r.__E=r.__=null)}catch(q){e.__v=null,c||_!=null?(e.__e=l,e.__u|=c?160:32,_[_.indexOf(l)]=null):(e.__e=n.__e,e.__k=n.__k),h.__e(q,e,n)}else _==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=st(n.__e,e,n,i,o,_,f,c,s);(a=h.diffed)&&a(e)}function re(t,e,n){for(var i=0;i<n.length;i++)ve(n[i],n[++i],n[++i]);h.__c&&h.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(_){_.call(o)})}catch(_){h.__e(_,o.__v)}})}function st(t,e,n,i,o,_,f,l,c){var s,a,r,$,u,y,x,m=n.props,v=e.props,g=e.type;if(g==="svg"&&(o=!0),_!=null){for(s=0;s<_.length;s++)if((u=_[s])&&"setAttribute"in u==!!g&&(g?u.localName===g:u.nodeType===3)){t=u,_[s]=null;break}}if(t==null){if(g===null)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,v.is&&v),_=null,l=!1}if(g===null)m===v||l&&t.data===v||(t.data=v);else{if(_=_&&Y.call(t.childNodes),m=n.props||B,!l&&_!=null)for(m={},s=0;s<t.attributes.length;s++)m[(u=t.attributes[s]).name]=u.value;for(s in m)u=m[s],s=="children"||(s=="dangerouslySetInnerHTML"?r=u:s==="key"||s in v||W(t,s,null,u,o));for(s in v)u=v[s],s=="children"?$=u:s=="dangerouslySetInnerHTML"?a=u:s=="value"?y=u:s=="checked"?x=u:s==="key"||l&&typeof u!="function"||m[s]===u||W(t,s,u,m[s],o);if(a)l||r&&(a.__html===r.__html||a.__html===t.innerHTML)||(t.innerHTML=a.__html),e.__k=[];else if(r&&(t.innerHTML=""),qe(t,ae($)?$:[$],e,n,i,o&&g!=="foreignObject",_,f,_?_[0]:n.__k&&M(n,0),l,c),_!=null)for(s=_.length;s--;)_[s]!=null&&Ie(_[s]);l||(s="value",y!==void 0&&(y!==t[s]||g==="progress"&&!y||g==="option"&&y!==m[s])&&W(t,s,y,m[s],!1),s="checked",x!==void 0&&x!==t[s]&&W(t,s,x,m[s],!1))}return t}function ve(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){h.__e(i,n)}}function fe(t,e,n){var i,o;if(h.unmount&&h.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||ve(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(_){h.__e(_,e)}i.base=i.__P=null,t.__c=void 0}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&fe(i[o],e,n||typeof t.type!="function");n||t.__e==null||Ie(t.__e),t.__=t.__e=t.__d=void 0}function lt(t,e,n){return this.constructor(t,n)}function ut(t,e,n){var i,o,_,f;h.__&&h.__(t,e),o=(i=typeof n=="function")?null:n&&n.__k||e.__k,_=[],f=[],he(e,t=(!i&&n||e).__k=ot(ee,null,[t]),o||B,B,e.ownerSVGElement!==void 0,!i&&n?[n]:o?null:e.firstChild?Y.call(e.childNodes):null,_,!i&&n?n:o?o.__e:e.firstChild,i,f),t.__d=void 0,re(_,t,f)}Y=ce.slice,h={__e:function(t,e,n,i){for(var o,_,f;e=e.__;)if((o=e.__c)&&!o.__)try{if((_=o.constructor)&&_.getDerivedStateFromError!=null&&(o.setState(_.getDerivedStateFromError(t)),f=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,i||{}),f=o.__d),f)return o.__E=o}catch(l){t=l}throw t}},Fe=0,Be=function(t){return t!=null&&t.constructor==null},V.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof t=="function"&&(t=t(P({},n),this.props)),t&&P(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),xe(this))},V.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),xe(this))},V.prototype.render=ee,U=[],Re=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_e=function(t,e){return t.__v.__b-e.__v.__b},K.__r=0;var se,w,ie,Pe,Le=0,Ze=[],G=[],p=h,Ae=p.__b,Ue=p.__r,Ne=p.diffed,Te=p.__c,Me=p.unmount,Oe=p.__;function ct(t,e){p.__h&&p.__h(w,t,Le||e),Le=0;var n=w.__H||(w.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:G}),n.__[t]}function Ge(t,e){var n=ct(se++,7);return vt(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function at(){for(var t;t=Ze.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(z),t.__H.__h.forEach(le),t.__H.__h=[]}catch(e){t.__H.__h=[],p.__e(e,t.__v)}}p.__b=function(t){w=null,Ae&&Ae(t)},p.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Oe&&Oe(t,e)},p.__r=function(t){Ue&&Ue(t),se=0;var e=(w=t.__c).__H;e&&(ie===w?(e.__h=[],w.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=G,n.__N=n.i=void 0})):(e.__h.forEach(z),e.__h.forEach(le),e.__h=[],se=0)),ie=w},p.diffed=function(t){Ne&&Ne(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ze.push(e)!==1&&Pe===p.requestAnimationFrame||((Pe=p.requestAnimationFrame)||ht)(at)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==G&&(n.__=n.__V),n.i=void 0,n.__V=G})),ie=w=null},p.__c=function(t,e){e.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(i){return!i.__||le(i)})}catch(i){e.some(function(o){o.__h&&(o.__h=[])}),e=[],p.__e(i,n.__v)}}),Te&&Te(t,e)},p.unmount=function(t){Me&&Me(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{z(i)}catch(o){e=o}}),n.__H=void 0,e&&p.__e(e,n.__v))};var De=typeof requestAnimationFrame=="function";function ht(t){var e,n=function(){clearTimeout(i),De&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(n,100);De&&(e=requestAnimationFrame(n))}function z(t){var e=w,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),w=e}function le(t){var e=w;t.__c=t.__(),w=e}function vt(t,e){return!t||t.length!==e.length||e.some(function(n,i){return n!==t[i]})}function te(){throw new Error("Cycle detected")}var dt=Symbol.for("preact-signals");function de(){if(T>1)T--;else{for(var t,e=!1;F!==void 0;){var n=F;for(F=void 0,ue++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Ke(n))try{n.c()}catch(o){e||(t=o,e=!0)}n=i}}if(ue=0,T--,e)throw t}}var d=void 0,F=void 0,T=0,ue=0,J=0;function ze(t){if(d!==void 0){var e=t.n;if(e===void 0||e.t!==d)return e={i:0,S:t,p:d.s,n:void 0,t:d,e:void 0,x:void 0,r:e},d.s!==void 0&&(d.s.n=e),d.s=e,t.n=e,32&d.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=d.s,e.n=void 0,d.s.n=e,d.s=e),e}}function b(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}b.prototype.brand=dt;b.prototype.h=function(){return!0};b.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};b.prototype.U=function(t){if(this.t!==void 0){var e=t.e,n=t.x;e!==void 0&&(e.x=n,t.e=void 0),n!==void 0&&(n.e=e,t.x=void 0),t===this.t&&(this.t=n)}};b.prototype.subscribe=function(t){var e=this;return ye(function(){var n=e.value,i=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=i}})};b.prototype.valueOf=function(){return this.value};b.prototype.toString=function(){return this.value+""};b.prototype.toJSON=function(){return this.value};b.prototype.peek=function(){return this.v};Object.defineProperty(b.prototype,"value",{get:function(){var t=ze(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(d instanceof A&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){ue>100&&te(),this.v=t,this.i++,J++,T++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{de()}}}});function N(t){return new b(t)}function Ke(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Je(t){for(var e=t.s;e!==void 0;e=e.n){var n=e.S.n;if(n!==void 0&&(e.r=n),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Xe(t){for(var e=t.s,n=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):n=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}t.s=n}function A(t){b.call(this,void 0),this.x=t,this.s=void 0,this.g=J-1,this.f=4}(A.prototype=new b).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===J))return!0;if(this.g=J,this.f|=1,this.i>0&&!Ke(this))return this.f&=-2,!0;var t=d;try{Je(this),d=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return d=t,Xe(this),this.f&=-2,!0};A.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}b.prototype.S.call(this,t)};A.prototype.U=function(t){if(this.t!==void 0&&(b.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};A.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};A.prototype.peek=function(){if(this.h()||te(),16&this.f)throw this.v;return this.v};Object.defineProperty(A.prototype,"value",{get:function(){1&this.f&&te();var t=ze(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function pt(t){return new A(t)}function Qe(t){var e=t.u;if(t.u=void 0,typeof e=="function"){T++;var n=d;d=void 0;try{e()}catch(i){throw t.f&=-2,t.f|=8,pe(t),i}finally{d=n,de()}}}function pe(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Qe(t)}function yt(t){if(d!==this)throw new Error("Out-of-order effect");Xe(this),d=t,this.f&=-2,8&this.f&&pe(this),de()}function R(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}R.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};R.prototype.S=function(){1&this.f&&te(),this.f|=1,this.f&=-9,Qe(this),Je(this),T++;var t=d;return d=this,yt.bind(this,t)};R.prototype.N=function(){2&this.f||(this.f|=2,this.o=F,F=this)};R.prototype.d=function(){this.f|=8,1&this.f||pe(this)};function ye(t){var e=new R(t);try{e.c()}catch(n){throw e.d(),n}return e.d.bind(e)}var oe;function O(t,e){h[t]=e.bind(null,h[t]||function(){})}function X(t){oe&&oe(),oe=t&&t.S()}function Ye(t){var e=this,n=t.data,i=gt(n);i.value=n;var o=Ge(function(){for(var _=e.__v;_=_.__;)if(_.__c){_.__c.__$f|=4;break}return e.__$u.c=function(){var f;!Be(o.peek())&&((f=e.base)==null?void 0:f.nodeType)===3?e.base.data=o.peek():(e.__$f|=1,e.setState({}))},pt(function(){var f=i.value.value;return f===0?0:f===!0?"":f||""})},[]);return o.value}Ye.displayName="_st";Object.defineProperties(b.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ye},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});O("__b",function(t,e){if(typeof e.type=="string"){var n,i=e.props;for(var o in i)if(o!=="children"){var _=i[o];_ instanceof b&&(n||(e.__np=n={}),n[o]=_,i[o]=_.peek())}}t(e)});O("__r",function(t,e){X();var n,i=e.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(o){var _;return ye(function(){_=this}),_.c=function(){i.__$f|=1,i.setState({})},_}())),X(n),t(e)});O("__e",function(t,e,n,i){X(),t(e,n,i)});O("diffed",function(t,e){X();var n;if(typeof e.type=="string"&&(n=e.__e)){var i=e.__np,o=e.props;if(i){var _=n.U;if(_)for(var f in _){var l=_[f];l!==void 0&&!(f in i)&&(l.d(),_[f]=void 0)}else n.U=_={};for(var c in i){var s=_[c],a=i[c];s===void 0?(s=mt(n,c,a,o),_[c]=s):s.o(a,o)}}}t(e)});function mt(t,e,n,i){var o=e in t&&t.ownerSVGElement===void 0,_=N(n);return{o:function(f,l){_.value=f,i=l},d:ye(function(){var f=_.value.value;i[e]!==f&&(i[e]=f,o?t[e]=f:f?t.setAttribute(e,f):t.removeAttribute(e))})}}O("unmount",function(t,e){if(typeof e.type=="string"){var n=e.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var o in i){var _=i[o];_&&_.d()}}}}else{var f=e.__c;if(f){var l=f.__$u;l&&(f.__$u=void 0,l.d())}}t(e)});O("__h",function(t,e,n,i){(i<3||i===9)&&(e.__$f|=2),t(e,n,i)});V.prototype.shouldComponentUpdate=function(t,e){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var i in e)return!0;for(var o in t)if(o!=="__source"&&t[o]!==this.props[o])return!0;for(var _ in this.props)if(!(_ in t))return!0;return!1};function gt(t){return Ge(function(){return N(t)},[])}var bt=0;function k(t,e,n,i,o,_){var f,l,c={};for(l in e)l=="ref"?f=e[l]:c[l]=e[l];var s={type:t,props:c,key:n,ref:f,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--bt,__i:-1,__u:0,__source:o,__self:_};if(typeof t=="function"&&(f=t.defaultProps))for(l in f)c[l]===void 0&&(c[l]=f[l]);return h.vnode&&h.vnode(s),s}const $t="_",et=k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:k("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"})}),tt=k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:k("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"})}),me=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö","_","👍️","👎️","😄","😢","❤️",tt,et],C=N(""),ge=N([]),Q=N(!1),L=N([]),H=N([]),be=t=>t.slice(0,t.length/2),$e=t=>t.slice(t.length/2),Ve=be(me),kt=$e(me),ke=()=>{ge.value=Ve,Q.value=!1,L.value=Ve,H.value=kt};ke();const nt=()=>{document.fullscreenElement||document.documentElement.requestFullscreen()},wt=()=>{if(nt(),!Q.value){const e=[...L.value],n=[...H.value];ge.value=n,L.value=n,H.value=e;return}const t=[...H.value];if(t.length===0){ke();return}else t.length===1?(L.value=t,H.value=[]):(L.value=be(t),H.value=$e(t))},St=()=>{nt(),Q.value||(Q.value=!0);const t=[...L.value];if(t.length===1){const e=t[0];e===$t?C.value+=" ":e===tt?C.value=C.value.slice(0,C.value.length-1):e===et?C.value="":C.value=C.value+t[0],ke()}else L.value=be(t),H.value=$e(t)},xt=()=>k("div",{class:"input",children:C.value}),Et=t=>L.value.includes(t)?"CURRENT":H.value.includes(t)?"NEXT":"PREVIOUS",Ct=({className:t})=>k("div",{class:`candidates ${t}`,children:ge.value.map(e=>k("div",{class:"candidates__symbol","data-state":Et(e),children:e}))}),Ht=()=>k("div",{class:"fixed inset-0 flex",children:[k("div",{class:"flex-grow",onClick:wt}),k("div",{class:"flex-grow",onClick:St})]});function Pt(){return k("div",{class:"flex flex-col gap-2 h-full",style:{"--alphabet-length":me.length},children:[k(xt,{}),k(Ct,{className:"flex-grow"}),k(Ht,{})]})}ut(k(Pt,{}),document.getElementById("app"));
