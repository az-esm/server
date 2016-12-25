var fs = require('fs');
var url = require('url');
const path = require('path');


module.exports = function (options) {
    './client';
    options = options || {};
    options.path=options.path || './'
    return function static_files_handler(rq, rs, next) {
        var rq_url = url.parse(rq.url, true);
        fs.readFile('./client' + rq_url.pathname, function (err, data) {
            if (err) {
                return next();
            }
            rs.writeHead(200, {
                'Content-Type': mime(path.extname(rq_url.pathname))
                , 'Content-Legth': data.length
            });

            rs.end(data);
        });
    }
};

