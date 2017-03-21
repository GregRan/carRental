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
}]);
