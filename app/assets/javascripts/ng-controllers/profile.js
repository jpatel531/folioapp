var app = angular.module("app", ["xeditable", "ngResource"]);

app.controller('Ctrl', function($http, $scope, $location, $resource) {
  $scope.user = {
    name: 'Name',
    profession: 'Profession',
    network: 'Network'
  };  

  $scope.id = (/users\/(\d+)/.exec($location.absUrl())[1]);

  var displayName = function(){
    $http.get('/users/' + $scope.id + '.json').success(function(data){
      $scope.name = data.name
      console.log("bla bla")
     });
    };

  displayName();

  $scope.updateName = function(data) {
    $http.put('/users/' + $scope.id, {name: data});
    displayName()
   }





});