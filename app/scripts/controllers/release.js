'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
	.controller('releaseCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.Mtext = "";
		$scope.btn = function() {
			if($scope.Mtext != "") {
				$http({
					method: 'post',
					url: 'http://47.88.16.225:407/gonggao',
					data: {
						"name": $scope.Mtext,
						"time": (new Date()).valueOf()
					}
				}).then(function(e) {
					console.log(e.data)
					$scope.Mtext = ''
				})
				$("#layer").modal('show')
			} else {
				$("#layer").modal('hide')
			}
		}
	}]);