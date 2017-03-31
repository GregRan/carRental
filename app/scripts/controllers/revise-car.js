'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('revisecarCtrl', ["$scope", "$state", "$http", function($scope, $state, $http) {
	if(sessionStorage.user){
		$scope.reviseCar_back = function() {
			$state.go("carDetails")
		}
		$scope.staffList_jiazai = true;
		$http({
			url: urlId + "/car",
			method: "post",
			data: {
				id: sessionStorage.id
			}
		}).then(function(e) {
			$scope.obj=e.data
			$scope.data = e.data;
			$scope.staffList_jiazai = false;
			$scope.staffList_content = true;
		})
		$scope.baocun = function() {
			$http({
				url: urlId + "/car/" + sessionStorage.id,
				method: "put",
				data: $scope.obj
			}).then(function(ev) {
				$state.go("carDetails");
			})
		}
		$scope.text_align_left = function() {
			$('.car_cm').css('text-align', 'left');
		}
		$scope.text_align_right = function() {
			$('.car_cm').css('text-align', 'right');
		}
		$scope.left = function() {
			$('.car_pp').css('text-align', 'left');
		}
		$scope.right = function() {
			$('.car_pp').css('text-align', 'right');
		}
		$scope.left_one = function() {
			$('.car_jg').css('text-align', 'left');
		}
		$scope.right_one = function() {
			$('.car_jg').css('text-align', 'right');
		}
		$scope.left_two = function() {
			$('.car_cj').css('text-align', 'left');
		}
		$scope.right_two = function() {
			$('.car_cj').css('text-align', 'right');
		}
		$scope.left_three = function() {
			$('.car_ys').css('text-align', 'left');
		}
		$scope.right_three = function() {
			$('.car_ys').css('text-align', 'right');
		}
		$scope.left_fouth = function() {
			$('.car_lc').css('text-align', 'left');
		}
		$scope.right_fouth = function() {
			$('.car_lc').css('text-align', 'right');
		}
		$scope.left_five = function() {
			$('.car_pl').css('text-align', 'left');
		}
		$scope.right_five = function() {
			$('.car_pl').css('text-align', 'right');
		}
		$scope.left_six = function() {
			$('.car_cs').css('text-align', 'left');
		}
		$scope.right_six = function() {
			$('.car_cs').css('text-align', 'right');
		}
		$scope.left_seven = function() {
			$('.car_ckg').css('text-align', 'left');
		}
		$scope.right_seven = function() {
			$('.car_ckg').css('text-align', 'right');
		}
		$scope.left_eight = function() {
			$('.car_rj').css('text-align', 'left');
		}
		$scope.right_eight = function() {
			$('.car_rj').css('text-align', 'right');
		}
		$scope.left_nine = function() {
			$('.car_rl').css('text-align', 'left');
		}
		$scope.right_nine = function() {
			$('.car_rl').css('text-align', 'right');
		}
		$scope.left_ten = function(){
		    $('.car_cl').css('text-align','left');
		}
		$scope.right_ten = function(){
		    $('.car_cl').css('text-align','right');
		}
		$(".pickdate").dateDropper({
			animate: false,
			format: 'Y-m-d',
			maxYear: '2020'
		});
		//2017-3-31 14:00
		var pic=document.getElementsByClassName("pic")[0];
	    $('.b')[0].addEventListener('change',function(){
	    	var file = this.files[0];
	    	var fileType = file.type;
	    	var reader = new FileReader();
	    	reader.readAsDataURL(file);
	    	reader.onload = function(){
	    		var url=this.result;
		    	pic.src=url;
		    	pic.onload = function() {
		    		var cvs=document.createElement("canvas")
					var scale = 1;    
		            if(this.width > 300 || this.height > 300){
			            if(this.width > this.height){    
			                scale = 300 / this.width;  
			            }else{    
			                scale = 300 / this.height;    
			            }  
		            }
		            cvs.width = this.width*scale;    
		            cvs.height = this.height*scale;
		            var ctx = cvs.getContext('2d');    
		            ctx.drawImage(this, 0, 0, cvs.width, cvs.height);     
		            var newImageData = cvs.toDataURL(fileType, 0.5);
		            $scope.obj.pic=newImageData
				}
	    	}
//	    		$('.addCar_add').hide();
	    	},false);
	}else {
		$state.go("login")
	}
}]);