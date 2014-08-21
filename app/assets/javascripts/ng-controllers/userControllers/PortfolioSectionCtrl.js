angular.module('app').controller('PortfolioSectionCtrl', ['$scope', '$http', '$location', 'fileReader', '$upload', function($scope, $http, $location, fileReader, $upload) {

  $scope.id = (/users\/(\d+)/.exec($location.absUrl())[1]);

  $scope.url = '/users/' + $scope.id + '/collections';

}])