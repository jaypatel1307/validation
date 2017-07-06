

var utility = require('../utility');
var validationSchema = require('../validation_schema');
var ExampleResponse = require('../exampleResponse');
var constants = require('../constants');



module.exports = function(server, User) {
    server.post("/", utility.validateRequest(validationSchema.user), function (req, res, next) {
        var name = req.body.Name;
        var email = req.body.Email;
        var mobile_no = req.body.Mobile_No;


        return res.send(req.body);

    });

    return this;
}

