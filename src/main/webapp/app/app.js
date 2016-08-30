'use strict';
var app = angular.module('app', [ 'restangular', 'ngRoute','ngTable','ui.bootstrap' ]);

app.config([ 'RestangularProvider', '$routeProvider',
		function(RestangularProvider, $routeProvider) {

			RestangularProvider.setBaseUrl("/");

			$routeProvider
			.when('/', {
				templateUrl : 'app/views/home.html',
				controller : 'HomeCtrl',
			})
			// caso não seja nenhum desses, redirecione para a rota '/'
			.otherwise({
				redirectTo : '/'
			});


		} 
]);

