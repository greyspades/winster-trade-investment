import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';


const userInfo = async(req, res) => {
       
        const data=req.body.mail
        console.log('server')
      
        //const data=JSON.parse(req.body)
        //console.log(data)
        users.findOne({email:data})
        .then((item)=>{ 
          res.json(item)
          console.log('found')
         //res.send(JSON.stringify(item))
         //return JSON.stringify(item)
         //res.send(JSON.parse(item))
         //return JSON.stringify(item)
         //return item
        })
        .catch((err)=>{
          console.log(err)
          //res.send(err)
        })
}
export default connectDB(userInfo);
