angular.module('app').controller('CollectionIndexCtrl', ['$scope', 'userData', '$http', '$location', '$upload', 'fileReader', function($scope, userData, $http, $location, $upload, fileReader){

  $scope.userId = (/users\/(\d+)/.exec($location.absUrl())[1]);

  $http.get('/users/' + $scope.userId + '.json').success(function(data){
    $scope.user = data;
  });

   $scope.updateCollection = function(property, value, collectionId) {
      userData.update(property, value, collectionId)
    }

   $scope.createCollection = function() {
    $http.post('/users/' + $scope.userId +'/collections', {createNewCollection: $scope.userId}).then(function(){
      $http.get('/users/' + $scope.userId + '.json').success(function(data){
        $scope.user = data
      })
    })
   }

   $scope.deleteCollection = function(collectionId){
    $http.delete('/users/' + $scope.userId + '/collections/' + collectionId).then(function(){
      $http.get('/users/' + $scope.userId + '.json').success(function(data){
        $scope.user = data
      })
    })
   };


}])