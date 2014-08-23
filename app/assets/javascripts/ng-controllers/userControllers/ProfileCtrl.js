angular.module('app').controller('ProfileCtrl', ['$q','$scope', 'userData' ,'getParams', '$window', '$http', '$location', '$upload','$rootScope', 'fileReader', function($q, $scope, userData, getParams, $window, $http, $location, $upload, $rootScope, fileReader) {

  console.log($scope)

  $scope.user = {
    name: 'Name',
    profession: 'Profession',
    network: 'Network',
    shortBio: 'Short Bio'
  };

  $scope.userId = getParams.userId

  $scope.url = '/users/' + $scope.userId + '/collections';

  var getUserData = function(){ $scope.user = userData.properties}

  deferred = $q.defer()
  deferred.promise.then(getUserData)
  userData.get(deferred)

  $scope.editable = ($window.location.search === "?editable=true") ? true : false

  $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };


  $scope.updateProfile = function(property, value) {
    userData.update(property, value, null)
  }


  $scope.onFileSelect = function($files) {
    console.log('c')
    var currentImage = $scope.user.userImage
    if ($scope.editable) {
      for (var i = 0; i < $files.length; i++) {
        var file = $files[i];
        $scope.upload = $upload.upload({
          url: '/users/' + $scope.userId,
          method: 'PUT',
          file: file
        }).then(function(){
            userData.get(deferred)
          })
      }
    }
  }

}])