const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message

    if(err.code === 11000) {
        const message = "Duplicate field value entered"
        error = new errorResponse(message, 400);
    }

    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map(ele=>ele.message);
        error = new errorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error : error.message || "Server error"
    })
}

module.exports = errorHandler;