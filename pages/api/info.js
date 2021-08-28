import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
import mongoose from 'mongoose';

const uri="mongodb+srv://grey:Vermilion9%23@cluster0.tkbdb.mongodb.net/users?retryWrites=true&w=majority"

const userInfo = async(req, res) => {
       
  const mail=req.body.user.email 
  console.log(mail)
  users.findOne({email:mail})
    .then((item)=>{
      console.log('found')
      res.send(item)
    })


}
//export default connectDB(userInfo);
export default connectDB(userInfo)
