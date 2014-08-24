angular.module('app').controller('OrganisationShowCtrl', ['$q','$scope', 'getParams', 'userData', '$window', '$http', '$location', '$upload', 'fileReader', '$rootScope', function($q, $scope, getParams, userData, $window, $http, $location, $upload, fileReader, $rootScope) {


  $scope.id = getParams.organisationId;

  var getOrganisationProperties = function(){ $scope.organisation = userData.properties };


  deferred = $q.defer();
  deferred.promise.then(getOrganisationProperties);
  userData.get(deferred, true);


  $scope.editable = false;

  $scope.updateProfile = function(property, value) {
    userData.update(property, value, null, true)
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
            // getOrganisationProperties();
          })
      }
    }
  }

  $scope.submitToThis = function(opportunityId) {
    $scope.showForm = true
    $scope.url = "/organisations/" + $scope.id + "/opportunities/" + opportunityId + "/submissions/new"
  }



}])