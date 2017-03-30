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
  			$scope.staffList_jiazai=true;
  			$http({
    		method:"get",
    		url:urlId+"/users"
    	}).then(function(e){
    		$scope.data=e.data;
    		$scope.staffList_jiazai=false;
    		$scope.staffList_content=true;
    	})	
    	if(sessionStorage.level=="0"){
				$scope.mmShow = false
			}else{
				$scope.mmShow = true
			}
    	
    	$scope.btn=function (){
    		if(sessionStorage.level==0){
    			$state.go("staffHomepage")
    		}else {
    			$state.go("bossHomepage")
    		}
    	}
    	$scope.btn1=function (){
			$state.go("addStaff")
    	}
    	$scope.btn2=function (i){
			$state.go("personal")
			sessionStorage.setItem('staffId',i.id)
			sessionStorage.setItem('click_gh',i.gonghao)
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
				if($('.staff_xuanze').text()=="姓名"){
					if(str2.test($scope.input_search)){
						$http({
							method: 'get',
							url: urlId+'/users/?name=' + $scope.input_search
						}).then(function(e){
							$scope.data = e.data
							if(e.data.length==0){
							$scope.po=true
							}else {
								$scope.po=false
							}
						})
					}else{
						$(".modal").modal("show");
					}
				}else if($('.staff_xuanze').text()=="工号"){
					if(str.test($scope.input_search)){
						$http({
							method: 'get',
							url: urlId+'/users/?gonghao=' + $scope.input_search
						}).then(function(e){
							$scope.data = e.data
							if(e.data.length==0){
								$scope.po=true
							}else {
								$scope.po=false
							}
						})
					}else{
						$(".modal").modal("show");
					}
				}
			}else{
				$(".modal").modal("show");
			}
		}
		
		$scope.pleaseSelect="选择"
		$scope.bind_name="姓名"
		$scope.bind_gonghao="工号"
		$scope.click_name=function(){
			$scope.pleaseSelect=$scope.bind_name
		}
		$scope.click_gonghao=function(){
			$scope.pleaseSelect=$scope.bind_gonghao
		}
		
  }]);
