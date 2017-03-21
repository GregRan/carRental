'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('noticeDetailsCtrl',['$scope','$http',function ($scope,$http) {
  	$http({
  		method:"get",
		url:"http://47.88.16.225:407/gonggao"
  	}).then(function(){
  		$scope.name=localStorage.name;
  		$scope.time=localStorage.time
  	})
  }]);
