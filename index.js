// # Ghost Startup
// Orchestrates the startup of Ghost when run from command line.

var express,
    ghost,
    parentApp,
    errors;
var path = require('path');
require('./core/server/overrides');

// Make sure dependencies are installed and file system permissions are correct.
require('./core/server/utils/startup-check').check();

// Proceed with startup
express = require('express');
ghost = require('./core');
errors = require('./core/server/errors');


ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
});

