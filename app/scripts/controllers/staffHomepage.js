'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('staffHomepageCtrl', ["$scope", "$state", function($scope, $state) {
	if(sessionStorage.user) {
		$scope.SH_details = function() {
			$state.go("carList");
		}
		$scope.SH_my = function() {
			$state.go("staffList");
		}
		$scope.SH_release = function() {
			$state.go("noticeList");
		}
		$scope.SH_cancel = function() {
			$state.go("login");
		}
	} else {
		$state.go("login");
	}
}]);