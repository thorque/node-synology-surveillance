'use strict';

var Synology = function(options) {
    var syno = this;

    syno.query = function(userOptions, callback) {
        callback(userOptions.params);
        return userOptions;
    }

    syno.surveillance                   = {};
    syno.surveillance.camera            = require(__dirname + '/../lib/surveillance/camera')(syno);
    syno.surveillance.recording         = require(__dirname + '/../lib/surveillance/recording')(syno);
    syno.surveillance.event             = require(__dirname + '/../lib/surveillance/event')(syno);
    syno.surveillance.streaming         = require(__dirname + '/../lib/surveillance/streaming')(syno);
    syno.surveillance.videostream       = require(__dirname + '/../lib/surveillance/videostream')(syno);

    return syno;
};
module.exports = Synology;