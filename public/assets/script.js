var HST = angular.module('HST', []);

HST.controller('baseController', ['$scope', '$http', function($scope, $http){
$scope.i=0;

//During testing, script executes automatically


$http({
  method:'GET',
  url: '/data/myRecords.json',
}).then(function(response){
  // console.log(response.data);
  $scope.dragon = response.data;
  console.log($scope.dragon);
}).then(function(){
  console.log('made it here');
  angular.forEach($scope.dragon, function (value, key){

    angular.forEach(value.event, function(timestamp){
      //this logs out every serach query
      // console.log(timestamp.query);
      console.log(timestamp.query);
    });

  });
});

// $scope.timeUpdater = function(){
//   $scope.i++;
//
//   $scope.time= new Date ($scope.searches[$scope.i].query.id[0].timestamp_usec /1000);
//   console.log($scope.i, 'is now i');
//   // $scope.$apply();
//   // var time = $scope.time;
// };

$scope.convertTimeStamps = function() {
  for ($scope.i = 0; $scope.i < $scope.searches.length; $scope.i++) {
      $scope.d = new Date ($scope.searches[$scope.i].query.id[0].timestamp_usec /1000);
      $scope.searches[$scope.i].query.id[0].timestamp_usec = $scope.d;
  }
};

$scope.getData = function(){
  console.log('click received!');
  // $http({
  //   method: 'GET',
  //   url: '/data/1.json'
  // }).then(function(response){
  //   $scope.searches= response.data.event;
  //   $http({
  //     method: 'GET',
  //     url: '/data/2.json'
  //   }).then(function(response){
  //     console.log(response.data.event);
  //     // $scope.searches += response.data.event;
  //     console.log($scope.searches);
  //   });
  // });




// Original AJAX Call that works just fine
// $http({
//   method: 'GET',
//   url: '/data/myRecords.json'
// }).then(function(response){
//   console.log(response.data.event);
//   $scope.searches= response.data.event;
//   $scope.convertTimeStamps();
// });



};
}]);
