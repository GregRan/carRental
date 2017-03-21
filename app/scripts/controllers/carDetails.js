'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('carDetailsCtrl',["$scope","$http","$state",function($scope,$http,$state){
  	$scope.CD_back=function(){
  		$state.go("carList");
  	}
  	console.log(localStorage.id)
  	$http({
  		url:"http://47.88.16.225:407/car",
  		method:"post",
  		data:{id:localStorage.id}
  	}).then(function(e){
  		$scope.data=e.data;
  		console.log($scope.data)
  	})
  	$scope.del=function(){
  		$http({
	  		url:"http://47.88.16.225:407/car/"+localStorage.id,
	  		method:"delete"
	  	}).then(function(e){
	  		$state.go("carList");
//			console.log(e)
	  	})
  	}
  	$scope.a=true;
  	if(localStorage.level==0){
  		$scope.a=true;
  	}else{
  		$scope.a=false;
  	}
  	console.log($scope.a)
}]);
