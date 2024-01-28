import mongoose from "mongoose";
import ErrorBase from "../errors/ErrorBase.js";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

const errorHandler = (error, req, res, next) => {
    if (error instanceof mongoose.Error.CastError) {
        return new IncorrectRequest().sendResponse(res);
    }

    if (error instanceof mongoose.Error.ValidationError) {
        return new ValidationError(error).sendResponse(res)
    }

    if (error instanceof NotFound) {
        return error.sendResponse(res)
    }

    return new ErrorBase().sendResponse(res)
}

export default errorHandler;