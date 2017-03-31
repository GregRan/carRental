'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('loginCtrl',["$scope","$http","$state",function ($scope,$http,$state){
	$scope.updata={
		userName:"",passWord:""
	}
	$scope.nameReg = /^1[3,4,5,7,8]\d{9}$/;
	$scope.passReg = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9{6,}$]/;
  	$scope.blur=function(){
  		if(!$scope.nameReg.test($scope.updata.userName)){
  			$('.modal').modal('show')
  			$scope.login_msg="账户输入不正确！"
  		}
  	}
  	$scope.blur2=function(){
  		if(!$scope.passReg.test($scope.updata.passWord)){
  			$('.modal').modal('show')
  			$scope.login_msg="密码输入不正确！"
  		}
  	}
    $scope.login=function(){
    	if($scope.passReg.test($scope.updata.passWord)){
    		$http({
				url:urlId+"/users/?username="+$scope.updata.userName,
				method:"get"
			}).then(function(data){
				if(data.data.length==0){
					$('.modal').modal('show')
					$scope.login_msg="账户不存在！"
				}else {
			    	$http({
				    	url:urlId+"/users/login",
				    	method:"post",
				    	data:{"username":$scope.updata.userName,"password":$scope.updata.passWord}
				    }).then(function(e){
				    	sessionStorage.setItem("uid",e.data.uid);
				    	$http({
					    	url:urlId+"/users/"+sessionStorage.uid,
					    	method:"get"
					    }).then(function(event){
					    	sessionStorage.setItem("staffId",event.data.id);
					    	sessionStorage.setItem("level",event.data.level);
					    	sessionStorage.setItem("user",event.data.username);
					    	sessionStorage.setItem("gonghao",event.data.gonghao);
							if(event.data.level=="0"){
								$state.go("staffHomepage");
							}else{
								$state.go("bossHomepage");
							}
					    })
					    },function(e){
					    	$('.modal').modal('show')
					    	$scope.login_msg="密码输入错误！"
					    })
			   	}
			})
    	}else {
    		$('.modal').modal('show')
  			$scope.login_msg="密码输入不正确！"
    	}
    }
}]);
