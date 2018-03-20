(function() {
    'use strict';

    //Initialize the module and create a controller
    var module = angular.module('scrumboard.demo', [])

    module.controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

    function ScrumboardController($scope, $http) {
        $scope.add = function(list, title) {
                var card = {
                    title: title
                };
                list.cards.push(card);
            };

        $scope.data = [];
        $http.get('/scrumboard/lists').then(function(response) {
            $scope.data = response.data;
        });
    }
}());