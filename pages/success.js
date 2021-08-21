import React,{useState,useEffect} from 'react'
import {Grid,Paper,Card,CardHeader,CardContent,Typography,Button} from '@material-ui/core'
import Axios from 'axios'
import Cookie from 'js-cookie'
import {HashLoader,RingLoader,PulseLoader,PropagateLoader,MoonLoader,PuffLoader} from  "react-spinners";
import Router from 'next/router'
import Check from '@material-ui/icons/Check'
import MyFooter from '../components/myFooter'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import Header from '../components/Header'
import HeaderLinks from '../components/HeaderLinks'

import AddressIcon from '@material-ui/icons/LocationCity'


const Success = () => {
    const [loading,setLoading]=useState({
        pending:false,
        done:false
    })

    const mail=()=>{
        setLoading({
            pending:true,
            done:false,
        })
        let user=Cookie.getJSON('user')
        console.log(user)
        Axios.post('/api/mail',{user})
        .then((res)=>{
          console.log('sent mail')
          //console.log(res.data)
          if(res.data=='SUCCESS'){
              setLoading({
                pending:false,
                done:true,
              })
              alert('We have sent you another email please check your inbox and confirm the mail')
          }
        })
        //console.log(mail,name)
      }


    return (
<div>
<Grid container justify='center' alignItems='center' style={{}}>
          <Header
          
          fixed
          color="transparent"
          //routes={dashboardRoutes}
          // changeColorOnScroll={{
          //   color:'transparent',
          //   height:50,
          // }}
          
          // rightLinks={(
          //       <div>
          //         <div>
          //         name
          //       </div>
          //         <div>
          //         name
          //       </div>
          //       </div>
          // )}
          
        rightLinks={<HeaderLinks />}   
/>
            <Card style={{}} className='success-paper'>
                <Typography variant='h3' style={{color:'#ffab00',textAlign:'center'}}>
                    Success
                </Typography>
                <CardContent >
                   <Typography variant='h5' style={{textAlign:'center'}}>
                       Your Registration was successful 
                   </Typography>
                   <Typography style={{textAlign:'center',color:'white',marginTop:30}}>
                       Please confirm your account by clicking the link sent to your email
                   </Typography>
                   <Typography style={{textAlign:'center',color:'white',marginTop:30}}>
                       Did not recieve mail? {!loading.pending && !loading.done ? <span>click<Button onClick={mail} style={{color:'#ffab00'}}>Here</Button></span> : loading.pending && !loading.done ?  <span style={{marginLeft:30}}>
                       <HashLoader  color='#ffab00' loading={true} size={28} />
                       </span> : !loading.pending && loading.done ? <Check style={{width:35,height:35,color:'#ffab00',marginBottom:-7}} /> : null }
                   </Typography>
                   <Typography style={{textAlign:'center',color:'white',marginTop:10}}>
                      Or go directly to your <Button onClick={()=>{Router.push('./dashboard')}} style={{color:'#ffab00'}}>Dashboard</Button>
                   </Typography>
                </CardContent>
            </Card>

        </Grid>
        <MyFooter />
</div>
    )
}

export default Success
