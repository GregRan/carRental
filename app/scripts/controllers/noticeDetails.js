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
  	if(sessionStorage.user){
  		$http({
  		method:"put",
		url:"http://47.88.16.225:407/gonggao/"+sessionStorage.noticeList_id,
		data:{
			"read":1
		}
  	}).then(function(e){
		console.log(e)
  		$scope.t=e.data;
  	});
  	$scope.fan=function(){
		$state.go('noticeList')
  	}
  	}else{
  		$state.go("login");
  	}
  }]);
