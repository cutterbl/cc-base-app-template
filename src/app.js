'use strict';

angular.module('testApp', [
        'ui.router',
        'ui.bootstrap',
        require('./script').name
    ])
    .run([
        '$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ])
    .config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state({
                    name: 'home',
                    url: '/',
                    templateUrl: 'partials/home.html'
                });
        }
    ]);