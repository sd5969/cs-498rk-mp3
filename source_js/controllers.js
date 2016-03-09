var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('detailsController', ['$scope', '$http', '$routeParams', '$filter', '$location', function($scope, $http, $routeParams, $filter, $location) {

	$scope.movieID = $routeParams.movieID;

	$http.get('data/imdb250.json').success(function(data) {
		$scope.movies = data;
		$scope.movie = $filter('filter')($scope.movies, { imdbID : $scope.movieID});
		var prevRank = ($scope.movie[0].rank > 1) ? $scope.movie[0].rank - 1 : 250;
		var nextRank = ($scope.movie[0].rank < 250) ? $scope.movie[0].rank + 1 : 1;
		$scope.prevMovie = $filter('filter')($scope.movies, { rank : prevRank});
		$scope.nextMovie = $filter('filter')($scope.movies, { rank : nextRank});
	});

}]);

movieControllers.controller('galleryController', ['$scope', '$http', function($scope, $http) {
	$http.get('data/imdb250.json').success(function(data) {
		$scope.movies = data;

		// http://stackoverflow.com/questions/7875070/how-to-flatten-array-in-jquery
		// http://stackoverflow.com/questions/17780508/selecting-distinct-values-from-a-json

		var distinctGenres = $.unique($.map($scope.movies.map(function(d) {return d.genre}), function(c) {return c}));
		$scope.genres = $.map(['All', distinctGenres], function(c) {return c});
	});

	$scope.filterGenre = '';

	$scope.changeGenre = function(x) {
		$scope.filterGenre = x === 'All' ? '' : x;
	}
}]);

movieControllers.controller('listController', ['$scope', '$http', function($scope, $http) {

}]);