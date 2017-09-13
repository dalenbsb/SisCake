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
//$rootScope = Responsável por todo o scopo da aplicação.
//$scope = responsável pela tela do controller
//$routeParams = Responsável por pegar os parametros passados na url.
//$location = Responsável pelos caminhos.
app.controller('alterarUsuarioCtrl', function($rootScope, $scope, $routeParams, $location, UsuarioService) {

	$rootScope.activetab = $location.path();//ativa a aba
	$scope.minlength = 3;
	
	$scope.usuario = angular.copy(UsuarioService.usuarioVazio());
	
//	UsuarioService.findById($routeParams.idUsuario, 	
//		//Essa função é o callback
//		function(data) {
//			console.log("antes de setar os dados no usuario");
//			$scope.usuario = data;
//			console.log("Carrega usuario para Alteração");
//	 	}
//	);
	

	UsuarioService.findByIdThen($routeParams.idUsuario).then( 	
		//Essa é o then
		function(data) {
			console.log("antes de setar os dados no usuario");
			$scope.usuario = data;
			console.log("Carrega usuario para Alteração");
		}
	);
		
	
	
	console.log('########### usuario consultado: ' + $scope.usuario);
});


//Controller responsavel por ter as ações de salvar e alterar
//como o metodo é o mesmo foi usado um controller para manter apenas um código
app.controller('salvarAlterarCtrl', function($scope, $location, UsuarioService) {
   
    $scope.salvar = function() {
    	console.log("Entrando no função salvar");
        
        $scope.usuario.cpf = $scope.usuario.cpf.replace( /[^0-9]+/g, '');
        
        UsuarioService.salvarAlterar($scope.usuario);
        
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

