angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://baseUrl/exampleResponse').
        then(function(response) {
            $scope.exampleResponse = response.data;
        });
});
