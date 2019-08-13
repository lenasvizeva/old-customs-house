import React from 'react'
import Slider from 'react-slick'
import slide1 from './img/test.jpg'
import '../afisha-slider.scss'
import '../../styles/date.scss'
import clock from './img/clock.svg'
import InlineSVG from 'svg-inline-react'
import Fade from 'react-reveal/Fade'
import { Slide } from 'react-slideshow-image'

const PicSliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 677,
      settings: {
        dots: false,
        swipe: false,
      }
    } 
  ]
}

// const picSliderSettings = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: false,
//   indicators: false,
//   arrows: true,
//   onChange: (oldIndex, newIndex) => {
    
//   }
// }

export default () => (
  <div className="slide1 slide--big columns">
    <div className="container column is-10 is-10-mobile">
      <div className="content-holder">

        <div className="content-holder__item">
          <div className="is-hidden-mobile"><h2>3D шоу Le Petit Chef</h2></div>
          
          <div className="date">
            <InlineSVG src={clock} />
            <p className="date__time">ПН - СБ, 20:00 - 22:30</p>
          </div>

          <Fade bottom cascade>
            <div className="text-block">
              <p>Представляем вам Le Petit Chef – кулинарный видео-перфоманс, 
              взорвавший европейское профессиональное сообщество.  
              Обычный ужин превращается в увлекательный шоу-ужин благодаря технологиям 3D-мэппинга. 
              Le Petit Chef – это комбинация цифрового искусства, звука, комедии и технического прогресса, 
              разворачивается прямо на поверхности стола.</p>
            </div>
          </Fade>
        </div>

        <div className="content-holder__item">

          <div className="on-mobile"><h2>3D шоу Le Petit Chef</h2></div>

          <Slider className="afisha-slider" {...PicSliderSettings}>
            <img src={slide1}/>
            <img src={slide1}/>
            <img src={slide1}/>
            <img src={slide1}/>
            <img src={slide1}/>
          </Slider>

          {/* <div className="slide-container afisha-slider">
            <Slide {...picSliderSettings}>
              <div className="each-slide"><img src={slide1}/></div>
              <div className="each-slide"><img src={slide2}/></div>
              <div className="each-slide"><img src={slide1}/></div>
              <div className="each-slide"><img src={slide2}/></div>
              <div className="each-slide"><img src={slide1}/></div>
            </Slide>
          </div> */}

        </div>
        
      </div>
    </div>
  </div>
)
