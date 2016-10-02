var HST = angular.module('HST', []);

HST.controller('baseController', ['$scope', '$http', function($scope, $http){


$scope.i=0;

$scope.timeUpdater = function(){
  $scope.i++;

  $scope.time= new Date ($scope.searches[$scope.i].query.id[0].timestamp_usec /1000);
  console.log($scope.i, 'is now i');
  // $scope.$apply();
  // var time = $scope.time;
};

$scope.convertTimeStamps = function() {
  for ($scope.i = 0; $scope.i < $scope.searches.length; $scope.i++) {
      $scope.d = new Date ($scope.searches[$scope.i].query.id[0].timestamp_usec /1000);
      $scope.searches[$scope.i].query.id[0].timestamp_usec = $scope.d;
  }

};



$scope.getData = function(){
  console.log('click received!');

$http({
  method: 'GET',
  url: '/data/2011-01-01 De enero de 2011 a marzo de 2011.json'
}).then(function(response){
  console.log(response.data.event);
  $scope.searches= response.data.event;
  console.log('length of seraches is ', $scope.searches.length);
  $scope.convertTimeStamps();
  // $scope.time= $scope.searches[$scope.i].query.id[0].timestamp_usec;


});
};

}]);
