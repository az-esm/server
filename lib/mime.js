'use strict';
var map = {
    html: {
        'type': 'text/html'
    },
    json: {
        'type': 'application/json'
    },
    js: {
        'type': 'text/javascript'
    },
    css: {
        'type': 'text/css'
    },
    png: {
        'type': 'image/png'
    }
};
for (var k in map) {
    map['.' + k] = map[k];
}

module.exports = function (ext) {
    return map[ext] && map[ext].type || 'application/octet-stream';
};
