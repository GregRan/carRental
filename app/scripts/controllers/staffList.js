'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('staffListCtrl',['$scope','$state', '$http',function ($scope,$state,$http) {
  		if(sessionStorage.user){
  			$http({
    		method:"get",
    		url:"http://47.88.16.225:407/users"
    	}).then(function(e){
    		$scope.data=e.data;
    		console.log(e.data)
    	})	
    	if(sessionStorage.level=="0"){
				$scope.mmShow = false
			}else{
				$scope.mmShow = true
			}
    	
    	$scope.btn=function (){
    		if(sessionStorage.level==0){
    			$state.go("staffHomepage")
    		}else {
    			$state.go("bossHomepage")
    		}
    	}
    	$scope.btn1=function (){
			$state.go("addStaff")
    	}
    	$scope.btn2=function (i){
			$state.go("personal")
			sessionStorage.setItem('staffId',i.id)
			sessionStorage.setItem('click_gh',i.gonghao)
    	}
  		}else{
  			$state.go("login");
  		}
  }]);
