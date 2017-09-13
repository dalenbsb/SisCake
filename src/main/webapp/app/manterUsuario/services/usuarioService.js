app.service('UsuarioService', function(Restangular){

	var urlBase = "manterUsuario/";
	var usuario = {};
	
	this.salvarAlterar = function(usuario){
		Restangular.all(urlBase+"saveUsuario").post(usuario).then(function() {
            console.log("Usuario salvo");
        });
	}
	
	this.findById = function(id){
		
		//Pega o id do parametro passado na url, vai no back-end e retorna o dado
		Restangular.one(urlBase+"findUsuarioById", id).get()
		.then(
			function(data) {
				this.usuario = {
						id: data.id,
						nome: data.nome,
						cpf: data.cpf,
						dsEmail:data.dsEmail,
						senha:data.senha
				};
				return this.usuario;
			}
		);
	}
	
	this.usuarioVazio = function(){
		var usuarioVazio = {
		        id: null,
		        nome: "",
		        cpf: "",
		        dsEmail:"",
		        senha:""
			}
		
		return usuarioVazio;
	}
	
});