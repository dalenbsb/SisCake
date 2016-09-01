app.directive('loading',['$http',function($http) {
	return {
		restrict: 'E',
		replace: true,
		template: '<div ng-show="loading" class="bg-info">Carregando...</div>',
		
//		template:
//		'<div class="modal" modal="true" ng-show="true">'
//			+'<div class="modal-dialog">'
//				+'<div class="modal-content">'
//  					+'<div class="modal-header">'
//  						+'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'
//  						+'<h4 class="modal-title">Delete confirmation</h4>'
//  					+'</div>'
//  					+'<div class="modal-body">'
//  						+'<p>Are you sure?</p>'
//  					+'</div>'
//  					+'<div class="modal-footer">'
//  						+'<!--         				<button type="button" class="btn btn-default" data-dismiss="modal" ng-click="cancel()">No</button> -->'
//  						+'<!--         				<button type="button" class="btn btn-primary" ng-click="ok()">Yes</button> -->'
//					+'</div>'
//				+'</div>'
//			+'</div>'
//		+'</div>',
		
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