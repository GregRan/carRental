'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('listCtrl',['$scope','$http','$state', function ($scope,$http,$state) {
    	$http({
    		method:'get',
    		url:'http://47.88.16.225:407/car',
    	}).then(function(e){
    		console.log(e)
    		$scope.data = e.data
    		console.log($scope.data)
    	})
    	$scope.details = function(car){
    		console.log(car.id)
    		localStorage.setItem('id',car.id);
    		$state.go('carDetails');
    	}
  }]);