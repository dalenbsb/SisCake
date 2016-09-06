'use strict';
app.controller('manterUsuarioCtrl', function(Restangular,$rootScope, $scope, $location, $routeParams) {
	
	$rootScope.activetab = $location.path();
	console.log("############## teste param: "+$routeParams.idUsuario);
	if(!$routeParams.idUsuario === undefined){
		$scope.usuario.id = $routeParams.idUsuario; 
		
		$scope.irAlterarUsuario();
	}
	
	
	var usuarioVazio = {
        id: null,
        nome: "",
        cpf: "",
        dsEmail:"",
        senha:""
	}
	
	$scope.minlength = 3;

//	$scope.usuario = angular.copy($scope.usuarioVazio);
	
//	$scope.reset = function() {
//        $scope.usuario = angular.copy($scope.usuarioVazio);
//    };
	
    // forma manual de fazer o save ou update
    $scope.salvar = function() {
    	
        if (!$scope.formCadastrarUsuario.$valid) {
            return;
        }

        if ($scope.usuario != undefined && $scope.usuario.id != null && $scope.usuario.id != "") {
            var user = Restangular.one("manterUsuario/saveUsuario", $scope.usuario.id);
            user = $scope.usuario;
            user.put().then(function() {
                console.log("Usuario atualizado");
//                $scope.reset();
            });
        } else {
            console.log($scope.usuario);
            Restangular.all("manterUsuario/saveUsuario").post($scope.usuario).then(function() {
                console.log("Usuario salvo");
//                $scope.reset();
                $scope.listaUsuario();
            });
        }
        $scope.closeModal();
        $location.path('/pesquisarUsuario');
    };
    
    $scope.listaUsuario = function() {
        //listagem
        Restangular.all("manterUsuario/findAll").getList().then(function(obj) {
            usuarioVazio = obj;
            console.log(usuarioVazio);
        });
        console.log("Usuarios listado");
    };
    
    
    $scope.findUsuarioByParam = function() {
        //listagem
        Restangular.all("manterUsuario/findUsuarioByParam").post($scope.usuario)
        	.then(function(obj) {
        		$scope.usuarios = obj;
        		console.log(obj);
        	}
        );
        console.log("Usuarios listado");
    };
    
    $scope.irAlterarUsuario = function(idUsuario){

    	$location.path('/alterarUsuario/'+idUsuario);
    	
    	Restangular.one("manterUsuario/findUsuarioById", idUsuario).get()
    		.then(function(data) {
    			$scope.usuario = data;
    			console.log("Carrega usuario para Alteração");
      	 }
    	);
    };
    
    //###########################
    //##### CONTROLE MODAL ######
    //###########################
    $scope.openModal = function(){
    	console.log("Abrindo modal");
    	$scope.showModal = true;
    };
    
    $scope.closeModal = function(){
    	console.log("fechando modal");
    	$scope.showModal = false;
    };
    //###########################
    
});


app.controller('HomeCtrl', function($rootScope, $location) {
	$rootScope.activetab = $location.path();
});
//
//app.controller('manterUsuarioCtrl', function($rootScope, $location) {
//    $rootScope.activetab = !$location.path();
//});
