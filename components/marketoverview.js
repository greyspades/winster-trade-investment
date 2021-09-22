import React from 'react'

import { MiniChart } from "react-ts-tradingview-widgets";


import {Grid} from '@material-ui/core'

const Overview = (props) => {
    return (
            <div style={{display:'grid',placeItems:"center",marginTop:50}}>
                <h3 style={{marginBottom:40}}>
                    Market Overview
                </h3>
                <p style={{fontSize:16,padding:10,textAlign:'center',marginBottom:60}} >
                    Gain insight through analytical data gathered accross numerous markets and pairs
                </p>
            <Grid container justify='center' direction='row' className='market-overview'>
           
                <Grid style={{}} justify='center' container xs={12} md={4}>
                    <div style={{width:'80%',height:300}}>
                    <MiniChart width='100%' underLineColor='rgba(255,171,0, 0.1)'  trendLineColor='#ffab00' isTransparent  symbol='BTC' colorTheme="dark"></MiniChart>
                    </div>
                </Grid>

                <Grid className='' justify='center' container xs={12} md={4}>
                <div style={{width:'80%',height:300}}>
                <MiniChart width='100%' underLineColor='rgba(255,171,0, 0.1)'  trendLineColor='#ffab00' isTransparent  symbol='ETH' colorTheme="dark"></MiniChart>
                </div>
                </Grid>

                <Grid justify='center' container xs={12} md={4}>
                    <div style={{width:'80%',height:300}}>
                    <MiniChart width='100%' underLineColor='rgba(255,171,0, 0.1)'  trendLineColor='#ffab00' isTransparent  symbol='USDT' colorTheme="dark"></MiniChart>
                    </div>
                </Grid>
            </Grid >
            </div>
    )
}
export default Overview
