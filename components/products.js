import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons'
import {faPiggyBank} from '@fortawesome/free-solid-svg-icons'
import {faMoneyCheckAlt} from  '@fortawesome/free-solid-svg-icons'
import {faCoins} from  '@fortawesome/free-solid-svg-icons'

// import {
//     Container,
//     Row,
//     Col,
//     Button,
//     Card,
//     CardBody,
//     CardHeader,
//     CardFooter
    
// } from 'reactstrap'


import { Grid,Card,CardHeader,CardContent,Paper } from '@material-ui/core'

const Products = () => {
    return (
        <div style={{paddingBottom:60,paddingTop:60,paddingLeft:30,paddingRight:30}}>
            <h3 style={{textAlign:'center'}}>
                Our Services
            </h3>
            <Grid container
            direction
            justify='center'
            alignItems='center'
            
            
            >

            <Grid item
            direction
            justify='center'
            alignItems='center'
            md={3}
            xs={12}
            
            >
                                <div style={{display:'grid',placeItems:'center'}}>
                                <Card  style={{zIndex:1000}} elevation={20} className='product-grid countdown-bg1'>
                                    
                                    <CardContent>
                                        <div style={{display:'grid',placeItems:'center'}}>
                                        <FontAwesomeIcon className='product-logo' icon={faHandHoldingUsd} style={{width:100,height:100,color:"#ffab00"}}  />
                                        </div>
                                        <h5 style={{textAlign:'center' ,color:'#ffab00',marginTop:40}}>
                                            Crypto Loans
                                        </h5>
                                        <div style={{color:'white',textAlign:'center'}}>
                                        We offer loans to organizations and individuals, our interest rates are reasonable and without worry.
                                        </div>
                                      
                                    </CardContent>
                                </Card>
                                
                                </div>
            </Grid>
            
            <Grid item
            direction
            justify='center'
            alignItems='center'
            md={3}
            xs={12}
            >
                                   <div style={{display:'grid',placeItems:'center'}}>
                                <Card style={{zIndex:1000}} className='product-grid countdown-bg1'>
                                    
                                    <CardContent>
                                        <div style={{display:'grid',placeItems:'center'}}>
                                        <FontAwesomeIcon className='product-logo' icon={faPiggyBank} style={{width:100,height:100,color:"#ffab00"}}  />
                                        </div>
                                        <h5 style={{textAlign:'center' ,color:'#ffab00',marginTop:40}}>
                                            Crypto Investments
                                        </h5>
                                        <div style={{color:'white',textAlign:'center'}}>
                                        Invest in our crypto trades and get live trade data and analysis with a 25% guarantee in all our investments.
                                        </div>
                                       
                                    </CardContent>
                                </Card>
                                
                                </div>
            </Grid>


            <Grid item
            direction
            justify='center'
            alignItems='center'
            md={3}
            xs={12}
            >       
             <div style={{display:'grid',placeItems:'center'}}>
                                <Card style={{zIndex:1000}} className='product-grid countdown-bg1'>

                                    <CardContent>
                                        <div style={{display:'grid',placeItems:'center'}}>
                                        <FontAwesomeIcon className='product-logo' icon={faMoneyCheckAlt} style={{width:100,height:100,color:"#ffab00"}}  />
                                        </div>
                                        <h5 style={{textAlign:'center' ,color:'#ffab00',marginTop:40 }}>
                                            Crypto Transactions
                                        </h5>
                                        <div style={{color:'white',textAlign:'center'}}>
                                        Conduct live crypto and cash transactions which are completely transparent and encrypted.
                                        </div>
                                    </CardContent>
                                </Card>
                                
                                </div>
                                    
            </Grid>

            <Grid item
            direction
            justify='center'
            alignItems='center'
            md={3}
            xs={12}
            >
                 <div style={{display:'grid',placeItems:'center'}}>
                                <Card style={{zIndex:1000}} className='product-grid countdown-bg1'>
                                   
                                    <CardContent style={{}}>
                                        <div style={{display:'grid',placeItems:'center'}}>
                                        <FontAwesomeIcon className='product-logo' icon={faCoins} style={{width:100,height:100,color:"#ffab00"}}  />
                                        </div>
                                        <h5 style={{textAlign:'center',color:'#ffab00',marginTop:40}}>
                                            Crypto Mining
                                        </h5>
                                        <div style={{color:'white',textAlign:'center'}}>
                                        Invest in our state of the art crypto mining services using the latest blockchain and cryptography technologies
                                        </div>
                                    </CardContent>
                                </Card>
                                
                                </div>

            </Grid>


            </Grid>




        </div>
    )
}

export default Products
