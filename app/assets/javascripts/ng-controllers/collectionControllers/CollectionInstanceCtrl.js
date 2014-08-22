angular.module('app').controller('CollectionInstanceCtrl', ['getParams', '$scope', '$http', '$location', 'fileReader', '$upload', function(getParams, $scope, $http, $location, fileReader, $upload) {

  $scope.userId = getParams.userId
  console.log(getParams)

 $scope.getFile = function() {
    $scope.progress = 0;
    fileReader.readAsDataUrl($scope.file, $scope)
                  .then(function(result) {
                      $scope.imageSrc = result;
                  });
    };


    $scope.onFileSelect = function($files, collectionId) {
      console.log('Hello')
      console.log("hi")
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