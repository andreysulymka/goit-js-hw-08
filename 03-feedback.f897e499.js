function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(t,e,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function S(t){return c=t,a=setTimeout(T,e),l?y(t):f}function j(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function T(){var t=p();if(j(t))return h(t);a=setTimeout(T,function(t){var n=e-(t-u);return s?m(n,i-(t-c)):n}(t))}function h(t){return a=void 0,v&&o?y(t):(o=r=void 0,f)}function w(){var t=p(),n=j(t);if(o=arguments,r=this,u=t,n){if(void 0===a)return S(u);if(s)return a=setTimeout(T,e),y(u)}return void 0===a&&(a=setTimeout(T,e)),f}return e=b(e)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},w.flush=function(){return void 0===a?f:h(p())},w}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(t,e,{leading:o,maxWait:e,trailing:r})};let y={};const S=document.querySelector(".feedback-form");document.querySelector("input"),document.querySelector("textarea");S.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("fedback-form-state")})),S.addEventListener("input",t(e)((function(t){y[t.target.name]=t.target.value,console.log(y);const e=JSON.stringify(y);localStorage.setItem("fedback-form-state",e)}),500)),function(){localStorage.getItem("fedback-form-state")&&(y=JSON.parse(localStorage.getItem("fedback-form-state")));for(let t in y)S.elements[t].value=y[t]}();
//# sourceMappingURL=03-feedback.f897e499.js.map
