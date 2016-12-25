'use strict';

var http = require('http');

function Server() {
    var server = http.createServer(requestHandler);
    var midlewares = [];

    this.use = function (mw) {
        midlewares.push(mw);
    };
    this.start = function (port) {
        server.listen(port)
    };

    function requestHandler(rq, rs) {
        var i = 0;
        midlewares[i](rq, rs, function next(err) {
            if (err) {
                rs.writeHead(500, {'Content-Type': 'text/plain'});
                rs.end(JSON.stringify(err));
                return;
            }
            i++;
            if (!midlewares[i]) {
                if (rs.finished) {
                    return;
                }
                rs.writeHead(204, {'Content-Type': 'text/plain'});
                rs.end('');
            }
            return midlewares[i](rq, rs, next);

        });
    }
}
module.exports=Server;