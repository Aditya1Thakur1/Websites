import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function WhySlider() {

  return ( <>

 {/* <!-- slider --> */}
  <div className=" why-we-Slider pb-1">
    <div className="h-25">

        <Swiper
              modules={[Navigation, Autoplay]}
              className="mySlider"
              loop={true}
              slidesPerView={2}
              spaceBetween={5}
              autoplay={{
                delay: 600,
                disableOnInteraction: false,
              }}
              speed={400}

              breakpoints={{
                0: {
                  slidesPerView: 1,
                },

                768: {
                  slidesPerView: 2,
                },

                992: {
                  slidesPerView: 2,
                },
              }}
        >

      {/* <!-- Slide --> */}
            <SwiperSlide>
                <div className="card-box">
                <img src="src/assets/img/aa1.webp" className="rounded img-fluid"/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card-box">
                <img src="src/assets/img/aa2.webp" className="rounded img-fluid"/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card-box">
                <img src="src/assets/img/aa3.webp" className="rounded img-fluid"/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card-box">
                    <img src="src/assets/img/aa4.webp" className="rounded img-fluid"/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card-box">
                <img src="src/assets/img/aa5.webp" className="rounded img-fluid"/>
                </div>
            </SwiperSlide>

              </Swiper>
    </div>
  </div>
  </>

  )
}

export default WhySlider;