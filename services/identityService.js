//import user schema 
const User = require('../model/users');


//render list of users with information
module.exports.list = async function(req,res){

    let users = await User.find({});
    
    return res.json(200,{
        message: "List of users",
        users: users
    });
}