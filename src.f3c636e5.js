parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"en75":[function(require,module,exports) {

},{}],"LLK9":[function(require,module,exports) {
"use strict";require("../css/common.css");var e=function(e){return new Promise(function(n,t){setTimeout(function(){n(e)},e)})},n=function(e){return console.log("Resolved after ".concat(e,"ms"))};e(2e3).then(n),e(1e3).then(n),e(1500).then(n);
},{"../css/common.css":"en75"}],"EEVQ":[function(require,module,exports) {
"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?e(Object(c),!0).forEach(function(e){r(t,e,c[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}require("../css/common.css");var n=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(e,r){var n=e.map(function(e){return e.name===r?t(t({},e),{},{active:!e.active}):e});return new Promise(function(e,t){e(n)})},o=function(e){return console.table(e)};c(n,"Mango").then(o),c(n,"Lux").then(o);
},{"../css/common.css":"en75"}],"LiEu":[function(require,module,exports) {
"use strict";require("../css/common.css");var n=function(n,t){return Math.floor(Math.random()*(t-n+1)+n)},t=function(t){var o=t.id,a=n(200,500),c=Math.random()>.3;return new Promise(function(n,t){setTimeout(function(){c&&n({id:o,delay:a}),t(o)},a)})},o=function(n){var t=n.id,o=n.delay;console.log("Transaction ".concat(t," processed in ").concat(o," ms"))},a=function(n){console.warn("Error processing transaction ".concat(n,". Please try again later."))};t({id:70,amount:150}).then(o).catch(a),t({id:71,amount:230}).then(o).catch(a),t({id:72,amount:75}).then(o).catch(a),t({id:73,amount:100}).then(o).catch(a);
},{"../css/common.css":"en75"}],"Focm":[function(require,module,exports) {
"use strict";require("./css/common.css"),require("./js/task-1"),require("./js/task-2"),require("./js/task-3");
},{"./css/common.css":"en75","./js/task-1":"LLK9","./js/task-2":"EEVQ","./js/task-3":"LiEu"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-promisification/src.f3c636e5.js.map