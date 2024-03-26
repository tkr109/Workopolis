const express=require('express')
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json())
const port=5000
const dbConfig=require('./config/dbConfig')
const usersRoute=require("./routes/usersRoute")

app.use("/api/users", usersRoute);

app.listen(port,()=>{
    console.log(" server started")
})