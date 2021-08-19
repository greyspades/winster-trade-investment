import React,{useState} from 'react'
import {Container, Grid,Input,InputAdornment,Button } from '@material-ui/core'
import Image from 'next/image'
import {axios} from 'axios'
import Paper from '@material-ui/core/paper'
import {Formik} from 'formik'
import {HashLoader} from 'react-spinners'
import Check from '@material-ui/icons/CheckCircleOutlineRounded'


const Contact=()=>{
    const [loading,setLoading]=useState({
        done:false,
        pending:false
    })
    return (
     
            <Grid  container justify='center'>
              <Paper className='contact' elevation={10}>
              <div style={{backgroundColor:'rgba(0,0,0,0.6)',height:'100%',width:'100%'}}>
              <h3 style={{textAlign:'center',color:'#ffab00'}}>
                    Contact us
                </h3>
                <p style={{textAlign:'center',fontSize:20,color:'white'}}>
                    Get in touch with us
                </p>
                <form>
                    <Formik initialValues={{message:''}} onSubmit={({value})=>{
                        let item={
                            message:value.message,
                            
                        }
                        setLoading({
                            pending:true,
                            done:false
                        })
                        axios.post('/message',{item})
                        .then((res)=>{
                           if(res.data=='SUCCESS'){
                            console.log(res.data)
                            setLoading({
                                pending:false,
                                done:true
                            })
                           }
                        })

                    }} >{({handleChange,handleSubmit,values})=>((
                        <Grid container justify='center'>
                            <Grid container justify='center'>
                            <Input
             className='app-input contact-input '
             style={{color:'white',width:'80%',marginTop:80}}
             placeholder='Full name'
               id="input-with-icon-adornment"
               color='primary'
               autoComplete={false}
               type='text'
               value={values.message}
               onChange={handleChange('message')}
               startAdornment={
                 <InputAdornment position="start">
                  
                 </InputAdornment>
               }
             />
                            </Grid>
             <Grid>
                 {
                     !loading.pending && !loading.done ?
                     <Grid>
                         <Button onClick={handleChange}>
                           <span style={{color:'white',border:'3px solid #ffab00',width:100,borderRadius:20,height:60,display:'grid',placeItems:'center',marginTop:60}}>
                               Send
                           </span>
                         </Button>
                     </Grid>
                     :
                     loading.pending && !loading.done ?
                     <Grid container justify='center'>
                         <HashLoader loading={true}  size={40} color='#ffab00' />
                     </Grid>
                     :
                     loading.done && !loading.pending ?
                     <Grid container justify='center'>
                         <Check />
                     </Grid>
                     :
                     null
                 }
             </Grid>
             
                        </Grid>
                        
                    ))}
                  
                    </Formik>

                </form>

              </div>
              </Paper>
            </Grid>

    )


}

export default Contact