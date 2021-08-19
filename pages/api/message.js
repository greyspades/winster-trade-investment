import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';

const Message = async(req,res)=>{
    console.log(req.body.user)
    //users.updateOne({email:req.body.user.email},{password:req.body.user.password})
    // .then(()=>{
    //     res.send('SUCCESS')
    //     console.log('changed password')
    // })
    res.send('SUCCESS')

}

export default connectDB(Message)