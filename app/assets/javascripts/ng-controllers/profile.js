var app = angular.module("app", ["xeditable"]);

app.controller('ProfileCtrl', ['$http', '$scope', '$location', function($http, $scope, $location) {
  $scope.user = {
    name: 'Name',
    profession: 'Profession',
    network: 'Network',
    shortBio: 'Short Bio'
  };  

  $scope.editable = true;

  console.log($scope.editable)

  $scope.id = (/users\/(\d+)/.exec($location.absUrl())[1]);

  var getProfileProperties = function(){
    $http.get('/users/' + $scope.id + '.json').success(function(data){
      $scope.user = data
     });
    };

  getProfileProperties();

  $scope.updateProfile = function(property, value) {
    var data = {}
    data[property] = value
    $http.put('/users/' + $scope.id, data);
    getProfileProperties();
   }





}]);