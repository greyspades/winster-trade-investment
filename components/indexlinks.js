/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import Grid from '@material-ui/core/Grid'


// @material-ui/icons
import { Apps, CloudDownload, Instagram } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
//import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "@material-ui/core/Button";

import styles from "../js/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function IndexLinks(props) {
  const classes = useStyles();
  return (

    <List className={classes.list}>
    
      {/*<CustomDropdown
        noLiPadding
        navDropdown
        buttonText="Components"
        buttonProps={{
          className: classes.navLink,
          color: "transparent"
        }}
        buttonIcon={Apps}
        dropdownList={[
          <Link href="/components">
            <a className={classes.dropdownLink}>Home</a>
          </Link>,
          <a
            href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
            target="_blank"
            className={classes.dropdownLink}
        >
            Investment Plans
          </a>
        ]}
      />*/}
      
      <ListItem className={classes.listItem}>
      <Button
        href="/"
        color="transparent"
        target="_blank"
        className={classes.navLink}
      >
        Home
      </Button>
    </ListItem>
   

    <ListItem className={classes.listItem}>
      <Button
        href="/login"
        color="transparent"
        target="_blank"
        className={classes.navLink}
      >
        Login
      </Button>
    </ListItem>
    <ListItem className={classes.listItem}>
      <Button
        href="../signup"
        color="transparent"
        target="_blank"
        className={classes.navLink}
      >
        Sign Up
      </Button>
    </ListItem>
    <ListItem className={classes.listItem}>
      
      
      {/*<Tooltip
        id="instagram-Pinterest"
        title="Follow us on Pinterest"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.pinterest.com/Capitalinvestmentoption/&ved=2ahUKEwjVmPDpm-HwAhVExIUKHcrRBvcQFjABegQIBhAC&usg=AOvVaw3GPtVggFT7_dgREoPGwJFV"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
         <PinterestIcon style={{width:25,height:25,marginTop:-3}} />
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className={classes.listItem}>
      <Tooltip
        id="instagram-facebook"
        title="Follow us on facebook"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          href="https://www.facebook.com/capitalinvestmentoption.uk/"
          target="_blank"
          className={classes.navLink}
        >
            <FacebookIcon style={{width:25,height:25,marginTop:-3}} />
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className={classes.listItem}>
      <Tooltip
        id="instagram-tooltip"
        title="Follow us on instagram"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          href="https://instagram.com/capitalinvestmentoption?utm_medium=copy_link"
          target="_blank"
          className={classes.navLink}
        >
            <InstagramIcon style={{width:25,height:25,marginTop:-3}} />
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className={classes.listItem}>
      <Tooltip
        id="Youtube-tooltip"
        title="Follow us on Youtube"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          target="_blank"
          className={classes.navLink}
        >
            <YouTubeIcon style={{width:25,height:25,marginTop:-3}} />
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className={classes.listItem}>
      <Tooltip
        id="Linkedin-tooltip"
        title="Follow us on Linked in"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          href="https://www.linkedin.com/in/capital-investment-option-412501182"
          target="_blank"
          className={classes.navLink}
        >
            <LinkedInIcon style={{width:25,height:25,marginTop:-3}} />
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className={classes.listItem}>
      <Tooltip
        id="Youtube-tooltip"
        title="Follow us on Youtube"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          target="_blank"
          className={classes.navLink}
          onClick={props.refProp}
        >
            move
        </Button>
      </Tooltip>*/}
    </ListItem>
    
    <ListItem className={classes.listItem}>
      <Tooltip
        id="Youtube-tooltip"
        title="products and services"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          target="_blank"
          className={classes.navLink}
          onClick={props.service}
        >
            Services
        </Button>
      </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Tooltip
        id="Youtube-tooltip"
        title="about winster trade investment"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          target="_blank"
          className={classes.navLink}
          onClick={props.about}
        >
            About Us
        </Button>
      </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Tooltip
        id="Youtube-tooltip"
        title="plans and packages "
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          target="_blank"
          className={classes.navLink}
          onClick={props.package}
        >
            Plans
        </Button>
      </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Tooltip
        id="Youtube-tooltip"
        title="Testimonials from investors"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          target="_blank"
          className={classes.navLink}
          onClick={props.testimonial}
        >
            Testimonials
        </Button>
      </Tooltip>
      </ListItem>
      
      <ListItem className={classes.listItem}>
      <Tooltip
        id="Youtube-tooltip"
        title="contact us"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          target="_blank"
          className={classes.navLink}
          onClick={props.contact}
        >
            Contact Us
        </Button>
      </Tooltip>
      </ListItem>
  </List>
//     <Grid>
      


//       <Grid >


// <Button
//   href="/landing"
//   color="transparent"
//   target="_blank"

// >

// </Button>


// </Grid>
// <Grid >
// <Button
//   href="/login"
//   color="transparent"
//   target="_blank"
//   //className={classes.navLink}
// >
//   Login
// </Button>
// </Grid>
// <Grid >
// <Button
//   href="../Register"
//   color="transparent"
//   target="_blank"
//   //className={classes.navLink}
// >
//   Sign Up
// </Button>
// </Grid>
// <Grid >
// <Tooltip
//   id="Youtube-tooltip"
//   title="Follow us on Youtube"
//   placement={"top"}
//   //classes={{ tooltip: classes.tooltip }}
// >
//   <Button
//     color="transparent"
//     //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
//     target="_blank"
//     //className={classes.navLink}
//     onClick={props.service}
//   >
//       Services
//   </Button>
// </Tooltip>
// </Grid>

// <Grid >
// <Tooltip
//   id="Youtube-tooltip"
//   title="Follow us on Youtube"
//   placement={"top"}
//   //classes={{ tooltip: classes.tooltip }}
// >
//   <Button
//     color="transparent"
//     //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
//     target="_blank"
//     className={classes.navLink}
//     onClick={props.faqs}
//   >
//       Faqs
//   </Button>
// </Tooltip>
// </Grid>



// <Grid >
// <Tooltip
//   id="Youtube-tooltip"
//   title="Follow us on Youtube"
//   placement={"top"}
//   //classes={{ tooltip: classes.tooltip }}
// >
//   <Button
//     color="transparent"
//     //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
//     target="_blank"
//     //className={classes.navLink}
//     onClick={props.package}
//   >
//       Plans
//   </Button>
// </Tooltip>
// </Grid>



// <Grid className={classes.listItem}>
// <Tooltip
//   id="Youtube-tooltip"
//   title="Follow us on Youtube"
//   placement={"top"}
//   classes={{ tooltip: classes.tooltip }}
// >
//   <Button
//     color="transparent"
//     //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
//     target="_blank"
//     className={classes.navLink}
//     onClick={props.testimonial}
//   >
//       Testimonials
//   </Button>
// </Tooltip>
// </Grid>


// <Grid >
// <Tooltip
//   id="Youtube-tooltip"
//   title="Follow us on Youtube"
//   placement={"top"}
//   //classes={{ tooltip: classes.tooltip }}
// >
//   <Button
//     color="transparent"
//     //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
//     target="_blank"
//     className={classes.navLink}
//     onClick={props.contact}
//   >
//       Contact Us
//   </Button>
// </Tooltip>
// </Grid> 
//     </Grid>
    
  );
}
