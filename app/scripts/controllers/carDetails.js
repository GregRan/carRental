'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('carDetailsCtrl',["$scope","$http","$state",function($scope,$http,$state){
  if(sessionStorage.user){
  		$scope.CD_back=function(){
  		$state.go("carList");
  	}
  	console.log(sessionStorage.id)
  	$http({
  		url:"http://47.88.16.225:407/car",
  		method:"post",
  		data:{id:sessionStorage.id}
  	}).then(function(e){
  		$scope.data=e.data;
  	})
  	$scope.del=function(){
  		$http({
	  		url:"http://47.88.16.225:407/car/"+sessionStorage.id,
	  		method:"delete"
	  	}).then(function(e){
	  		$state.go("carList");
//			console.log(e)
	  	})
  	}
  	$scope.revise=function(){
  		$state.go("revise-car");
  	}
  	$scope.a=true;
  	if(sessionStorage.level==0){
  		$scope.a=true;
  	}else{
  		$scope.a=false;
  	}
  	console.log($scope.a)
  }else{
  	$state.go("login");
  }
}]);
