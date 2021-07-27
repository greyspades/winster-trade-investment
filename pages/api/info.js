import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';


const info = async (req, res) => {
       
        const data=req.body.user
        //console.log(data)
        users.findOne({username:data})
        .then((item)=>{ 
          res.send(item)
          console.log('found')
          console.log(item)
        })
        .catch((err)=>{
          console.log(err)
          res.send(err)
        })
}
export default connectDB(info);
