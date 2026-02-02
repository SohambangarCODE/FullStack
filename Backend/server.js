require('dotenv').config()
const app = require('./src/app')
const connectedtoDb = require('./src/Config/database')

connectedtoDb();

app.listen(3000, ()=>{
    console.log("port is successfully running on port 3000");
})
