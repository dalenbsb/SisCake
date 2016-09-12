'use strict';
var app = angular.module('app', [ 'restangular', 'ngRoute','ngTable','ui.bootstrap']);

app.config([ 'RestangularProvider', '$routeProvider',
		function(RestangularProvider, $routeProvider) {

			RestangularProvider.setBaseUrl("/");

			$routeProvider
			//Rota da Home
			.when('/', {
				templateUrl : 'app/home/views/home.html',
				controller : 'HomeCtrl',
			})			
			//#########################################################################
			//################ Rotas do cadastro de usuario ###########################
			//#########################################################################
			.when('/cadastrarUsuario', {
				templateUrl : 'app/manterUsuario/views/cadastrarUsuario.html',
				controller : 'cadastrarUsuarioCtrl',
			})
			//aqui usa passagem de parametro na rota
			.when('/alterarUsuario/:idUsuario', {
				templateUrl : 'app/manterUsuario/views/alterarUsuario.html',
				controller : 'alterarUsuarioCtrl',
			})
			.when('/pesquisarUsuario', {
				templateUrl : 'app/manterUsuario/views/pesquisarUsuario.html',
				controller : 'pesquisarUsuarioCtrl',
			})
			//#########################################################################
			
			// caso não seja nenhum desses, redirecione para a rota '/'
			.otherwise({
				redirectTo : '/'
			});
		} 
]);



