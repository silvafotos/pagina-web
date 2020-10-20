/*! For license information please see component---src-pages-index-js-f9c4e3169c68dc8206e8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+3Ox":function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r);a.a=function(){return n.a.createElement("header",{id:"header"},n.a.createElement("h1",null,n.a.createElement("a",{href:"/"},n.a.createElement("strong",null,"Fotografía")," de Samuel Silva")),n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#footer"},"Mi perfil")))))}},JNr6:function(e){e.exports=JSON.parse('[{"title":"Retratos","thumbnail":"thumbs/retratos.jpg"},{"title":"Eventos","thumbnail":"thumbs/eventos.jpg"},{"title":"Paisajes","thumbnail":"thumbs/paisajes.jpg"},{"title":"Mascotas","thumbnail":"thumbs/mascotas.jpg"},{"title":"Grupos","thumbnail":"thumbs/grupos.jpg"},{"title":"Turismo","thumbnail":"thumbs/turismo.jpg"},{"title":"Blanco y Negro","thumbnail":"thumbs/historica.jpg"},{"title":"Naturaleza","thumbnail":"thumbs/naturaleza.jpg"}]')},RXBc:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),l=function(){return n.a.createElement("footer",{id:"footer",className:"panel"},n.a.createElement("div",{className:"inner split"},n.a.createElement("div",null,n.a.createElement("section",null,n.a.createElement("h2",null,"Fotografía de Samuel Silva"),n.a.createElement("p",null,"Capturando los momentos que hacen tu historia!")),n.a.createElement("section",null,n.a.createElement("h2",null,"Sígueme en ..."),n.a.createElement("ul",{className:"icons"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/samuel_ph_1/",target:"_blank",className:"icon brands fa-instagram"},n.a.createElement("span",{className:"label"},"Instagram"))))),n.a.createElement("p",{className:"copyright"},"Diseño de : ",n.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"),".")),n.a.createElement("div",null,n.a.createElement("section",null,n.a.createElement("img",{className:"fotografo\t",src:"images/silva-intenso.png",alt:"Samuel Silva",title:"Samuel Silva"})))))},s=t("wx14"),c=t("zLVn"),o=t("TSYQ"),i=t.n(o),u=n.a.createContext({});u.Consumer,u.Provider;function m(e,a){var t=Object(r.useContext)(u);return e||t[a]||a}var f=["xl","lg","md","sm","xs"],d=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.as,o=void 0===l?"div":l,u=Object(c.a)(e,["bsPrefix","className","as"]),d=m(t,"col"),p=[],v=[];return f.forEach((function(e){var a,t,r,n=u[e];if(delete u[e],"object"==typeof n&&null!=n){var l=n.span;a=void 0===l||l,t=n.offset,r=n.order}else a=n;var s="xs"!==e?"-"+e:"";a&&p.push(!0===a?""+d+s:""+d+s+"-"+a),null!=r&&v.push("order"+s+"-"+r),null!=t&&v.push("offset"+s+"-"+t)})),p.length||p.push(d),n.a.createElement(o,Object(s.a)({},u,{ref:a,className:i.a.apply(void 0,[r].concat(p,v))}))}));d.displayName="Col";var p=d,v=/-(.)/g;var b=function(e){return e[0].toUpperCase()+(a=e,a.replace(v,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function h(e,a){var t=void 0===a?{}:a,r=t.displayName,l=void 0===r?b(e):r,o=t.Component,u=t.defaultProps,f=n.a.forwardRef((function(a,t){var r=a.className,l=a.bsPrefix,u=a.as,f=void 0===u?o||"div":u,d=Object(c.a)(a,["className","bsPrefix","as"]),p=m(l,e);return n.a.createElement(f,Object(s.a)({ref:t,className:i()(r,p)},d))}));return f.defaultProps=u,f.displayName=l,f}var E=function(e){return n.a.forwardRef((function(a,t){return n.a.createElement("div",Object(s.a)({},a,{ref:t,className:i()(a.className,e)}))}))},g=n.a.createContext(null);g.displayName="CardContext";var x=g,N=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.variant,o=e.as,u=void 0===o?"img":o,f=Object(c.a)(e,["bsPrefix","className","variant","as"]),d=m(t,"card-img");return n.a.createElement(u,Object(s.a)({ref:a,className:i()(l?d+"-"+l:d,r)},f))}));N.displayName="CardImg",N.defaultProps={variant:null};var j=N,y=E("h5"),O=E("h6"),w=h("card-body"),P=h("card-title",{Component:y}),C=h("card-subtitle",{Component:O}),S=h("card-link",{Component:"a"}),R=h("card-text",{Component:"p"}),T=h("card-header"),k=h("card-footer"),I=h("card-img-overlay"),B=n.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.bg,u=e.text,f=e.border,d=e.body,p=e.children,v=e.as,b=void 0===v?"div":v,h=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=m(t,"card"),g=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return n.a.createElement(x.Provider,{value:g},n.a.createElement(b,Object(s.a)({ref:a},h,{className:i()(l,E,o&&"bg-"+o,u&&"text-"+u,f&&"border-"+f)}),d?n.a.createElement(w,null,p):p))}));B.displayName="Card",B.defaultProps={body:!1},B.Img=j,B.Title=P,B.Subtitle=C,B.Body=w,B.Link=S,B.Text=R,B.Header=T,B.Footer=k,B.ImgOverlay=I;var G=B,J=function(e){var a=e.thumbnail,t=e.title;return n.a.createElement(p,{xs:"12",sm:"12",md:"6",xl:"3",className:"d-flex"},n.a.createElement(G,{className:"flex-fill thumbnail"},n.a.createElement("article",null,n.a.createElement(G.Body,{className:"p-0"},n.a.createElement(G.Text,null,n.a.createElement("img",{src:a,alt:t,title:t})),n.a.createElement("h2",null,t)))))},z=t("JNr6"),L=["xl","lg","md","sm","xs"],M=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.noGutters,o=e.as,u=void 0===o?"div":o,f=Object(c.a)(e,["bsPrefix","className","noGutters","as"]),d=m(t,"row"),p=d+"-cols",v=[];return L.forEach((function(e){var a,t=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&v.push(""+p+r+"-"+a)})),n.a.createElement(u,Object(s.a)({ref:a},f,{className:i.a.apply(void 0,[r,d,l&&"no-gutters"].concat(v))}))}));M.displayName="Row",M.defaultProps={noGutters:!1};var q=M,F=function(){return console.log("data is: ",z),n.a.createElement("main",{id:"main"},n.a.createElement(q,{noGutters:!0},z.map((function(e,a){return n.a.createElement(J,{key:"photo-"+a,thumbnail:e.thumbnail,title:e.title})}))))},H=t("+3Ox");a.default=function(){var e=Object(r.useState)("wrapper preload"),a=e[0],t=e[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){t("wrapper")}),100);return function(){return clearTimeout(e)}}),[]),n.a.createElement("div",{className:a},n.a.createElement(H.a,null),n.a.createElement(F,null),n.a.createElement(l,null))}},TSYQ:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===l)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},wx14:function(e,a,t){"use strict";function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return r}))},zLVn:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(a,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-index-js-f9c4e3169c68dc8206e8.js.map