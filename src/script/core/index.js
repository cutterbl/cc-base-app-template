'use strict';

import TestController from './testController';
import TestService from './testService';

module.exports = angular.module('app-core', [])
    .controller('TestController', TestController)
    .service('testService', TestService)
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state({
                    name: 'about',
                    url: '/about',
                    template: '<h1>About This</h1>'
                });
        }
    ]);