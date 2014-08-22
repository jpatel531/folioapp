angular.module('app').factory('userData', ['$http', 'getParams', function($http, getParams){
	
	userData = {}

	userData.properties = {};

	userData.get = function(deferred){
		$http.get('/users/' + getParams.userId + '.json').success(function(data){
			userData.properties = data;
			// console.log("Successfully loaded")
			// return userData.properties
			if (deferred) { 
				deferred.resolve() 
			}
	});


	userData.update = function(property, value, collectionId) {
			var data = {}
			data[property] = value
			!collectionId ? $http.put('/users/' + getParams.userId, data) : $http.put('/users/' + getParams.userId + '/collections/' + collectionId, data);
		}
	};


	return userData

}]);