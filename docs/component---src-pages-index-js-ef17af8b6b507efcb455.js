/*! For license information please see component---src-pages-index-js-ef17af8b6b507efcb455.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+3Ox":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);t.a=function(){return a.a.createElement("header",{id:"header"},a.a.createElement("h1",null,a.a.createElement("a",{href:"/"},a.a.createElement("strong",null,"Fotografía")," de Samuel Silva")),a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"#footer"},"Mi perfil")))))}},"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},JNr6:function(e){e.exports=JSON.parse('[{"title":"Retratos","thumbnail":"thumbs/retratos.jpg"},{"title":"Eventos","thumbnail":"thumbs/eventos.jpg"},{"title":"Paisajes","thumbnail":"thumbs/paisajes.jpg"},{"title":"Mascotas","thumbnail":"thumbs/mascotas.jpg"},{"title":"Grupos","thumbnail":"thumbs/grupos.jpg"},{"title":"Turismo","thumbnail":"thumbs/turismo.jpg"},{"title":"Blanco y Negro","thumbnail":"thumbs/historica.jpg"},{"title":"Naturaleza","thumbnail":"thumbs/naturaleza.jpg"}]')},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=function(){return a.a.createElement("footer",{id:"footer",className:"panel"},a.a.createElement("div",{className:"inner split"},a.a.createElement("div",null,a.a.createElement("section",null,a.a.createElement("h2",null,"Fotografía de Samuel Silva"),a.a.createElement("p",null,"Capturando los momentos que hacen tu historia!")),a.a.createElement("section",null,a.a.createElement("h2",null,"Sígueme en ..."),a.a.createElement("ul",{className:"icons"},a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.instagram.com/samuel_ph_1/",target:"_blank",className:"icon brands fa-instagram"},a.a.createElement("span",{className:"label"},"Instagram"))))),a.a.createElement("p",{className:"copyright"},"Diseño de : ",a.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"),".")),a.a.createElement("div",null,a.a.createElement("section",null,a.a.createElement("img",{className:"fotografo\t",src:"images/silva-intenso.png",alt:"Samuel Silva",title:"Samuel Silva"})))))},c=r("wx14"),u=r("zLVn"),l=r("TSYQ"),s=r.n(l),f=a.a.createContext({});f.Consumer,f.Provider;function p(e,t){var r=Object(n.useContext)(f);return e||r[t]||t}var d=["xl","lg","md","sm","xs"],m=a.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,o=e.as,i=void 0===o?"div":o,l=Object(u.a)(e,["bsPrefix","className","as"]),f=p(r,"col"),m=[],h=[];return d.forEach((function(e){var t,r,n,a=l[e];if(delete l[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,r=a.offset,n=a.order}else t=a;var i="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+f+i:""+f+i+"-"+t),null!=n&&h.push("order"+i+"-"+n),null!=r&&h.push("offset"+i+"-"+r)})),m.length||m.push(f),a.a.createElement(i,Object(c.a)({},l,{ref:t,className:s.a.apply(void 0,[n].concat(m,h))}))}));m.displayName="Col";var h=m,y=/-(.)/g;var b=function(e){return e[0].toUpperCase()+(t=e,t.replace(y,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function v(e,t){var r=void 0===t?{}:t,n=r.displayName,o=void 0===n?b(e):n,i=r.Component,l=r.defaultProps,f=a.a.forwardRef((function(t,r){var n=t.className,o=t.bsPrefix,l=t.as,f=void 0===l?i||"div":l,d=Object(u.a)(t,["className","bsPrefix","as"]),m=p(o,e);return a.a.createElement(f,Object(c.a)({ref:r,className:s()(n,m)},d))}));return f.defaultProps=l,f.displayName=o,f}var g=function(e){return a.a.forwardRef((function(t,r){return a.a.createElement("div",Object(c.a)({},t,{ref:r,className:s()(t.className,e)}))}))},T=a.a.createContext(null);T.displayName="CardContext";var E=T,w=a.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,o=e.variant,i=e.as,l=void 0===i?"img":i,f=Object(u.a)(e,["bsPrefix","className","variant","as"]),d=p(r,"card-img");return a.a.createElement(l,Object(c.a)({ref:t,className:s()(o?d+"-"+o:d,n)},f))}));w.displayName="CardImg",w.defaultProps={variant:null};var O=w,C=g("h5"),j=g("h6"),S=v("card-body"),A=v("card-title",{Component:C}),x=v("card-subtitle",{Component:j}),N=v("card-link",{Component:"a"}),P=v("card-text",{Component:"p"}),k=v("card-header"),I=v("card-footer"),L=v("card-img-overlay"),M=a.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,i=e.bg,l=e.text,f=e.border,d=e.body,m=e.children,h=e.as,y=void 0===h?"div":h,b=Object(u.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=p(r,"card"),g=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return a.a.createElement(E.Provider,{value:g},a.a.createElement(y,Object(c.a)({ref:t},b,{className:s()(o,v,i&&"bg-"+i,l&&"text-"+l,f&&"border-"+f)}),d?a.a.createElement(S,null,m):m))}));M.displayName="Card",M.defaultProps={body:!1},M.Img=O,M.Title=A,M.Subtitle=x,M.Body=S,M.Link=N,M.Text=P,M.Header=k,M.Footer=I,M.ImgOverlay=L;var R=M,q=function(e){var t=e.thumbnail,r=e.title;return a.a.createElement(h,{xs:"12",sm:"12",md:"6",xl:"3",className:"d-flex"},a.a.createElement(R,{className:"flex-fill thumbnail"},a.a.createElement("article",null,a.a.createElement(R.Body,{className:"p-0"},a.a.createElement(R.Text,null,a.a.createElement("img",{src:t,alt:r,title:r})),a.a.createElement("h2",null,r)))))},_=r("JNr6"),B=["xl","lg","md","sm","xs"],F=a.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,o=e.noGutters,i=e.as,l=void 0===i?"div":i,f=Object(u.a)(e,["bsPrefix","className","noGutters","as"]),d=p(r,"row"),m=d+"-cols",h=[];return B.forEach((function(e){var t,r=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"==typeof r?r.cols:r)&&h.push(""+m+n+"-"+t)})),a.a.createElement(l,Object(c.a)({ref:t},f,{className:s.a.apply(void 0,[n,d,o&&"no-gutters"].concat(h))}))}));F.displayName="Row",F.defaultProps={noGutters:!1};var H=F,D=function(){return console.log("data is: ",_),a.a.createElement("main",{id:"main"},a.a.createElement(H,{noGutters:!0},_.map((function(e,t){return a.a.createElement(q,{key:"photo-"+t,thumbnail:e.thumbnail,title:e.title})}))))},Y=r("+3Ox");t.default=function(){var e=Object(n.useState)("wrapper preload"),t=e[0],r=e[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){r("wrapper")}),100);return function(){return clearTimeout(e)}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("title",null,"Fotografía Silva"),a.a.createElement("link",{rel:"icon",href:"favicon.png",type:"image/x-icon"})),a.a.createElement("div",{className:t},a.a.createElement(Y.a,null),a.a.createElement(D,null),a.a.createElement(i,null)))}},TSYQ:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},ZhWT:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(t[u],i[u]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(t[u]!==i[u])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],i[l[u]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));var n,a,o,i,c=r("17x9"),u=r.n(c),l=r("8+s/"),s=r.n(l),f=r("ZhWT"),p=r.n(f),d=r("q1tI"),m=r.n(d),h=r("YVoz"),y=r.n(h),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",O="href",C="http-equiv",j="innerHTML",S="itemprop",A="name",x="property",N="rel",P="src",k="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",R="encodeSpecialCharacters",q="onChangeClientState",_="titleTemplate",B=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),F=[T.NOSCRIPT,T.SCRIPT,T.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=$(e,T.TITLE),r=$(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,L);return t||n||void 0},J=function(e){return $(e,q)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||r===N&&"canonical"===e[r].toLowerCase()||u===N&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==j&&c!==w&&c!==S||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},n[c],a[c]);n[c]=u}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,n),ue(T.HTML,a),ce(f,p);var d={baseTag:le(T.BASE,r),linkTags:le(T.LINK,o),metaTags:le(T.META,i),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===j)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[m.a.createElement(T.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===j||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===j||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,n),bodyAttributes:pe(b,r,n),htmlAttributes:pe(v,a,n),link:pe(T.LINK,o,n),meta:pe(T.META,i,n),noscript:pe(T.NOSCRIPT,c,n),script:pe(T.SCRIPT,u,n),style:pe(T.STYLE,l,n),title:pe(T.TITLE,{title:f,titleAttributes:p},n)}},me=s()((function(e){return{baseTag:Q([O,k],e),bodyAttributes:W(b,e),defer:$(e,M),encode:$(e,R),htmlAttributes:W(v,e),linkTags:Z(T.LINK,[N,O],e),metaTags:Z(T.META,[A,E,C,x,S],e),noscriptTags:Z(T.NOSCRIPT,[j],e),onChangeClientState:J(e),scriptTags:Z(T.SCRIPT,[P,j],e),styleTags:Z(T.STYLE,[w],e),title:G(e),titleAttributes:W(g,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return D(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case T.TITLE:return U({},a,((t={})[n.type]=i,t.titleAttributes=U({},o),t));case T.BODY:return U({},a,{bodyAttributes:U({},o)});case T.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((r={})[n.type]=U({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(z(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=z(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r},zLVn:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-index-js-ef17af8b6b507efcb455.js.map