import React from 'react'

 const MyContainer = (props) => {
    return (
        <div>
            
    <section>
      <div className="container">
        <div className="row medium-padding80">
          <div  id="details" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="crumina-module crumina-module-slider crumina-slider--info-boxes">
              <div className="swiper-btn-wrap">
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
              </div>
              <div className="swiper-container auto-height" data-show-items={5} data-prev-next={1}>
                <div style={{}} className="swiper-wrapper">
              
        {props.children}
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
