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
			$scope.release_offon1=true;
			$scope.release_offon2=true;
			$scope.btn = function() {
				if($scope.Mtext) {
					$scope.release_offon1=true;
					$scope.release_offon2=false;
					$scope.release_add=function(){
						$http({
						method: 'post',
						url: urlId+'/gonggao',
						data: {
							"name": $scope.Mtext,
							"time": (new Date()).valueOf(),
							"read":0
						}
					}).then(function(e) {
						$scope.Mtext = '';
						$state.go("noticeList");
					})
					}
				} else {
					$scope.release_offon1=false;
					$scope.release_offon2=true;
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