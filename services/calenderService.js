const Event = require('../model/calenderBooking');
const User = require('../model/users');

//this will create the event along with the user id
module.exports.createEvent = function(req,res){


        console.log(req.params.id);

        User.findById(req.params.id,function(err,user){
            if(err)
            {
                console.log("error in finding user",err);
                return res.json(200,{
                    message:"Internal server error"
                })
            }
                Event.create({
                eventName:req.body.eventName,
                eventDate: req.body.eventDate,
                eventTime: req.body.eventTime,
                user:req.params.id
            },function(err,event){
                if(err)
                {
                    console.log("error in creating report ",err);
                    return;
                }
                console.log(event)
                console.log(user.event)
                user.event.push(event);
                user.save();
                return res.json(200,{
                    data: {
                        event:event
                    },
                    message: "Event created"
                });
            });
     });

}
   
//this will show all the events of user according to the user ID 
module.exports.list = function(req,res){

    let userID = req.params.id;
    
        Event.find({user:userID},function(err,event){
            console.log(event);
            return res.json(200,{
                message: "List of events",
                events:event               
            });
        }).sort('createdAt');//oldest report first then  newest
    
}