import React from 'react'
import {Container, Grid } from '@material-ui/core'
import Image from 'next/image'
import thawte from '../img/thawte.png'
import sitelock from '../img/sitelock.png'
import symantec from '../img/symantec.png'
import digicert from '../img/digicert.png'
import geotrust from '../img/geotrust.png'
import SecurityIcon from '@material-ui/icons/SecurityOutlined';
import LockIcon from '@material-ui/icons/Lock';
import PolicyIcon from '@material-ui/icons/PolicyOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';
import Assignment from '@material-ui/icons/AssignmentTurnedInOutlined'
import cert from '../img/cert.jpg'
import bsi from '../img/bsicert.jpg'
import MyContainer from '../components/myContainer'
import Paper from '@material-ui/core/paper'


const Security = () => {
    return (
        <div className='security' style={{}}>
            <h3 style={{textAlign:'center',color:''}} className='choose-heading'>
                Why choose Winster trade investment ?
            </h3>
            <p style={{textAlign:'center',fontSize:20}}>
                By investing with winster trade investment you are assured of
            </p>
            <Grid container justify='center' direction='row'>
                <Grid style={{padding:10}} justify='center' alignItems='center' xs={12} md={4} item>
                  <Paper className='countdown-bg1' style={{backgroundColor:'#131519',margin:30,padding:15,height:350}} elevation={20}>
                  <div style={{display:'grid',placeContent:'center'}}>
                   <SecurityIcon className='choose-icon' />
                   </div>
                   <h5 style={{color:'#ffab00',textAlign:'center'}}>
                        Security
                   </h5>
                  
                   <p style={{textAlign:'center',fontSize:20,color:'#8c96a5'}}>
                   Your funds are protected by industry leading protocols,dedicated to efficiency and flexibility, while maintaining ease of use
                    </p>
                   
                  </Paper>
                </Grid>
                <Grid style={{padding:10}} justify='center' alignItems='center' xs={12} md={4} item>
                    <Paper className='countdown-bg1' style={{backgroundColor:'#131519',margin:30,padding:15,height:350}} elevation={20}>
                    <div style={{display:'grid',placeContent:'center'}}>
                   <PolicyIcon className='choose-icon' />
                   </div>
                   <h5 style={{color:'#ffab00',textAlign:'center'}}>
                        Transparency
                   </h5>
                    <p style={{textAlign:'center',fontSize:20,color:'#8c96a5'}}>
                        Your finances are always under your complete control and you decide how you trade and invest with no hidden charges or transactions
                    </p>
                    </Paper>
                </Grid>
                <Grid style={{padding:10}} justify='center' alignItems='center' xs={12} md={4} item>
                    <Paper className='countdown-bg1' style={{backgroundColor:'#131519',margin:30,padding:15,height:350}} elevation={20}>
                    <div style={{display:'grid',placeContent:'center'}}>
                   <VerifiedUserIcon className='choose-icon' />
                   </div>
                   <h5 style={{color:'#ffab00',textAlign:'center'}}>
                        Reliability
                   </h5>
                    <p style={{textAlign:'center',fontSize:20,color:'#8c96a5'}}>
                    Using industry leading technologies and services, we ensure speedy and efficient transactions which make your invetments a priority
                    </p>
                    </Paper>
                </Grid>
            </Grid>



            <h3 style={{textAlign:'center',marginTop:100}}>
                Secure and how you want it
            </h3>
            <p style={{textAlign:'center',fontSize:20}}>
                They help make your interests more secure in the palm of your hands and elsewhere
            </p>
            <Grid style={{marginTop:100}} container direction justify='center' alignItems='center'>
                <Grid style={{padding:20}} xs={6} md={2} justify='center' alignContent='center'>
                    <div style={{display:'grid',placeItems:'center'}}>
                    <Image layout='intrinsic' width={200} height={100} style={{}} src={thawte} />
                    </div>
                </Grid>
                <Grid style={{padding:20}} xs={6} md={2} justify='center' alignItems='center'>
                <div style={{display:'grid',placeItems:'center'}}>
                    <Image layout='intrinsic' width={200} height={100} style={{}} src={sitelock} />
                    </div>
                </Grid>
                <Grid style={{padding:20}} xs={6} md={2} justify='center' alignItems='center'>
                <div style={{display:'grid',placeItems:'center'}}>
                    <Image layout='intrinsic' width={200} height={100} style={{}} src={digicert} />
                    </div>
                </Grid>

                <Grid style={{padding:20}} xs={6} md={2} justify='center' alignItems='center'>
                <div style={{display:'grid',placeItems:'center'}}>
                    <Image layout='intrinsic' width={200} height={100} style={{}} src={geotrust} />
                    </div>
                </Grid>
                
            </Grid>
            <Grid style={{backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className='' direction='row' container justify='center' alignItems='center'>
                <h3 style={{textAlign:'center',color:'#ffab00',marginTop:60,marginBottom:20}}>
                    
                </h3>
                <p className='heading-text' style={{textAlign:'center',fontSize:20}}>
                Backed and Certified by Industry Standard Protocols dedicated to enforcing strict regulations and transparency 
                </p>
                <Grid style={{display:'grid',placeItems:'center'}} xs={12} md={6}  item>
                   <Paper elevation={20} style={{}} className='security-paper'>
                   <Image  src={cert} width={500} height={700} layout='intrinsic' />
                   </Paper>
                </Grid>
                <Grid  style={{display:'grid',placeItems:'center'}} xs={12} md={6}  item>
                   <Paper elevation={20} style={{padding:0}} className='security-paper'>
                   <Image  src={bsi} width={500} height={700} layout='intrinsic' />
                   </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Security
