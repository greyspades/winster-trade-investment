import React from 'react'

import { MiniChart } from "react-ts-tradingview-widgets";


import {Grid} from '@material-ui/core'

const Overview = (props) => {
    return (
            <div style={{display:'grid',placeItems:"center",marginTop:50}}>
                <h3 style={{marginBottom:50}}>
                    Market Overview
                </h3>
                <p style={{fontSize:20,padding:10,textAlign:'center'}} >
                    Gain insight through analytical data gathered accross numerous markets and pairs
                </p>
            <Grid container justify='center' direction='row' className='market-overview'>
           
                <Grid style={{}} justify='center' container xs={12} md={4}>
                <MiniChart width='100%' underLineColor='rgba(255,171,0, 0.1)' trendLineColor='#ffab00' isTransparent  symbol='BTCUSD' colorTheme="dark"></MiniChart>
                </Grid>

                <Grid justify='center' container xs={12} md={4}>
                <MiniChart underLineColor='rgba(255,171,0, 0.1)' trendLineColor='#ffab00' isTransparent  symbol='ETHUSD' colorTheme="dark"></MiniChart>
                </Grid>

                <Grid justify='center' container xs={12} md={4}>
                <MiniChart underLineColor='rgba(255,171,0, 0.1)' trendLineColor='#ffab00' isTransparent  symbol='USDTUSD' colorTheme="dark"></MiniChart>
                </Grid>
            </Grid >
            </div>
    )
}
export default Overview
