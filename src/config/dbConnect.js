import mongoose from "mongoose";

async function databaseConnect() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.g4ggftp.mongodb.net/bookstore?retryWrites=true&w=majority");

    return mongoose.connection;
};

export default databaseConnect

