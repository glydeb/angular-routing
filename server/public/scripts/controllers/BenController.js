

myApp.controller('BenController', ['$scope', function ($scope) {
  $scope.imgNum = '1';

  $scope.incrementImg = function () {
    $scope.imgNum++;
    console.log($scope.imgNum);
    if ($scope.imgNum > 6) {
      $scope.imgNum = 1;
    }
  };

  $scope.decrementImg = function () {
    $scope.imgNum--;
    console.log($scope.imgNum);
    if ($scope.imgNum < 1) {
      $scope.imgNum = 6;
    }
  };

}]);
