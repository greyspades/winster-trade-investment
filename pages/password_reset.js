import React,{useState} from 'react'
import Axios from 'axios'
import {Formik} from 'formik'
import { Paper,Grid,Input,InputAdornment,Button,IconButton } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import {HashLoader} from 'react-spinners'
import Header from '../components/Header'
import HeaderLinks from '../components/HeaderLinks'
import MyFooter from '../components/myFooter'
//import {useRouter} from 'next/router'

const Password = () => {
    const [loading,setLoading]=useState({
        pending:false,
        done:false
    })

    

    

    return (
        <div style={{display:'grid',placeItems:'center'}}>
            <Grid style={{}} justify='center' container>
            <Paper elevation={30} style={{}}  className='reset-paper'>
               <Grid justify='center' container style={{backgroundColor:'rgba(0,0,0,0.7)',height:"100%"}}>
               <Grid xs={12} md={12} container justify='center' alignItems='center'>
               <h3 className='reset-header' style={{}}>
                    <span style={{color:'#ffab00'}}>Password</span> reset
                </h3>
               </Grid>
                <Grid item justify='center' style={{}}>
                <h6 style={{textAlign:'center'}}>
                    Please fill in your Email address 
                </h6>
                </Grid>

                <Grid container justify='center'>
                <form>
                    <Formik initialValues={{email:''}} onSubmit={(value)=>{
                        let user={
                            email:value.email
                            
                        }
                        setLoading({
                            pending:true,
                            done:false
                        })
                        Axios.post('/api/resetmail',{user})
                        .then((res)=>{
                            if(res.data=='SUCCESS'){
                                setLoading({
                                    pending:false,
                                    done:true
                                })
                            }
                        })
                        .catch((err)=>{
                            console.log(err.response)
                            //console.log('wahala')
                           if(err.response.data=='mongo wahala'){
                            alert('Unnable to connect to the server please try again later')
                            setLoading({
                              pending:false,
                              done:false,
                            })
                           }
                           
                          })
                    }}>
                        {({handleSubmit,handleChange,values})=>((
                            <Grid justify='center' alignItems='center' container >
                                <Input
        className='app-input reset-input'
        style={{color:'white'}}
        placeholder='Email address'
          id="mail"
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
                            <Grid container justify='center'>
                                {
                                    !loading.pending && !loading.done 
                                    ?
                                   <Grid style={{}} >
                                        <Button onClick={handleSubmit} style={{color:'#ffab00'}} >
                                            Reset Password
                                        </Button>
                                   </Grid>
                                   :
                                   loading.pending && !loading.done
                                   ?
                                   <Grid container justify='center' alignItems='center'>
                                       <HashLoader color='#ffab00' size={35} />
                                   </Grid>
                                   :
                                   !loading.pending && loading.done
                                   ?
                                   <Grid container justify='center' alignItems='center'>
                                       <p style={{color:'white',textAlign:'center',fontSize:18}}>
                                       We have sent you an email please check your mail and click the reset link to proceed
                                       </p>
                                </Grid>
                                :
                                null

                                }
                            </Grid>
                            </Grid>
                        ))}

                    </Formik>
                </form>
                </Grid>
               </Grid>
            </Paper>
            </Grid>
            <MyFooter />
        </div>
    )
}

export default Password
