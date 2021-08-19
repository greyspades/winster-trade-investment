import React,{useState} from 'react'
import Axios from 'axios'
import {Formik} from 'formik'
import { Paper,Grid,Input,InputAdornment,Button,IconButton } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import {HashLoader} from 'react-spinners'
import Header from '../../components/Header'
import HeaderLinks from '../../components/HeaderLinks'
import Footer from '../../components/footer'
import {useRouter} from 'next/router'
import VisibilityOn from '@material-ui/icons/VisibilityOutlined'
import VisibilityOff from '@material-ui/icons/VisibilityOffOutlined'


const Retrieval = () => {
    const [loading,setLoading]=useState({
        pending:false,
        done:false
    })
    const [show,setShow]=useState('password')
    const Router=useRouter()
    const {slug}=Router.query

    

    return (
        <div style={{display:'grid',placeItems:'center'}}>
            <Grid style={{}} justify='center' container>
            <Paper elevation={30} style={{height:600}}  className='reset-paper'>
               <Grid justify='center' container style={{backgroundColor:'rgba(0,0,0,0.7)',height:"100%"}}>
               <Grid xs={12} md={12} container justify='center' alignItems='center'>
               <h2 className='reset-header' style={{}}>
                    <span style={{color:'#ffab00'}}>Password</span> reset
                </h2>
               </Grid>
                <Grid item justify='center' style={{}}>
                <h5 style={{textAlign:'center'}}>
                    Enter new password
                </h5>
                </Grid>

                <Grid container justify='center'>
                <form>
                    <Formik initialValues={{password:'',nextPassword:''}} onSubmit={(value)=>{
                       if(value.password && value.password.length > 8 && value.password==value.nextPassword){
                        let user={
                            email:slug,
                            password:value.password
                        }

                        setLoading({
                            pending:true,
                            done:false
                        })
                        Axios.post('/api/password',{user})
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
                       }
                       else if(value.password !=value.nextPassword){
                           alert('The passwords do not match')
                            setLoading({
                              pending:false,
                              done:false,
                            })
                       }
                       else if(value.password.length < 8){
                        alert('Password must contain at least 8 characters')
                        setLoading({
                            pending:false,
                            done:false,
                          })
                        }
                        else {
                            alert('all fields are required')
                            setLoading({
                                pending:false,
                                done:false,
                              })
                        }
                    }}>
                        {({handleSubmit,handleChange,values})=>((
                            <Grid justify='center' alignItems='center' item >
                               <Grid container justify='center'>
                               <Input
        className='app-input reset-input'
        style={{color:'white'}}
        placeholder='new password'
          id="mail"
          color='primary'
          
          type={show}
          value={values.password}
          onChange={handleChange('password')}
          
        />  
                               </Grid>
                               <Grid container justify='center'>
                               <Input
        className='app-input reset-input'
        style={{color:'white'}}
        placeholder='repeat new password'
          id="mail"
          color='primary'
          
          type={show}
          value={values.nextPassword}
          onChange={handleChange('nextPassword')}
          
        />  
                               </Grid>
                             
                               <Grid container justify='center'>
                               {
                        show=='text' ?
                        <Grid container justify='center'>
                                <IconButton onClick={()=>setShow('password')}>
                                <VisibilityOn style={{width:50,height:50,color:'#ffab00'}} />
                                </IconButton>
                        </Grid>
                        :
                        show=='password' ?
                        <Grid container justify='center'>
                        <IconButton onClick={()=>setShow('text')}>
                        <VisibilityOff style={{width:50,height:50,color:'#ffab00'}} />
                        </IconButton>
                        </Grid>
                        :
                        null
                    }
                               </Grid>
                               <p style={{fontSize:18,textAlign:'center',color:'white'}}>
                                  Password must contain at least 8 characters 
                              </p>
                            <Grid container justify='center'>
                                {
                                    !loading.pending && !loading.done 
                                    ?
                                   <Grid style={{}} >
                                        <Button onClick={handleSubmit} style={{color:'#ffab00'}} >
                                            Change password
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
                                       You have successfuly changed your password click <a href='/login' style={{textDecoration:'none',color:'#ffab00'}}>Here</a> to login
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
            
        </div>
    )
}

export default Retrieval
