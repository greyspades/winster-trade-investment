import React, {useState,useRef} from 'react'
import Head from 'next/head'
import CountUp from 'react-countup'
import {Waypoint} from 'react-waypoint'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import AccountBalance from '@material-ui/icons/AccountBalance'


const Counter = () => {
    const [count,setCount]=useState(false)

    const startCount=(start)=>{
        start()
        console.log('ludex gundyr')
    }
    return (
        <div>
            <Head>
            <script src="../js/method-assign.js"></script>



<script src="../js/jquery-3.3.1.min.js"></script>

<script src="../js/js-plugins/crum-mega-menu.js"></script>
<script src="../js/theme-plugins.js"></script>
<script src="../js/js-plugins/isotope.pkgd.min.js"></script>
<script src="../js/js-plugins/ajax-pagination.js"></script>
<script src="../js/js-plugins/material.min.js"></script>
<script src="../js/js-plugins/bootstrap-datepicker.js"></script>

<script src="js/js-plugins/swiper.min.js"></script>


<script defer src="fonts/fontawesome-all.js"></script>

<script src="js/main.js"></script>
            </Head>


    <div className="main-content-wrapper medium-padding120">
  <section className="bg-dotted-map pt-mobile-80">
    <div className="container">
      <div className="row medium-padding300">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="counters">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb30">
              <div className="crumina-module crumina-counter-item">



                <div className="counter-numbers counter">
                <CountUp
  start={1}
  end={6386}
  duration={1.1}
  //separator=" "
  decimals={0}

  
  
  onEnd={() => setCount(true)}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
        <Waypoint
        onEnter={start}
        />
          
          <span style={{textAlign:'center'}} ref={countUpRef} />
       
         
        
                            
    </div>
  )}
</CountUp>
                    
                  <span data-speed={2000} data-refresh-interval={3} data-to={6386} data-from={2} />
                </div>
                <h4 className="counter-title">Market price</h4>
                <p className="counter-text">Our surging market price is well leveraged and continues to grow remarkably </p>
                <div className="counter-line" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="crumina-module crumina-counter-item">
                <div className="counter-numbers counter">
                  <span data-speed={2000} data-refresh-interval={3} data-to={16} data-from={2}>16</span>
                  <div className="units">mb</div>
                </div>
                <h4 className="counter-title">Average block size</h4>
                <p className="counter-text">The average block size of our crypto mining share, we go big and strive to oncrease our presence even more</p>
                <div className="counter-line" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="crumina-module crumina-counter-item">
                <div className="counter-numbers counter">
                  <span data-speed={2000} data-refresh-interval={3} data-to={8327} data-from={2} />
                  <div className="units" />
                  <CountUp
  start={1}
  end={3277}
  duration={1.1}
  //separator=" "
  decimals={0}
  
  
  
  onEnd={() => setCount(true)}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
        <Waypoint
        onEnter={start}
        />
          
          <span style={{textAlign:'center'}} ref={countUpRef} />
       
         
        
                            
    </div>
  )}
</CountUp>


                </div>
                <h4 className="counter-title">Clients worldwide</h4>
                <p className="counter-text">We have had a large number of clients from all over the world from different fields and backgrounds.</p>
                <div className="counter-line" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="crumina-module crumina-counter-item">
                <div className="counter-numbers counter">
                  <span data-speed={2000} data-refresh-interval={3} data-to={2000} data-from={2} />
                  
                  <CountUp
  start={1}
  end={5000}
  duration={1.1}
  //separator=" "
  decimals={0}
  
  
  
  onEnd={() => setCount(true)}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
        <Waypoint
        onEnter={start}
        />
          
          <span style={{textAlign:'center'}} ref={countUpRef} />
       
         
        
                            
    </div>
  )}
</CountUp>
<div className="units">

                 +
                  </div>
                </div>
                <h4 className="counter-title">Transactions</h4>
                <p className="counter-text">The latest and efficient technology trends and infrastructure enables us to make transactions as seamlessly as possible.</p>
                <div className="counter-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>

            
        </div>
    )
}

export default Counter
