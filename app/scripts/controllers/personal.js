'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('personalCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
  	if(sessionStorage.user){
  		console.log(sessionStorage.level)
    	$http({
    		url:"http://47.88.16.225:407/users/"+sessionStorage.staffId,
    		method:"get"
    	}).then(function(e){
    		console.log(e)
    		$scope.aa = e.data;
    	})	
    	$scope.btn=function (){
			if(sessionStorage.level==1){
				$state.go("staffList")
			}else{
				$state.go("staffHomepage")
			}
   	 	}
  	}else{
  		$state.go("login");
  	}
  }]);
