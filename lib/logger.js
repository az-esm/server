'use strict';

module.exports=function (options){
  return function(rq,rs,next){
      var host_header = rq.headers['host'];
      console.log(host_header,rq.method, rq.url);
      next();
  };
};