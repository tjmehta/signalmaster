/*global console*/
var yetify = require('yetify'),
    config = require('getconfig'),
    port = parseInt(process.env.PORT || config.server.port, 10),
    io = require('socket.io').listen(port);

require('io-events')(io);

console.log(yetify.logo() + ' -- signal master is running at: http://localhost:' + port);