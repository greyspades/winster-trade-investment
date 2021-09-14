import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HowToReg from '@material-ui/icons/HowToRegOutlined'
import StepIcon from '@material-ui/core/StepIcon'
import StepContent from '@material-ui/core/StepContent'
import Grid from '@material-ui/core/Grid'
import signup from '../img/document.svg'
import confirm from '../img/confirmation.svg'
import deposit from '../img/deposit.svg'
import Image from 'next/image'
import Forward from '@material-ui/icons/ArrowForward'
import Down from '@material-ui/icons/ArrowDownward'
import Paper from '@material-ui/core/Paper'



// const QontoConnector = withStyles({
//   alternativeLabel: {
//     top: 10,
//     left: 'calc(-50% + 16px)',
//     right: 'calc(50% + 16px)',
//   },
//   active: {
//     '& $line': {
//       borderColor: '#784af4',
//     },
//   },
//   completed: {
//     '& $line': {
//       borderColor: '#784af4',
//     },
//   },
//   line: {
//     borderColor: '#eaeaf0',
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// })(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,#ffba00 0%,#ffba00 50%,rgb(138,35,135) 100%)',
    },
    
  },
  
  completed: {
    '& $line': {
      backgroundImage:
      'linear-gradient( 95deg,#ffba00 0%,#ffba00 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    background: 'linear-gradient( 95deg,#ffba00 0%,#ffba00 50%,rgb(138,35,135) 100%)',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [<p>Register for a free account by clicking <a>Here</a></p>, <p>Confirm your account details through your Email</p>, <p>Make a deposit to your account and </p>];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <p>Register for a free account by clicking <a>Here</a></p>;
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

const Steps=(props)=>{
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();
  const [mobile,setMobile]=useState(false)

  useEffect(()=>{
    let width=window.innerWidth
    //let user=Cookie.getJSON('user')
    
    console.log(name)
    if(width<500){
      setMobile(true)
      console.log('mobile view')
     
    }
    else if(width>500){
        setMobile(false)
        console.log('desktop view')

    }
  },[])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div  style={{marginTop:50}} className={classes.root}>
      <h3 className='getting-started-header' style={{textAlign:'center'}}>
      How to get started
    </h3>
  
     
      <Grid direction='row' container justify='center' alignItems='center' >
        <Grid style={{display:'grid',placeItems:'center',padding:30}} item xs={12} md={2}>
         <Paper style={{width:'100%',height:300,display:'grid',placeItems:'center',zIndex:1000}} className='countdown-bg1' elevation={20}>
         <Image width={100} height={100} layout='intrinsic' src={signup} />
          <p style={{textAlign:'center',fontSize:20,color:'white'}}>Register</p>
         </Paper>
        </Grid>
        <Grid style={{}} style={{display:'grid',placeItems:'center'}} item xs={12} md={2}>
        {mobile ? 
          <Down style={{width:50,height:50,color:'#ffab00'}} />
          :
          <Forward style={{width:50,height:50,color:'#ffab00'}} />
        }
        </Grid>
        
        <Grid style={{display:'grid',placeItems:'center',padding:30}} item xs={12} md={2}>
        <Paper style={{width:'100%',height:300,display:'grid',placeItems:'center',zIndex:1000}} className='countdown-bg1' elevation={20}>
          <Image width={100} height={100} layout='intrinsic' src={confirm} />
          <p style={{textAlign:'center',color:'white', fontSize:20}}>Confirm your Email</p>
          </Paper>
        </Grid>
        <Grid style={{display:'grid',placeItems:'center'}} item xs={12} md={2}>
        {mobile ? 
          <Down style={{width:50,height:50,color:'#ffab00'}} />
          :
          <Forward style={{width:50,height:50,color:'#ffab00'}} />
        }
        </Grid>
        <Grid style={{display:'grid',placeItems:'center',padding:30}} item xs={12} md={2}>
        <Paper style={{width:'100%',height:300,display:'grid',placeItems:'center',zIndex:1000}} className='countdown-bg1' elevation={20}>
          <Image width={120} height={120} layout='intrinsic' src={deposit} />
          <p style={{textAlign:'center',fontSize:20,color:'white'}}>Make a deposit</p>
          </Paper>
        </Grid>
      </Grid>
      <p className='access-para' style={{textAlign:'center',fontSize:20}}>
    To access the features and benefits provided by winster trade investment<Button style={{color:'#ffab00'}} onClick={()=>{Router.push(`../Register/${props.bomber}`)}} ><span style={{}}> Sign up </span></Button> with credentials and get started. 
    </p>
    </div>
  );
}
export default Steps