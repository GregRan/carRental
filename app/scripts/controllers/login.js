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
  		}
  	}
  	$scope.blur2=function(){
  		if(!$scope.passReg.test($scope.updata.passWord)){
  			$('.modal').modal('show')
  		}
  	}
    $scope.login=function(){
    	if(!$scope.nameReg.test($scope.updata.userName)||!$scope.passReg.test($scope.updata.passWord)){
  			$('.modal').modal('show')
  		}else {
	    	$http({
		    	url:"http://47.88.16.225:407/users/login",
		    	method:"post",
		    	data:{"username":$scope.updata.userName,"password":$scope.updata.passWord}
		    }).then(function(e){
		    	sessionStorage.setItem("uid",e.data.uid);
		    	$http({
			    	url:"http://47.88.16.225:407/users/"+sessionStorage.uid,
			    	method:"get",
			    }).then(function(event){
			    	sessionStorage.setItem("staffId",event.data.id);
			    	console.log(event)
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
		    })
	   	}
    }
}]);
