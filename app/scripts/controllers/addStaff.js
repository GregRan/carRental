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
    	
    	$('.bb')[0].addEventListener('change',function(){
    		var file = this.files[0];
    		var reader = new FileReader();
    		reader.readAsDataURL(file);
    		reader.onload = function(){
    			$scope.obj.touxiang=this.result
    			$('.addimg').html('<img src="'+this.result+'">')
    		}
    		$('.aa').hide();
    	},false);
    	}else{
    		$state.go("login");
    	}
    	$scope.myreg = /^1[34578]\d{9}$/;
    	$scope.passwordReg = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9{6,}$]/;
    	$scope.levelReg = /0|1/
    	$scope.gonghaoReg = /^[A-Z]\d{5}$/
    	$scope.rjxShow=false;
    	$scope.gonghao = function(){
    		if(!$scope.gonghaoReg.test($scope.obj.gonghao)){
	  			$scope.rjxShow=true;
	  			$scope.aa = '请输入正确的工号！'
	  			$scope.btnShow=false;
	  		}
    	}
	    $scope.phone=function(){
	  		if(!$scope.myreg.test($scope.obj.dianhua)){
	  			$scope.rjxShow=true;
	  			$scope.aa = '请输入正确的电话号！'
	  			$scope.btnShow=false;
	  		}
	  	}
	    $scope.jinji = function(){
	    	if(!$scope.myreg.test($scope.obj.jinjilianxiren)){
	  			$scope.rjxShow=true;
	  			$scope.aa = '请输入正确的紧急联系人！'
	  			$scope.btnShow=false;
	  		}
	    }
	    $scope.username = function(){
	    	if(!$scope.myreg.test($scope.obj.username)){
	  			$scope.rjxShow=true;
	  			$scope.aa = '请输入正确的用户名！'
	  			$scope.btnShow=false;
	  		}
	    }
	    $scope.password = function(){
	    	if(!$scope.passwordReg.test($scope.obj.password)){
	  			$scope.rjxShow=true;
	  			$scope.aa = '请输入正确的密码！'
	  			$scope.btnShow=false;
	  		}
	    }
	    $scope.level = function(){
	    	if(!$scope.levelReg.test($scope.obj.level)){
	  			$scope.rjxShow=true;
	  			$scope.aa = '请输入正确的级别号码！'
	  			$scope.btnShow=false;
	  		}
	    }
		$scope.btn1 = function(){
			console.log($scope.obj)
			$scope.rjx = 0;
			for(var i in $scope.obj){
				$scope.rjx++;
			}
			console.log($scope.rjx)
			if($scope.rjx!=9){
				$scope.aa = '请填写完整的个人信息！'
				$scope.rjxShow=true;
			}else{
				$scope.aa = '确认添加！'
				$scope.rjxShow=true;
				$scope.btnShow=true;
			}
			
		}
		$scope.btn2 = function(){
			if($scope.aa=='确认添加！'){
				$http({
	    			method:"post",
	    			url:"http://47.88.16.225:407/users",
	    			data:$scope.obj
	    }).then(function(e){
	  				$scope.rjxShow=false;
					$scope.rShow=true;
					$scope.bb = '添加成功！'
	    		})	
	    		$scope.rjxShow=false;
			}else{
				$scope.rjxShow=false;
			}
		}
		$scope.btn3=function(){
    		$scope.rjxShow=false;
    	}
		$scope.btn4=function(){
    		$state.go('staffList')
    	}
		$("#pickdate").dateDropper({
				animate: false,
				format: 'Y-m-d',
				maxYear: '2020'
			});
  }]);
