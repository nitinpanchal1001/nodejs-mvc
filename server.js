const app = require("./app")
const connectDb = require("./data/database.js")

connectDb()


app.listen(5000 , () => {
    console.log("server is working");
});