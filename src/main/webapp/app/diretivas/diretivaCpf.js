app.directive('maskCpf', function() {
	return{
		require: '?ngModel',
		link: function(scope, element, attrs, ngModelCtrl){
			
			if(!ngModelCtrl) {
		        return; 
		      }
			
			//Todo digitação cai aqui
			ngModelCtrl.$parsers.push(function(val) {
				console.log('val: '+ val);
		        if (angular.isUndefined(val)) {
		            var val = '';
		        }
		        
		        //casa o val tenha um digito diferente de numero é removido e 
		        //atribuido na variavel clean
		        var clean = val.replace( /[^0-9]+/g, '');
		        console.log('clean: '+ clean);
		        //verifica se val é diferente de clean
		        if (val !== clean) {
		        	console.log('digito diferente de numero');
		        	ngModelCtrl.$setViewValue(clean);
		        	ngModelCtrl.$render();
		        }

		        return clean;
		      });
			
			
		}
	}
});


