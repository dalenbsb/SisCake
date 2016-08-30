'use strict';
app.controller('CrudCtrl', function(Restangular, $scope) {

    // forma manual de fazer o save ou update
    $scope.salvar = function() {

//        if (!$scope.principalForm.$valid) {
//            return;
//        }
    	

        if ($scope.usuario != undefined && $scope.usuario.id != null && $scope.usuario.id != "") {
            var user = Restangular.one("manterUsuario/saveUsuario", $scope.usuario.id);
            user = $scope.usuario;
            user.put().then(function() {
                console.log("Usuario atualizado");
                $scope.reload();
                $scope.reset();
            })
        } else {
            console.log($scope.usuario);
            Restangular.all("manterUsuario/saveUsuario").post($scope.usuario).then(function() {
                console.log("Usuario salvo");
                $scope.reload();
                $scope.reset();
            });
        }

    };

});


app.controller('HomeCtrl', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
});
