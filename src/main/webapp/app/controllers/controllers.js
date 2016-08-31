'use strict';
app.controller('manterUsuarioCtrl', function(Restangular, $scope) {
	
	var usuarioVazio = {
        id: null,
        nome: "",
        cpf: "",
        dsEmail:"",
        senha:""
	}
	
	$scope.minlength = 3;

	$scope.usuario = angular.copy($scope.usuarioVazio);
	
	$scope.reset = function() {
        $scope.usuario = angular.copy($scope.usuarioVazio);
    };
    
	
    // forma manual de fazer o save ou update
    $scope.salvar = function() {
    	
        if (!$scope.principalForm.$valid) {
            return;
        }

        if ($scope.usuario != undefined && $scope.usuario.id != null && $scope.usuario.id != "") {
            var user = Restangular.one("manterUsuario/saveUsuario", $scope.usuario.id);
            user = $scope.usuario;
            user.put().then(function() {
                console.log("Usuario atualizado");
//                $scope.reload();
                $scope.reset();
            })
        } else {
            console.log($scope.usuario);
            Restangular.all("manterUsuario/saveUsuario").post($scope.usuario).then(function() {
                console.log("Usuario salvo");
//                $scope.reload();
                $scope.reset();
            });
        }
    };
    
    $scope.listaUsuario = function() {
        //listagem
        Restangular.all("manterUsuario/findAll").getList().then(function(obj) {
            $scope.usuarios = obj;
            console.log(obj);
        });
        console.log("Usuarios listado");
    };
    
    
    $scope.findUsuarioByParam = function() {
        //listagem
        Restangular.all("manterUsuario/findUsuarioByParam").post($scope.usuario).then(function(obj) {
            $scope.usuarios = obj;
            console.log(obj);
        });
        console.log("Usuarios listado");
    };

});


app.controller('HomeCtrl', function($rootScope, $location) {
//    $rootScope.activetab = $location.path();
});
//
//app.controller('manterUsuarioCtrl', function($rootScope, $location) {
//    $rootScope.activetab = !$location.path();
//});
