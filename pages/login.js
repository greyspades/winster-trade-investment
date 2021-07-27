import React,{useState,useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
//import event from '../img/event4.jpg'
import {Formik} from 'formik'
import Axios from 'axios'
import PersonOutlined from '@material-ui/icons/PersonOutline';
import EmailIcon from '@material-ui/icons/EmailOutlined'
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOffOutlined'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle'
import {Grid,} from '@material-ui/core'
import HttpsOutlined from '@material-ui/icons/HttpsOutlined'
import LensOutlined from '@material-ui/icons/LensOutlined'
import Check from '@material-ui/icons/Check'

import {Checkbox,FormControlLabel,CircularProgress} from '@material-ui/core'
import cookie from 'js-cookie'
//import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';



//import {Dot} from '@material-ui/icons/dot'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Login=()=> {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [loading,setLoading]=useState({
    pending:false,
    done:false,
  })
  const [visible,setVisible]=useState(false)
  const [type,setType]=useState('password')

  const [user,setUser]=useState()

  const showButton=(handleSubmit)=>{
    if(loading.pending==false&&loading.done==true){
      return (
        <div>
          <Check />
        </div>
      )
    }
    else if(loading.pending==true&&loading.done==false){
      return (
        <div style={{display:'grid',placeItems:"center"}} >
          <CircularProgress style={{color:'#ffab00'}} />
        </div>
      )
    }
    else {
      return (
        <div>
          <Button style={{color:'#ffab00',border:"solid #ffba00",width:90,height:60,}} onClick={handleSubmit} >
           Login
          </Button>
        </div>
      )
    }
    
  }
  const toggleVissible=()=>{
   if(visible){
     setVisible(false)
     setType('password')
   }
   else if(!visible){
     setVisible(true)
     setType('text')
   }
    
  }

  const showEye=()=>{
    if(visible){
      return (
        <Button onClick={toggleVissible} style={{display:'grid',placeItems:'center'}}>
          <VisibilityIcon style={{color:'#ffab00'}} />
        </Button>
      )
    }
    else {
      return (
        <Button style={{}} onClick={toggleVissible} style={{display:'grid',placeItems:'center'}}>
        <VisibilityOffIcon style={{color:'#ffab00',width:40,height:40,marginBottom:20}}  />
      </Button>
      )
    }
  }
  
  return (
   <div style={{display:"grid",placeItems:"center"}}>
       <div style={{display:'grid',placeItems:'center'}} className='signup'>
         
    <Card style={{
        // background:'linear-gradient(#131519 0%,#131519 50%,ffab00 80%)',
        backgroundColor:"rgba(0,0,0,0.6)",
        width:'100%',
        // marginBottom:170,
        height:'100%',

        
    }}  >

        <CardContent>
        <h2 style={{marginTop:10,textAlign:'center',marginBottom:70}}>
        <span style={{color:'#ffab00',textAlign:'center'}}>Login</span> to your Account
        </h2>
        <Formik initialValues={{email:'',password:''}} onSubmit={(values)=>{
                  let user={
                   
                    email:values.email,
                    password:values.password,
                  
                  }
                 
                  let per={
                    name:values.firstname,
                    mail:values.email
                  }
                
                
                  if(values.password.length>=8 &&values.email){
                    // setUser({
                    // name:values.name,
                    // email:values.email,
                    // password:values.password,
                    
                    // username:values.username,
                    // balance:0.00,
                    // //bomber:slug,
                    // })
                    setLoading({
                      pending:true,
                      done:false,
                    })
                    console.log(user)
                    Axios.post('/api/login',{user})
                    .then((res)=>{
                      if(res.data.status=='LOG IN'){
                        cookie.set('user',JSON.stringify(user.username))
                      console.log(res.data)
                      setLoading({
                        pending:false,
                        done:true,r
                      })
                      }
                      else if(res.data.status=='WRONG DETAILS'){
                        alert('The password you have provided is incorect')
                        setLoading({
                          pending:false,
                          done:false
                        })
                      }
                    })
        
                    .catch((err)=>{
                      console.log(err.response.data)
                      //console.log('wahala')
                     if(err.response.data=='mongo wahala'){
                      alert('Unnable to connect to the server please try again later')
                      setLoading({
                        pending:false,
                        done:false,
                      })
                     }
                     
                    })
                  }
                 
                  else if(values.password.length<8){
                    alert('Password must contain at least 8 characters')
                  }
                  else if(!values.email||!values.password)
                  alert('All fields are required')
                }}>
                  {({handleChange,handleSubmit,values,user})=>((
                   <div>
                     <FormControl style={{display:'grid',placeItems:'center'}} className={classes.margin}>
                   
<Input
        className='app-input second-input'
        style={{color:'white'}}
        placeholder='Email address'
          id=""
          color='primary'
          
          type='email'
          value={values.email}
          onChange={handleChange('email')}
          startAdornment={
            <InputAdornment position="start">
             <EmailIcon style={{color:"#ffab00"}} />
            </InputAdornment>
          }
        />

<Input
        className='app-input'
        style={{color:'white',marginTop:50}}
        placeholder='Password'
          id="input-with-icon-adornment"
          color='primary'
          placeholder='Password'
          autoComplete={false}
          type={type}
          name='password'
          onChange={handleChange('password')}
          value={values.password}
          
          startAdornment={
            <InputAdornment position="start">
            <HttpsOutlined style={{color:"#ffab00"}} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment style={{marginRight:-30}}>
                {showEye()}
            </InputAdornment>
          }
        />
           <div style={{display:'grid',placeItems:'center',
            marginTop:120}}>
                {showButton(handleSubmit)}
              </div>
      </FormControl>
                </div>
                   
                   ))}
                      </Formik>
        </CardContent>
    </Card>
   </div>
   </div>
  );
}
export default Login