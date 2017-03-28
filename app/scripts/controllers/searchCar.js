//$scope.pppp=false;
//			$scope.erro=false;
//			$scope.carList_search = function() {
//				if($scope.search) {
//					$http({
//						method: 'get',
//						url: 'http://47.88.16.225:407/car/?pinpai=' + $scope.search
//					}).then(function(e) {
//						document.querySelector(".next").setAttribute("disabled", "disabled")
////						sessionStorage.count = e.data.length;
//						$scope.data = e.data
//						if(e.data.length==0){
//							$scope.pppp=true
//						}else {
//							$scope.pppp=false
//						}
//					})
//				} else {
//					$scope.erro=true;
//				}
//				$scope.hide = function(){
//					$scope.erro=false;
//				}
//			}

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
//		$scope.details = function(car) {
//			sessionStorage.setItem('id', car.id);
//			$state.go('carDetails');
//		}
		$scope.back = function() {
			$state.go('carList')
		}
			
	} else {
		$state.go("login");
	}
}]);