import mongoose from "mongoose";
import ErrorBase from "../errors/ErrorBase.js";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import ValidationError from "../errors/ValidationError.js";

const errorHandler = (error, req, res, next) => {
    if (error instanceof mongoose.Error.CastError) {
        new IncorrectRequest().sendResponse(res);
    }

    if (error instanceof mongoose.Error.ValidationError) {
        new ValidationError(error).sendResponse(res)
    }

    new ErrorBase().sendResponse(res)
}

export default errorHandler;