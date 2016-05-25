myApp.controller('MalController', ['$scope', function ($scope) {
  $scope.imgNum = '1';
  $scope.imgName = '1.jpg';

  $scope.incrementImg = function () {
    $scope.imgNum++;
    console.log($scope.imgNum);
    if ($scope.imgNum > 5) {
      $scope.imgNum = 1;
    }

    if ($scope.imgNum == 3) {
      $scope.imgName = '3.png';
    } else {
      $scope.imgName = $scope.imgNum + '.jpg';
    }
  };

  $scope.decrementImg = function () {
    $scope.imgNum--;
    console.log($scope.imgNum);
    if ($scope.imgNum < 1) {
      $scope.imgNum = 5;
    }

    if ($scope.imgNum == 3) {
      $scope.imgName = '3.png';
    } else {
      $scope.imgName = $scope.imgNum + '.jpg';
    }
  };

}]);
