'use strict';

export default class TestService {

    constructor () {
        this.messages = [];
    }

    add (message) {
        this.messages.push(message);
    }

}