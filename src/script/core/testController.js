'use strict';

export default class TestController {
    /*@ngInject*/
    constructor ($scope, testService) {
        this.$scope = $scope;
        this.svc = testService;
        this.messages = this.svc.messages;
        this.message = 'Here\'s my message!';
        this.newMessage = '';
    }

    changeMyMessage () {
        this.svc.add(angular.copy(this.message));
        this.message = angular.copy(this.newMessage);
        this.$scope.$emit('TestController:message changed');
    }

}