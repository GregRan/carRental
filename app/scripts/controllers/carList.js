'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('listCtrl',['$scope','$http','$state','$filter', function ($scope,$http,$state,$filter) {
    	$http({
    		method:'get',
    		url:'http://47.88.16.225:407/car',
    	}).then(function(e){
    		console.log(e)
    		$scope.data = e.data
    		console.log($scope.data)
    		$scope.shengjiang = function(){
    			$scope.price=[];
    			for(var i = 0;i<$scope.data.length;i++){
    				$scope.price.push($scope.data[i].jiage) 
    			}
    			console.log($scope.price)
    			$scope.price.sort(function(a,b){
    				return -(a - b);
    			})
    		}
    	})
    	$scope.details = function(car){
//  		console.log(car.id)
    		localStorage.setItem('id',car.id);
    		$state.go('carDetails');
    	}
    	$scope.back = function(){
    		if(localStorage.level==0){
    			$state.go('staffHomepage')
    		}else{
    			$state.go('bossHomepage')
    		}
    	}
    	
  }]);
