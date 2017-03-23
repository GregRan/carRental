'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
	.controller('noticeListCtrl', ['$scope','$http','$state',function($scope, $http,$state) {
		$http({
			method:"get",
			url:"http://47.88.16.225:407/gonggao"
		}).then(function(e){
			$scope.data=e.data;
			$scope.sub=function(t){
				console.log(t)
				localStorage.setItem("noticeList_id",t.id)
				$state.go('noticeDetails')
				
			}
		})
		$scope.fan=function(){
			if(localStorage.level==0){
				$state.go('staffHomepage')
			}else{
				$state.go('bossHomepage')
			}
  		}
		$scope.n_delete=function(e,ev){
			ev.stopPropagation();
			$http({
				url:"http://47.88.16.225:407/gonggao/"+localStorage.noticeList_id,
				method:"delete"
			}).then(function(){
				$(".Mtext").eq(e).remove()
			})
		}
	}]).directive("setDel",function(){
				return function(scope,element,attrs){
						scope.a=0;
						scope.b=[];
						scope.c=0;
						element.on("touchstart",function(e){
							localStorage.setItem("noticeList_id",attrs.setDel)
							scope.a=e.touches[0].clientX;
							element.css("transition","0.5s")
						})
						element.on("touchmove",function(e){
							scope.b.push(e.touches[0].clientX);
							element.css("transition","0.5s")
						})
						element.on("touchend",function(e){
							scope.c=scope.b[scope.b.length-1]-scope.a;
							if(scope.c<0){
								element.css("transition","0.5s").css("right","3rem")
							}else{
								element.css("transition","0.5s").css("right",0)
							}
						})
				}
			});