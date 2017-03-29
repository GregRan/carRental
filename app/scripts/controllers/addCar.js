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
				if($scope.jslength!=26){
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
	    	$scope.text_align_left = function(){
	    		$('.add_cm').css('text-align','left');
	    	}
	    	$scope.text_align_right = function(){
	    		$('.add_cm').css('text-align','right');
	    	}
	    	$scope.left = function(){
	    		$('.add_pp').css('text-align','left');
	    	}
	    	$scope.right = function(){
	    		$('.add_pp').css('text-align','right');
	    	}
	    	$scope.left_one = function(){
	    		$('.add_jg').css('text-align','left');
	    	}
	    	$scope.right_one = function(){
	    		$('.add_jg').css('text-align','right');
	    	}
	    	$scope.left_two = function(){
	    		$('.add_cj').css('text-align','left');
	    	}
	    	$scope.right_two = function(){
	    		$('.add_cj').css('text-align','right');
	    	}
	    	$scope.left_three = function(){
	    		$('.add_ys').css('text-align','left');
	    	}
	    	$scope.right_three = function(){
	    		$('.add_ys').css('text-align','right');
	    	}
	    	$scope.left_fouth = function(){
	    		$('.add_lc').css('text-align','left');
	    	}
	    	$scope.right_fouth = function(){
	    		$('.add_lc').css('text-align','right');
	    	}
	    	$scope.left_five = function(){
	    		$('.add_pl').css('text-align','left');
	    	}
	    	$scope.right_five = function(){
	    		$('.add_pl').css('text-align','right');
	    	}
	    	$scope.left_six = function(){
	    		$('.add_cs').css('text-align','left');
	    	}
	    	$scope.right_six = function(){
	    		$('.add_cs').css('text-align','right');
	    	}
	    	$scope.left_seven = function(){
	    		$('.add_ckg').css('text-align','left');
	    	}
	    	$scope.right_seven = function(){
	    		$('.add_ckg').css('text-align','right');
	    	}
	    	$scope.left_eight = function(){
	    		$('.add_rj').css('text-align','left');
	    	}
	    	$scope.right_eight = function(){
	    		$('.add_rj').css('text-align','right');
	    	}
	    	$scope.left_nine = function(){
	    		$('.add_rl').css('text-align','left');
	    	}
	    	$scope.right_nine = function(){
	    		$('.add_rl').css('text-align','right');
	    	}
	    	$scope.left_ten = function(){
	    		$('.add_cl').css('text-align','left');
	    	}
	    	$scope.right_ten = function(){
	    		$('.add_cl').css('text-align','right');
	    	}
	    	$(".pickdate").dateDropper({
				animate: false,
				format: 'Y-m-d',
				maxYear: '2020'
		});
  		}else{
  			$state.go("login");
  		}
  }]);

