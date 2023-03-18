import React from 'react'
import './prices.css'

const Prices = () => {
  return (
    <section className='plan-section py-5'>
      <div className="prices-desc text-center my-3">
        <h2 className='fs-1 fw-bold prices-desc-h'>CHOOSE YOUR FAVORITE PLAN</h2>
        <p className='white-color fs-5'><span className='prime-color fs-5'>{'NOTE*'}</span> ANY OF THOSE PLANS ADD FREE COIN FOR YOUR BALANCE <span className='prime-color prices-desc-click'>{'CLICK HERE TO KNOW MORE'}</span></p>
      </div>

    <div className="container my-5 py-3">
      <div className="row text-center">
          <div className="col-md-4">
            <div className="plans">
              <div className="plan-name py-3">
                <p className='m-0 fs-5 fw-bold'>SILVER</p>
                <div className="plan-logo"></div>
              </div>
              <div className="active-plan"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="plan-name py-3">
              <p className='m-0 fs-5 fw-bold gold-txt'>GOLD</p>
              <div className="plan-logo gold"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="plan-name py-3">
              <p className='m-0 fs-5 fw-bold diamond-txt'>DIAMOND</p>
              <div className="plan-logo diamond"></div>
            </div>
          </div>
      </div>
      </div>
      
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-6 d-flex justify-content-center">
          <div className="plan-dec bg-light">
            <div className="plan-desc-name gold"></div>
          </div>
        </div>
        <div className="col-md-3 col-6 d-flex justify-content-center">
          <div className="plan-dec bg-light">
            <div className="plan-desc-name gold"></div>
          </div>
        </div>
        <div className="col-md-3 col-6 d-flex justify-content-center">
          <div className="plan-dec bg-light">
            <div className="plan-desc-name gold"></div>
          </div>
        </div>
        <div className="col-md-3 col-6 d-flex justify-content-center">
          <div className="plan-dec bg-light">
            <div className="plan-desc-name"></div>
          </div>
        </div>
      </div>
      </div>

      <div className="section-spacing"></div>

    </section>
  )
}

export default Prices