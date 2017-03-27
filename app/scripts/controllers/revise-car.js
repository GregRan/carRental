'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('revisecarCtrl',["$scope","$state","$http",function($scope,$state,$http){
	$http({
  		url:"http://47.88.16.225:407/car",
  		method:"post",
  		data:{id:sessionStorage.id}
  	}).then(function(e){
  		$scope.data=e.data;
  		console.log(e.data)
  	})
  	$scope.baocun=function(){
  		$http({
	  		url:"http://47.88.16.225:407/car/"+sessionStorage.id,
	  		method:"put",
	  		data:$scope.obj
	  	}).then(function(ev){
	  		$state.go("carDetails");
	  	})
  	}
 }]);