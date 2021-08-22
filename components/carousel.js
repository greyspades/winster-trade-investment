import React from 'react'

import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid,Card,CardHeader,CardContent,Container,Paper,CircularProgress } from '@material-ui/core'
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import LooksOne from '@material-ui/icons/LooksOneTwoTone'
import LooksThree from '@material-ui/icons/Looks3TwoTone'
import LooksTwo from '@material-ui/icons/LooksTwoTwoTone'
import one from '../img/1.png'
import two from '../img/2.png'
import three from '../img/3.png'
import Image from 'next/image'




const Carousel=()=>{

  const percentage=66
  return (
    <Grid container justify='center'>
      <Paper style={{zIndex:1000}} className='count-paper'>
        <div style={{backgroundColor:'rgba(0,0,0,0.5)',padding:20}}>
          <Grid style={{}} spacing={5} justify='center' container direction='row'>
          <Grid xs={6} md={3} item style={{width:100,height:100}}>
          <CircularProgressbarWithChildren
          
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,
          
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
          
              // Text size
              textSize: '16px',
          
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
          
              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',
          
              // Colors
              pathColor: `rgba(255, 171, 0,1)`,
              textColor: 'white',
              trailColor: 'black',
              backgroundColor: '#3e98c7',
            
            })}
          value={25}>
  
  <div style={{marginTop:-12}}>
  <LooksOne style={{width:70,height:70,color:'#ffab00'}} />
 </div>
 
</CircularProgressbarWithChildren>;
             
          </Grid>

          <Grid xs={6} md={3} item style={{width:100,height:100}}>
          <CircularProgressbarWithChildren
          
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,
          
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
          
              // Text size
              textSize: '16px',
          
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
          
              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',
          
              // Colors
              pathColor: `rgba(255, 171, 0,1)`,
              textColor: 'white',
              trailColor: 'black',
              backgroundColor: '#3e98c7',
            
            })}
          value={50}>
  

 
 <div style={{marginTop:-12}}>
 {/* <Image  width={90} height={90} src={two} layout='intrinsic' /> */}
 <LooksTwo style={{width:70,height:70,color:'#ffab00'}} />
 </div>
 


 
</CircularProgressbarWithChildren>;
             
          </Grid>


          <Grid xs={6} md={3} item style={{width:100,height:100}}>
          <CircularProgressbarWithChildren
          
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,
          
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
          
              // Text size
              textSize: '16px',
          
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
          
              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',
          
              // Colors
              pathColor: `rgba(255, 171, 0,1)`,
              textColor: 'white',
              trailColor: 'black',
              backgroundColor: '#3e98c7',
            
            })}
          value={75}>
  
  <div style={{marginTop:-12}}>
  <LooksThree style={{width:70,height:70,color:'#ffab00'}} />
 </div>
 
</CircularProgressbarWithChildren>;
             
          </Grid>
          
          </Grid>
          <Grid>
            <p style={{fontSize:20,textAlign:'center',color:'white',}} className='bonus-talk'>
                Get upto 40% bonus as you level up and climb the ranks 
            </p>
          </Grid>
        </div>
      </Paper>
    </Grid>
  )
}
export default Carousel