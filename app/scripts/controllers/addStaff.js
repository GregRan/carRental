'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('addStaffCtrl',['$scope','$state','$http',function ($scope,$state,$http) {
    	$scope.btn=function(){
    		$state.go('staffList')
    	}
    	$scope.obj={};
    	$scope.btn1=function(){
    		$http({
    			method:"post",
    			url:"http://47.88.16.225:407/users",
    			data:$scope.obj
    		}).then(function(e){
    			$state.go('staffList')
    		})	
    	}
    	$('.bb')[0].addEventListener('change',function(){
    		var file = this.files[0];
    		var reader = new FileReader();
    		reader.readAsDataURL(file);
    		reader.onload = function(){
    			$scope.obj.touxiang=this.result
    			$('.addimg').html('<img src="'+this.result+'">')
    		}
    		$('.aa').hide();
    	},false);
  }]);
