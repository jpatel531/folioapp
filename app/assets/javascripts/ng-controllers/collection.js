var app = angular.module("app", ["xeditable"]);

app.controller('CollectionsCtrl', ['$http', '$scope', '$location', function($http, $scope, $location) {


	$scope.userID = (/users\/(\d+)/.exec($location.absUrl())[1]);

	$http.get('/users/' + $scope.userID + '.json').success.function(data){
		$scope.collections = data.collections;
	});
























}]);