var mongoose = require('mongoose');

var usersignup = mongoose.Schema(
  {
       name:String , 
       empid:String,
        mail:String,
         pwd:String
  }
  
);
module.exports=mongoose.model('usersignup',usersignup);
