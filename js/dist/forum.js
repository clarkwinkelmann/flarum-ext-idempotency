module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=flarum.core.compat["common/Model"]},function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["forum/components/DiscussionComposer"]},function(e,t){e.exports=flarum.core.compat["forum/components/ReplyComposer"]},function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.r(t);var o=r(1),i=r(2),a=r.n(i),u=r(3),c=r.n(u),s=r(0),p=r.n(s);function f(e){var t=function(e){var t={attributes:n({},e)};if(t.attributes.relationships){for(var r in t.relationships={},t.attributes.relationships)if(t.attributes.relationships.hasOwnProperty(r)){var o=t.attributes.relationships[r];t.relationships[r]={data:o instanceof Array?o.map(p.a.getIdentifier):p.a.getIdentifier(o)}}delete t.attributes.relationships}return JSON.stringify(t)}(e);this.idempotencyPreviousData!==t&&(this.idempotencyPreviousData=t,this.idempotencyKey=Math.random().toString(36).substr(2)),e.idempotencyKey=this.idempotencyKey}app.initializers.add("clarkwinkelmann-idempotency",(function(){Object(o.extend)(a.a.prototype,"data",f),Object(o.extend)(c.a.prototype,"data",f),Object(o.override)(p.a.prototype,"save",(function(e,t,r){if(void 0===r&&(r={}),!t.idempotencyKey)return e(t,r);var o=t.idempotencyKey,i=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,["idempotencyKey"]),a=n({},r);return a.headers||(a.headers={}),a.headers["Idempotency-Key"]=o,e(i,a)}))}),-100)}]);
//# sourceMappingURL=forum.js.map