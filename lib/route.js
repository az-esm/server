'use strict';

function route(url_pattern,method,f){
    if(typeof method=='function'){
        f=method;
        method='';
    }
    if(typeof method=='string'){
        method=method.toUpperCase();
    }

    return function (rq,rs,next){
        var url=rq.url;

        if(url.indexOf(url_pattern)!=0){
            //TODO: use regex to path matching
            //TODO: use wild cards to path
            //TODO: allow parametrized paths
            next();
            return;
        }
        if(rq.method.indexOf(method)!=0){
            next();
            return;
        }
        f(rq,rs,next);
    }
}

module.exports=route;