'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('staffListCtrl',['$scope','$state', '$http',function ($scope,$state,$http) {
  		if(sessionStorage.user){
  			$http({
    		method:"get",
    		url:"http://47.88.16.225:407/users"
    	}).then(function(e){
    		$scope.data=e.data;
    		console.log(e.data)
    	})	
    	if(sessionStorage.level=="0"){
				$scope.mmShow = false
			}else{
				$scope.mmShow = true
			}
    	
    	$scope.btn=function (){
			$state.go("bossHomepage")
			
    	}
    	$scope.btn1=function (){
			$state.go("addStaff")
    	}
    	$scope.btn2=function (i){
			$state.go("personal")
			sessionStorage.setItem('staffId',i.id)
    	}
  		}else{
  			$state.go("login");
  		}
  		$scope.staff_erro=false;
  		$scope.po=false;
		$scope.staffList_search = function(){
			var str = /^[A-Z]\d{5}/;
			var str2 = /^[\u4e00-\u9fa5]{1,}$/;
			
			if($scope.input_search){
				if($('select').val()=="姓名"){
					if(str2.test($scope.input_search)){
						$http({
							method: 'get',
							url: 'http://47.88.16.225:407/users/?name=' + $scope.input_search
						}).then(function(e){
							$scope.data = e.data
							if(e.data.length==0){
							$scope.po=true
							}else {
								$scope.po=false
							}
						})
					}else{
						$scope.staff_erro=true;
						$scope.staffList_hide = function(){
							$scope.staff_erro=false;
						}
					}
				}else if($('select').val()=="工号"){
					if(str.test($scope.input_search)){
						$http({
							method: 'get',
							url: 'http://47.88.16.225:407/users/?gonghao=' + $scope.input_search
						}).then(function(e){
							$scope.data = e.data
							if(e.data.length==0){
								$scope.po=true
							}else {
								$scope.po=false
							}
						})
					}else{
						$scope.staff_erro=true;
						$scope.staffList_hide = function(){
							$scope.staff_erro=false;
						}
					}
				}
			}else{
				$scope.staff_erro=true;
				$scope.staffList_hide = function(){
						$scope.staff_erro=false;
				}
			}
		}
  }]);
