var app = angular.module('app', ['xeditable','angularFileUpload']);


app.controller('ProfileCtrl', ['$scope', '$http', '$location','$upload','$rootScope', function($scope, $http, $location, $upload, $rootScope) {

  $scope.user = {
    name: 'Name',
    profession: 'Profession',
    network: 'Network',
    shortBio: 'Short Bio'
  };  



  $scope.id = (/users\/(\d+)/.exec($location.absUrl())[1]);

  var getProfileProperties = function(){
    $http.get('/users/' + $scope.id + '.json').success(function(data){
      $scope.user = data
      $scope.editable = ($scope.user.signInCount === 1) ? true : false
     });
    };

  getProfileProperties();



  $scope.updateProfile = function(property, value) {
    var data = {}
    data[property] = value
    $http.put('/users/' + $scope.id, data);
    getProfileProperties();
   }

  $scope.onFileSelect = function($files) {

    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: '/users/' + $scope.id,
        method: 'PUT',
        data: {avatar: ''},
        file: file
      }).then(function(){
        getProfileProperties();
      })
    }
    
  }












}]);