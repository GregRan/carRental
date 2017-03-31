'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('carDetailsCtrl', ["$scope", "$http", "$state", function($scope, $http, $state) {
	if(sessionStorage.user) {
		$scope.CD_back = function() {
			if(sessionStorage.backwhere=="carList"){
				$state.go("carList")
			}else {
				$state.go("searchCar")
			}
		}
		$scope.staffList_jiazai=true;
		$http({
			url: urlId+"/car",
			method: "post",
			data: {
				id: sessionStorage.id
			}
		}).then(function(e) {
			$scope.data = e.data;
    		$scope.staffList_jiazai=false;
    		$scope.staffList_content=true;
		})
		$scope.del = function() {
			$http({
				url: urlId+"/car/" + sessionStorage.id,
				method: "delete"
			}).then(function(e) {
				$state.go("carList");
			})
		}
		$scope.revise = function() {
			$state.go("revise-car");
		}
		$scope.a = true;
		if(sessionStorage.level == 0) {
			$scope.a = true;
		} else {
			$scope.a = false;
		}
	} else {
		$state.go("login");
	}
}]);