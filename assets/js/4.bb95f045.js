(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(t,n,r){},14:function(t,n,r){var e=r(16),i=r(26),o=r(21),a=r(28),s=r(36),c=function(t,n,r){var l,u,f,p,v=t&c.F,h=t&c.G,d=t&c.S,g=t&c.P,_=t&c.B,m=h?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,x=h?i:i[n]||(i[n]={}),y=x.prototype||(x.prototype={});for(l in h&&(r=n),r)f=((u=!v&&m&&void 0!==m[l])?m:r)[l],p=_&&u?s(f,e):g&&"function"==typeof f?s(Function.call,f):f,m&&a(m,l,f,t&c.U),x[l]!=f&&o(x,l,p),g&&y[l]!=f&&(y[l]=f)};e.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},15:function(t,n,r){var e=r(32)("wks"),i=r(33),o=r(16).Symbol,a="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=e},16:function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},17:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},18:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},19:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},20:function(t,n,r){var e=r(17);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},21:function(t,n,r){var e=r(34),i=r(44);t.exports=r(22)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},22:function(t,n,r){t.exports=!r(18)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},23:function(t,n,r){var e=r(24),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},24:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},25:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},26:function(t,n){var r=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},27:function(t,n,r){var e=r(19);t.exports=function(t){return Object(e(t))}},28:function(t,n,r){var e=r(16),i=r(21),o=r(35),a=r(33)("src"),s=r(65),c=(""+s).split("toString");r(26).inspectSource=function(t){return s.call(t)},(t.exports=function(t,n,r,s){var l="function"==typeof r;l&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(l&&(o(r,a)||i(r,a,t[n]?""+t[n]:c.join(String(n)))),t===e?t[n]=r:s?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},29:function(t,n,r){"use strict";var e=r(18);t.exports=function(t,n){return!!t&&e((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},32:function(t,n,r){var e=r(26),i=r(16),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(51)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},329:function(t,n,r){"use strict";var e=r(124);r.n(e).a},33:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},34:function(t,n,r){var e=r(20),i=r(53),o=r(55),a=Object.defineProperty;n.f=r(22)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},340:function(t,n,r){"use strict";r.r(n);r(75),r(69),r(42);var e={en:"English",nl:"Nederlands",zh:"中文",vi:"Tiếng Việt",pl:"Polski",pt:"Português",ru:"Русский",jp:"日本語",fr:"Français",de:"Deutsch",el:"Ελληνικά",es:"Español",hi:"हिंदी",fa:"فارسی",ko:"한국어",ro:"Română",uk:"Українська",no:"Norwegian"},i={data:function(){return{}},props:{profile:Object,titleVisible:Boolean},computed:{workHtml:function(){var t=this.profile.work,n="";return t.orgUrl?(n+='<a href="'+t.orgUrl+'" target="_blank" rel="noopener noreferrer">',t.org?n+=t.org:this.minimizeLink(t.orgUrl),n+="</a>"):t.org&&(n+=t.org),t.role&&(n=n.length>0?t.role+" @ "+n:t.role),n},textDistance:function(){var t=this.profile.distanceInKm||0;return this.$root.useMiles?roundDistance(kmToMi(t))+" miles":roundDistance(t)+" km"},languageListHtml:function(){return this.profile.languages?this.profile.languages.map((function(t,n){return e[t]})).join(" "):""},hasSocialLinks:function(){return this.profile.github||this.profile.twitter||this.profile.codepen||this.profile.linkedin}},methods:{minimizeLink:function(t){return t.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"").replace(/^mailto:/,"")},githubUrl:function(t,n){return n&&n.url?n.url:n&&-1!==n.indexOf("/")?"https://github.com/"+n.replace(/\/\*$/,""):"https://github.com/"+t+"/"+(n||"")}}},o=(r(329),r(0)),a=Object(o.a)(i,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"fluer md:flex pt-8"},[r("div",{staticClass:"avatar rounded-full p-6"},[t.profile.imageUrl?r("img",{staticClass:"rounded-full",attrs:{src:t.profile.imageUrl,alt:t.profile.name,width:"80",height:"80"}}):t.profile.github?r("img",{staticClass:"rounded-full",attrs:{src:"https://github.com/"+t.profile.github+".png",alt:t.profile.name,width:"80",height:"80"}}):t.profile.twitter?r("img",{staticClass:"rounded-full",attrs:{src:"https://avatars.io/twitter/"+t.profile.twitter,alt:t.profile.name,width:"80",height:"80"}}):t._e()]),t._v(" "),r("div",{staticClass:"profile team-font pt-6 text-sm leading-loose"},[r("h3",{staticClass:"text-lg",attrs:{"data-official-title":t.profile.title}},[t._v("\n      "+t._s(t.profile.name)+"\n      "),t.profile.title&&t.titleVisible?r("sup",{domProps:{innerHTML:t._s(t.profile.title)}}):t._e()]),t._v(" "),r("dl",[t.profile.reposOfficial?[r("div",{staticClass:"container inline-flex"},[r("dt",{staticClass:"team-core-font"},[t._v("Core focus")]),t._v(" "),r("ul",t._l(t.profile.reposOfficial,(function(n){return r("li",{staticClass:"inline text-sm text-blue-500 pl-2"},[r("a",{attrs:{href:t.githubUrl("fluejs",n),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(n.name||n))])])})),0)])]:t._e(),t._v(" "),t.profile.github&&t.profile.reposPersonal?[r("dt",[t._v("Ecosystem")]),t._v(" "),r("dd",[r("ul",t._l(t.profile.reposPersonal,(function(n){return r("li",[r("a",{attrs:{href:t.githubUrl(t.profile.github,n),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(n.name||n))])])})),0)])]:t._e(),t._v(" "),t.profile.work?[t._m(0),t._v(" "),r("div",{staticClass:"container pb-1"},[r("img",{staticClass:"inline w-4 h-auto pt-1",attrs:{src:"https://image.flaticon.com/icons/png/512/86/86081.png"}}),t._v(" "),r("div",{staticClass:"inline pl-2",domProps:{innerHTML:t._s(t.workHtml)}})])]:t._e(),t._v(" "),t.profile.distanceInKm?r("span",{staticClass:"distance"},[t._m(1),t._v(" "),r("dd",[t._v("\n          About\n          "),t.profile.distanceInKm<=150?r("span",{staticClass:"user-match",attrs:{title:t.profile.name+" is close enough to commute to your location."}},[t._v(t._s(t.textDistance)+" away")]):[t._v(t._s(t.textDistance)+" away")],t._v("\n          in "+t._s(t.profile.city)+"\n        ")],2)]):t.profile.city?[t._m(2),t._v(" "),r("div",{staticClass:"container pb-0"},[r("img",{staticClass:"inline w-4 h-auto",attrs:{src:"https://image.flaticon.com/icons/png/512/67/67347.png"}}),t._v(" "),r("div",{staticClass:"inline pl-2"},[t._v("\n            "+t._s(t.profile.city)+"\n          ")])])]:t._e(),t._v(" "),t.profile.languages?[t._m(3),t._v(" "),r("div",{staticClass:"container inline-flex py-1"},[r("img",{staticClass:"w-4 h-auto pt-1 pb-2",attrs:{src:"https://image.flaticon.com/icons/png/512/115/115809.png"}}),t._v(" "),r("div",{staticClass:"pl-3",domProps:{innerHTML:t._s(t.languageListHtml)}})])]:t._e(),t._v(" "),t.profile.links?[t._m(4),t._v(" "),r("div",{staticClass:"container pb-2 inline-flex"},[r("img",{staticClass:"w-4 h-auto py-1 pb-4",attrs:{src:"https://image.flaticon.com/icons/png/512/126/126481.png"}}),t._v(" "),t._l(t.profile.links,(function(n){return r("div",{staticClass:"pl-3"},[r("a",{attrs:{href:n,target:"_blank"}},[t._v(t._s(t.minimizeLink(n)))])])}))],2)]:t._e(),t._v(" "),t.hasSocialLinks?r("footer",{staticClass:"social"},[r("div",{staticClass:"inline-flex"},[t.profile.github?r("a",{staticClass:"github flex-1",attrs:{href:t.githubUrl(t.profile.github)}},[r("img",{staticClass:"w-6 h-auto",attrs:{src:"https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"}}),t._v(" "),r("i",{staticClass:"fa fa-github"}),t._v(" "),r("span",{staticClass:"sr-only"},[t._v("Github")])]):t._e(),t._v(" "),t.profile.twitter?r("a",{staticClass:"twitter flex-1 pl-2",attrs:{href:"https://twitter.com/"+t.profile.twitter}},[r("img",{staticClass:"w-6 h-auto",attrs:{src:"https://www.stickpng.com/assets/images/58e9196deb97430e819064f6.png"}}),t._v(" "),r("i",{staticClass:"fa fa-twitter"}),t._v(" "),r("span",{staticClass:"sr-only"},[t._v("Twitter")])]):t._e(),t._v(" "),t.profile.codepen?r("a",{staticClass:"codepen flex-1 pl-2",attrs:{href:"https://codepen.io/"+t.profile.codepen}},[r("img",{staticClass:"w-6 h-auto",attrs:{src:"https://cdn0.iconfinder.com/data/icons/social-media-2091/100/social-32-512.png"}}),t._v(" "),r("i",{staticClass:"fa fa-codepen"}),t._v(" "),r("span",{staticClass:"sr-only"},[t._v("CodePen")])]):t._e(),t._v(" "),t.profile.linkedin?r("a",{staticClass:"linkedin flex-1 pl-2",attrs:{href:"https://www.linkedin.com/in/"+t.profile.linkedin}},[r("img",{staticClass:"w-6 h-auto",attrs:{src:"https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/linkedin-512.png"}}),t._v(" "),r("i",{staticClass:"fa fa-linkedin"}),t._v(" "),r("span",{staticClass:"sr-only"},[t._v("LinkedIn")])]):t._e()])]):t._e()],2)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("dt",[n("i",{staticClass:"fa fa-briefcase"}),this._v(" "),n("span",{staticClass:"sr-only"},[this._v("Work")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("dt",[n("i",{staticClass:"fa fa-map-marker"}),this._v(" "),n("span",{staticClass:"sr-only"},[this._v("Distance")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("dt",[n("i",{staticClass:"fa fa-map-marker"}),this._v(" "),n("span",{staticClass:"sr-only"},[this._v("City")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("dt",[n("i",{staticClass:"fa fa-globe"}),this._v(" "),n("span",{staticClass:"sr-only"},[this._v("Languages")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("dt",[n("i",{staticClass:"fa fa-link"}),this._v(" "),n("span",{staticClass:"sr-only"},[this._v("Links")])])}],!1,null,"8648603c",null);n.default=a.exports},35:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},36:function(t,n,r){var e=r(56);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},37:function(t,n,r){var e=r(36),i=r(41),o=r(27),a=r(23),s=r(66);t.exports=function(t,n){var r=1==t,c=2==t,l=3==t,u=4==t,f=6==t,p=5==t||f,v=n||s;return function(n,s,h){for(var d,g,_=o(n),m=i(_),x=e(s,h,3),y=a(m.length),b=0,w=r?v(n,y):c?v(n,0):void 0;y>b;b++)if((p||b in m)&&(g=x(d=m[b],b,_),t))if(r)w[b]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return b;case 2:w.push(d)}else if(u)return!1;return f?-1:l||u?u:w}}},40:function(t,n,r){var e=r(41),i=r(19);t.exports=function(t){return e(i(t))}},41:function(t,n,r){var e=r(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},42:function(t,n,r){"use strict";var e=r(14),i=r(37)(1);e(e.P+e.F*!r(29)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},44:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},46:function(t,n,r){var e=r(40),i=r(23),o=r(47);t.exports=function(t){return function(n,r,a){var s,c=e(n),l=i(c.length),u=o(a,l);if(t&&r!=r){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===r)return t||u||0;return!t&&-1}}},47:function(t,n,r){var e=r(24),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},51:function(t,n){t.exports=!1},52:function(t,n,r){"use strict";var e,i,o=r(73),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,l=(e=/a/,i=/b*/g,a.call(e,"a"),a.call(i,"a"),0!==e.lastIndex||0!==i.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(c=function(t){var n,r,e,i,c=this;return u&&(r=new RegExp("^"+c.source+"$(?!\\s)",o.call(c))),l&&(n=c.lastIndex),e=a.call(c,t),l&&e&&(c.lastIndex=c.global?e.index+e[0].length:n),u&&e&&e.length>1&&s.call(e[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(e[i]=void 0)})),e}),t.exports=c},53:function(t,n,r){t.exports=!r(22)&&!r(18)((function(){return 7!=Object.defineProperty(r(54)("div"),"a",{get:function(){return 7}}).a}))},54:function(t,n,r){var e=r(17),i=r(16).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},55:function(t,n,r){var e=r(17);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},56:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},57:function(t,n,r){var e=r(25);t.exports=Array.isArray||function(t){return"Array"==e(t)}},62:function(t,n,r){"use strict";var e=r(80)(!0);t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},63:function(t,n,r){"use strict";var e=r(81),i=RegExp.prototype.exec;t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var o=r.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==e(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},64:function(t,n,r){"use strict";r(82);var e=r(28),i=r(21),o=r(18),a=r(19),s=r(15),c=r(52),l=s("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,n,r){var p=s(t),v=!o((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),h=v?!o((function(){var n=!1,r=/a/;return r.exec=function(){return n=!0,null},"split"===t&&(r.constructor={},r.constructor[l]=function(){return r}),r[p](""),!n})):void 0;if(!v||!h||"replace"===t&&!u||"split"===t&&!f){var d=/./[p],g=r(a,p,""[t],(function(t,n,r,e,i){return n.exec===c?v&&!i?{done:!0,value:d.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}})),_=g[0],m=g[1];e(String.prototype,t,_),i(RegExp.prototype,p,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}}},65:function(t,n,r){t.exports=r(32)("native-function-to-string",Function.toString)},66:function(t,n,r){var e=r(67);t.exports=function(t,n){return new(e(t))(n)}},67:function(t,n,r){var e=r(17),i=r(57),o=r(15)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},69:function(t,n,r){"use strict";var e=r(20),i=r(27),o=r(23),a=r(24),s=r(62),c=r(63),l=Math.max,u=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;r(64)("replace",2,(function(t,n,r,h){return[function(e,i){var o=t(this),a=null==e?void 0:e[n];return void 0!==a?a.call(e,o,i):r.call(String(o),e,i)},function(t,n){var i=h(r,t,this,n);if(i.done)return i.value;var f=e(t),p=String(this),v="function"==typeof n;v||(n=String(n));var g=f.global;if(g){var _=f.unicode;f.lastIndex=0}for(var m=[];;){var x=c(f,p);if(null===x)break;if(m.push(x),!g)break;""===String(x[0])&&(f.lastIndex=s(p,o(f.lastIndex),_))}for(var y,b="",w=0,C=0;C<m.length;C++){x=m[C];for(var k=String(x[0]),S=l(u(a(x.index),p.length),0),E=[],j=1;j<x.length;j++)E.push(void 0===(y=x[j])?y:String(y));var O=x.groups;if(v){var M=[k].concat(E,S,p);void 0!==O&&M.push(O);var P=String(n.apply(void 0,M))}else P=d(k,p,S,E,O,n);S>=w&&(b+=p.slice(w,S)+P,w=S+k.length)}return b+p.slice(w)}];function d(t,n,e,o,a,s){var c=e+t.length,l=o.length,u=v;return void 0!==a&&(a=i(a),u=p),r.call(s,u,(function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,e);case"'":return n.slice(c);case"<":s=a[i.slice(1,-1)];break;default:var u=+i;if(0===u)return r;if(u>l){var p=f(u/10);return 0===p?r:p<=l?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):r}s=o[u-1]}return void 0===s?"":s}))}}))},73:function(t,n,r){"use strict";var e=r(20);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},75:function(t,n,r){"use strict";var e=r(14),i=r(46)(!1),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(a||!r(29)(o)),"Array",{indexOf:function(t){return a?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},80:function(t,n,r){var e=r(24),i=r(19);t.exports=function(t){return function(n,r){var o,a,s=String(i(n)),c=e(r),l=s.length;return c<0||c>=l?t?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536}}},81:function(t,n,r){var e=r(25),i=r(15)("toStringTag"),o="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:o?e(n):"Object"==(a=e(n))&&"function"==typeof n.callee?"Arguments":a}},82:function(t,n,r){"use strict";var e=r(52);r(14)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})}}]);