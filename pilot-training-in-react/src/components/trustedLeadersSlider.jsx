import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function TrustedLeadersSlider() {

  return (
    <>
      <div className="slider-wrapper">
        <div className="swiper trusted-leaders-Slider">
          <div className="swiper-wrapper">
            <Swiper
              modules={[Navigation]}
              className="mySlider"
              loop={true}
              slidesPerView={3}
              spaceBetween={10}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },

                768: {
                  slidesPerView: 2,
                },

                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {/* <!-- Slide --> */}
              <SwiperSlide>
                <div className="card-box">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/4ipu2T1PL9s?si=hj_dg7WvkPegWfcR"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p className="fw-bold text-center">Bhavik Khatri</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-box">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/4ipu2T1PL9s?si=hj_dg7WvkPegWfcR"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p className="fw-bold text-center">Bhavik Khatri</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-box">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/4ipu2T1PL9s?si=hj_dg7WvkPegWfcR"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p className="fw-bold text-center">Bhavik Khatri</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-box">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/4ipu2T1PL9s?si=hj_dg7WvkPegWfcR"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p className="fw-bold text-center">Bhavik Khatri</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-box">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/4ipu2T1PL9s?si=hj_dg7WvkPegWfcR"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p className="fw-bold text-center">Bhavik Khatri</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-box">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/4ipu2T1PL9s?si=hj_dg7WvkPegWfcR"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p className="fw-bold text-center">Bhavik Khatri</p>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>

          {/* <!-- Buttons --> */}
          <div className="slider-buttons">
            <button className="prev-btn">‹</button>
            <button className="next-btn">›</button>
          </div>
        </div>
      </div>
    </>
  );

}

export default TrustedLeadersSlider;