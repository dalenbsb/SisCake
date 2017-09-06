app.service('UsuarioService', function(SalvarUsuario){

	this.salvar = function(usuario){
		return SalvarUsuario.salvar(usuario);
	}
	
});