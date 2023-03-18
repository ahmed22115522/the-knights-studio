import React from 'react'
import './watch.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import firstItem from '../../Assets/images/img_279d8bf30e659e169bf99ecff2410196.jpg'
import secondItem from '../../Assets/images/shutterstock_1205409658.jpg'
import thirdItem from '../../Assets/images/shutterstock_618651278.jpg'
import fourthItem from '../../Assets/images/camera-gear.jpg'
import fifthItem from '../../Assets/images/20190814094413-shutterstock-1035432709.jpg'
import sixthItem from '../../Assets/images/product-photos.png'

const Watch = () => {

  const print = () => {
    console.log('Hello');
  }

  return (
    <div className='container-fluid py-5 my-5 watch-section'>
      <h2 className='watch-text fw-bold ms-3'>WATCH AND CHOOSE</h2>
      <p className='sup-watch ms-4'>WHICH OF THESE SERVICES YOU WANT</p>

      <OwlCarousel autoWidth={false} className='owl-theme text-light text-center my-5 py-5' dots={false} cellPadding={0} stagePadding={50} onDragEnter={print} margin={25} items={3} slideBy={3}>
        <div className='item'>
            <div className="item-image">
              <img className='w-100' src={fourthItem} alt="" />
            </div>
            <div className="item-desc my-3 py-2">
              <p className='fs-3 m-0'>VISUAL EFFECTS</p>
              <div className="item-desc-absoloute"></div>
            </div>
        </div>
        <div className='item'>
            <div className="item-image">
              <img className='w-100' src={fourthItem} alt="" />
            </div>
            <div className="item-desc my-3 py-2">
              <p className='fs-3 m-0'>MONTAGE</p>
              <div className="item-desc-absoloute"></div>
            </div>
        </div>
        <div className='item'>
            <div className="item-image">
              <img className='w-100' src={fourthItem} alt="" />
            </div>
            <div className="item-desc my-3 py-2">
              <p className='fs-3 m-0'>VIDEOGRAPHY</p>
              <div className="item-desc-absoloute"></div>
            </div>
        </div>
        <div className='item'>
            <div className="item-image">
              <img className='w-100' src={fourthItem} alt="" />
            </div>
            <div className="item-desc my-3 py-2">
              <p className='fs-3 m-0'>RENT GEAR <span className='fs-4'>{'(SOON)'}</span></p>
              <div className="item-desc-absoloute"></div>
            </div>
        </div>
        <div className='item'>
            <div className="item-image">
              <img className='w-100' src={fourthItem} alt="" />
            </div>
            <div className="item-desc my-3 py-2">
              <p className='fs-3 m-0'>SEMINARS RECORDING</p>
              <div className="item-desc-absoloute"></div>
            </div>
        </div>
        <div className='item'>
            <div className="item-image">
              <img className='w-100' src={fourthItem} alt="" />
            </div>
            <div className="item-desc my-3 py-2">
              <p className='fs-3 m-0'>PHOTOGRAPHY <span className='fs-4'>{'(PRODUCTS)'}</span></p>
              <div className="item-desc-absoloute"></div>
            </div>
        </div>
      </OwlCarousel>

      <div className="section-spacing"></div>
    </div>
  )
}

export default Watch