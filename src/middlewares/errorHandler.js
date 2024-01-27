import mongoose from "mongoose";

const errorHandler = (error, req, res, next) => {
    if (error instanceof mongoose.Error.CastError) {
        return res.status(400).send({ message: "Bad Request" });
    }

    if (error instanceof mongoose.Error.ValidationError) {
        const errorMessage = Object.values(error.errors)
        .map(error => error.message)
        .join("; ");
        return res.status(400).send({ message: errorMessage })
    }

    res.status(500).send({ message: "Internal Server Error" });
}

export default errorHandler;