var app = angular.module('app', ['xeditable','angularFileUpload', 'angular-medium-editor']);


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
     });
    };

  getProfileProperties();
  $scope.editable = ($scope.user.signInCount === 1) ? true : false


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
        file: file
      }).then(function(){
        getProfileProperties();
      })
    }
    
  }

}]).controller('UploadCtrl', ['$scope', '$http', '$location','$upload','$rootScope', function($scope, $http, $location, $upload, $rootScope) {



}]).controller('CollectionCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  $scope.userId = (/users\/(\d+)/.exec($location.absUrl())[1]);
  

  var returnCollectionById = function(){
    var collectionId = (/collections\/(\d+)/.exec($location.absUrl())[1]);
    for (var i = 0; i < $scope.user.collections.length ; i++) {
      if ($scope.user.collections[i].id == collectionId) {
        $scope.collection = $scope.user.collections[i];
      }
    }
  };

  $http.get('/users/' + $scope.userId + '.json').success(function(data){
    $scope.user = data;
  }).then(function(){
    returnCollectionById();
  });





}])
