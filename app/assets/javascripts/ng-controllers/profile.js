var app = angular.module("app", ["xeditable"]);

app.controller('ProfileCtrl', function($http, $scope, $location) {
  $scope.user = {
    name: 'Name',
    profession: 'Profession',
    network: 'Network',
    shortBio: 'Short Bio'
  };  


  $scope.id = (/users\/(\d+)/.exec($location.absUrl())[1]);

  var getProfileProperties = function(){
    $http.get('/users/' + $scope.id + '.json').success(function(data){
      $scope.name = data.name;
      $scope.profession = data.profession;
      $scope.network = data.network;
      $scope.shortBio = data.shortBio;
     });
    };

      getProfileProperties();


  $scope.updateProfile = function(property, value) {

    var data = {}
    data[property] = value
    $http.put('/users/' + $scope.id, data);
    console.log(data)
    getProfileProperties();
   }





});