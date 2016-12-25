'use strict';

module.exports=function (options){
  return function(rq,rs,next){
      console.log(rq.method, rq.url);
      next();
  };
};