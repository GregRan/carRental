'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
document.documentElement.style.fontSize = innerWidth / 16 + 'px';
onresize = function() {
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
};
angular
  .module('appApp', ['ui.router']).config(['$stateProvider',function($stateProvider){
  		$stateProvider.state("login",{
  			url:"/login",
  			templateUrl:"views/login.html"
  		})
  }]);
