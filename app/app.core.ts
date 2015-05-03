/*
* Add a reference to tsd.d.ts, which will give us references to all files referenced therein. 
* This will give us intellisense for angular, jquery and any other definitions we install.
*/
/// <reference path="../typings/tsd.d.ts" />
(() : void => {
	'use strict';
	angular
		.module('core.vsCodeAngularTypeScriptApp', [
			'ngAnimate',
		    'ngCookies',
		    'ngResource',
		    'ngRoute',
		    'ngSanitize',
		    'ngTouch'
		]);
})();