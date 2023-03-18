import React from 'react'
import './home.css'
import arrow from '../../Assets/icons/arrow.png'

const Home = () => {
  return (
    <section>
      <div className="home d-flex">
        <div className="img-layer">
          <div className="right-panel"></div>
          <div className="left-panel"></div>
        </div>
        <div className="scroll align-self-end">
            <p className='text-light m-5 fs-2'>Scroll Down to see more <img className='arrow' src={arrow} alt="" /> </p>
        </div>

        <div className="scorll-up">
          <button className="btn btn-outline-danger fs-5 px-4 py-2">
            TAP TO TOP
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home