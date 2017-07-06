var constants = require('./constants');


module.exports = {
    user : {
        type : Object,
        schema : {
            users : {
                type : Array,
                schema : {
                    type : Object,
                    schema : {
                        name :{
                            type : String,
                            required : true,

                            errors : {
                                type : {
                                    errorCode : constants.ERROR_CODES.INVALID_DATA_TYPE,
                                    message : constants.ERROR_MSGS.NAME_INVALID_DATA_TYPE
                                },
                                required : {
                                    errorCode : constants.ERROR_CODES.REQUIRED_FIELD,
                                    message : constants.ERROR_MSGS.NAME_REQUIRED
                                }
                            }
                        },
                        email : {
                            type : String,
                            required : true,

                            errors : {
                                type: {
                                    errorCode: constants.ERROR_CODES.INVALID_DATA_TYPE,
                                    message: constants.ERROR_MSGS.EMAIL_INVALID_DATA_TYPE
                                },
                                required: {
                                    errorCode: constants.ERROR_CODES.REQUIRED_FIELD,
                                    message: constants.ERROR_MSGS.EMAIL_REQUIRED
                                }
                            }
                        },
                        mobile_no : {
                            type : Number,
                            required : true,

                            errors : {
                                type : {
                                    errorCode : constants.ERROR_CODES.INVALID_DATA_TYPE,
                                    message : constants.ERROR_MSGS.MOBILE_NO_DATA_TYPE
                                },
                                required : {
                                    errorCode : constants.ERROR_CODES.REQUIRED_FIELD,
                                    message : constants.ERROR_MSGS.MOBILE_NO_REQUIRED
                                }
                            }
                        }
                    }
                }
            }
        }



    }
};