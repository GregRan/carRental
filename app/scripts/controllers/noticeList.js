'use strict';

/*
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
	.controller('noticeListCtrl', ['$scope','$http','$state',function($scope, $http,$state) {
		if(sessionStorage.user){
			$http({
			method:"get",
			url:"http://47.88.16.225:407/gonggao"
		}).then(function(e){
			console.log(e.data)
			$scope.data=e.data;
			$scope.sub=function(t){
				sessionStorage.setItem("noticeList_id",t.id)
				$state.go('noticeDetails')
			}
		})
		
		$scope.fan=function(){
			if(sessionStorage.level==0){
				$state.go('staffHomepage')
			}else{
				$state.go('bossHomepage')
			}
  		}
		$scope.index=0;
		$scope.del_notice=function(ev,e){
			ev.stopPropagation();
			$(".modal").modal('show');
			$scope.index=e;
		}
		$scope.n_delete=function(){
			$http({
				url:"http://47.88.16.225:407/gonggao/"+sessionStorage.noticeList_id,
				method:"delete"
			}).then(function(){
				$(".Mtext").eq($scope.index).remove()
			})
		}
		}else{
			$state.go("login");
		}
		
	}]).directive("setDel",function(){
				return function(scope,element,attrs){
						scope.a=0;
						scope.b=[];
						scope.c=0;
						element.on("touchstart",function(e){
							sessionStorage.setItem("noticeList_id",attrs.setDel)
							scope.a=e.touches[0].clientX;
							element.css("transition","0.5s")
						})
						element.on("touchmove",function(e){
							scope.b.push(e.touches[0].clientX);
							element.css("transition","0.5s")
						})
						element.on("touchend",function(e){
							scope.c=scope.b[scope.b.length-1]-scope.a;
							if(scope.c<0&&scope.c<-100){
								element.css("transition","0.5s").css("right","3rem")
							}else if(scope.c>0&&scope.c>100){
								element.css("transition","0.5s").css("right",0)
							}
						})
						
					
				}
			});