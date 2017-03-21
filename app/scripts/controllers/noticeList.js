'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
	.controller('noticeListCtrl', ['$scope','$http','$state', function($scope, $http,$state) {
		$http({
			method:"get",
			url:"http://47.88.16.225:407/gonggao"
		}).then(function(e){
			$scope.data=e.data
			$scope.sub=function(t){
				console.log(t.time)
				localStorage.setItem("name",t.name)
				localStorage.setItem("time",t.time)
				$state.go('noticeDetails')
				
			}
		})
		$scope.fan=function(){
			$state.go('staffHomepage')
  		}
	}]);