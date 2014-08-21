angular.module('app').controller('OrganisationShowCtrl', ['$scope', '$window', '$http', '$location', '$upload', 'fileReader', '$rootScope', function($scope, $window, $http, $location, $upload, fileReader, $rootScope) {


  $scope.id = (/organisations\/(\d+)/.exec($location.absUrl())[1]);


  var getOrganisationProperties = function(){
    $http.get('/organisations/' + $scope.id + '.json').success(function(data){
      $scope.organisation = data
     });
    };

  getOrganisationProperties();


  $scope.editable = false;

  $scope.updateProfile = function(property, value) {
    var data = {}
    data[property] = value
    $http.put('/organisations/' + $scope.id, data);
    getOrganisationProperties();
   }


  $scope.onFileSelect = function($files) {
    console.log('yo')
    if ($scope.editable) {
      for (var i = 0; i < $files.length; i++) {
        var file = $files[i];
        $scope.upload = $upload.upload({
          url: '/organisations/' + $scope.id,
          method: 'PUT',
          file: file
        }).then(function(){
            getOrganisationProperties();
          })
      }
    }
  }

  $scope.submitToThis = function(opportunityId) {
    $scope.showForm = true
    $scope.url = "/organisations/" + $scope.id + "/opportunities/" + opportunityId + "/submissions/new"
  }


  $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };


}])