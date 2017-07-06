
var validator = require('isvalid');
var ExampleResponse = require('./exampleResponse');

var ApplicationUtils = function (){};

ApplicationUtils.validateRequest = function(schema,errorCallback){
    return function validate(request,response,next){
        validator((request.body || request.params),
            schema,
            function(err){
                if (err) {
                    if (errorCallback !== undefined) {
                        errorCallback(request, response);
                    }

                    var customResponse = new ExampleResponse(response);
                    customResponse.setStatusCode(err.message.errorCode)
                        .setResponseBody({error: err.message.message})
                        .send();
                } else {
                    next();
                }
            }
        );
    };
};

module.exports = ApplicationUtils;