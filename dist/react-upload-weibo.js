!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-file-upload"),require("next-weibo-to-pics"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom"),require("react-upload")):"function"==typeof define&&define.amd?define(["classnames","next-file-upload","next-weibo-to-pics","noop","object-assign","prop-types","react","react-dom","react-upload"],t):"object"==typeof exports?exports.ReactUploadWeibo=t(require("classnames"),require("next-file-upload"),require("next-weibo-to-pics"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom"),require("react-upload")):e.ReactUploadWeibo=t(e.classnames,e["next-file-upload"],e["next-weibo-to-pics"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"],e["react-upload"])}(this,function(e,t,o,n,r,a,i,u,c){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),a=n(r);t.default=a.default},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,p,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},f=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(8),d=n(l),b=o(9),y=(n(b),o(7)),h=n(y),x=o(2),g=(n(x),o(5)),v=n(g),m=o(6),_=(n(m),o(10)),j=n(_),q=o(3),O=n(q),w=o(4),k=n(w),C="/weibo_api/interface/pic_upload.php",P="https://ws2.sinaimg.cn",E=(p=c=function(e){function t(){var e,o,n,r;a(this,t);for(var u=arguments.length,c=Array(u),p=0;p<u;p++)c[p]=arguments[p];return o=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n._onChange=function(e){var t=n.props.onChange,o=e.target.value,r={};n.initialToken(),nx.forEach(o,function(e,t){r["pic"+(t+1)]=e}),(0,O.default)(C,r).then(function(e){var o=JSON.parse(e.split("\n")[2]),n=o.data;if(n.count>0){var r=(0,k.default)(n.pics),a=r.map(function(e){return e.type="g"===e.pid.charAt(21)?"gif":"jpg",e.url=P+"/large/"+e.pid+"."+e.type,e});t({target:{value:a}})}else console.info("[UPLOAD FAILED]:",e,o)})},r=o,i(n,r)}return u(t,e),f(t,[{key:"initialToken",value:function(){document.cookie=this.props.token}},{key:"render",value:function(){var e=this.props,t=(e.token,e.onChange,r(e,["token","onChange"]));return d.default.createElement(j.default,s({onChange:this._onChange},t))}}]),t}(l.Component),c.propTypes={className:h.default.string,onChange:h.default.func,token:h.default.string},c.defaultProps={onChange:v.default},p);t.default=E},function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t){e.exports=u},function(e,t){e.exports=c}])});
//# sourceMappingURL=react-upload-weibo.js.map