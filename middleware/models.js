import mongoose from 'mongoose';
//import 'mongoose-type-email'
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: false
  },
 
  email: {
    type:String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  username:{
      type:String,
      required:false
  },
  
  balance:{
    type:Number,
    required:false,
  },
  investment:{
    type:Array,
    required:false
  },
  pending:{
    type:Array,
    required:false
  },
  withdrawal:{
    type:Array,
    required:false,
  },
  bomber:{
    type:String,
    required:false,
  },
  country:{
    trype:String,
    required:false
  },
  level:{
    trype:Number,
    required:false
  }
 
});

mongoose.models = {};

var users = mongoose.model('users', user);

export default users;