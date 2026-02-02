const mongoose = require('mongoose')

function connectedtoDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to DB");
        
    })
}

module.exports = connectedtoDb