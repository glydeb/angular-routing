var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/ender', {
      templateUrl: '/views/ender.html',
      controller: 'EnderController',
    })
    .when('/mal', {
      templateUrl: '/views/mal.html',
      controller: 'MalController',
    })
    .when('/ben', {
      templateUrl: '/views/ben.html',
      controller: 'BenController',
    })
    .otherwise({
      redirectTo: 'mal',
    });
}]);
