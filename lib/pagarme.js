'use strict';

var Transactions = require('./transactions');

var Pagarme = module.exports = function (options) {
    this.api_key = options.api_key;
    this.transactions = new Transactions(this);
};
