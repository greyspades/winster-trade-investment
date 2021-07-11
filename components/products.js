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


import { Grid,Card,CardHeader,CardContent } from '@material-ui/core'

const Products = () => {
    return (
        <div>
            <h2 style={{textAlign:'center', color:'#9a7801'}}>
                Our Services
            </h2>
            <Grid container
            direction
            justify='center'
            alignItems='center'
            //className='product-grid'
            
            >

            <Grid item
            direction
            justify='center'
            alignItems='center'
            md={3}
            xs={12}
            
            >
                                <div style={{display:'grid',placeItems:'center'}}>
                                <Card className='product-grid'>
                                    
                                    <CardContent>
                                        <div style={{display:'grid',placeItems:'center'}}>
                                        <FontAwesomeIcon className='product-logo' icon={faHandHoldingUsd} style={{width:100,height:100,color:"white"}}  />
                                        </div>
                                        <h5 style={{textAlign:'center' ,color:'#9a7801',marginTop:40}}>
                                            Crypto Loans
                                        </h5>
                                        <div style={{color:'white',textAlign:'center'}}>
                                        We offer loans for businesses, students, and their likes to enable fast productivity, our interest rates are reasonable and without worry
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
                                <Card className='product-grid'>
                                    
                                    <CardContent>
                                        <div style={{display:'grid',placeItems:'center'}}>
                                        <FontAwesomeIcon className='product-logo' icon={faPiggyBank} style={{width:100,height:100,color:"white"}}  />
                                        </div>
                                        <h5 style={{textAlign:'center' ,color:'#9a7801',marginTop:40}}>
                                            Crypto Investments
                                        </h5>
                                        <div style={{color:'white',textAlign:'center'}}>
                                        Invest in our crypto trades and get live trade data and analysis with a 25% guarantee in all our investments
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
                                <Card className='product-grid'>

                                    <CardContent>
                                        <div style={{display:'grid',placeItems:'center'}}>
                                        <FontAwesomeIcon className='product-logo' icon={faMoneyCheckAlt} style={{width:100,height:100,color:"white"}}  />
                                        </div>
                                        <h5 style={{textAlign:'center' ,color:'#9a7801',marginTop:40 }}>
                                            Crypto Transactions
                                        </h5>
                                        <div style={{color:'white',textAlign:'center'}}>
                                        Conduct live crypto and cash transactions which are completely transparent and encrypted by our team of data encryption experts
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
                                <Card className='product-grid'>
                                   
                                    <CardContent style={{}}>
                                        <div style={{display:'grid',placeItems:'center'}}>
                                        <FontAwesomeIcon className='product-logo' icon={faCoins} style={{width:100,height:100,color:"white"}}  />
                                        </div>
                                        <h5 style={{textAlign:'center',color:'#9a7801',marginTop:40}}>
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
