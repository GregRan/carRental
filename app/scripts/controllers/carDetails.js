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
  	console.log(localStorage.level)
  	$http({
  		url:"http://47.88.16.225:407/car",
  		method:"post",
  		data:{id:"86f55e47a2a379db"}
  	}).then(function(e){
  		console.log(e)
  	})
}]);
