import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor:'transparent',
    borderRadius:10,
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Faqs=()=> {
  const classes = useStyles();

  return (
    <div style={{marginTop:80,display:'grid',placeItems:'center'}} className={classes.root}>
        <h3 style={{color:'#ffba00'}}>
            Faqs
        </h3>
      <Accordion className='faqs-accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography style={{color:'white'}} className={classes.heading}>What is winsterinvestment.com ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'white'}}>
          The hoardtradeinvestment.com is modern investment program where you are able to make deposit and get the profit. Our Corporate Headquarters is located here: 63 ul. Słowackiego Juliusza Street, Mikołów, Poland 43-19. hoardtradeinvestment.com LTD registration number is №12908756. Our goal is to achieve the highest return from the activity on the foreign currency exchange (Forex) and Cryptocurrency exchange markets. Our company is constantly evolving, it improves its marketing components and creates new investment proposals. All this makes the hoardtradeinvestment.com an industry leader and to be able to adapt to the constantly changing market conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faqs-accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color:'white'}} className={classes.heading}>Who controls the Investment portfolio?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'white'}}>
          The investment portfolio is managed by a team of experienced financial specialists, of lawyers, professional trade analysts who have been working on the currency exchange market for more than 15 years on average. Our experience and contacts ensure access for us to a wide range of local and global resources and bring about benefit from the world's best and most effective technologies of trading on the Forex and Cryptocurrency market.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faqs-accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color:'white'}} className={classes.heading}>Who can participate in hoardtradeinvestment.com ? Do you accept investors from different countries?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'white'}}>
          Any person or company can participate in hoardtradeinvestment.com . We have no restrictions on any country. The only condition is accepting our terms of service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faqs-accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color:'white'}} className={classes.heading}>What do I need to start investing with hoardtradeinvestment.com ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'white'}}>
          First of all, you need to register a new account, select an investment plan and make a deposit at least $100 through the available payment systems. For details check the link: Get Started
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faqs-accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color:'white'}} className={classes.heading}>What is the minimum/maximum amount allowed to deposit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'white'}}>
          Currently we have an introductory low deposit minimum amount of $100 and going up to $Unlimited which is the maximum allowed for a single deposit and depends on your investment plan. You are able to check min. and max. amount for each plan in our main page and your account menu "Make Deposit"
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faqs-accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color:'white'}} className={classes.heading}>What is the minimum amount for Bitcoin withdrawal ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'white'}}>
          he minimum amount for withdrawal via Bitcoin is $5
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
export default Faqs