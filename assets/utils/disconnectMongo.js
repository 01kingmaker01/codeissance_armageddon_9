import mongoose from "mongoose";

const disconnectMongo = async () => mongoose.disconnect()

export default disconnectMongo