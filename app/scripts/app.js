'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
document.documentElement.style.fontSize = innerWidth / 16 + 'px';
onresize = function() {
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
};
angular
  .module('appApp', ['ui.router']).config(['$stateProvider',function($stateProvider){
  		$stateProvider.state("login",{
  			url:"/login",
  			templateUrl:"views/login.html"
  		})
  		$stateProvider.state("staffHomepage",{
  			url:"/staffHomepage",
  			templateUrl:"views/staffHomepage.html"
  		})
  		$stateProvider.state("carList",{
  			url:"/carList",
  			templateUrl:"views/carList.html"
  		})
  		$stateProvider.state("carDetails",{
  			url:"/carDetails",
  			templateUrl:"views/carDetails.html"
  		})
  		$stateProvider.state("noticeList",{
  			url:"/noticeList",
  			templateUrl:"views/noticeList.html"
  		})
  		$stateProvider.state("noticeDetails",{
  			url:"/noticeDetails",
  			templateUrl:"views/noticeDetails.html"
  		})
  		$stateProvider.state("personal",{
  			url:"/personal",
  			templateUrl:"views/personal.html"
  		})
  		$stateProvider.state("bossHomepage",{
  			url:"/bossHomepage",
  			templateUrl:"views/bossHomepage.html"
  		})
  		$stateProvider.state("staffList",{
  			url:"/staffList",
  			templateUrl:"views/staffList.html"
  		})
  		$stateProvider.state("release",{
  			url:"/release",
  			templateUrl:"views/release.html"
  		})
  		$stateProvider.state("addCar",{
  			url:"/addCar",
  			templateUrl:"views/addCar.html"
  		})
  		$stateProvider.state("addStaff",{
  			url:"/addStaff",
  			templateUrl:"views/addStaff.html"
  		})
//		$stateProvider.state("carList.search",{
//			url:"/search",
//			views:{
//				content:{
//					templateUrl:"views/search.html"
//				}
//			}
//			
//		})
  }]);
