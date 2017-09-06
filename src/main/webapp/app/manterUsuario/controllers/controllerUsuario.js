'use strict';
app.controller('pesquisarUsuarioCtrl', function(Restangular,$rootScope, $scope, $location, $routeParams) {
	
	$rootScope.activetab = $location.path();
	
	var usuarioVazio = {
        id: null,
        nome: "",
        cpf: "",
        dsEmail:"",
        senha:""
	}
	
	$scope.minlength = 3;
	
    $scope.listaUsuario = function() {
        //listagem
        Restangular.all("manterUsuario/findAll").getList().then(function(obj) {
        	//carrega a lista de usuarios.
        	$scope.usuarios = obj;
            console.log(obj);
        });
        console.log("Usuarios listado");
    };
    
    $scope.findUsuarioByParam = function() {
    	$scope.messagemSucess=null;
    	$scope.messagemInfo= null;
    	
    	if($scope.usuario != undefined){
    		if($scope.usuario.cpf != undefined){
    			$scope.usuario.cpf = $scope.usuario.cpf.replace( /[^0-9]+/g, '');
    		}
	        //listagem
	        Restangular.all("manterUsuario/findUsuarioByParam").post($scope.usuario)
	        	.then(function(obj) {
	        		//carrega a lista de usuarios.
	        		$scope.usuarios = obj;
	        		console.log(obj);
	        		
	        		if(objIsEmpty(obj)){
	        			console.log("Mandar mensagens");
	        			$scope.messagemSucess = 'Não foram encontrados registros para os filtros informados';
	        		}
	        	}
	        );
	        console.log("Usuarios listado");
    	}else{
    		$scope.messagemInfo = 'Favor preencher um dos filtros de busca';
    		console.log("Mandar mensagens");
    	}
    	
    	
    	//verificar se é vazio
    	function objIsEmpty(obj){
    		var isEmpty = true;
    		for (var i in obj) {
    			
    			console.log(obj.hasOwnProperty(i));
    		    if(obj.hasOwnProperty(i)) {
    		        isEmpty = false;
    		        break;
    		    }
    		}
    		
    		return isEmpty;
    	}
    	
    };
    
    $scope.excluirUsuario = function(idUsuario) {
    	var user = Restangular.one("manterUsuario/excluirUsuario", idUsuario);
    	user.remove().then(function() {
    		console.log("Usuário Deletado com sucesso!");
    		$scope.findUsuarioByParam();
    	 }
    	);
    };
    
});


//Esse controller server para carregar os dados para alteração
//Restangular = Responsável por fazer a ponte com o back-end.
//$rootScope = Responsável por todo o scopo da aplicação.
//$scope = responsável pela tela do controller
//$routeParams = Responsável por pegar os parametros passados na url.
//$location = Responsável pelos caminhos.
app.controller('alterarUsuarioCtrl', function(Restangular, $rootScope, $scope, $routeParams, $location) {

	$rootScope.activetab = $location.path();//ativa a aba
	$scope.minlength = 3;
	
	var usuarioVazio = {
        id: null,
        nome: "",
        cpf: "",
        dsEmail:"",
        senha:""
	}

	$scope.usuario = angular.copy($scope.usuarioVazio);
	
	console.log("############## teste param: "+$routeParams.idUsuario);
	
	//Pega o id do parametro passado na url, vai no back-end e retorna o dado
	Restangular.one("manterUsuario/findUsuarioById", $routeParams.idUsuario).get()
	.then(function(data) {
		console.log("antes de setar os dados no usuario");
		$scope.usuario = data;
		console.log("Carrega usuario para Alteração");
	 }
	);
	
});


//Controller responsavel por ter as ações de salvar e alterar
//como o metodo é o mesmo foi usado um controller para manter apenas um código
app.controller('salvarAlterarCtrl', function(Restangular, $scope, $location, UsuarioService) {

	//Deprecated - atualizar para o salvar2
    $scope.salvar = function() {
    	console.log("Entrando no função salvar");
        console.log($scope.usuario);
        
        $scope.usuario.cpf = $scope.usuario.cpf.replace( /[^0-9]+/g, '');
        Restangular.all("manterUsuario/saveUsuario").post($scope.usuario).then(function() {
            console.log("Usuario salvo");
        });
        
//        UsuarioService.salvar($scope.usuario);
        
        $scope.closeModal();
        $location.path('/pesquisarUsuario');
    };
    
    
    $scope.salvar2 = function() {
    	console.log("Entrando no função salvar2");
    	alert('aqui');
        console.log($scope.usuario);
        
        $scope.usuario.cpf = $scope.usuario.cpf.replace( /[^0-9]+/g, '');
        
        UsuarioService.salvar($scope.usuario);
        
        $scope.closeModal();
        $location.path('/pesquisarUsuario');
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

//Controller responsável por carregar a tela de Cadastrar Usuário
app.controller('cadastrarUsuarioCtrl', function(Restangular, $scope, $location) {
	
	$scope.minlength = 3;
	
	var usuarioVazio = {
        id: null,
        nome: "",
        cpf: "",
        dsEmail:"",
        senha:""
	}

	$scope.usuario = angular.copy($scope.usuarioVazio);
	
});

