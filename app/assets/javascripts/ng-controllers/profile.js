
var app = angular.module('app', ['xeditable','angularFileUpload','ui.bootstrap','angular-medium-editor','firebase']);


app.controller('ProfileCtrl', ['$scope', '$http', '$location','$upload','$rootScope','$firebase','$modal','$log','$timeout', function($scope, $http, $location, $upload, $rootScope, $firebase,$modal,$log,$timeout) {


  $scope.user = {
    name: 'Name',
    profession: 'Profession',
    network: 'Network',
    shortBio: 'Short Bio'
  };  

  $scope.radioModel = '';



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
        file: file
      }).then(function(){
        getProfileProperties();
      })
    }
    
  }



  // Adding Images


  $scope.images = $firebase(new Firebase('https://ffolioapp.firebaseio.com/'+$scope.id+'/images/'));


  $scope.addImage = function(){ 
    var data = {title: '', medium: '', caption: '', genres: '',body: ''};
    $scope.images.$add(data)
    .then(function(ref) { 
      var id = ref.name(); 
      data.id = id;
      ref.set(data);
    });

  }

  $scope.removeImage = function(id){
    $scope.images.$remove(id);
  }

  $scope.saveImage = function(id){
    $scope.images.$save(id);
  }


  // Adding text


  $scope.writings = $firebase(new Firebase('https://ffolioapp.firebaseio.com/'+$scope.id+'/text/'));


  $scope.addText = function(){ 
    var data = {title: '', caption: '', genres: '',body: ''};
    $scope.writings.$add(data)
    .then(function(ref) { 
      var id = ref.name(); 
      data.id = id;
      ref.set(data);
    });

  }


  $scope.removeText = function(id){
    $scope.writings.$remove(id);
  }

  $scope.saveText = function(id){
    $scope.writings.$save(id);
  }




  // Modals


  var ModalInstanceCtrl = function ($scope, $modalInstance, collections) {

    $scope.collections = collections;
    $scope.selected = {
      collection: $scope.collections
    };

  }


  $scope.openEditor = function (size,id) {
    console.log(id);
    var modalInstance = $modal.open({
      templateUrl: 'myTextModal.html',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        collections: function () {
          return $scope.writings.id
          
        }
      }
    });

    modalInstance.result.then(function (selectedText) {
      $scope.selected = selectedText;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }

  $scope.openCollection = function (size,image) {
    console.log(image);
    var modalInstance = $modal.open({
      templateUrl: 'myImageModal.html',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        collections: function () {
          return "kittens!"
          
        }
      }
    });

    modalInstance.result.then(function (selectedImage) {
      $scope.selected = selectedImage
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }










}]);