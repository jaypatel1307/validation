const restify = require("restify");

const server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


var index = require('./routes/index')(server);

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});
