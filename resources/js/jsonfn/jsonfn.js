/*
 * JSONfn v1.1.0
 * (c) 2013 - 2016 Vadim Kiryukhin; vkiryukhin @ gmail.com; http://www.eslinstructor.net/jsonfn/
 * License: MIT
 */
(function(a){a.stringify=function(a){return JSON.stringify(a,function(a,b){var d;return b instanceof Function||"function"==typeof b?(d=b.toString(),8>d.length||"function"!==d.substring(0,8)?"_NuFrRa_"+d:d):b instanceof RegExp?"_PxEgEr_"+b:b})};a.parse=function(a,f){var b=f?/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/:!1;return JSON.parse(a,function(a,c){var e;if("string"!=typeof c||8>c.length)return c;e=c.substring(0,8);return b&&c.match(b)?new Date(c):"function"===e?eval("("+c+
")"):"_PxEgEr_"===e||"_NuFrRa_"===e?eval(c.slice(8)):c})};a.clone=function(g,f){return a.parse(a.stringify(g),f)}})("undefined"===typeof exports?window.JSONfn={}:exports);