import React,{useRef,useState,useEffect} from 'react'
import Head from 'next/head';
import Image from 'next/image'
// import jsplug from '../js/theme-plugins'
// import jsmain from '../js/main'
// import jsmenu from '../js/js-plugins/crum-mega-menu'
// import jsstock from '../js/js-plugins/highstock'
import Products from '../../components/products'
import Carousel from '../../components/carousel'
import Plans from '../../components/plans'
import Counter from '../../components/counter'
import Overview from '../../components/marketoverview'
import Testimonials from '../../components/testimonial'
import Payments from '../../components/payments'
import Cryptos from '../../components/cryptos'
import Steps from '../../components/steps'
import Faqs from '../../components/faqs'
import Security from '../../components/security'
import {motion} from 'framer-motion'
import Grid from '@material-ui/core/Grid'
import {useRouter} from 'next/router'
import Filter1Icon from '@material-ui/icons/Filter1'
import Filter2Icon from '@material-ui/icons/Filter2'
import Filter3Icon from '@material-ui/icons/Filter3'
import FilterIcon from '@material-ui/icons/Filter'
import Divider from '@material-ui/core/Divider'
import MyContainer from '../../components/myContainer'
//import affili from '../../img/affili.jpg'
import Contact from '../../components/contact'
import logo1 from'../../img/logo1.png'
import logo2 from'../../img/logo2.png'
import white from '../../img/white.png'
import logo3 from '../../img/logo3.png'
import MyFooter from '../../components/myFooter'
import Clock from 'react-digital-clock';
import { TickerTape } from "react-ts-tradingview-widgets";
import Script from 'next/script'


//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter
  
} from 'reactstrap'
import { faPiggyBank, faMoneyCheck, faMoneyCheckAlt, faCoins, } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header'
import HeaderLinks from '../../components/HeaderLinks'
import bg from '../../img/bg-2.png'
import Affiliate from '../../components/Affiliate'
//import Footer from 'rc-footer';
//import 'rc-footer/assets/index.css';

import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import AddressIcon from '@material-ui/icons/LocationOnOutlined'
import About from '../../components/about'
import Particles from 'react-particles-js'


const dashboardRoutes=[]

