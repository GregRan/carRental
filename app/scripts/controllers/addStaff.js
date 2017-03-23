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
    	if(sessionStorage.user&&sessionStorage.level==1){
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
    			console.log(e.data)
    			if(e.data.dianhua&&e.data.gonghao&&e.data.id&&e.data.jinjilianxiren&&e.data.level&&e.data.name&&e.data.sex&&e.data.username&&e.data.ruzhishijian){
    				$state.go('staffList')
    			}else {
    				console.log(1)
    			}
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
    	}else{
    		$state.go("login");
    	}
  }]);
