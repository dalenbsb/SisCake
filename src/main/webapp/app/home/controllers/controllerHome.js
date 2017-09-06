'use strict';
app.controller('HomeCtrl', function($rootScope, $location) {
	 console.log("HomeCtrl");
	$rootScope.activetab = $location.path();
});
