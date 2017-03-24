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
  		if(sessionStorage.user){
  			$http({
	    	method:'get',
	    	url:'http://47.88.16.225:407/car?{"id":"count"}'
	    }).then(function(e){
	    	sessionStorage.count=e.data.count;
	    })
    	$scope.play=function(num,step){
    		$http({
	    		method:'get',
	    		url:'http://47.88.16.225:407/car?{"$skip":'+num+',"$limit":'+step+'}',
	    	}).then(function(e){
	    		$scope.data = e.data
	    	})
    	}
    	$scope.play(0,3)
    	$scope.shuai=0;
    	$scope.ss=0;
    	$scope.aaa=sessionStorage.count
    	$scope.next=function(){
     		$scope.shuai+=3;
     		$scope.ss++;
     		document.querySelector(".prev").removeAttribute("disabled")
    		console.log(sessionStorage.count-($scope.ss*3))
    		if(sessionStorage.count-(($scope.ss-1)*3)<=3){
     			$scope.shuai=($scope.ss-1)*3;
    			$scope.ss=$scope.ss-1
     			document.querySelector(".next").setAttribute("disabled","disabled")
     		}
     		$scope.play($scope.shuai,3)
     	}
    	
    	$scope.prev=function(){
    		$scope.shuai-=3;
    		if($scope.ss>0){
    			$scope.ss--;
    		}
    		document.querySelector(".next").removeAttribute("disabled")
    		if($scope.shuai<0){
    			$scope.shuai=0;
    			document.querySelector(".prev").setAttribute("disabled","disabled")
    		}else{
    			$scope.play($scope.shuai,-3)
    		}
    		
    	}
    	$scope.details = function(car){
    		sessionStorage.setItem('id',car.id);
    		$state.go('carDetails');
    	}
    	$scope.back = function(){
    		if(sessionStorage.level==0){
    			$state.go('staffHomepage')
    		}else{
    			$state.go('bossHomepage')
    		}
    	}
  		}else{
  			$state.go("login");
  		}
    	
  }]);
