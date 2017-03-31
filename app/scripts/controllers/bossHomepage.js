'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('bossHomepageCtrl',["$scope","$state",function($scope,$state){
	if(sessionStorage.user&&sessionStorage.level==1){
		$scope.b=false;
	$scope.show=function(){
		if($scope.b==true){
			$scope.b=false;
		}else{
			$scope.b=true;
		}
	}
  	$scope.BH_details=function(){
		$state.go("carList");
  	}
  	$scope.BH_staff=function(){
		$state.go("staffList");
  	}
  	$scope.BH_release=function(){
		$state.go("release");
  	}
  	$scope.BH_cancel=function(){
  		sessionStorage.clear()
		$state.go("login");
  	}
  	$scope.BH_addcar=function(){
		$state.go("addCar");
  	}
  	$scope.BH_releaseList=function(){
		$state.go("noticeList");
  	}
	}else{
		$state.go("login");
	}
 }]);
