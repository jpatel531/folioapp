angular.module('app').controller('CollectionInstanceCtrl', ['getParams', '$scope', '$http', '$location', 'fileReader', '$upload', function(getParams, $scope, $http, $location, fileReader, $upload) {

  $scope.userId = getParams.userId


    $scope.onFileSelect = function($files, collectionId) {
      for (var i = 0; i < $files.length; i++) {
        var file = $files[i];
        $scope.upload = $upload.upload({
          url: '/users/' + $scope.userId + '/collections/' + collectionId + '/',
          method: 'PUT',
          file: file
        }).then(function(){
            getProfileProperties();
          })
      }
  }


  }])