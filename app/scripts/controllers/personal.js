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
			$scope.nameReg = /^1[3,4,5,7,8]\d{9}$/;
			$scope.staffList_jiazai = true;
			$http({
				url: urlId + "/users/" + sessionStorage.staffId,
				method: "get"
			}).then(function(e) {
				$scope.staffList_jiazai = false;
				$scope.staffList_content = true;
				if(sessionStorage.level=="1"){
					$scope.r_btn_del = true;
				}else {
					$scope.r_btn_del = false;
				}
				$scope.aa = e.data;
			})
			$scope.btn = function() {
				$state.go("staffList")
			}
			$scope.niu = function() {
				$(".shuai4").modal("show");
			}
			if(sessionStorage.gonghao == sessionStorage.click_gh) {
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
						if(!$scope.nameReg.test($scope.aa.dianhua)) {
							$('.shuai2').modal('show');
						} else {
							$(".shuai").modal("show");
							$scope.personal_ok = function() {
								$http({
									url: urlId+"/users/" + sessionStorage.staffId,
									method: 'put',
									data: {
										dianhua: $scope.aa.dianhua
									}
								}).then(function(e) {
									$scope.txt = '修改';
									$scope.mmm = true;
									$scope.mm = false;
								})
							}
							$scope.txt = '修改';
							$scope.mmm = true;
							$scope.mm = false;
						}
					}
				}
				$scope.edit1 = function() {
					if($scope.txt1 == '修改') {
						$scope.txt1 = '确定';
						$scope.mmm1 = false;
						$scope.mm1 = true;
					} else {
						$('.shuai').modal('hide');
						$('.shuai2').modal('hide');
						$('.shuai3').modal('hide');
						$('.shuai4').modal('hide');
						if(!$scope.nameReg.test($scope.aa.jinjilianxiren)) {
							$('.shuai2').modal('show');
						} else {
							$(".shuai3").modal("show");
							$scope.personal_ok2 = function() {
								$http({
									url: urlId+"/users/" + sessionStorage.staffId,
									method: 'put',
									data: {
										jinjilianxiren: $scope.aa.jinjilianxiren
									}
								}).then(function(e) {
									$scope.txt1 = '修改';
									$scope.mmm1 = true;
									$scope.mm1 = false;
								})
							}
							$scope.txt1 = '修改';
							$scope.mmm1 = true;
							$scope.mm1 = false;
						}
					}
				}
			} else {
				$scope.mmm = true;
				$scope.mmm1 = true;
			}

			$scope.personal_del = function() {
				$http({
					url: urlId + "/users/" + sessionStorage.staffId,
					method: 'delete'
				}).then(function(e) {
					$state.go("staffList");
				})
			}
		} else {
			$state.go("login");
		}
	}]);