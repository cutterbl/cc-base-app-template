'use strict';

import TestController from './testController';

describe ('TestController', function () {
    var $scope,
        ctrl;

    beforeEach (inject (function (_$rootScope_) {
        $scope = _$rootScope_.$new();
        ctrl = new TestController($scope);
    }));

    describe ('methods', function () {
        it ('changeMyMessage', function () {
            ctrl.newMessage = 'foo';
            $scope.$digest();
            ctrl.changeMyMessage();
            $scope.$digest();
            expect(ctrl.message).toEqual(ctrl.newMessage);
        });
    });
});