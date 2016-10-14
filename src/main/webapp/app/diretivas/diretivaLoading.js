app.directive('loading',['$http',function($http) {
	return {
		restrict: 'E',
		replace: true,
//		template: '<div ng-show="loading" class="container bg-info">Carregando...</div>',
		templateUrl:'app/html/carregando.html', 
		
		link: function (scope, elm, attrs){
			scope.isLoading = function (){
				return $http.pendingRequests.length > 0;
			}
			
			scope.$watch(scope.isLoading, function (v){
				if(v){
					elm.show;
					scope.loading= true;
					console.log("show carregando");
				}else{
					elm.hide;
					scope.loading= false;
					console.log("hide carregando");
				}
			});
		}
	}
}]);