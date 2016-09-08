app.directive('loading',['$http',function($http) {
	return {
		restrict: 'E',
		replace: true,
//		template: '<div ng-show="loading" class="bg-info">Carregando...</div>',
		
		template:
		'<div class="modal" ng-show="loading" style="float: left; margin-left: 218px; margin-top: -326px;">'
			+'<div class="modal-dialog">'
				+'<div class="modal-content">'
  					+'<div class="modal-body">'
  						+'<p>Carregando...</p>'
  					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>',
		
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