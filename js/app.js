var myApp = angular.module('myApp',[]);

		myApp.controller('GreetingController', ['$scope','$http', function($scope, $http) {

			$http({
			  method: 'GET',
			  url: 'http://localhost:83/teste-skyone/products.json'
			}).then(function successCallback(response) {
			    $scope.products = response.data.products
			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
			 

		}]);