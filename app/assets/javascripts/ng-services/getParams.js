angular.module('app').factory('getParams', ['$location', function($location){
	return {
		userId: (/users\/(\d+)/.exec($location.absUrl())[1])
	}
}]);