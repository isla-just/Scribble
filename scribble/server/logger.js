//creating our own logger to log requests
module.exports=function(request, response, next){
    //create variables
    var start =+ new Date;

    //what does this do?
    var stream= process.stdout;
    var url=request.url;
    var method=request.method;

    //respond once middleware finsihed
    response.on('finish', function(){
        var duration = +new Date()- start; //how long it took
        var message ='Request to' +url+'('+method+')';
        var message = message +': '+duration+' millieseconds, \n';
        stream.write(message);
    });

    //move to next middleware in the chain
    next();

}