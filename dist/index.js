!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.freactalLogger=e.freactalLogger||{})}(this,function(e){"use strict";function t(e,t){var n=t.collapsed;void 0!==n&&n?console.groupCollapsed("action "+e.action+" @ "+r(e.startedTime)):console.group("action "+e.action+" @ "+r(e.startedTime)),console.log("%c prev state","color: #9e9e9e; font-weight: bold",e.prevState),console.log("%c next state","color: #4caf50; font-weight: bold",e.nextState),console.groupEnd()}var n=function(e,t){return new Array(t+1).join(e)},o=function(e,t){return n("0",t-e.toString().length)+e},r=function(e){return o(e.getHours(),2)+":"+o(e.getMinutes(),2)+":"+o(e.getSeconds(),2)+"."+o(e.getMilliseconds(),3)},c=function(e,t){var n=Object.keys(e),o=Object.keys(t);return n.length!==o.length||o.some(function(n){return t[n]!==e[n]})},i=function(e){var t={},n=void 0;return function(o){return c(t,o)&&(n=e(o)),t=o,n}};e.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(function(n){return Object.assign({},n,{effects:Object.keys(n.effects).reduce(function(o,r){return o[r]=function(){var o;return(o=n.effects)[r].apply(o,arguments).then(function(o){var c={};return c.startedTime=new Date,c.prevState=n.state,c.action=r,c.nextState=o,t(c,e),o})},o},{})})})},Object.defineProperty(e,"__esModule",{value:!0})});
