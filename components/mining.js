import React,{useState} from 'react'
import {Grid,Paper} from '@material-ui/core'
import Image from 'next/image'
import pic1 from '../img/bg_3.jpg'


const Mining=()=>{
    
    return (
        <Grid className='mining' style={{}}>
           <Grid container direction='row' justify='center'>
           <Grid xs={12} md={6} container justify='center' style={{padding:30}}>
            <Paper className='countdown-bg1' elevation={20}>
            <header style={{padding:30}} className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">Top tier crypto mining</div>
              <h3 className="heading-title interest-header weight-normal">
                Designed for your needs
                </h3>
              <div className="heading-text bonus-p">
                We have access to state of the art mining hardware and equipment that aims to keep the mining process as efficient and seamless as possible
              </div>
            </header>
            </Paper>
            </Grid>

            <Grid style={{padding:30}} container justify='center' className='countdown-bg'  xs={12} md={5}>
                <Paper style={{}} className='mining-main-pic' elevation={20}>
                  
                </Paper>
                {/* <Image src={pic1} layout='intrinsic' width={600} height={400} /> */}
            </Grid>
           </Grid>

                    <h4 style={{textAlign:'center',marginTop:80,marginBottom:10}}>
                        Agile Infrastructure
                    </h4>
                    <p style={{textAlign:'center',fontSize:18,padding:30}}>
                        Our fascilities are managed and maintained by a team of proffesionals who work hard to ensure Efficiency
                    </p>

           <Grid  style={{}} container justify='center' direction='row'>
                <Grid className='hardware-group' style={{}} container justify='center' xs={12} md={6}>
                    <Paper className='hardware-1' elevation={20}>
                        
                    </Paper>
                   <Grid container justify='flex-start'>
                   <div style={{margin:5,paddingLeft:75}} className="heading-sup-title">Winster Equipment room</div>
                   </Grid>
                </Grid>

                <Grid className='hardware-group' style={{}} container justify='center' xs={12} md={6}>
                    <Paper className='hardware-2' elevation={20}>

                    </Paper>
                    <Grid container justify='flex-start'>
                   <div style={{margin:5,paddingLeft:75}} className="heading-sup-title">Winster data center</div>
                   </Grid>
                </Grid>
           </Grid>

        </Grid>
    )
}

export default Mining