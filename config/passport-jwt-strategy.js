const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
//this extract header from passport-jwt
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../model/users');

let option = {

    //this extract jwt from header then token from passport-jwt
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    //this is decryption key
    secretOrKey: 'event'
}

passport.use(new JwtStrategy(option , function(jwtPayloads,done,res){
    //console.log('******************************************* ', jwtPayloads);
    User.findById(jwtPayloads._id,function(err,user){
       if(err){console.log('Error in finding user',err);return;}
    
        if(user){

            return done(null,user);
        }else{
            return done(null,false);
        }

    });

}));


//check the user is authenticate
passport.checkAuthentication = function(req , res , next){
    //if the user is signed in then show the next page of the user means next request execute
    if(req.isAuthenticated()){
        return next();
    }

}

//to send the user data to views if user is authenticated
//middleware
passport.setAuthenticatedUser = function(req , res , next,){
    
    if(req.isAuthenticated()){

        //req.user contains the user data from the session cookies and we send this data to local
        res.locals.user = req.user;
    }
        next();
}



module.exports = passport;