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
			$scope.offon_1=true;
			$scope.offon_2=true;
  			$scope.obj = {};
	    	$scope.yes=function(){
	    		$scope.jslength=0;
				for(var js2 in $scope.obj){
					$scope.jslength++;
				}
				if($scope.jslength!=25){
					$scope.offon_1=false;
					$scope.offon_2=true;
				}else{
					$scope.offon_2=false;
					$scope.offon_1=true;
					$scope.addCar_add=function(){
						$http({
			    			method:'post',
			    			url:urlId+"/car",
			    			data:$scope.obj
			    		}).then(function(e){
			    			console.log(e.data)
			    			$state.go('carList')
			    		})
					}
				}
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

