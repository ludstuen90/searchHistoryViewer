
var HST = angular.module('HST', []);

HST.controller('baseController', ['$scope', '$http', function($scope, $http){

console.log('angular working');

$scope.getData = function(){
  console.log('click received!');

$http({
  method: 'GET',
  url: '/data/2011-01-01 De enero de 2011 a marzo de 2011.json'
}).then(function(response){
  console.log(response.data.event);
  $scope.searches= response.data.event;
});


function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}



};

}]);
