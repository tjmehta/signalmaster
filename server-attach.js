/*global console*/
var yetify = require('yetify'),
    config = require('getconfig'),
    fs = require('fs'),
    sockets = require('./sockets'),
    port = parseInt(process.env.PORT || config.server.port, 10),
    server_handler = function (req, res) {
        res.writeHead(404);
        res.end();
    }

// Create an http(s) server instance to that socket.io can listen to
module.exports = function (server) {
    // Create an http(s) server instance to that socket.io can listen to
    server.listen(port);

    sockets(server, config);

    if (config.uid) process.setuid(config.uid);

    var httpUrl;
    if (config.server.secure) {
        httpUrl = "https://localhost:" + port;
    } else {
        httpUrl = "http://localhost:" + port;
    }
    console.log(yetify.logo() + ' -- signal master is running at: ' + httpUrl);
};