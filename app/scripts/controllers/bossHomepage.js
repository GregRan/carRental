'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('bossHomepageCtrl',["$scope","$state",function($scope,$state){
		$scope.b=false;
	$scope.show=function(){
		if($scope.b==true){
			$scope.b=false;
		}else{
			$scope.b=true;
		}
		console.log($scope.b)
	}
  	$scope.BH_details=function(){
		$state.go("carList");//车辆信息
  	}
  	$scope.BH_staff=function(){
		$state.go("staffList");//员工列表
  	}
  	$scope.BH_release=function(){
		$state.go("release");//发布公告
  	}
  	$scope.BH_cancel=function(){
		$state.go("login");//退出登录
  	}
  	$scope.BH_addcar=function(){
		$state.go("addCar");//退出登录
  	}
  	$scope.BH_releaseList=function(){
		$state.go("noticeList");//退出登录
  	}
 }]);
