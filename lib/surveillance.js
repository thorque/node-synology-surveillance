'use strict';

var util = require('util');

function info() {
    /*jshint validthis:true */
    var
        userParams =
                typeof arguments[0] === 'object' ? arguments[0] :
        {},
        callback =
                typeof arguments[1] === 'function' ? arguments[1] :
                typeof arguments[0] === 'function' ? arguments[0] :
            null
        ;
    var params = {
        api    : 'SYNO.SurveillanceStation.Info',
        version: 1,
        method : 'getInfo'
    };
    util._extend(params, userParams);

    var query = this.query({
        path: '/webapi/SurveillanceStation/info.cgi',
        params: params
    }, callback || null);

    return query;
}

module.exports = function(syno) {
    return {
        info  : info.bind(syno)
    };
};
