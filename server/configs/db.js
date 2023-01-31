const mongoose = require('mongoose');

// const connection = mongoose.connect('mongodb://localhost:27017/Blog-app')
// module.exports = connection;


const ConnectToDatabase=()=>{
    //const connectLink = 'mongodb://127.0.0.1:27017/Insta-app';
    const connectLink  ='mongodb+srv://sukh:sukh123@cluster0.nxkglf2.mongodb.net/instagram?retryWrites=true&w=majority'

    return new Promise((resolve, reject)=>{
        mongoose.connect(connectLink)
        .then(()=>{
            console.log("Database Connected");
            resolve();
        })
        .catch((err)=>{
            console.log("Eror occured", err);
            reject(err);
        })
    })

}

module.exports = ConnectToDatabase;