'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('noticeDetailsCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
  	$http({
  		method:"get",
		url:"http://47.88.16.225:407/gonggao"
  	}).then(function(){
  		$scope.name=localStorage.noticeList_name;
  		$scope.time=localStorage.noticeList_time;
  	});
  	
  	$scope.fan=function(){
		$state.go('noticeList')
  	}
  }]);
