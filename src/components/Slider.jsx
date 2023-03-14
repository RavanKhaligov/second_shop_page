import SliderItem from './SliderItem'
import Slider from "react-slick";

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <section className='section-slider'>
        <div className='inner-slider'>
          <Slider {...settings}>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
          </Slider>
        </div>
    </section>
  )
}

export default MainSlider