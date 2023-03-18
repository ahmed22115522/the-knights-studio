import React from 'react'
import './founders.css'
import abdo from '../../Assets/images/IMG_55.jpg'
import ali from '../../Assets/images/IMG_55600001.jpg'

const Founders = () => {
  return (
    <div className='founders-section my-5 py-5 container-fluid'>
      <div className="founders-text text-center">
        <h2 className='founder-h fw-bold white-txt-founders'>THE FOUNDER OF <span className='gold-txt-founders'>THE KNIGHTS STUDIO</span></h2>
        <h3 className='fs-5 gold-txt-founders'>IT'S BEEN LONG JOURNEY FROM ROCK <span className='white-txt-founders'>OF THE BOTTOM BE OUR PARTNER IN SUCCESS</span></h3>
      </div>

      <div className="founders-images my-5 text-center">
        <div className="row">
          <div className="col-6">
            <div className="founders-profile w-50 m-auto">
              <img className='w-100 founders-profile' src={abdo} alt="" />
              <p className='fw-bold fs-4 prime-color mt-3'>ABD ELRAHMAN <br /> <span className='text-white'>EL KHOULY</span></p>
            </div>
          </div>
          <div className="col-6">
            <div className="founders-profile w-50 m-auto">
              <img className='w-100 founders-profile' src={abdo} alt="" />
              <p className='fw-bold fs-4 prime-color mt-3'>ALI<br /><span className='text-white'>HESHAM</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Founders