(()=>{var t={797:(t,e,o)=>{(function(t){"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype||function(t,e){"use strict";if(!("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)){var o=[];i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,o){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==o[e-1]}))},i.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},i.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(t,"resize",this._checkForIntersections,!0),r(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},i.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},i.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),o=e?this._getRootRect():{x:0,y:0,top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(i){var r=i.element,s=h(r),c=this._rootContainsTarget(r),a=i.entry,u=e&&c&&this._computeTargetAndRootIntersection(r,o),l=i.entry=new n({time:t.performance&&performance.now&&performance.now(),target:r,boundingClientRect:s,rootBounds:o,intersectionRect:u});a?e&&c?this._hasCrossedThreshold(a,l)&&this._queuedEntries.push(l):a&&a.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},i.prototype._computeTargetAndRootIntersection=function(o,n){if("none"!=t.getComputedStyle(o).display){for(var i,r,s,c,u,l,d,p,f=h(o),g=a(o),v=!1;!v;){var m=null,b=1==g.nodeType?t.getComputedStyle(g):{};if("none"==b.display)return;if(g==this.root||g==e?(v=!0,m=n):g!=e.body&&g!=e.documentElement&&"visible"!=b.overflow&&(m=h(g)),m&&(i=m,r=f,void 0,void 0,void 0,void 0,void 0,void 0,s=Math.max(i.top,r.top),c=Math.min(i.bottom,r.bottom),u=Math.max(i.left,r.left),p=c-s,!(f=(d=(l=Math.min(i.right,r.right))-u)>=0&&p>=0&&{x:u,y:s,top:s,bottom:c,left:u,right:l,width:d,height:p})))break;g=a(g)}return f}},i.prototype._getRootRect=function(){var t;if(this.root)t=h(this.root);else{var o=e.documentElement,n=e.body;t={x:0,y:0,top:0,left:0,right:o.clientWidth||n.clientWidth,width:o.clientWidth||n.clientWidth,bottom:o.clientHeight||n.clientHeight,height:o.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,o){return"px"==e.unit?e.value:e.value*(o%2?t.width:t.height)/100})),o={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o},i.prototype._hasCrossedThreshold=function(t,e){var o=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(o!==n)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==o||r==n||r<o!=r<n)return!0}},i.prototype._rootIsInDom=function(){return!this.root||c(e,this.root)},i.prototype._rootContainsTarget=function(t){return c(this.root||e,t)},i.prototype._registerInstance=function(){o.indexOf(this)<0&&o.push(this)},i.prototype._unregisterInstance=function(){var t=o.indexOf(this);-1!=t&&o.splice(t,1)},t.IntersectionObserver=i,t.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{x:0,y:0,top:0,bottom:0,left:0,right:0,width:0,height:0};try{this.isIntersecting=!!t.intersectionRect}catch(t){}var e=this.boundingClientRect,o=e.width*e.height,n=this.intersectionRect,i=n.width*n.height;this.intersectionRatio=o?Number((i/o).toFixed(4)):this.isIntersecting?1:0}function i(t,e){var o,n,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(o=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout((function(){o(),i=null}),n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function r(t,e,o,n){"function"==typeof t.addEventListener?t.addEventListener(e,o,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,o)}function s(t,e,o,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,o,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,o)}function h(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height&&e.x&&e.y||(e={x:e.left,y:e.top,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{x:0,y:0,top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var o=e;o;){if(o==t)return!0;o=a(o)}return!1}function a(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}(window,document)}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof o.g&&o.g||{})}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(797);const t=new IntersectionObserver((t=>{!t||t.length<1||t.forEach((t=>{t.intersectionRatio>.6&&t.target&&!t.target.hasAttribute("milestone-visible")?t.target.setAttribute("milestone-visible","true"):t.target.removeAttribute("milestone-visible")}))}),{threshold:.6});function e(){const e=document.querySelectorAll("[milestone-observer]");!e||e.length<1||e.forEach((e=>{t.observe(e)}))}e(),requestAnimationFrame(e),window.addEventListener("load",e),window.addEventListener("load",(()=>{document.documentElement.setAttribute("loaded","")}))})()})();
//# sourceMappingURL=index.d16bad077acab06a1f3e.2021.js.map