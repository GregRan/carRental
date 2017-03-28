'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
	.controller('listCtrl', ['$scope', '$http', '$state', '$filter', '$location', function($scope, $http, $state, $filter, $location) {
		if(sessionStorage.user) {
			$scope.staffList_jiazai=true;
			$http({
				method: 'get',
				url: urlId+'/car?{"id":"count"}'
			}).then(function(e) {
				sessionStorage.count = e.data.count;
				$scope.staffList_jiazai=false;
    			$scope.staffList_content=true;
			})
			$scope.play = function(num,step) {
				$scope.staffList_jiazai=true;
				$scope.staffList_content=false;
				$http({
					method: 'get',
					url: urlId+'/car?{"$skip":' + num + ',"$limit":' + step + '}',
				}).then(function(e) {
					$scope.data = e.data
					$scope.staffList_jiazai=false;
					$scope.staffList_content=true;
				})
			}
			$scope.play(0, 3)
			$scope.shuai = 0;
			$scope.ss = 0;
			$scope.aaa = sessionStorage.count
			if($scope.ss==0){
				document.querySelector(".prev").setAttribute("disabled", "disabled")
			}
			$scope.next = function() {
				if(sessionStorage.count - (($scope.ss+1) * 3)==3||sessionStorage.count - (($scope.ss+1) * 3)<3){
						document.querySelector(".next").setAttribute("disabled", "disabled")
					}
				$scope.shuai += 3;
				$scope.ss++;
				document.querySelector(".prev").removeAttribute("disabled")
				if(sessionStorage.count - (($scope.ss - 1) * 3) <= 3) {
					$scope.shuai = ($scope.ss - 1) * 3;
					$scope.ss = $scope.ss - 1
					document.querySelector(".next").setAttribute("disabled", "disabled")
				}
				$scope.play($scope.shuai, 3)
			}

			$scope.prev = function() {
				$scope.shuai -= 3;
				if($scope.ss > 0) {
					$scope.ss--;
				}
				if($scope.ss==0){
					document.querySelector(".prev").setAttribute("disabled", "disabled")
				}
				document.querySelector(".next").removeAttribute("disabled")
				if($scope.shuai < 0) {
					$scope.shuai = 0;
					document.querySelector(".prev").setAttribute("disabled", "disabled")
				} else {
					$scope.play($scope.shuai, -3)
				}

			}
			$scope.details = function(car) {
				sessionStorage.setItem('id', car.id);
				$state.go('carDetails');
			}
			$scope.back = function() {
				if(sessionStorage.level == 0) {
					$state.go('staffHomepage')
				} else {
					$state.go('bossHomepage')
				}
			}
			//***************************
			$scope.pppp=false;
			$scope.erro=false;
			$scope.carList_search = function() {
				if($scope.search) {
					$http({
						method: 'get',
						url: urlId+'/car/?pinpai=' + $scope.search
					}).then(function(e) {
						document.querySelector(".next").setAttribute("disabled", "disabled")
//						sessionStorage.count = e.data.length;
						$scope.data = e.data
						if(e.data.length==0){
							$scope.pppp=true
						}else {
							$scope.pppp=false
						}
					})
				} else {
					$scope.erro=true;
				}
				$scope.hide = function(){
					$scope.erro=false;
				}
			}
			//*****************************
		} else {
			$state.go("login");
		}

	}]);