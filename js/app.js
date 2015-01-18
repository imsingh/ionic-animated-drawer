angular.module('ionicApp',['ionic','ionic.contrib.drawer'])
.config(function($stateProvider,$urlRouterProvider){

	$stateProvider.state('main',{
		url : '/main',
		templateUrl: 'templates/main.html',
	})
	
	$urlRouterProvider.otherwise('/main');
	
})