var app = angular.module('app', ['xeditable','angularFileUpload', 'angular-medium-editor', 'ngSanitize','ui.bootstrap']);


app.controller('ProfileCtrl', ['$scope', '$window', '$http', '$location', '$upload','$rootScope', 'fileReader', function($scope, $window, $http, $location, $upload, $rootScope, fileReader) {

  $scope.attributes = ["name", "profession", "network", "shortBio"]

  $scope.user = {
    name: 'Name',
    profession: 'Profession',
    network: 'Network',
    shortBio: 'Short Bio'
  };  


  $scope.id = (/users\/(\d+)/.exec($location.absUrl())[1]);

  $scope.url = '/users/' + $scope.id + '/collections';


  $scope.changeUrl = function() {
    $location.path('/users/' + $scope.id + '/collections');
    $scope.url = '/users/' + $scope.id + '/collections';
  };

  var getProfileProperties = function(){
    $http.get('/users/' + $scope.id + '.json').success(function(data){
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
    $http.put('/users/' + $scope.id, data);
    getProfileProperties();
   }


  $scope.onFileSelect = function($files) {
    console.log('c')
    var currentImage = $scope.user.userImage
    if ($scope.editable) {
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
  }

}]).controller('PortfolioSectionCtrl', ['$scope', '$http', '$location', 'fileReader', '$upload', function($scope, $http, $location, fileReader, $upload) {


  $scope.id = (/users\/(\d+)/.exec($location.absUrl())[1]);

  $scope.url = '/users/' + $scope.id + '/collections';

}]).controller('UploadCtrl', ['$scope', '$http', '$location', 'fileReader', '$upload', function($scope, $http, $location, fileReader, $upload) {

  $scope.text = "Write here..."

  $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };
 


}]).controller('CollectionShowCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

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
  



  

}]).controller('CollectionIndexCtrl', ['$scope', '$http', '$location', '$upload', 'fileReader', function($scope, $http, $location, $upload, fileReader){

  $scope.userId = (/users\/(\d+)/.exec($location.absUrl())[1]);

  $http.get('/users/' + $scope.userId + '.json').success(function(data){
    $scope.user = data;
  });

  $scope.updateCollection = function(property, value, collectionId) {
    var data = {}
    data[property] = value
    $http.put('/users/' + $scope.userId + '/collections/' + collectionId, data);
    // getProfileProperties();
   } 

<<<<<<< HEAD

  }]).controller('CollectionInstanceCtrl', ['$scope', '$http', '$location', 'fileReader', '$upload', function($scope, $http, $location, fileReader, $upload) {

    $scope.userId = (/users\/(\d+)/.exec($location.absUrl())[1]);


=======
>>>>>>> 2871eb116367d1c8ccbac630e9364f405afbc716
   $scope.getFile = function () {
    $scope.progress = 0;
    fileReader.readAsDataUrl($scope.file, $scope)
                  .then(function(result) {
                      $scope.imageSrc = result;
                  });
};

    $scope.testing = function() {
      alert('hi');
    }
    $scope.onFileSelect = function($files, collectionId) {
      console.log('Hello')
      // console.log($files)
    // if ($scope.editable) {
      console.log("hi")
      for (var i = 0; i < $files.length; i++) {
        var file = $files[i];
        $scope.upload = $upload.upload({
          url: '/users/' + $scope.userId + '/collections/' + collectionId + '/',
          method: 'PUT',
          file: file
        }).then(function(){
            getProfileProperties();
          })
      }
    // }
  }


  }]).controller('OrganisationNewCtrl', ['$scope', '$http', '$location', 'fileReader', '$upload', function($scope, $http, $location, fileReader, $upload) {


  $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };
 


}]).controller('OrganisationShowCtrl', ['$scope', '$window', '$http', '$location', '$upload', 'fileReader', '$rootScope', function($scope, $window, $http, $location, $upload, fileReader, $rootScope) {


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
            getProfileProperties();
          })
      }
    }
  }



  $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };


}]).controller('OpportunityNewCtrl', ['$scope', '$http', '$location', 'fileReader', '$upload', function($scope, $http, $location, fileReader, $upload) {


  $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };
 


}])
