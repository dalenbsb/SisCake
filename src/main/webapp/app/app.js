'use strict';
var app = angular.module('app', [ 'restangular', 'ngRoute','ngTable','ui.bootstrap']);

app.config([ 'RestangularProvider', '$routeProvider',
		function(RestangularProvider, $routeProvider) {

			RestangularProvider.setBaseUrl("/");

			$routeProvider
			//Rota da Home
			.when('/', {
				templateUrl : 'app/views/home.html',
				controller : 'HomeCtrl',
			})			
			//#########################################################################
			//################ Rotas do cadastro de usuario ###########################
			//#########################################################################
			.when('/cadastrarUsuario', {
				templateUrl : 'app/views/cadastrarUsuario.html',
				controller : 'manterUsuarioCtrl',
			})
			.when('/alterarUsuario/:idUsuario', {
				templateUrl : 'app/views/alterarUsuario.html',
				controller : 'manterUsuarioCtrl',
			})
			.when('/pesquisarUsuario', {
				templateUrl : 'app/views/pesquisarUsuario.html',
				controller : 'manterUsuarioCtrl',
			})
			//#########################################################################
			
			// caso não seja nenhum desses, redirecione para a rota '/'
			.otherwise({
				redirectTo : '/'
			});
		} 
]);



