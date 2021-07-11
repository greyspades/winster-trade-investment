import React from 'react'
import {Container, Grid } from '@material-ui/core'
import Image from 'next/image'
import thawte from '../img/thawte.png'
import sitelock from '../img/sitelock.png'
import symantec from '../img/symantec.png'
import digicert from '../img/digicert.png'
import geotrust from '../img/geotrust.png'

const Security = () => {
    return (
        <div style={{marginTop:150}}>
            <h3 style={{textAlign:'center',color:'#ffba00'}}>
                Secure and how you want it
            </h3>
            <p style={{textAlign:'center'}}>
                They help make your interests more secure in the palm of your hands and elsewhere
            </p>
            <Grid container direction justify='center' alignItems='center'>
                <Grid style={{}} xs={2} md={2} justify='center' alignContent='center'>
                    <div style={{display:'grid',placeItems:'center'}}>
                    <Image width={200} height={100} style={{}} src={thawte} />
                    </div>
                </Grid>
                <Grid xs={2} md={2} justify='center' alignItems='center'>
                <div style={{display:'grid',placeItems:'center'}}>
                    <Image width={200} height={100} style={{}} src={sitelock} />
                    </div>
                </Grid>
                <Grid xs={2} md={2} justify='center' alignItems='center'>
                <div style={{display:'grid',placeItems:'center'}}>
                    <Image width={200} height={100} style={{}} src={digicert} />
                    </div>
                </Grid>
                <Grid xs={2} md={2} justify='center' alignItems='center'>
                <div style={{display:'grid',placeItems:'center'}}>
                    <Image width={200} height={100} style={{}} src={symantec} />
                    </div>
                </Grid>
                <Grid xs={2} md={2} justify='center' alignItems='center'>
                <div style={{display:'grid',placeItems:'center'}}>
                    <Image width={200} height={100} style={{}} src={geotrust} />
                    </div>
                </Grid>
                
            </Grid>
            
        </div>
    )
}

export default Security