const Home = () => {

  //const { t } = useTranslation('footer');

  const Router=useRouter()
  const {slug}=Router.query || ''
  
  const [mobile,setMobile]=useState(false)

  const aboutRef = useRef(null)
  const serviceRef=useRef(null)
  const packageRef=useRef(null)
  const contactRef=useRef(null)
  const testimonialRef=useRef(null)
  const startRef=useRef(null)
  const faqsRef=useRef(null)




  const aboutScroll = () => aboutRef.current.scrollIntoView()  
  const serviceScroll = () => serviceRef.current.scrollIntoView()  
  const packageScroll = () => packageRef.current.scrollIntoView()  
  const testimonialScroll = () => testimonialRef.current.scrollIntoView() 
  const contactScroll = () => contactRef.current.scrollIntoView()
  const startScroll=()=>startRef.current.scrollIntoView()  
  const faqsScroll=()=>faqsRef.current.scrollIntoView()  

  useEffect(()=>{
    let width=window.innerWidth
    //let user=Cookie.getJSON('user')
    console.log(JSON.stringify(slug))
    //console.log(name)
    if(width<500){
      setMobile(true)
      console.log('mobile view')
     
    }
    else if(width>500){
        setMobile(false)
        console.log('desktop view')

    }
    // if(slug=='services'){
    //     serviceScroll
    // }
  },[])


    return (
        <div>
   <Head>
  
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no maximum-scale=1" />
  <title>Winster trade investment</title>
  
    
  <div>
  <link rel="stylesheet" type="text/css" href="css/plugins.min.css" />
  <link rel="stylesheet" type="text/css" href="css/theme-styles.min.css" />
  <link rel="stylesheet" type="text/css" href="css/blocks.min.css" />
  <link rel="stylesheet" type="text/css" href="css/widgets.min.css" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700i,900," rel="stylesheet" />
</div>

{/* <script type="text/javascript" src=""/>

<script type="text/javascript" src="../js/jquery-3.3.1.min.js"/>

<script type="text/javascript" src="../js/map-shortcode.js"/>

<script type="text/javascript" src="../js/js-plugins/crum-mega-menu.js"/>
<script type="text/javascript" src='../js/theme-plugins'/>
<script type="text/javascript" src="../js/js-plugins/isotope.pkgd.min.js"/>
<script type="text/javascrip src="../js/js-plugins/ajax-pagination.js"/>
<script type="text/javascript" src="../js/js-plugins/swiper.min.js"/>
<script type="text/javascript" src="../js/js-plugins/material.min.js"/>
<script type="text/javascript" src="../js/js-plugins/orbitlist.js"/>

<script type="text/javascript" src="../js/js-plugins/bootstrap-datepicker.js"/> */}

<script type="text/javascript" src="../../js/jquery-3.3.1.min.js"></script>

<script defer src="fonts/fontawesome-all.js"/>

<script type="text/javascript" src='../../js/main.js'/>







   </Head>
   
<div>
<Script strategy='afterInteractive' type="text/javascript" dangerouslySetInnerHTML={{__html:`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/610087fa649e0a0a5cce3e11/1fbl16b6j';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}}/>
  
<Grid container >
<Header
          
          fixed
          color="transparent"
          //routes={dashboardRoutes}
          // changeColorOnScroll={{
          //   color:'transparent',
          //   height:50,
          // }}
          
          // rightLinks={(
          //       <div>
          //         <div>
          //         name
          //       </div>
          //         <div>
          //         name
          //       </div>
          //       </div>
          // )}
          
        rightLinks={<HeaderLinks faqs={faqsScroll} start={startScroll} contact={contactScroll} testimonial={testimonialScroll} package={packageScroll} service={serviceScroll} about={aboutScroll} />}   
/>
</Grid>
<Particles
className='particles'
canvasClassName='particle-canvas'
    params={
      {
        "autoPlay": true,
        "background": {
          // "color": {
          //   "value": "#232741"
          // },
          // "image": "url('http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png')",
          // "position": "50% 50%",
          // "repeat": "no-repeat",
          // "size": "20%",
          //"opacity": 1
        },
        // "backgroundMask": {
        //   "composite": "destination-out",
        //   "cover": {
        //     "color": {
        //       "value": "#fff"
        //     },
        //     "opacity": 1
        //   },
        //   "enable": false
        // },
        "fullScreen": {
          "enable": true,
          "zIndex": 1
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 60,
        "interactivity": {
          "detectsOn": "canvas",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "repulse"
            },
            "onDiv": {
              "selectors": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 1,
              "maxSpeed": 50,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 250,
              "duration": 2,
              "mix": false,
              "opacity": 0,
              "size": 0
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 400,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#ffffff"
                  },
                  "stop": {
                    "value": "#000000"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#000000"
                },
                "length": 2000
              }
            },
            "push": {
              "default": true,
              "groups": [],
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad"
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "trail": {
              "delay": 1,
              "pauseOnStop": false,
              "quantity": 1
            }
          }
        },
        "manualParticles": [],
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        },
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "collisions": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "enable": false,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#ffab00",
            "animation": {
              "h": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              },
              "s": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              },
              "l": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              }
            }
          },
          "destroy": {
            "mode": "none",
            "split": {
              "count": 1,
              "factor": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 3
              },
              "rate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": {
                  "min": 4,
                  "max": 9
                }
              },
              "sizeOffset": true
            }
          },
          "groups": {},
          "life": {
            "count": 0,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0,
              "sync": false
            },
            "duration": {
              "random": {
                "enable": false,
                "minimumValue": 0.0001
              },
              "value": 0,
              "sync": false
            }
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#ffffff"
            },
            "consent": false,
            "distance": 150,
            "enable": false,
            "frequency": 1,
            "opacity": 0.4,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#00ff00"
              },
              "enable": false
            },
            "triangles": {
              "enable": false,
              "frequency": 1
            },
            "width": 1,
            "warp": false
          },
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "enable": false,
              "rotate": {
                "x": 600,
                "y": 600
              }
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 50
            },
            "path": {
              "clamp": true,
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false
            },
            "outModes": {
              "default": "out",
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": true,
            "size": false,
            "speed": 1,
            "spin": {
              "acceleration": 0,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fillColor": {
                "value": "#000000"
              }
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 160
          },
          "opacity": {
            "random": {
              "enable": true,
              "minimumValue": 0.1
            },
            "value": {
              "min": 0,
              "max": 1
            },
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 1,
              "sync": false,
              "destroy": "none",
              "minimumValue": 0,
              "startValue": "random"
            }
          },
          "orbit": {
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 45
            },
            "width": 1
          },
          "reduceDuplicates": false,
          "repulse": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
          },
          "roll": {
            "darken": {
              "enable": false,
              "value": 0
            },
            "enable": false,
            "enlighten": {
              "enable": false,
              "value": 0
            },
            "speed": 25
          },
          "rotate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false
          },
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "options": {},
            "type": "circle"
          },
          "size": {
            "random": {
              "enable": true,
              "minimumValue": 1
            },
            "value": {
              "min": 1,
              "max": 3
            },
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 4,
              "sync": false,
              "destroy": "none",
              "minimumValue": 0.3,
              "startValue": "random"
            }
          },
          "stroke": {
            "width": 0
          },
          "tilt": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "enable": false
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          },
          "wobble": {
            "distance": 5,
            "enable": false,
            "speed": 50
          },
          "zIndex": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "themes": []
      }
	    }
	/>



  
  {/* ... end Header */}
  <div className="main-content-wrappr">
    <section style={{}}  data-settings="particles-1" className="main-sectio alpha-heading crumina-flying-balls particles-js bg-  responsive-align-center">
      <div style={{}} className="container top-container">
        <div className="row winster-top">
          <div style={{}} className="col-lg-6 col-md-12 col-sm-12 col-xs-6 logo-grid">
            <div className='winster-main-logo' style={{}}>
            <Image priority={true}  src={logo1} layout='fill' />
            </div>
          </div>
          <div style={{}} className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
            <header style={{}} className="heading-talk crumina-module crumina-heading heading--h1  heading--with-decoration winster-header">
              <h1 className=" heading-title f-size-90 weight-normal no-margin">Winster<br/>
                <span className="weight-bold">Trade</span></h1>
              <h2 className="c-primary">Investment solutions</h2>
            </header>
          
          </div>
      
        </div>
       
      </div>
      
    </section>
    <Grid style={{marginTop:30,marginBottom:50}} container justify='center'>
          <a data-scroll href="/signup" className="btn btn--large btn--transparent btn--secondary">Get started</a>
          </Grid>
          <TickerTape colorTheme="dark"></TickerTape>
            <Grid className='index-head' container justify='center' alignItems='center' style={{marginTop:20}}>
            
            <h2 style={{}} className=''>Bringing the Revolution</h2>
          
            <p className={'talk'}  style={{fontSize:20,padding:10}}>
            Welcome to winstertradeinvestment.com We are a leading company that focus on Forex market and Cryptocurrency sectors. Our goal is to achieve the highest return from the activity on the foreign currency exchange (Forex) and Cryptocurrency exchange markets. If you would like to enter the world of online Forex trading and Cryptocurrency trading with modern Cloud Mining platform then you are on your right way. Investments with hoardtradeinvestment.com are affordable and safe. Our team works tirelessly to ensure that each and every one of our clients receives the attention they deserve and reaches great success and growth throughout their investment career.

winstertradeinvestment.com is an investment fund which has been in business since 2016 and
 achieved excellent results. The experience and skills of our traders and financial experts is the key to the success of the investment fund. Throughout our careers, each of us has practiced investment management at the highest levels and built a solid reputation for fantastic skills and substantial experience. Our highly motivated employees and experienced experts from the area of finance and related fields including trading, analytics, marketing, computer technology, law and management are ready to provide professional services. Profits gained through the work of
 our specialists are fairly shared between the fund and private investors, our clients.
              
          </p>
       

            </Grid>
           
            <div ref={serviceRef} style={{marginTop:10,marginBottom:30}}>
            {
              mobile ? 
              <Products />
              :
              <div className='countdown-bg'>
              <Products />
            </div>
            }
         
            </div>
            <hr className="divider" />
           
            
            {/* <Divider style={{height:0.2,backgroundColor:'grey',marginTop:30,width:'90%'}} variant="middle" /> */}
            {/* <div style={{}}>
            <Carousel />
            </div>
            <hr className="divider" /> */}
            <div>
              <Cryptos />
            </div>
            <hr className="divider" />
            {/* <Divider style={{height:0.2,backgroundColor:'grey',marginTop:30,width:'90%'}} variant="middle" /> */}
            <div ref={packageRef} style={{marginTop:10}}>
              <Plans />
            </div>
            <div>
              <Carousel />
            </div>
           
            {/* <div>
              <Payments />
            </div> */}
            <hr className="divider" />

           <div className=''>
             <Overview />
           </div>
           <hr className="divider" />

            <div style={{marginTop:60}} ref={startRef}>
            {
              mobile ? 
              <Steps bomber={slug} />
              :
              <div style={{padding:10}} className=''>
              <Steps bomber={slug} />
            </div>
            }
            </div>
         
           <div ref={faqsRef}>
              <Faqs />
           </div>
           <hr className="divider" />
           <div>
             <Security />
           </div>

   
            <div>
              <Counter />
            </div>

            <div ref={testimonialRef}>
              <Testimonials />
            </div>
            
            <div style={{display:'grid',placeItems:'center'}}>
              <Affiliate />
            </div>



    
    <section className="medium-padding120 responsive-align-center">
      <div className="container">
        <div className="row bg-2">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb30">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <img className="primary-dots mb30" src={require('../../img/dots.png')} alt="dots" />
              <h2 style={{textAlign:'center'}} className="heading-title weight-normal">Winster tokens
              </h2>
              <Grid container justify='center'>
                <motion.div style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}}>
                <Image src={logo3} height={200} width={200} layout='intrinsic' />
                </motion.div>
              </Grid>
              <div className="heading-text">Our very own decentralized currency which scales on every transaction and referal you make
              You can accumulate winster tokens by making deposits and making referals, and as your balance increases so do your tokens
              </div>
              <Grid style={{marginTop:30,}} container justify='center' direction='row'>
                <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:22}}>level 1</p>
                </Grid>

                <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:22}}><span style={{color:'#ffab00'}}>100</span> tokens</p>
                </Grid>
              </Grid>

              <Grid container justify='center' direction='row'>
              <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:22}}>level 1</p>
                </Grid>

                <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:22}}><span style={{color:'#ffab00'}}>150</span> tokens</p>
                </Grid>
              </Grid>

              <Grid container justify='center' direction='row'>
              <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:22}}>level 3</p>
                </Grid>

                <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:22}}><span style={{color:'#ffab00'}}>300</span> tokens</p>
                </Grid>
              </Grid>
            </header>

            <div className="crumina-module crumina-counter-item counter--icon-left mt60">
              <svg className="woox-icon">
                <use xlinkHref="svg-icons/sprites/icons.svg#icon-group" />
              </svg>
              <div className="counter-content">
                <div className="counter-numbers counter">
                  <span data-speed={2000} data-refresh-interval={3} data-to={68000} data-from={2}>68000</span>
                  <div className="units">+</div>
                </div>
                <h4 className="counter-title">ICO Participants</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-lg-offset-0 col-sm-12 col-xs-12">
            <div className="widget w-distribution-ends countdown-bg1">
              <h5 className="title">Distribution
                <br />Ends In:</h5>
              <div className="crumina-countdown-item">
              <Clock format={'hh-mm'} />
              </div>


              <a href="/signup" className="btn btn--large btn--pink-light">
                Get started
              </a>


              <div className="crumina-module crumina-skills-item skills-item--bordered">
                <div className="skills-item-info">
                  <span className="skills-item-title">$6M<span className="skills-item-count c-primary"><span className="count-animate" data-speed={1000} data-refresh-interval={50} data-to={50} data-from={0} /><span className="units">m</span></span></span>
                </div>
                <div className="skills-item-meter">
                  <span className="skills-item-meter-active bg-primary-color" style={{width: '50%'}} />
                </div>
                <span className="add-info">
                  <span><span className="c-link-color">Softcap</span> in 76 days</span>
                  <span className="c-link-color">Hardcap</span>
                </span>
              </div>
              <div className="price-wrap">
                <div className="token-price">
                  Token Price:
                  <div className="price-value">$0.0023</div>
                </div>
                <div className="token-total">
                  winster tokens:
                  <div className="price-value">6803.0122</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Grid style={{}} container justify='center' ref={contactRef}>
      <Contact />
    </Grid>
  </div>
  {/* Footer */}
  <div  className="footer ">

  <MyFooter />
    {/* <canvas id="can" />
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
          <div className="widget w-info">
            <a href="index-2.html" className="site-logo">
              <img src="img/logo-primary.png" alt="Woox" />
              <svg className="woox-icon" viewBox="0 0 481.448 101.996">
                <path d="M152.514 14.926c0 2.1-1.339 4.593-2.1 7.081L126.3 89.366c-2.487 7.654-8.229 11.673-14.543 11.673-6.889 0-12.056-4.019-15.309-11.673L76.162 43.822 55.877 89.366c-3.253 7.654-8.994 11.673-15.309 11.673-6.7 0-12.056-4.019-14.543-11.673L2.1 22.007C1.148 19.519 0 17.031 0 14.926A14.213 14.213 0 0 1 14.352.574c5.358 0 11.1 3.062 12.821 8.037l15.5 49.18L62.575 9.76C65.063 3.827 69.655.574 76.162.574c6.7 0 11.29 3.253 13.778 9.186l19.71 48.031 15.692-49.18c1.531-4.593 7.271-8.037 12.821-8.037a14.212 14.212 0 0 1 14.351 14.352zM263.69 51.285c0 34.253-29.853 50.711-51.667 50.711-22.006 0-51.859-16.458-51.859-50.711C160.164 17.223 190.016 0 212.022 0c21.815 0 51.668 17.223 51.668 51.285zm-73.292 0c0 14.352 9.568 24.3 21.624 24.3 11.864 0 21.624-9.951 21.624-24.3 0-14.926-9.759-24.877-21.624-24.877-12.055 0-21.622 9.951-21.622 24.877zm190.974 0c0 34.253-29.853 50.715-51.672 50.715-22.006 0-51.858-16.458-51.858-50.711C277.845 17.223 307.7 0 329.7 0c21.819 0 51.672 17.223 51.672 51.285zm-73.291 0c0 14.352 9.567 24.3 21.623 24.3 11.865 0 21.624-9.951 21.624-24.3 0-14.926-9.759-24.877-21.624-24.877-12.056 0-21.623 9.951-21.623 24.877zm173.367 36.932c0 7.271-6.7 13.4-13.97 13.4-4.4 0-7.846-2.3-10.716-5.55l-21.05-24.686-21.05 24.686c-2.87 3.253-6.123 5.55-10.716 5.55-7.08 0-13.97-6.124-13.97-13.4a12.074 12.074 0 0 1 3.254-8.229l25.45-28.9-25.45-28.9a12.348 12.348 0 0 1-3.062-8.037c0-7.463 6.89-13.586 13.97-13.586a13.062 13.062 0 0 1 10.716 5.549L435.712 30.8l20.859-24.676c2.87-3.444 6.315-5.549 10.907-5.549 6.89 0 13.778 6.124 13.778 13.586a12.352 12.352 0 0 1-3.062 8.037l-25.451 28.9 25.451 28.9a11.252 11.252 0 0 1 3.254 8.219z" data-name="Слой 2" />
              </svg>
            </a>
            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra vulputate sapien nec sagittis aliquam bibendum.</p>
          </div>
          <div className="widget w-contacts">
            <ul className="socials socials--white">
              <li className="social-item">
                <a href="#">
                  <i className="fab fa-twitter woox-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#">
                  <i className="fab fa-dribbble woox-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#">
                  <i className="fab fa-instagram woox-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#">
                  <i className="fab fa-linkedin-in woox-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#">
                  <i className="fab fa-facebook-square woox-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
            <span> 2018.</span>
            <span><a href="index-2.html">The Woox</a> - ICO and Cryptocurrency Website Template.</span>
            <div className="logo-design">
              <img src="img/logo-fire.png" alt="ThemeFire" />
              <div className="design-wrap">
                <div className="sup-title">love </div>
                <a href="templatespoint.net" className="logo-title">Templates Point</a>
              </div>
            </div>
            <div className="logo-design logo-design-crumina">
              <img src="img/crumina-logo.png" alt="Crumina" />
              <div className="design-wrap">
                <div className="sup-title" />
                <a target="_blank" href="https://www.templateshub.net">Templates Hub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <a className="back-to-top" href="#">
    
        <Image layout='intrinsic' width={50} height={50} src={logo2} />
    
    </a> */}
  </div>
</div>
</div>
    )
}

export default Home

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common', 'footer'])),
//       // Will be passed to the page component as props
//     },
//   };
// }