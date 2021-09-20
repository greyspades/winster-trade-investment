import React from 'react'
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import {Grid} from '@material-ui/core'


const Cryptos = () => {
    return (
        <div style={{padding:30,marginTop:60}} >
            <h3 style={{textAlign:'center'}} className='crypto-heading'>
                    Live Cryptocurrency Market Data
                </h3>
                    <p style={{textAlign:'center'}}>
                        Gain assess to historical data gathered accross various coins
                    </p>
                
                <Grid style={{}} md={12} xs={12} justify='center' item>
                    <CryptoCurrencyMarket colorTheme="dark" width="100%" isTransparent={true} height={430}></CryptoCurrencyMarket>
                    </Grid>

           
        </div>
    )
}

export default Cryptos
