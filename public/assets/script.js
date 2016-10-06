var HST = angular.module('HST', []);

HST.controller('baseController', ['$scope', '$http', function($scope, $http){
$scope.i=0;

//During testing, script executes automatically
$scope.searches = [];
$scope.dates= [];



$http({
  method:'GET',
  url: '/data/myRecords.json',
}).then(function(response){
  // console.log(response.data);
  // $scope.searches = response.data;
  $scope.dragon = response.data;
  // console.log($scope.dragon);
}).then(function(){
  console.log('made it here');
  angular.forEach($scope.dragon, function (value, key){
    angular.forEach(value.event, function(timestamp){
      // temporarily disabling this for rendering speed
      // console.log('about to push ', timestamp.query);
      $scope.searches.push(timestamp.query);
      // console.log(timestamp.query.id);
      angular.forEach(timestamp.query.id, function(time, key){
        // console.log(time.timestamp_usec, key);
        $scope.D = new Date(time.timestamp_usec / 1000);
        // console.log($scope.D);
        $scope.dates.push($scope.D);
        timestamp.query.id[key] = $scope.D;
      });

      //this logs out every serach query
      // console.log(timestamp.query);

      // logs out every timestamp array  for each search
      // console.log(timestamp.query.id);

      // logs out every query I've ever made!
      // console.log(timestamp.query.query_text);



    });
  });
}).then(function(){
  console.log($scope.dates);
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


$scope.testSend = function(){
console.log('test send initiated');
  var sendTest = $scope.dates;
  localStorage.setItem("dates", $scope.dates);


  // console.log(sendTest);
  //
  // $http({
  //   method: 'POST',
  //   url: '/sendTimes',
  //   data: sendTest
  // });


  // $http({
  //   method: 'POST',
  //   url: '/sendTimes',
  //   data: sendTest
  // }).then(function(){
  //   console.log('completed send');
  // });

};

$scope.saveQuery = function(){
  console.log('click received!');
  console.log($scope.dates);


  // $http({
  //   method: 'POST',
  //   url: '/sendTimes',
  //   data: $scope.dates
  // }).then(function(){
  //   console.log('complete');
  // });

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
