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
  	console.log(localStorage.staffId)
    	$http({
    		url:"http://47.88.16.225:407/users/"+localStorage.staffId,
    		method:"get"
    	}).then(function(e){
    		console.log(e)
    		$scope.aa = e.data;
    	})	
    	$scope.btn=function (){
			if(localStorage.level==1){
				$state.go("staffList")
			}else{
				$state.go("staffHomepage")
			}
			
    }
  }]);
