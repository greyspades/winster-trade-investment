import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Image from 'next/image'
import aiden from '../img/aiden.jpg'
import Divider from '@material-ui/core/Divider'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorderOutlined'
import per1 from '../img/per1.jpg'
import per2 from '../img/per2.jpg'
import per3 from '../img/per3.jpg'
import Avatar from '@material-ui/core/Avatar'
import Person from '@material-ui/icons/PersonOutlineTwoTone'



const Testimonials = () => {

    let today=new Date()
    let year=today.getFullYear()+'/'
    let time=today.getHours()+":"
    let month=today.getMonth()+'/'
    let day=today.getDate()
    let date=`${year}${month}${day}`

    return (
        <div style={{margin:60,marginTop:-40}}>
            <h3 style={{textAlign:'center',marginBottom:50}}>
              Top rated investors of <span style={{color:'#ffab00'}}>August</span>
            </h3>
            <Grid direction='row' container justify='center' alignItems>
                <Grid style={{zIndex:1000}} container justify='center' alignItems xs={12} md={3} >
                    <Paper className='countdown-bg1' style={{backgroundColor:'#131519',padding:20}} elevation={20} >
                        <Grid container justify='center'>
                            {/* <Image style={{margin:20}} height={200} width={170} src={aiden} layout='intrinsic' /> */}
                            <Avatar style={{width:170,height:170,backgroundColor:"black"}}>
                                <Person style={{width:80,height:80,color:"#ffab00"}} />
                            </Avatar>
                        </Grid>
                        <Grid>
                            <div style={{fontSize:20,color:'white',margin:10}}>
                                <span style={{color:'#ffab00'}}>Aiden showam</span> 
                                <Divider light style={{backgroundColor:'#ffab00',opacity:0.5,width:'80%'}} variant='' />
                            </div>
                            <Grid container alignItems='center' style={{fontSize:18,color:'white',margin:10}}>
                                <span style={{}}>Level:</span> <Rating style={{}} size='medium' emptyIcon={<StarBorderIcon style={{color:'#ffab00'}} 
                                fontSize="inherit" />} defaultValue={4.5} 
                                precision={0.5} readOnly max={5} />

                            </Grid>
                            
                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Investment: 
                                <span style={{color:'#ffab00'}}> $21400</span> 

                            </div>

                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Bonus: <span style={{color:'#ffab00'}}>$7655</span>

                            </div>

                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Maturity: 
                                <span style={{color:'#ffab00'}}> 5 days</span>

                            </div>
                          
                         
                        </Grid>
                    </Paper>
                </Grid>




                <Grid style={{zIndex:1000}} container justify='center' alignItems xs={12} md={3} >
                    <Paper className='countdown-bg1' style={{backgroundColor:'#131519',padding:20}} elevation={20} >
                        <Grid container justify='center'>
                            {/* <Image style={{margin:20}} height={200} width={170} src={per3} layout='intrinsic' /> */}
                            <Avatar style={{width:170,height:170,backgroundColor:"black"}}>
                                <Person style={{width:80,height:80,color:"#ffab00"}} />
                            </Avatar>
                        </Grid>
                        <Grid>
                            <div style={{fontSize:20,color:'white',margin:10}}>
                                <span style={{color:'#ffab00'}}>hilda vought</span> 
                                <Divider light style={{backgroundColor:'#ffab00',opacity:0.5,width:'80%'}} variant='' />
                            </div>
                            <Grid container alignItems='center' style={{fontSize:18,color:'white',margin:10}}>
                                <span style={{}}>Level:</span> <Rating style={{}} size='medium' emptyIcon={<StarBorderIcon style={{color:'#ffab00'}} 
                                fontSize="inherit" />} defaultValue={3.5} 
                                precision={0.5} readOnly max={5} />

                            </Grid>
                           
                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Investment: 
                                <span style={{color:'#ffab00'}}> $10000</span> 

                            </div>

                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Bonus: <span style={{color:'#ffab00'}}>$4470</span>

                            </div>

                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Maturity: 
                                <span style={{color:'#ffab00'}}> 4 days</span>

                            </div>
                         
                        </Grid>
                    </Paper>
                
                </Grid>



                <Grid style={{zIndex:1000}} container justify='center' alignItems xs={12} md={3} >
                    <Paper className='countdown-bg1' style={{backgroundColor:'#131519',padding:20}} elevation={20} >
                        <Grid container justify='center'>
                            {/* <Image style={{margin:20}} height={200} width={170} src={per2} layout='intrinsic' /> */}
                            <Avatar style={{width:170,height:170,backgroundColor:"black"}}>
                                <Person style={{width:80,height:80,color:"#ffab00"}} />
                            </Avatar>
                        </Grid>
                        <Grid>
                            <div style={{fontSize:20,color:'white',margin:10}}>
                                <span style={{color:'#ffab00'}}>judith creeman</span> 
                                <Divider light style={{backgroundColor:'#ffab00',opacity:0.5,width:'80%'}} variant='' />
                            </div>
                            <Grid container alignItems='center' style={{fontSize:18,color:'white',margin:10}}>
                                <span style={{}}>Level:</span> <Rating style={{}} size='medium' emptyIcon={<StarBorderIcon style={{color:'#ffab00'}} 
                                fontSize="inherit" />} defaultValue={4.5} 
                                precision={0.5} readOnly max={5} />

                            </Grid>
                            
                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Investment: 
                                <span style={{color:'#ffab00'}}> $15000</span> 

                            </div>

                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Bonus: <span style={{color:'#ffab00'}}>$6406</span>

                            </div>

                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Maturity: 
                                <span style={{color:'#ffab00'}}> 7 days</span>

                            </div>
                         
                        </Grid>
                    </Paper>
                </Grid>
                <Grid style={{zIndex:1000}} container justify='center' alignItems xs={12} md={3} >
                    <Paper className='countdown-bg1' style={{backgroundColor:'#131519',padding:20}} elevation={20} >
                        <Grid container justify='center'>
                            {/* <Image style={{margin:20}} height={200} width={170} src={per3} layout='intrinsic' /> */}
                            <Avatar style={{width:170,height:170,backgroundColor:"black"}}>
                                <Person style={{width:80,height:80,color:"#ffab00"}} />
                            </Avatar>
                        </Grid>
                        <Grid>
                            <div style={{fontSize:20,color:'white',margin:10}}>
                                <span style={{color:'#ffab00'}}>katka walter</span> 
                                <Divider light style={{backgroundColor:'#ffab00',opacity:0.5,width:'80%'}} variant='' />
                            </div>
                            <Grid container alignItems='center' style={{fontSize:18,color:'white',margin:10}}>
                                <span style={{}}>Level:</span> <Rating style={{}} size='medium' emptyIcon={<StarBorderIcon style={{color:'#ffab00'}} 
                                fontSize="inherit" />} defaultValue={3.5} 
                                precision={0.5} readOnly max={5} />

                            </Grid>
                           
                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Investment: 
                                <span style={{color:'#ffab00'}}> $11400</span> 

                            </div>

                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Bonus: <span style={{color:'#ffab00'}}>$3400</span>

                            </div>

                            <div style={{fontSize:18,color:'white',margin:10}}>
                                Maturity: 
                                <span style={{color:'#ffab00'}}> 5 days</span>

                            </div>
                         
                        </Grid>
                    </Paper>
                </Grid>





            </Grid>
           
            
        </div>
    )
}

export default Testimonials
