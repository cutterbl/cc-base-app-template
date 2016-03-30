'use strict';

angular.module('cc-grid-test-app', [
    'ui.bootstrap',
    'ui.router',
    'blockUI'
])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<h1>Home</h1>'
                });
        }
    ]);