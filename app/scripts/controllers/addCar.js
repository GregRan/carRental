'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */

angular.module('appApp')
  .controller('addCtrl',['$scope','$http','$state', function ($scope,$http,$state) {
  		if(sessionStorage.user&&sessionStorage.level==1){
  			$scope.obj = {};
  			$scope.ddd=true;
  			$scope.dismiss=function(){
  				$scope.ddd=true;
  				console.log($scope.ddd)
  			}
	    	$scope.add = function(){
	    		$scope.jslength=0;
				for(var js2 in $scope.obj){
					$scope.jslength++;
				}
				console.log($scope.jslength)
				if($scope.jslength!=25){
					$scope.ddd=false;
				}else{
					$scope.ddd=true;
					$http({
		    			method:'post',
		    			url:urlId+"/car",
		    			data:$scope.obj
		    		}).then(function(e){
		    			console.log(e.data)
		    			$state.go('carList')
		    		})
				}
				console.log($scope.jslength)
	    	}
	    	$('.b')[0].addEventListener('change',function(){
	    		var file = this.files[0];
	    		var reader = new FileReader();
	    		reader.readAsDataURL(file);
	    		reader.onload = function(){
	    			$scope.obj.pic=this.result
	    			$('.a').html('<img src="'+this.result+'">')
	    		}
	    		$('.addCar_add').hide();
	    	},false);
	    	$scope.addCar_back = function(){
	    		$state.go('bossHomepage')
	    	}
  		}else{
  			$state.go("login");
  		}
  }]);

