const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
console.log("Mongo URL:", process.env.MONGO_URL);


connectDB();

const app = express();

app.use(express.json());


app.use("/api/auth",
require("./routes/authRoutes")
);


app.use("/api/tasks",
require("./routes/taskRoutes")
);


app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`);
});