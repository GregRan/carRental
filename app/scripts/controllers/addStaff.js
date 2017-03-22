'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('addStaffCtrl',['$scope','$state','$http',function ($scope,$state,$http) {
    	$scope.btn=function(){
    		$state.go('staffList')
    	}
    	$scope.obj={};
    	$scope.btn1=function(){
    		$http({
    			method:"post",
    			url:"http://47.88.16.225:407/users",
    			data:$scope.obj
    		}).then(function(e){
    			console.log(e.data)
    			if(e.data.dianhua&&e.data.gonghao&&e.data.id&&e.data.jinjilianxiren&&e.data.level&&e.data.name&&e.data.sex&&e.data.username&&e.data.ruzhishijian){
    				$state.go('staffList')
    			}else {
    				console.log(1)
    			}
    		})	
    	}
  }]);
