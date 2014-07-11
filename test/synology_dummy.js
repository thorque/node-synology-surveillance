'use strict';

var Synology = function(options) {
    var syno = this;

    syno.query = function(userOptions, callback) {
        callback(userOptions.params);
        return userOptions;
    }

    syno.surveillance        = {};
    syno.surveillance.camera = require(__dirname + '/../lib/surveillance/camera')(syno);

    return syno;
};
module.exports = Synology;