/*global console*/
var yetify = require('yetify'),
    config = require('getconfig');

module.exports = function (server) {
    var io = require('socket.io').listen(server);

    require('./io-events')(io);

    console.log(yetify.logo() + ' -- signal master started');
};