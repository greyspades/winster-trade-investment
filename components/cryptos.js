import React from 'react'
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import {Grid} from '@material-ui/core'
import event from '../img/event4.jpg'
import charts from '../img/charts.jpg'
import Image from 'next/image'
import Divider from '@material-ui/core/divider'

const Cryptos = () => {
    return (
        <div style={{padding:30}} >
            <h3 style={{textAlign:'center',color:'#ffba00'}}>
                    Live Cryptocurrency Market Data
                </h3>
            <div  style={{display:'grid',placeItems:'normal'}}>
                
                <p>
                    Running through the market data  for the most popular and trending crypto currencies includind spreads, bid and ask prices and market values
                </p>
            <Grid container>
           <Grid
           item
            direction
            justify='center'
            alignItems='center'
            md={7}
            xs={12}
            
           >
           <div >
           <CryptoCurrencyMarket className='crypto-market' isTransparent={true}  width='100%'   colorTheme="dark" height={600}></CryptoCurrencyMarket>
           </div>
           </Grid>
            <Grid
            item
            direction
            justify='center'
            alignItems='center'
            md={5}
            xs={12}
            >
            
                {/* <image className='charts-image' width='100%' height={100} layout='responsive' src={charts}>
                    Absolute Transparency
                </image> */}
                <div style={{}} className='charts-image'>
                    <div className='crypto-backdrop'>
                    <h2 style={{}}>
                        Absolute Transparency <b/>
                        How you want it
                    </h2>
                    </div>
                </div>
         
            </Grid>
            </Grid>
            </div>
            <Divider style={{height:0.2,backgroundColor:'grey',marginTop:30}} variant="middle" />
        </div>
    )
}

export default Cryptos
