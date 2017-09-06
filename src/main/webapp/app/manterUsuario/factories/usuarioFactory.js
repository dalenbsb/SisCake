app.factory('SalvarUsuario', function(Restangular) {

	var factory = {};
	
	factory.salvar = function(usuario){
		
		alert('entrei no factory');
		
		Restangular.all("manterUsuario/saveUsuario").post(usuario).then(function() {
            console.log("Usuario salvo");
        });
	}
	
	return factory;
	
});