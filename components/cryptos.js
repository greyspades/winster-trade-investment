import React from 'react'
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import {Grid} from '@material-ui/core'


const Cryptos = () => {
    return (
        <div style={{padding:30,marginTop:60}} >
            <h3 style={{textAlign:'center'}} className='crypto-heading'>
                    Live Cryptocurrency Market Data
                </h3>
          
                
                <Grid style={{}} md={10} xs={10} justify='center' item>
                    <CryptoCurrencyMarket colorTheme="dark" width="100%" isTransparent={true} height={460}></CryptoCurrencyMarket>
                    </Grid>

           
        </div>
    )
}

export default Cryptos
