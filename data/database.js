const mongoose = require("mongoose")

module.exports = connectDb = () => {
    mongoose.connect(process.env.MONGO_URI,{
    dbName : "backendapi",
})
.then(() => console.log("Database Connected"))
.catch((error) => console.log(error));
}