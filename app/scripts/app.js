'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', ['ui.router']).config(['$stateProvider',function($stateProvider){
  		$stateProvider.state("wmf",{
  			url:"/wmf",
  			templateUrl:"views/wmf.html"
  		})
  }]);
