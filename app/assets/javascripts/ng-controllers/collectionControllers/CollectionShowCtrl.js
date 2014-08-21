angular.module('app').controller('CollectionShowCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  $scope.userId = (/users\/(\d+)/.exec($location.absUrl())[1]);



  var findPortfolioSelection = function(){
    var workIndex;
    if (workIndex = (/#\/(\d+)/.exec($location.absUrl()))) {
      $scope.portfolioSelection = parseInt(workIndex[1], 10);
      console.log($scope.portfolioSelection)
    }else {
      $scope.portfolioSelection = 0;
    }
  };



  findPortfolioSelection();

  $scope.changePath = function(number){
    $location.path('/' + number)
  };

  $scope.changePath($scope.portfolioSelection)

  $scope.$watch('portfolioSelection', function(){
    $scope.changePath($scope.portfolioSelection)
  })

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

  $scope.sendSelection = function(id){
    var data = {}
    data["workSelection"] = []
    data["workSelection"].push(id)
    $http.put('/users/' + $scope.userId + '.json', data);
  };


  $scope.currentWork = function(){
    return $scope.collection.works[$scope.portfolioSelection];
  };

 $scope.displayFull = function(work){
    $scope.portfolioSelection = $scope.collection.works.indexOf(work);
  };

  $scope.togglePortfolio = function(e){
    console.log("HELLO WORLD!!!!")
    if (e.keyCode === 39) {
      e.preventDefault();
      // angular.element(".nav").fadeTo('fast', 1)
      if ($scope.portfolioSelection < $scope.collection.works.length - 1) {
        $scope.portfolioSelection += 1
      }
      else {
        return;
      }
    }
    else if (e.keyCode === 37) {
      e.preventDefault();
      // angular.element(".nav").fadeTo('fast', 1)
      if ($scope.portfolioSelection > 0) {
        $scope.portfolioSelection -= 1
      }
      else {
        return;
      }
    }

  };






}])