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
  		$scope.staffList_jiazai=true;
  		$http({
  		method:"put",
		url:urlId+"/gonggao/"+sessionStorage.noticeList_id,
		data:{
			"read":1
		}
  	}).then(function(e){
		console.log(e)
    	$scope.staffList_jiazai=false;
    	$scope.staffList_content=true;
  		$scope.t=e.data;
  	});
  	$scope.fan=function(){
		$state.go('noticeList')
  	}
  	}else{
  		$state.go("login");
  	}
  }]);
