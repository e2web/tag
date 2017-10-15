(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return webpackJsonp([2],{

/***/ 18:
/***/ (function(module, exports) {

'serviceWorker'in navigator&&document.addEventListener('DOMContentLoaded',function(){navigator.serviceWorker.register('/core.js').then(function(a){'sync'in a||console.log('ServiceWorker registration successful with scope: ',a.scope)}).catch(function(a){console.log('ServiceWorker registration failed: ',a)})});

/***/ })

},[18]);
});