'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('staffListCtrl',['$scope','$state', '$http',function ($scope,$state,$http) {
  		
  		$http({
    		method:"get",
    		url:"http://47.88.16.225:407/users"
    	}).then(function(e){
    		$scope.data=e.data;
    	})	
    	$scope.btn=function (){
			$state.go("bossHomepage")
			
    	}
    	$scope.btn1=function (){
			$state.go("addStaff")
    	}
    	$scope.btn2=function (i){
			$state.go("personal")
			localStorage.setItem('staffId',i.id)
    	}
    	
  }]);
