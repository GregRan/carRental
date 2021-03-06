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
    	var cvs=document.getElementsByClassName("cvs")[0];
    	$('.bb')[0].addEventListener('change',function(){
    		var file = this.files[0];
    		var fileType = file.type;
    		var reader = new FileReader();
    		reader.readAsDataURL(file);
    		reader.onload = function(){
    			var url=this.result;
	    		var image = new Image();
	    		image.src=url;
	    		image.onload = function() {
					var scale = 1;    
	                if(this.width > 200 || this.height > 200){
		                if(this.width > this.height){    
		                    scale = 200 / this.width;  
		                }else{    
		                    scale = 200 / this.height;    
		                }  
	                }
	                cvs.width = this.width*scale;    
	                cvs.height = this.height*scale;
	                var ctx = cvs.getContext('2d');    
	                ctx.drawImage(this, 0, 0, cvs.width, cvs.height);     
	                var newImageData = cvs.toDataURL(fileType, 0.5);
	                $scope.obj.touxiang=newImageData
				}
    		}
    		$('.aa').hide();
    	},false);
    	}else{
    		$state.go("login");
    	}
    	$scope.myreg = /^1[34578]\d{9}$/;
    	$scope.passwordReg = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9{6,}$]/;
    	$scope.levelReg = /0|1/;
    	$scope.gonghaoReg = /^[A-Z]\d{5}$/;
    	$scope.rjxShow=false;
		$scope.btn1 = function(){
			$http({
				method: 'get',
				url: urlId+'/users/?gonghao='+$scope.obj.gonghao
			}).then(function(e){
				if(e.data.length>0){
					$(".show3").modal("show");
				  	$scope.myData = '工号已存在！'
				}else{
					$http({
						method: 'get',
						url: urlId+'/users/?username='+$scope.obj.username
					}).then(function(e){
						if(e.data.length>0){
							$(".show3").modal("show");
						  	$scope.myData = '用户名已存在！'
						}else{
					$scope.rjx = 0;
					for(var i in $scope.obj){
						$scope.rjx++;

					}
					if($scope.rjx<9){
						$(".show1").modal("show");
					}else{
						if(!$scope.myreg.test($scope.obj.dianhua)){
							$(".show3").modal("show");
				  			$scope.myData = '请输入正确的电话号！';
				  		}else if(!$scope.myreg.test($scope.obj.jinjilianxiren)){
				  			$(".show3").modal("show");
				  			$scope.myData = '请输入正确的紧急联系人！'
				  		}else if(!$scope.myreg.test($scope.obj.username)){
				  			$(".show3").modal("show");
				  			$scope.myData = '请输入正确的用户名！'
				  		}else if(!$scope.passwordReg.test($scope.obj.password)){
				  			$(".show3").modal("show");
				  			$scope.myData = '请输入正确的密码！'
				  		}else if(!$scope.levelReg.test($scope.obj.level)){
				  			$(".show3").modal("show");
				  			$scope.myData = '请输入正确的级别号码！（0或1）'
				  		}else if(!$scope.gonghaoReg.test($scope.obj.gonghao)){
				  			$(".show3").modal("show");
				  			$scope.myData = '请输入正确的工号！'
				  		}else{
				  			$(".show2").modal("show");
							$scope.addStaff_ok=function(){
								$http({
					    			method:"post",
					    			url:urlId+"/users",
					    			data:$scope.obj
						    	}).then(function(e){
						    		$state.go("staffList");
						    	})	
							}
				  		}
						$scope.aa = '确认添加！'
						$scope.rjxShow=true;
						$scope.btnShow=true;
					}
				}
				})
				}
			})
			
		}
		$(".pickdate").dateDropper({
				animate: false,
				format: 'Y-m-d',
				maxYear: '2020'
		});
  }]);
