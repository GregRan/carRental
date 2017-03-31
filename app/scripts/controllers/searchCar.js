'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
	.controller('searchCarCtrl', ['$scope', '$http', '$state',function($scope, $http, $state) {
	if(sessionStorage.user) {	
		$scope.into_details = function(car) {
			sessionStorage.setItem('id',car.id);
			sessionStorage.setItem('backwhere','search');
			$state.go('carDetails');
		}
		$scope.back = function() {
			$state.go('carList')
		}
		
		$scope.noresult=true
		$scope.staffList_jiazai=false
		$scope.pubSearch=function(){
			$scope.staffList_jiazai=true
			$http({
				method: 'get',
				url: urlId+"/car/?pinpai=" + $scope.keyword
			}).then(function(e) {
				$scope.data = e.data
				$scope.staffList_jiazai=false
				if(e.data.length==0){
					$scope.noresult=false
				}else {
					$scope.noresult=true
				}
			})
		}
		$scope.search_it=function(){
			if($scope.keyword) {
				$scope.pubSearch()
			} else {
				$(".nokeyword").modal("show")
			}
		}
		$scope.dazhong=function(){
			$scope.keyword="大众"
			$scope.pubSearch()
		}
		$scope.aodi=function(){
			$scope.keyword="奥迪"
			$scope.pubSearch()
		}
		$scope.fengtian=function(){
			$scope.keyword="丰田"
			$scope.pubSearch()
		}
		$scope.bentian=function(){
			$scope.keyword="本田"
			$scope.pubSearch()
		}
		$scope.biaozhi=function(){
			$scope.keyword="标志"
			$scope.pubSearch()
		}
		$scope.qiya=function(){
			$scope.keyword="起亚"
			$scope.pubSearch()
		}
		$scope.bieke=function(){
			$scope.keyword="别克"
			$scope.pubSearch()
		}
		$scope.fute=function(){
			$scope.keyword="福特"
			$scope.pubSearch()
		}
		$scope.xiandai=function(){
			$scope.keyword="现代"
			$scope.pubSearch()
		}
		$scope.hongqi=function(){
			$scope.keyword="红旗"
			$scope.pubSearch()
		}	
	} else {
		$state.go("login");
	}
}]);