var devApp = angular.module('devApp', []);
devApp.controller('devCtrl', function($scope, $http){
	$http.get('../data/developers.json')
	.then(function (response) {
		$scope.developers = response.data.developers
	});
});
