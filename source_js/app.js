var app = angular.module('mp3',['ngRoute', 'movieControllers']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'galleryController'
      }).
      when('/details/:movieID', {
        templateUrl: 'partials/details.html',
        controller: 'detailsController'
      }).
      when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'listController'
      }).
      otherwise({
        redirectTo: '/gallery'
      });
  }]);