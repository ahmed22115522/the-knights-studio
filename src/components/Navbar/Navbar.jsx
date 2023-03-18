import React from 'react'
import './navbar.css'
import home from '../../Assets/icons/home.png'
import gears from '../../Assets/icons/gears.png'
import paper from '../../Assets/icons/scroll-of-old-pap2.png'
import coin from '../../Assets/icons/shining-coin-dollar.png'
import key from '../../Assets/icons/key.png'
import feather from '../../Assets/202on-svg.png'

const Navbar = () => {

  const repeat = [
    {img: home, disc: 'HOME', space: true},
    {img: paper, disc: 'OUR WORK', space: true},
    {img: coin, disc: 'PRICE', space: true},
    {img: gears, disc: 'RENT A GEAR', space: true},
    {img: home, disc: 'CONTACT US', space: false},
  ]

  return (
      <div className='main-nav'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="menu d-flex align-items-center">
              {repeat.map((item, i) => (<>
                <div key={i} className="menu-item mx-4 text-center fw-bold">
                  <p className='text-white m-0'>{item.disc}</p>
                  <img src={item.img} alt="" />
                </div>
                {item.space ? <div key={'space' + i} className="spacer"></div> : ''}
                </>
              ))}
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div className="login-button mx-2 text-dark fs-5 d-flex align-items-center justify-content-center">
                    <img src={feather} alt="" />
                    <p className='m-0 text-nowrap'>SIGN UP</p>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="login-button mx-2 text-dark fs-5 d-flex align-items-center justify-content-center">
                    <img src={key} alt="" />
                    <p className='m-0'>LOGIN</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar