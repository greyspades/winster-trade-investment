import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
//const users =require('../../middleware/models')

const handler = async (req, res) => {
 
  console.log(req.body.user)
  users.findOne({email:req.body.user.email})
      .then((user)=>{
        //console.log(res.status)
        if(user.password==req.body.user.password){
          
          res.send({
            status:'LOG IN',
            info:user
          })
          
          console.log('loged in')
        }
        else if(user.password != req.body.user.password){
          res.send({status:'WRONG DETAILS'})
          console.log('wrong details')
        }
      })
      .catch((err)=>{
        res.send(err)
        res.send('no user')
      })
    
}
  


export default connectDB(handler);
