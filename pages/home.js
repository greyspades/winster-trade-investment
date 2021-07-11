import React,{useRef,useState} from 'react'
import Head from 'next/head';
// import jsplug from '../js/theme-plugins'
// import jsmain from '../js/main'
// import jsmenu from '../js/js-plugins/crum-mega-menu'
// import jsstock from '../js/js-plugins/highstock'
import Products from '../components/products'
import Carousel from '../components/carousel'
import Plans from '../components/plans'
import Counter from '../components/counter'
import Overview from '../components/marketoverview'
import Payments from '../components/payments'
import Cryptos from '../components/cryptos'
import Steps from '../components/steps'
import Faqs from '../components/faqs'
import Security from '../components/security'


import Filter1Icon from '@material-ui/icons/Filter1'
import Filter2Icon from '@material-ui/icons/Filter2'
import Filter3Icon from '@material-ui/icons/Filter3'
import FilterIcon from '@material-ui/icons/Filter'

import MyContainer from '../components/myContainer'
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

const Home = () => {




  const aboutRef = useRef(null)
  const serviceRef=useRef(null)
  const packageRef=useRef(null)
  const contactRef=useRef(null)
  const testimonialRef=useRef(null)

  const aboutScroll = () => aboutRef.current.scrollIntoView()  
  const serviceScroll = () => serviceRef.current.scrollIntoView()  
  const packageScroll = () => packageRef.current.scrollIntoView()  
  const testimonialScroll = () => testimonialRef.current.scrollIntoView() 
  const contactScroll = () => contactRef.current.scrollIntoView()   


    return (
        <div>
   <Head>
  
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no maximum-scale=1" />
  <title>Woox - Home Page</title>
  
    
  <div>
  <link rel="stylesheet" type="text/css" href="css/plugins.min.css" />
  <link rel="stylesheet" type="text/css" href="css/theme-styles.min.css" />
  <link rel="stylesheet" type="text/css" href="css/blocks.min.css" />
  <link rel="stylesheet" type="text/css" href="css/widgets.min.css" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700i,900," rel="stylesheet" />
</div>

<script type="text/javascript" src=""></script>
<script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>

<script type="text/javascript" src="../js/map-shortcode.js"></script>

<script type="text/javascript" src="../js/js-plugins/crum-mega-menu.js"></script>
<script type="text/javascript" src='../js/theme-plugins'></script>
<script type="text/javascript" src="../js/js-plugins/isotope.pkgd.min.js"></script>
<script type="text/javascript" src="../js/js-plugins/ajax-pagination.js"></script>
<script type="text/javascript" src="../js/js-plugins/swiper.min.js"></script>
<script type="text/javascript" src="../js/js-plugins/material.min.js"></script>
<script type="text/javascript" src="../js/js-plugins/orbitlist.js"></script>

<script type="text/javascript" src="../js/js-plugins/bootstrap-datepicker.js"></script>

<script defer src="fonts/fontawesome-all.js"></script>

<script type="text/javascript" src='../js/main.js'></script>


   </Head>
   
<div>
  
  
  <header className="header" id="site-header">
    <div className="container">
      <div className="header-content-wrapper">
        <a href="index-2.html" className="site-logo">
          {/* <img src={require("img/logo-primary.png")} alt="Woox" /> */}
          {/* <svg className="woox-icon" viewBox="0 0 481.448 101.996">
            <path d="M152.514 14.926c0 2.1-1.339 4.593-2.1 7.081L126.3 89.366c-2.487 7.654-8.229 11.673-14.543 11.673-6.889 0-12.056-4.019-15.309-11.673L76.162 43.822 55.877 89.366c-3.253 7.654-8.994 11.673-15.309 11.673-6.7 0-12.056-4.019-14.543-11.673L2.1 22.007C1.148 19.519 0 17.031 0 14.926A14.213 14.213 0 0 1 14.352.574c5.358 0 11.1 3.062 12.821 8.037l15.5 49.18L62.575 9.76C65.063 3.827 69.655.574 76.162.574c6.7 0 11.29 3.253 13.778 9.186l19.71 48.031 15.692-49.18c1.531-4.593 7.271-8.037 12.821-8.037a14.212 14.212 0 0 1 14.351 14.352zM263.69 51.285c0 34.253-29.853 50.711-51.667 50.711-22.006 0-51.859-16.458-51.859-50.711C160.164 17.223 190.016 0 212.022 0c21.815 0 51.668 17.223 51.668 51.285zm-73.292 0c0 14.352 9.568 24.3 21.624 24.3 11.864 0 21.624-9.951 21.624-24.3 0-14.926-9.759-24.877-21.624-24.877-12.055 0-21.622 9.951-21.622 24.877zm190.974 0c0 34.253-29.853 50.715-51.672 50.715-22.006 0-51.858-16.458-51.858-50.711C277.845 17.223 307.7 0 329.7 0c21.819 0 51.672 17.223 51.672 51.285zm-73.291 0c0 14.352 9.567 24.3 21.623 24.3 11.865 0 21.624-9.951 21.624-24.3 0-14.926-9.759-24.877-21.624-24.877-12.056 0-21.623 9.951-21.623 24.877zm173.367 36.932c0 7.271-6.7 13.4-13.97 13.4-4.4 0-7.846-2.3-10.716-5.55l-21.05-24.686-21.05 24.686c-2.87 3.253-6.123 5.55-10.716 5.55-7.08 0-13.97-6.124-13.97-13.4a12.074 12.074 0 0 1 3.254-8.229l25.45-28.9-25.45-28.9a12.348 12.348 0 0 1-3.062-8.037c0-7.463 6.89-13.586 13.97-13.586a13.062 13.062 0 0 1 10.716 5.549L435.712 30.8l20.859-24.676c2.87-3.444 6.315-5.549 10.907-5.549 6.89 0 13.778 6.124 13.778 13.586a12.352 12.352 0 0 1-3.062 8.037l-25.451 28.9 25.451 28.9a11.252 11.252 0 0 1 3.254 8.219z" data-name="Слой 2" />
          </svg> */}
        </a>
        <nav id="primary-menu" className="primary-menu">
          {/* menu-icon-wrapper */}
          <a href="javascript:void(0)" id="menu-icon-trigger" className="menu-icon-trigger showhide">
            <span className="mob-menu--title">Menu</span>
            <span id="menu-icon-wrapper" className="menu-icon-wrapper">
              <svg width="1000px" height="1000px">
                <path id="pathD" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800" />
                <path id="pathE" d="M 300 500 L 700 500" />
                <path id="pathF" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200" />
              </svg>
            </span>
          </a>
          <ul className="primary-menu-menu">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Cryptocurrencies</a>
              <ul className="sub-menu">
                <li className="menu-item-has-children">
                  <a href="002_cryptocurrencies.html">
                    Bitcoin <span>BTC</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="002_cryptocurrencies.html">Support Bitcoin</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">How to buy Bitcoin</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">Development</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">Exchange</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="002_cryptocurrencies.html">
                    Ethereum <span>ETH</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="002_cryptocurrencies.html">Support Ethereum</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">How to buy Ethereum</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">Development</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">Exchange</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="002_cryptocurrencies.html">
                    Dash <span>DASH</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="002_cryptocurrencies.html">Support Dash</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">How to buy Dash</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">Development</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">Exchange</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="002_cryptocurrencies.html">
                    Litecoin <span>LTC</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="002_cryptocurrencies.html">Support Litecoin</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">How to buy Litecoin</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">Development</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">Exchange</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="002_cryptocurrencies.html">
                    Ripple <span>XRP</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="002_cryptocurrencies.html">Support XRP</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">How to buy XRP</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">Development</a>
                    </li>
                    <li>
                      <a href="002_cryptocurrencies.html">Exchange</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Experts</a>
              <ul className="sub-menu sub-menu--with-icons">
                <li className="menu-item-has-children">
                  <a href="003_experts.html">
                    <img src="img/if_Bitcoin_2745023.png" className="woox-icon" alt="bitcoin" />
                    Bitcoin <span>BTC</span>
                    <svg className="woox-icon icon-arrow-right-line">
                      <use xlinkHref="svg-icons/sprites/icons.svg#icon-arrow-right-line" />
                    </svg>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="003_experts.html">Support Bitcoin</a>
                    </li>
                    <li>
                      <a href="003_experts.html">How to buy Bitcoin</a>
                    </li>
                    <li>
                      <a href="003_experts.html">Development</a>
                    </li>
                    <li>
                      <a href="003_experts.html">Exchange</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="003_experts.html">
                    <img src={require("../img/if_etherium_eth_ethcoin_crypto_2844386.png")} className="woox-icon" alt="bitcoin" />
                    Ethereum <span>ETH</span>
                    <svg className="woox-icon icon-arrow-right-line">
                      <use xlinkHref="svg-icons/sprites/icons.svg#icon-arrow-right-line" />
                    </svg>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="003_experts.html">Support Ethereum</a>
                    </li>
                    <li>
                      <a href="003_experts.html">How to buy Ethereum</a>
                    </li>
                    <li>
                      <a href="003_experts.html">Development</a>
                    </li>
                    <li>
                      <a href="003_experts.html">Exchange</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="003_experts.html">
                    <img src="img/if_dash_dashcoin_2844383.png" className="woox-icon" alt="bitcoin" />
                    Dash <span>DASH</span>
                    <svg className="woox-icon icon-arrow-right-line">
                      <use xlinkHref="svg-icons/sprites/icons.svg#icon-arrow-right-line" />
                    </svg>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="003_experts.html">Support Dash</a>
                    </li>
                    <li>
                      <a href="003_experts.html">How to buy Dash</a>
                    </li>
                    <li>
                      <a href="003_experts.html">Development</a>
                    </li>
                    <li>
                      <a href="003_experts.html">Exchange</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="003_experts.html">
                    <img src="img/if_litecion_ltc_lite_coin_crypto_2844390.png" className="woox-icon" alt="litecoin" />
                    Litecoin <span>LTC</span>
                    <svg className="woox-icon icon-arrow-right-line">
                      <use xlinkHref="svg-icons/sprites/icons.svg#icon-arrow-right-line" />
                    </svg>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="003_experts.html">Support Litecoin</a>
                    </li>
                    <li>
                      <a href="05_case_details_ver_01.html">How to buy Litecoin</a>
                    </li>
                    <li>
                      <a href="003_experts.html">Development</a>
                    </li>
                    <li>
                      <a href="003_experts.html">Exchange</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="003_experts.html">
                    <img src="img/if_ripple_xrp_coin_2844396.png" className="woox-icon" alt="bitcoin" />
                    Ripple <span>XRP</span>
                    <svg className="woox-icon icon-arrow-right-line">
                      <use xlinkHref="svg-icons/sprites/icons.svg#icon-arrow-right-line" />
                    </svg>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="003_experts.html">Support XRP</a>
                    </li>
                    <li>
                      <a href="003_experts.html">How to buy XRP</a>
                    </li>
                    <li>
                      <a href="003_experts.html">Development</a>
                    </li>
                    <li>
                      <a href="003_experts.html">Exchange</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-mega-menu menu-item-has-children">
              <a href="#">Coin Market</a>
              <div className="megamenu megamenu-bg">
                <div className="megamenu-row">
                  <div className="col4">
                    <ul>
                      <li className="megamenu-item-info">
                        <h5 className="megamenu-item-info-title">Tools</h5>
                      </li>
                      <li>
                        <a href="005_coin_market.html">Global Charts</a>
                      </li>
                      <li>
                        <a href="005_coin_market.html">Currency Converter</a>
                      </li>
                      <li>
                        <a href="005_coin_market.html">Website Widgets</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col4">
                    <ul>
                      <li className="megamenu-item-info">
                        <h5 className="megamenu-item-info-title">Market Cap</h5>
                      </li>
                      <li>
                        <a href="005_coin_market.html">Top 5 Coins</a>
                      </li>
                      <li>
                        <a href="005_coin_market.html">Tokens</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col4">
                    <ul>
                      <li className="megamenu-item-info">
                        <h5 className="megamenu-item-info-title">Trending</h5>
                      </li>
                      <li>
                        <a href="005_coin_market.html">Gainers and Losers</a>
                      </li>
                      <li>
                        <a href="005_coin_market.html">Recently Added</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col4">
                  </div>
                </div>
              </div>
            </li>
            {/* <li className="menu-item-has-mega-menu menu-item-has-children">
              <a href="#">Events</a>
              <div className="megamenu megamenu-with-slider">
                <div className="crumina-module crumina-module-slider slider-item--equal-height">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="crumina-module crumina-heading heading--with-decoration heading--h5">   <h5 className="heading-title">Upcoming Events</h5>   <div className="heading-text">Investigationes demonstraverunt lectores legere me lius      quod ii legunt faucibus ac feugiat sed lectus. </div></div>
                      <div className="swiper-btn-wrap">
                        <div className="swiper-btn-prev">
                          <svg className="woox-icon icon-line-arrow-left">
                            <use xlinkHref="svg-icons/sprites/icons.svg#icon-line-arrow-left" />
                          </svg>
                        </div>
                        <div className="swiper-btn-next">
                          <svg className="woox-icon icon-line-arrow-right">
                            <use xlinkHref="svg-icons/sprites/icons.svg#icon-line-arrow-right" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="swiper-container" data-show-items={3} data-prev-next={1}>
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <a href="006_events.html" className="crumina-module crumina-event-item">
                              <div className="event-thumb bg-event1">
                                <div className="overlay" />
                              </div>
                              <div className="event-content">
                                <div className="event-date">
                                  <svg className="woox-icon icon-school-calendar">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#icon-school-calendar" />
                                  </svg>
                                  March 16, 2018
                                </div>
                                <h6 className="event-title">What is Bitcoin? A Step-By-Step Guide For Beginners</h6>
                              </div>
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="007_event_details.html" className="crumina-module crumina-event-item">
                              <div className="event-thumb bg-event2">
                                <div className="overlay" />
                              </div>
                              <div className="event-content">
                                <div className="event-date">
                                  <svg className="woox-icon icon-school-calendar">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#icon-school-calendar" />
                                  </svg>
                                  March 16, 2018
                                </div>
                                <h6 className="event-title">Apply them in Your Own Routines</h6>
                              </div>
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="008_event_register.html" className="crumina-module crumina-event-item">
                              <div className="event-thumb bg-event3">
                                <div className="overlay" />
                              </div>
                              <div className="event-content">
                                <div className="event-date">
                                  <svg className="woox-icon icon-school-calendar">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#icon-school-calendar" />
                                  </svg>
                                  March 16, 2018
                                </div>
                                <h6 className="event-title">Is your business ready for a production blockchain rollout?</h6>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
            <li className="menu-item-has-mega-menu menu-item-has-children">
              <a href="#">Pages</a>
              <div className="megamenu">
                <div className="megamenu-row">
                  <div className="col4">
                    <ul>
                      <li className="megamenu-item-info">
                        <h5 className="megamenu-item-info-title">Standard Pages</h5>
                      </li>
                      <li>
                        <a href="009_news.html">News Page</a>
                      </li>
                      <li>
                        <a href="010_news_details.html">News Details</a>
                      </li>
                      <li>
                        <a href="012_page_not_found.html">Not Found</a>
                      </li>
                      <li>
                        <a href="028_typography.html">Typography</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col4">
                    <ul>
                      <li className="megamenu-item-info">
                        <h5 className="megamenu-item-info-title">Elements</h5>
                      </li>
                      <li>
                        <a href="013_pricing_tables.html">Pricing Tables</a>
                      </li>
                      <li>
                        <a href="014_forms.html">Forms</a>
                      </li>
                      <li>
                        <a href="015_quotes.html">Quotes</a>
                      </li>
                      <li>
                        <a href="016_testimonial_styles.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="017_tabs.html">Tabs</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col4">
                    <ul>
                      <li className="megamenu-item-info">
                        <h5 className="megamenu-item-info-title">Elements</h5>
                      </li>
                      <li>
                        <a href="018_tables.html">Tables</a>
                      </li>
                      <li>
                        <a href="019_expert_hover_effects.html">Experts</a>
                      </li>
                      <li>
                        <a href="029_colors.html">Colors</a>
                      </li>
                      <li>
                        <a href="021_benefits.html">Benefits</a>
                      </li>
                      <li>
                        <a href="022_accordion_toggle.html">Accordions</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col4">
                    <ul>
                      <li className="megamenu-item-info">
                        <h5 className="megamenu-item-info-title">Elements</h5>
                      </li>
                      <li>
                        <a href="023_alerts_message.html">Alerts</a>
                      </li>
                      <li>
                        <a href="024_progress_bars.html">Progress bars</a>
                      </li>
                      <li>
                        <a href="025_button_styles.html">Buttons</a>
                      </li>
                      <li>
                        <a href="026_counters_and_timers.html">Counters</a>
                      </li>
                      <li>
                        <a href="027_headings.html">Headings</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className>
              <a href="011_contacts.html">Contacts</a>
            </li>
          </ul>
        </nav>
        <select className="woox--select language-switcher" data-minimum-results-for-search="Infinity" data-dropdown-css-class="language-switcher-dropdown">
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="English">English</option>
        </select>
      </div>
    </div>
  </header>




  {/* ... end Header */}
  <div className="main-content-wrapper">
    <section data-settings="particles-1" className="main-section crumina-flying-balls particles-js bg-1 medium-padding120 responsive-align-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
            <img className="responsive-width-50" src="img/main.png" alt="image" />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <header style={{}} className="heading-talk crumina-module crumina-heading heading--h1  heading--with-decoration">
              <h1 className=" heading-title f-size-90 weight-normal no-margin">Winster<br/>
                <span className="weight-bold">Trade</span></h1>
              <h2 className="c-primary">Investment solutions</h2>
            </header>
            <a data-scroll href="#details" className="btn btn--large btn--transparent btn--secondary">Details</a>
          </div>
        </div>
      </div>
    </section>
            <section style={{display:'grid',placeItems:'center'}}>
            <Card className='heading-card' style={{}}>
            <CardHeader>
            <h2 style={{color:'#9a7801'}} className=''>CRYPTOCURRENCY INVESTMENT FOR DAILY GROWTH</h2>
            </CardHeader>
            <CardBody>
            <h5 className={'talk'}  style={{}}>
          We are committed in creating wealth for you whenever, wherever. You can always trust us to deliver. Capital Investment Option is always for their customers and will continually do our best to bring meaningful returns on investments.
              
          </h5>
            </CardBody>
    </Card>

            </section>
           
            <section style={{marginTop:100}}>
              <Products/>
            </section>

            
            <div style={{marginTop:80}}>
            <Carousel />
            </div>

            <div>
              <Cryptos />
            </div>

            <div style={{marginTop:80}}>
              <Plans />
            </div>
            <div>
              <MyContainer>
                and so it begins and we shall rise from the ashes and be reborn
              </MyContainer>
            </div>
            <div>
              <Payments />
            </div>


           <div>
             <Overview />
           </div>
           <div>
             <Steps />
           </div>
           <div>
              <Faqs />
           </div>
           <div>
             <Security />
           </div>

    <section className="medium-padding120 responsive-align-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">Affiliate Program</div>
              <h2 className="heading-title weight-normal">Extending your reach
                <span className="weight-bold">all your devices</span></h2>
              <div className="heading-text">
              We are committed in creating wealth for you whenever, wherever. You can always trust us to deliver. Capital investment option is always for their customers and will continually do our best to bring meaningful returns on investments as well as adopting an unlimited CapitalLoan protocol which is aimed at creating financial assistance to everyone across the platform.
              </div>
            </header>
            <p>
            To access the features and benefits being provided by capital investment option kindly<Button onClick={()=>{Router.push(`../Register/${props.bomber}`)}} ><span style={{marginLeft:-30,marginRight:-30,marginTop:-7,marginBottom:-7}}>Sign up</span></Button> with credentials and get started. It's quite easy and doesn't take 
much time, of which you get an offer to become an investor and earn profit. For that reason you mandated to complete the registration process. In order to register yourself as a member of capitalinvestmentoption.com, click on the Create Account button, fill in the registration form and press Register. Your account is ready to use! You are obliged to provide only complete and accurate information about yourself (the Registration Data) when registering as a Member.

            </p>
           
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt30">
            <img className="responsive-width-50" src={require("../img/phone.png")} alt="phone" />
          </div>
        </div>
      </div>
    </section>
   
            <div>
              <Counter />
            </div>



    <section className="bg-1">
      <div className="container">
        <div className="row medium-padding120">
          <div className="crumina-module crumina-featured-block">
            <div className="image-block">
              <img src="img/pc.png" alt="phone" />
            </div>
            <div className="text-block">
              <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                <h2 className="heading-title weight-normal">Access
                  <span className="weight-bold">analytical market &amp; price data</span></h2>
                <div className="heading-text">watch yout money soar!!!!</div>
              </header>
            </div>
          </div>
        </div>
        <div className="row pb100">
          <div className="col-lg-12 col-md-12 col0sm-12 col-xs-12">
            <div className="crumina-module crumina-module-slider clients--slider navigation-center-both-sides">
              <div className="swiper-btn-next">
                <svg className="woox-icon icon-line-arrow-right">
                  <use xlinkHref="svg-icons/sprites/icons.svg#icon-line-arrow-right" />
                </svg>
              </div>
              <div className="swiper-btn-prev">
                <svg className="woox-icon icon-line-arrow-left">
                  <use xlinkHref="svg-icons/sprites/icons.svg#icon-line-arrow-left" />
                </svg>
              </div>
              <div className="row">
                <div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                  <div className="swiper-container" data-show-items={5} data-prev-next={1}>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a className="clients-item" href="#">
                          <img src="img/client1.png" className alt="logo" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a className="clients-item" href="#">
                          <img src="img/client2.png" className alt="logo" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a className="clients-item" href="#">
                          <img src="img/client3.png" className alt="logo" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a className="clients-item" href="#">
                          <img src="img/client4.png" className alt="logo" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a className="clients-item" href="#">
                          <img src="img/client5.png" className alt="logo" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </section>
    <section className="medium-padding120 responsive-align-center">
      <div className="container">
        <div className="row bg-2">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb30">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <img className="primary-dots mb30" src="img/dots.png" alt="dots" />
              <h2 className="heading-title weight-normal">Holding a large volume
                <span className="weight-bold">of trading activity</span></h2>
              <div className="heading-text">We go big or go home and take over the entire market</div>
            </header>
            <p>
              Bla bla bla .........greyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
            </p>
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
                <div className="crumina-countdown" data-date="2019-01-01 00:00:00" />
              </div>
              <a href="006_events.html" className="btn btn--large btn--green-light">
                Join the party
              </a>
              <div className="crumina-module crumina-skills-item skills-item--bordered">
                <div className="skills-item-info">
                  <span className="skills-item-title">$6M<span className="skills-item-count c-primary"><span className="count-animate" data-speed={1000} data-refresh-interval={50} data-to={50} data-from={0} /><span className="units">m</span></span></span>
                </div>
                <div className="skills-item-meter">
                  <span className="skills-item-meter-active bg-primary-color" style={{width: '50%'}} />
                </div>
                <span className="add-info">
                  <span><span className="c-link-color">Softcap</span> in 976 days</span>
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
  </div>
  {/* Footer */}
  {/* <footer id="site-footer" className="footer ">
    <canvas id="can" />
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
    </div>
    <a className="back-to-top" href="#">
      <svg className="woox-icon icon-top-arrow">
        <use xlinkHref="svg-icons/sprites/icons.svg#icon-top-arrow" />
      </svg>
    </a>
  </footer> */}
</div>





        </div>
    )
}

export default Home