'use strict';

var Server = require('../lib/server');
var route = require('../lib/route');
var mime = require('../lib/mime');
var logger=require('../lib/logger');
var static_files=require('../lib/static_files');

var server = new Server();
server.use(logger());

server.use(route('/ping', function (rq, rs, next) {
    rs.writeHead(200, {'Content-Type': 'text/plain'});
    rs.end('');
    next();
}));

server.use(route('/api/', function (rq, rs, next) {
    rs.writeHead(200, {'Content-Type': 'application/json'});
    rs.end('{}');
    next();
}));

/*try serve static files*/
server.use(route('/', static_files({path:'./client'}) ));

/*last handler default to unknow resourse*/
server.use(function (req, res,next) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('');
    next();
});
var port=process.env.PORT || 8080;
server.start(process.env.PORT || 8080);
console.log('started on port',port);

