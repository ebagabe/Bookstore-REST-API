import mongoose from "mongoose";

const errorHandler = (error, req, res, next) => {
    if (error instanceof mongoose.Error.CastError) {
        return res.status(400).send({ message: "Bad Request" });
    }
    res.status(500).send({ message: "Internal Server Error" });
}

export default errorHandler;