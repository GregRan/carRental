'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('addCtrl', ["$scope","$http","$state"],function($scope,$http,$state){
  	
  });
angular.module('appApp')
  .controller('addCtrl',['$scope','$http','$state', function ($scope,$http,$state) {
  	$scope.obj = {};
    	$scope.add = function(){
    		$http({
    			method:'post',
    			url:'http://47.88.16.225:407/car',
    			data:$scope.obj
    		}).then(function(e){
    			$state.go('carList')
    		})
    	}
    	$('.b')[0].addEventListener('change',function(){
    		var file = this.files[0];
    		var reader = new FileReader();
    		reader.readAsDataURL(file);
    		reader.onload = function(){
    			$('.a').html('<img src="'+this.result+'">')
    		}
    		$('.addCar_add').hide();
    	},false);
    	$scope.addCar_back = function(){
    		$state.go('bossHomepage')
    	}
  }]);
