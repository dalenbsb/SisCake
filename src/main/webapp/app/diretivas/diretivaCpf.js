app.directive('maskCpf', function() {
	return{
		require: '?ngModel',
		link: function(scope, element, attrs, ngModelCtrl){
			
			if(!ngModelCtrl) {
		        return; 
		      }
			
			//Todo digito cai aqui
			ngModelCtrl.$parsers.push(function(val) {
				
		        if (angular.isUndefined(val)) {
		        	console.log("undefined: "+val );	
		            var val = '';
		        }
		        
		        var clean = val.replace( /[^0-9]+/g, ''); //deixa só os numeros

		        var valSoNumero = val.replace(/[' ']/g,'');//remove os espaços em branco
		        valSoNumero = valSoNumero.split('.').join('');//tira os pontos
		        valSoNumero = valSoNumero.split('-').join('');//tira o '-';
		        
		        
		        if (valSoNumero !== clean) {//verifica se tem alguma letra
		        	val = val.substr(0, (val.length -1)); //tira o ultimo digito
		        	atualizarValor(val,ngModelCtrl);//atualiza o campo na tela
		        	return val;//retorna o valor
		        }
		        
		        if(val.length === 3 || val.length === 7){//caso posição 3 ou 7 concatena um '.'
		        	alterarValor(val,ngModelCtrl, '.');
		        }else if(val.length === 11){//caso posicao 11 concatena um '-'
			        alterarValor(val,ngModelCtrl, '-');
		        }else if(val.length > 14){//caso maior que 14 
		        	val = val.substr(0,14);//corta até a posição 14
		        	atualizarValor(val,ngModelCtrl);//atualiza o campo na tela
		        }
		        
		        return val;
			
		      });
			
			function alterarValor(val, ngModelCtrl, divisao){
				val = val.concat(divisao);
				atualizarValor(val, ngModelCtrl);
			}
			
			function atualizarValor(val, ngModelCtrl){
				ngModelCtrl.$setViewValue(val);
		        ngModelCtrl.$render();
			}
			
			element.bind('keypress', function(event) {
		        if(event.keyCode === 32) {
		          event.preventDefault();
		        }
		      });
		}
	}
});





