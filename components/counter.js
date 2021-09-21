import React, {useState,useRef} from 'react'
import Head from 'next/head'
//import CountUp from 'react-countup'
import {Waypoint} from 'react-waypoint'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import AccountBalance from '@material-ui/icons/AccountBalance'
import {Button} from '@material-ui/core'
import { CountUp } from 'use-count-up'
const Counter = (props) => {
    const [counted,setCounted]=useState(false)
    const [count,setCount]=useState(false)

    const endCount=()=>{
      setCounted(true)
      console.log('finished')
    }

    const startCount=()=>{
      //counted==false ? setCount(true) : null
      //setCount(true)
      console.log('started count')
    }
   
    return (
        <div>
           


    <div className="main-content-wrapper medium-padding120">
    {/* <Waypoint
        onEnter={setCounted(false)}
        //onLeave={props.end}
        /> */}
  <section className="bg-dotted-map pt-mobile-80">
    <div className="container">
      <div className="row medium-padding300">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="counters">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb30">
              <div className="crumina-module crumina-counter-item">


                <div className="counter-numbers counter">

                <Waypoint
        onEnter={()=>setCount(true)}
        //onLeave={endCount}
        //onLeave={props.end}
        />
                <CountUp

  start={1}
  end={6486}
  duration={3}
  //separator=" "
  decimalsPlaces={0}
  //redraw={false}
  //preserveValue={true}
  isCounting={count}
  onEndComplete={endCount}
  //onStart={startCount}
/>
  

  

                    
                  <span data-speed={2000} data-refresh-interval={200} data-to={6386} data-from={2} />
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

                  <Waypoint
        onEnter={()=>setCount(true)}
        //onLeave={endCount}
        //onLeave={props.end}
        />
                  <CountUp
  start={1}
  end={3277}
  duration={3}
  //separator=" "
  decimals={0}
  isCounting={count}
  
  
  onEndComplete={() => setCounted(true)}
  //onStart={() => console.log('Started! 💨')}
>


  
</CountUp>


                </div>
                <h4 className="counter-title">Clients worldwide</h4>
                <p className="counter-text">We have had a large number of clients from all over the world from different fields and backgrounds.</p>
                <div className="counter-line" />
                {/* <Button onClick={()=>{setCount(true)}}>

                  click
                </Button> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="crumina-module crumina-counter-item">
                <div className="counter-numbers counter">
                  <span data-speed={2000} data-refresh-interval={3} data-to={2000} data-from={2} />
                  <Waypoint
        onEnter={()=>setCount(true)}
        //onLeave={endCount}
        //onLeave={props.end}
        />
                  <CountUp
  start={1}
  end={5000}
  duration={3}
  //separator=" "
  decimals={0}
  isCounting={count}
  
  
  onEnd={() => setCounted(true)}
  //onStart={() => console.log('Started! 💨')}
>

    

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
