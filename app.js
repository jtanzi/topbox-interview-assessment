var interactionApp = angular.module('interactionApp', []);

function formatTime(t) {
  var h = "00";  // Later, determine how to calculate hours
  var m = Math.floor(t / 60) > 9 ? Math.floor(t / 60).toString() : '0' + Math.floor(t / 60).toString();
  var s = t % 60 > 9 ? (t % 60).toString() : '0' + (t % 60).toString();
  return h.toString() + ':' + m + ':' + s;
}

interactionApp.controller('TimelineController', function TimelineController($scope, $http) {
  $scope.items = [];
  $scope.formatTime = formatTime;

   $http.get('data/data1.json').then(function(response) {
     $scope.items = response.data;
     console.log($scope.items);
   });


});
