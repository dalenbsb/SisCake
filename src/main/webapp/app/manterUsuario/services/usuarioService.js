app.service('UsuarioService', function(Restangular){

	var urlBase = "manterUsuario/";
	var usuario = {};
	
	/**
	 * Reponsável por salvar ou alterar
	 * 
	 * @param usuario
	 * 
	 */
	this.salvarAlterar = function(usuario){
		Restangular.all(urlBase+"saveUsuario").post(usuario).then(function() {
            console.log("Usuario salvo");
        });
	}
	
	
	/**
	 * Responsável por retorar um usuário.
	 * 
	 * @param id - código de consulta do objeto no backend.
	 * @param callback - funcao que é executada no controler, quando retornar os dados  
	 */
	this.findById = function(id, callback){
		
		//Pega o id do parametro passado na url, vai no back-end e retorna o dado
		Restangular.one(urlBase+"findUsuarioById", id).get()
		.then(callback);
	}
	
	/**
	 * Resposável por retornar um usuario de acordo com o id.
	 * 
	 *  @param id - código de consulta do objeto no backend.
	 *  
	 *  @return retorna uma promessa.
	 * 
	 */
	this.findByIdThen = function(id){
		
		//Pega o id do parametro passado na url, vai no back-end e retorna o dado
		return Restangular.one(urlBase+"findUsuarioById", id).get();
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