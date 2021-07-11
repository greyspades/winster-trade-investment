import React from 'react'
import { MarketOverview } from "react-ts-tradingview-widgets";
import {Grid} from '@material-ui/core'

const Overview = (props) => {
    return (
            <div style={{display:'grid',placeItems:"center",marginTop:50}}>
                <h3 style={{color:'#ffba00',marginBottom:50}}>
                    Market Overview
                </h3>
                <p >
                    Gain insight through analytical data gathered accross numerous markets and pairs
                </p>
            <Grid direction style={{width:'80%'}}>
            <MarketOverview symbolActiveColor='#ffba00' plotLineColorGrowing='#ffba00' plotLineColorFalling='#ffba00' isTransparent={true} height={600} width='100%'  colorTheme='dark' ></MarketOverview>
            </Grid >
            </div>
    )
}
export default Overview
