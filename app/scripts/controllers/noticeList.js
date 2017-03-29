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
			$scope.staffList_jiazai=true;
			$http({
				method:"get",
				url:urlId+"/gonggao/?read=0"
			}).then(function(e){
				console.log(e.data)
	    		$scope.staffList_jiazai=false;
	    		$scope.staffList_content=true;
				$scope.data=e.data;
			})
			$http({
				method:"get",
				url:urlId+"/gonggao/?read=1"
			}).then(function(e){
				console.log(e.data)
	    		$scope.staffList_jiazai=false;
	    		$scope.staffList_content=true;
				$scope.dataa=e.data;
			})
			$scope.sub=function(t){
					sessionStorage.setItem("noticeList_id",t.id)
					$state.go('noticeDetails')
				}
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
					url:urlId+"/gonggao/"+sessionStorage.noticeList_id,
					method:"delete"
				}).then(function(){
					$(".Mtext").eq($scope.index).remove()
				})
			}

  	}
		$scope.index=0;
		$scope.del_notice=function(ev,index){
			ev.stopPropagation();
			$(".modal").modal('show');
			$scope.n_quxiao=function(){
				for(var i=0;i<$(".Mtext").length;i++){
					$(".Mtext").eq(i).css("transition","0.5s").css("right","0")
				}
			}
		}
		$scope.n_delete=function(){
			$http({
				url:urlId+"/gonggao/"+sessionStorage.noticeList_id,
				method:"delete"
			}).then(function(){
				location.reload();
			})
		}

		}else{
			$state.go("login");
		}

	}])
	.directive("setDel",function(){
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
=======
	}]).directive("setDel",function(){
				return function(scope,element,attrs){
						scope.a=0;
						scope.b=[];
						scope.c=0;
						
						for(var i=0;i<$(".Mtext").length;i++){
							$(".Mtext").eq(i).css("transition","0.5s").css("right","0")
						}
						element.on("touchstart",function(e){
							console.log($(".Mtext").length);
							sessionStorage.setItem("noticeList_id",attrs.setDel)
							scope.a=e.touches[0].clientX;
							element.css("transition","0.5s")
						})
						element.on("touchmove",function(e){
							for(var i=0;i<$(".Mtext").length;i++){
								$(".Mtext").eq(i).css("transition","0.5s").css("right","0")
							}
							scope.b.push(e.touches[0].clientX);
							element.css("transition","0.5s")
						})
						element.on("touchend",function(e){
							for(var i=0;i<$(".Mtext").length;i++){
								$(".Mtext").eq(i).css("transition","0.5s").css("right","0")
							}
							scope.c=scope.b[scope.b.length-1]-scope.a;
							if(scope.c<0&&scope.c<-100){
								element.css("transition","0.5s").css("right","3rem")
							}else if(scope.c>0&&scope.c>100){
								element.css("transition","0.5s").css("right",0)
							}
						})
						
					
>>>>>>> origin/master
				}
			})
		}
	});