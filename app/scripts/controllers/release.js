'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
	.controller('releaseCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
		if(sessionStorage.user) {
			$scope.btn = function() {
				if($scope.Mtext) {
					$scope.send=true;
					$scope.ok=function(){
						$http({
						method: 'post',
						url: 'http://47.88.16.225:407/gonggao',
						data: {
							"name": $scope.Mtext,
							"time": (new Date()).valueOf(),
							"read":0
						}
					}).then(function(e) {
						console.log(e.data)
						$scope.Mtext = ''
						$scope.send=false;
						$scope._success=true;
					})
					}
				} else {
					$scope.kong = true
				}
			}
			$scope.kong1 = function() {
				$scope.kong = false
			}
			$scope.no = function() {
				$scope.send = false
			}
			$scope.ok1 = function() {
				$scope._success = false
				$state.go('bossHomepage')
			}
			$scope.fan = function() {
				$state.go('bossHomepage')
			}
		} else {
			$state.go("login");
		}

	}]);