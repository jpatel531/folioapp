angular.module('app').directive("ngFileSelect",function(fileReader){

  return {
    link: function($scope,el){
      
      el.bind("change", function(e){
      
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile = function() {
			$scope.progress = 0;
    		fileReader.readAsDataUrl($scope.file, $scope)
                  .then(function(result) {
                      $scope.imageSrc = result;
                  });
    	};
        $scope.getFile();
      })
      
    }
    
  }
    
});