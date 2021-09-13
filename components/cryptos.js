import React from 'react'
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import {Grid} from '@material-ui/core'


const Cryptos = () => {
    return (
        <div style={{padding:30,marginTop:60}} >
            <h3 style={{textAlign:'center'}} className='crypto-heading'>
                    Live Cryptocurrency Market Data
                </h3>
          
                
                {/* <p>
                    Running through the market data  for the most popular and trending crypto currencies includind spreads, bid and ask prices and market values
                </p> */}
            <Grid direction='row' className='crypto-market' justify='center' style={{}} container>
                    <Grid md={6} xs={12} container>
                    <CryptoCurrencyMarket colorTheme="dark" width="100%" isTransparent={true} height={460}></CryptoCurrencyMarket>
                    </Grid>

                    <Grid md={6} xs={12} container>
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
    )
}

export default Cryptos
