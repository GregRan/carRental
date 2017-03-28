'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('revisecarCtrl',["$scope","$state","$http",function($scope,$state,$http){
	$scope.reviseCar_back=function(){
		$state.go("carDetails")
	}
  			$scope.staffList_jiazai=true;
	$http({
  		url:urlId+"/car",
  		method:"post",
  		data:{id:sessionStorage.id}
  	}).then(function(e){
  		$scope.data=e.data;
  		console.log(e.data)
    		$scope.staffList_jiazai=false;
    		$scope.staffList_content=true;
  	})
  	$scope.baocun=function(){
  		$http({
	  		url:urlId+"/car/"+sessionStorage.id,
	  		method:"put",
	  		data:$scope.obj
	  	}).then(function(ev){
	  		$state.go("carDetails");
	  	})
  	}
 }]);