import React from 'react'
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import {Grid} from '@material-ui/core'


const Cryptos = () => {
    return (
        <div style={{padding:30,marginTop:60}} >
            <h3 style={{textAlign:'center'}} className='crypto-heading'>
                    Live Cryptocurrency Market Data
                </h3>
            <div  style={{display:'grid',placeItems:'center'}}>
                
                {/* <p>
                    Running through the market data  for the most popular and trending crypto currencies includind spreads, bid and ask prices and market values
                </p> */}
            <Grid className='crypto-market' justify='center' style={{}} container>
           <Grid
           item
            direction
            justify='center'
            alignItems='center'
            md={7}
            xs={12}
            
           >
           <div >
           <CryptoCurrencyMarket  isTransparent={true}  width='100%'   colorTheme="dark" height={600}></CryptoCurrencyMarket>
           </div>
           </Grid>
            <Grid
            item
            direction
            justify='center'
            alignItems='center'
            md={5}
            xs={12}
            className='charts-image-container'
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
           
        </div>
    )
}

export default Cryptos
