app.directive('alert', function() {
	return{
		templateUrl: "app/html/alerta.html"
		,replace: true
//		restrict: "A", //Diretiva restrita ao atributo do elemento. Modo de usar (div alert></div>)
//		restrict: "E", //Diretiva restrita ao elemento. Modo de usar (<alert></alert>)
//		restrict: "C", //Diretiva restrita a classe do elemento. Modo de usar (div class="alert"></div>)
//		restrict: "M", //Diretiva restrita ao comentário do elemento <!--directive: alert--><div></div>
		,restrict: "E"
//		,scope:{
//			message:"@message"//variavel passado no scope. Modo de usar <alert message="alertando isso aqui!"></alert>
//		}
		
	}
});





