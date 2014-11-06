'use strict';

var https = require('https');

var Transaction = module.exports = function (pagarme) {
    this.pagarme = pagarme;
};

Transaction.prototype.charge = function (data) {};
