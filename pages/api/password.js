import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';

const Password = async(req,res)=>{
    console.log(req.body.user)
    users.updateOne({email:req.body.user.email},{password:req.body.user.password})
    .then(()=>{
        res.send('SUCCESS')
        console.log('changed password')
    })

}

export default connectDB(Password)