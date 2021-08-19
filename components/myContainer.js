import React from 'react'

 const MyContainer = (props) => {
    return (
        <div>
            
    <section>
      <div className="container">
        <div className="">
          <div  id="details" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="crumina-module crumina-module-slider  crumina-slider--info-boxes">

              <div className="swiper-container auto-height" >
                <div style={{}} className="swiper-wrapper ">
              
                    <div className='' style={{display:'grid',placeItems:'center'}}>
                    {props.children}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}
export default MyContainer
