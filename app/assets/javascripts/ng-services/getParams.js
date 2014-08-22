angular.module('app').factory('getParams', ['$location', function($location){
	
	var getCollectionId = function() {
		return (/collections\/(\d+)/.exec($location.absUrl())) ? (/collections\/(\d+)/.exec($location.absUrl())[1]) : null
	}



	return {
		userId: (/users\/(\d+)/.exec($location.absUrl())[1]),
		collectionId: getCollectionId()
	}
}]);

