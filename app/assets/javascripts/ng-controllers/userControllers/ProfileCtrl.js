angular.module('app').controller('ProfileCtrl', ['$scope', 'getParams', '$window', '$http', '$location', '$upload','$rootScope', 'fileReader', function($scope, getParams, $window, $http, $location, $upload, $rootScope, fileReader) {

  $scope.user = {
    name: 'Name',
    profession: 'Profession',
    network: 'Network',
    shortBio: 'Short Bio'
  };


  $scope.userId = getParams.userId

  $scope.url = '/users/' + $scope.userId + '/collections';

  var getProfileProperties = function(){
    $http.get('/users/' + $scope.userId + '.json').success(function(data){
      $scope.user = data
     });
    };

  getProfileProperties();

  $scope.editable = ($window.location.search === "?editable=true") ? true : false

  $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };

  $scope.updateProfile = function(property, value) {
    var data = {}
    data[property] = value
    $http.put('/users/' + $scope.userId, data);
    getProfileProperties();
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
            getProfileProperties();
          })
      }
    }
  }

}])