import React,{useState,useRef,useEffect,useCallback} from 'react';
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

import HttpsOutlined from '@material-ui/icons/HttpsOutlined'
import LensOutlined from '@material-ui/icons/LensOutlined'
import Check from '@material-ui/icons/Check'

import {Checkbox,FormControlLabel,CircularProgress,Grid,AppBar} from '@material-ui/core'
import cookie from 'js-cookie'
//import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';
import {useRouter} from 'next/router'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Public from '@material-ui/icons/PublicOutlined'
import {HashLoader} from 'react-spinners'
//import {useGoogleReCaptcha,GoogleReCaptchaProvider} from 'react-google-recaptcha-v3'
//import { useRecaptcha, Badge } from 'react-recaptcha-hook';
import ReCAPTCHA from "react-google-recaptcha";
import Paper from '@material-ui/core/Paper'
//import {Dot} from '@material-ui/icons/dot'
import Footer from 'rc-footer';
//import '../home/node_modules/rc-footer/assets/index.css';
import PhoneIcon from '@material-ui/icons/Phone'
//import EmailIcon from '@material-ui/icons/Email'
import AddressIcon from '@material-ui/icons/LocationCity'



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

const Signup=()=> {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [loading,setLoading]=useState({
    pending:false,
    done:false,
  })
  const [visible,setVisible]=useState(false)
  const [type,setType]=useState('password')
  const [country,setCountry]=useState()
  const [captcha,setCaptcha]=useState(false)
  const [user,setUser]=useState()
  const Router=useRouter()
  const {slug}=Router.query
  //const { executeRecaptcha } = useGoogleReCaptcha();
  const sitekey="6LclhMgbAAAAAFBPDlXFdGAzA6ZzyQdfI9kkCrd2"
  //const execute = useRecaptcha({ sitekey, hideDefaultBadge: false });
  

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
           Join
          </Button>
        </div>
      )
    }
    
  }

  const mail=(user)=>{
    
    Axios.post('/api/mail',{user})
    .then((res)=>{
      console.log('sent mail')
      console.log(res.data)
    })
    //console.log(mail,name)
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

  // useEffect(() => {
  //   const getToken = async () => {
  //     const token = await execute();
  //     // onToken(token);
  //     console.log(token)
  //   };

  //   getToken();
  // }, []);

  // const handleReCaptchaVerify = useCallback(async (handleSubmit) => {
  //   if (executeRecaptcha) {
  //     //console.log('Execute recaptcha not yet available');
  //     const token = await executeRecaptcha('signup');
  //     console.log(token)
  //     console.log('captcha gotten')
  //   }
   
   
  //   //handleSubmit()
  
  // },[])

  // useEffect(() => {
  //   handleReCaptchaVerify();
  // }, [handleReCaptchaVerify]);

  // const handleVerify=()=>{
  //   console.log('verified')
  // }
  
  
  return (
   <div >
       <div style={{display:"grid",placeItems:"center"}}>
       <Paper elevation={20} style={{display:'grid',placeItems:'center'}} className='signup'>
         
      
    
         <Card style={{
             // background:'linear-gradient(#131519 0%,#131519 50%,ffab00 80%)',
             backgroundColor:"rgba(0,0,0,0.6)",
             width:'100%',
             // marginBottom:170,
             height:'100%',
     
             
         }}  >
     
             <CardContent>
             <Typography variant='h4' style={{marginTop:10,textAlign:'center',marginBottom:70}}>
                    Get in on the <span style={{color:'#ffab00',textAlign:'center'}}>Action</span>
             </Typography>
             <Formik initialValues={{name:'',email:'',password:'',nextPassword:'',username:'',country:''}} onSubmit={(values)=>{
                       let user={
                         name:values.name,
                         email:values.email,
                         password:values.password,
                         bomber:slug,
                         username:values.username,
                         balance:0.00,
                         country:values.country
                        
                       }
                      
                       let per={
                         name:values.firstname,
                         mail:values.email
                       }
                     
                       if(values.password==values.nextPassword&&values.password.length>=8 &&values.name&&values.email&&values.username&&values.country){
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
                         Axios.post('/api/register',{user})
                         .then((res)=>{
                           if(res.data=='SAVED'){
                             cookie.set('user',user)
                           console.log(res.data)
                           mail(user)
                           // setLoading({
                           //   pending:false,
                           //   done:true,
                           // })
                           Router.push('../success')
                           }
                           else if(res.data=='THAT EMAILL ADDRESS IS TAKEN'){
                           alert('Sorry the email address or username is already taken')
                            setLoading({
                             pending:false,
                             done:false,
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
                       else if(values.password!=values.nextPassword&&values.name&&values.email){
                         alert('The passwords do not match')
                       }
                       else if(values.password.length<8){
                         alert('Password must contain at least 8 characters')
                       }
                       else if(!values.name||!values.email||!values.password||!values.phone)
                       alert('All fields are required')
                     }}>
                       {({handleChange,handleSubmit,values,user})=>((
                        <div>
                          <FormControl style={{display:'grid',placeItems:'center'}} className={classes.margin}>
                             <Grid   justify='center' alignItems='center' container>
                         <Grid justify='center' alignItems='center' style={{}} container direction='row'>
                        <Grid xs={12} md={6} style={{}} justify='center' alignItems='center' container>
                        <Input
             className='app-input first-input '
             style={{color:'white'}}
             placeholder='Full name'
               id="input-with-icon-adornment"
               color='primary'
               autoComplete={false}
               type='text'
               value={values.name}
               onChange={handleChange('name')}
               startAdornment={
                 <InputAdornment position="start">
                  <PersonOutlined style={{color:"#ffab00"}} />
                 </InputAdornment>
               }
             />
                        </Grid>
            
                   <Grid xs={12} md={6} style={{}} justify='center' alignItems='center' container >
                   <Input
             className='app-input username-input'
             style={{color:'white',}}
             placeholder='Username'
               id=""
               color='primary'
               autoComplete={false}
               type='text'
               value={values.username}
               onChange={handleChange('username')}
               // startAdornment={
               //   <InputAdornment position="start">
               //    <LensOutlined style={{color:"#ffab00"}} />
               //   </InputAdornment>
               // }
             />
                   </Grid>
     
                         </Grid>
             {/* <div style={{backgroundColor:'blue'}}>
             <CountryDropdown
               value={country}
               onChange={(val) =>setCountry(val)} />
             </div> */}
     
             <Grid className='second-sign' justify='center' alignItems='center' style={{}} container direction='row' >
             <Grid xs={12} md={6} style={{}} justify='center' alignItems='center' container>
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
             </Grid>
     
               <Grid style={{}} className='country-grid' xs={12} md={6} justify='flex-start' alignItems='flex-end' container>
     
               <Input
                startAdornment={
                 <InputAdornment position="start">
                  <Public style={{color:"#ffab00"}} />
                 </InputAdornment>
               }
               required
               placeholder='country'
               name='country'
               className='country-input'
               disableUnderline
               value={values.country}
               onChange={handleChange('country')}
               style={{}}
               inputComponent={()=>(
                 <CountryDropdown
                 style={{width:200,backgroundColor:'black',color:'white',border:'2px solid #ffab00',}}
                 value={values.country}
                 onChange={handleChange('country')} />
               )}
               />
              
             
               </Grid>
             </Grid>
             
               <Grid justify='center' alignItems='center' style={{}} container direction='row'>
                 <Grid xs={12} md={6} style={{}} justify='center' alignItems='center' container>
                 <Input
             className='app-input'
             style={{color:'white'}}
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
               
     
             />
                 </Grid>
                 <Grid xs={12} md={6} style={{}} justify='center' alignItems='center' container>
                 <Input
             className='app-input second-input'
             style={{color:'white'}}
             placeholder='Password'
               id="input-with-icon-adornment"
               color='primary'
               placeholder='Confirm Password'
              
               type={type}
               name='nextPassword'
               onChange={handleChange('nextPassword')}
               value={values.nextPassword}
               
               // startAdornment={
               //   <InputAdornment position="start">
               //   <HttpsOutlined style={{color:"#ffab00"}} />
               //   </InputAdornment>
               // }
               endAdornment={
                 <InputAdornment style={{marginRight:-30}}>
                     {showEye()}
                 </InputAdornment>
               }
     
             />
                 </Grid>
               </Grid>
                 <div style={{color:'white'}}>
                 {/* <FormControlLabel
                 style={{color:'white',marginTop:-20}}
                 color='primary'
               value="bottom"
               control={<Checkbox   style={{color:'white'}} color="default" />}
               label="I have read and agreed to the terms of service and privacy policy"
               labelPlacement="right"
             /> */}
             <p style={{marginTop:10}}>
             I have read and agreed to the terms of service and privacy policy
             </p>
                 </div>
                 <Grid container justify='center' alignItems='center' style={{}}>
                 <ReCAPTCHA
         sitekey="6LcmDMkbAAAAAKtryIcbLmQxAQl1Pr0LEBXcISEW"
         onChange={()=>{setCaptcha(true)}}
         theme='dark'
         onErrored={()=>alert('cannot contact recaptcha')}
         
       />
                 
                 </Grid>
                <Grid style={{}} justify='center' alignItems='center' container style={{display:'grid',placeItems:'center',
                 marginTop:40}}>
                   {!loading.pending && !loading.done && captcha ?     <div>
               <Button style={{color:'#ffab00',border:"solid #ffba00",width:90,height:60,}} onClick={handleSubmit} >
                Join
               </Button>
             </div>
                 :
                 !loading.done && loading.pending && captcha ?
                 <Grid container justify='center' alignItems='center'>
                   <HashLoader color='#ffab00'  size={47}/>
                 </Grid>
                 :
                 loading.done && !loading.pending && captcha ?
                 <div>
                   <Check style={{width:40,height:40,color:'#ffab00'}} />
                 </div>
                
                 :
                 null
           }
                   </Grid>
                             </Grid>
           </FormControl>
                 
                        </div>
                        
                        ))}
                           </Formik>
             </CardContent>
         </Card>
     
       
        </Paper>
       </div>
   <Footer
   
  className='main-footer'
    columns={[
      {
       items:[
         {
          icon: (
            <PhoneIcon style={{color:'#9a7801',width:25,height:25,}} />
          ),
         title:' Phone: +48732121453',
          //url: 'https://yuque.com',
          //description:' +48732121453',
          openExternal:false,
          className:'main-footer',
         },
         {
          icon: (
            <EmailIcon style={{color:'#9a7801',width:25,height:25}} />
          ),
         title:' E-mail: winsterinvest@gmail.com',
          //url: 'https://yuque.com',
          //description:' +48732121453',
          openExternal: false,
          className:'main-footer',
        },
        {
          icon: (
            <AddressIcon style={{color:'#9a7801',width:25,height:25}} />
          ),
         title:'Address: 63 kenton Road, Yorkshire, England',
          //url: 'https://yuque.com',
          //description:' +48732121453',
          openExternal: false,
          className:'main-footer',
        },
       ]
      },

      {
       items:[
         {
          title:(
            <div>
              Sign up
            </div>
          ),
          url: '/signup',
          //description:'register for an account',
          openExternal: true,
          className:'main-footer',
         },
         {
          title:(
            <div>
              Login 
            </div>
          ),
          url: '/login',
          //description:'Login to your account',
          openExternal: true,
          className:'main-footer',
         },
         {
          title:(
            <div>
              Contact us
            </div>
          ),
          //url: '',
          //description:' +48732121453',
          openExternal: true,
          className:'main-footer',
          LinkComponent:'a'
         },
        
       ]
      },



      {
        items:[
          {
           title:(
             <div onClick={()=>Router.push('/index/services')}>
               Services
             </div>
           ),
           //url: '/signup',
           //description:'register for an account',
           openExternal: true,
           className:'main-footer',
          },
          {
           title:(
             <div>
               About us
             </div>
           ),
           url: '/login',
           //description:'Login to your account',
           openExternal: true,
           className:'main-footer',
          },
          {
           title:(
             <div>
               Privacy policy
             </div>
           ),
           //url: '',
           //description:' +48732121453',
           openExternal: true,
           className:'main-footer',
           LinkComponent:'a'
          },
         
        ]
       }
    ]}
    bottom="Winster trade investment"
    backgroundColor='#ffab0000'
  />
   </div>
  );
}
export default Signup