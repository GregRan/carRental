'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
	.controller('personalCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
			if(sessionStorage.user) {
				//			console.log(sessionStorage.gonghao, sessionStorage.click_gh)
				$scope.nameReg = /^1[3,4,5,7,8]\d{9}$/;
				$scope.re = function() {
					if(!$scope.nameReg.test($scope.aa.dianhua)) {
						$('.modal').modal('show')
					}
				}
				$scope.re1 = function() {
					if(!$scope.nameReg.test($scope.aa.jinjilianxiren)) {
						$('.modal').modal('show')
					}
				}
			
			$http({
				url: "http://47.88.16.225:407/users/" + sessionStorage.staffId,
				method: "get"
			}).then(function(e) {
				//  		console.log(e)
				$scope.aa = e.data;
			})
			$scope.btn = function() {
				$state.go("staffList")
			}
			if(sessionStorage.gonghao == sessionStorage.click_gh) {
				console.log("一样的工号")
				$scope.mmmm = true;
				$scope.mmm = true;
				$scope.mmmm1 = true;
				$scope.mmm1 = true;
				$scope.txt = '修改';
				$scope.txt1 = '修改';
				$scope.edit = function() {
					if($scope.txt == '修改') {
						$scope.txt = '确定';
						$scope.mmm = false;
						$scope.mm = true;
					} else {
						$scope.txt = '修改';
						$scope.mmm = true;
						$scope.mm = false;
						$scope.send = true;
					}
				}
				$scope.ok = function() {
					$http({
						url: "http://47.88.16.225:407/users/" + sessionStorage.staffId,
						method: 'put',
						data: {
							dianhua: $scope.aa.dianhua
						}
					}).then(function(e) {
						console.log(e)
						$scope.send = false;
						$scope._success=true;
					})
				}
				$scope.no = function() {
					$scope.send = false;
				}
				$scope.qd=function(){
					$scope._success=false;
				}
				$scope.edit1 = function() {
					if($scope.txt1 == '修改') {
						$scope.txt1 = '确定';
						$scope.mmm1 = false;
						$scope.mm1 = true;
					} else {
						$scope.txt1 = '修改';
						$scope.mmm1 = true;
						$scope.mm1 = false;
						$scope.send1 = true;
					}
				}
				$scope.ok1 = function() {
					$http({
						url: "http://47.88.16.225:407/users/" + sessionStorage.staffId,
						method: 'put',
						data: {
							jinjilianxiren: $scope.aa.jinjilianxiren
						}
					}).then(function(e) {
						console.log(e)
						$scope.send1 = false;
						$scope._success1=true;
					})
				}
				$scope.no1 = function() {
					$scope.send1 = false;
				}
				$scope.qd1=function(){
					$scope._success1=false;
				}
			} else {
				$scope.mmmm = false;
				$scope.mmm = true;
				$scope.mmm1 = true;
			}
			$scope.nnn=true;
			if(sessionStorage.level==0){
				$scope.nnn=true;
			}else{
				$scope.nnn=false;
			}
			$scope.personal_del=function(){
				$http({
					url: "http://47.88.16.225:407/users/" + sessionStorage.staffId,
					method: 'delete'
				}).then(function(e) {
					$state.go("staffList");
				})
			}

		} else {
			$state.go("login");
		}
	}]);