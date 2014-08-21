angular.module('app').controller('UploadCtrl', ['$scope', '$http', '$location', 'fileReader', '$upload', function($scope, $http, $location, fileReader, $upload) {

  $scope.text = "Write here..."

  $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };



}]);