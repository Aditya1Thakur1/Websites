import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Slider() {
  return (
    <div className="container-fluid px-0 hero-section">
      <div className="slider-container">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          slidesPerView={1}
          loop={true}
          speed={1200}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 4000, // 🔥 3s animation + 1s hold feel
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="custom-swiper"
        >
          <SwiperSlide>
            <div className="slide slider-1">
              <div className="slider-text">
                <h2 className="animate-text">
                  Choose Your Industrial Land From Our Land Bank
                </h2>
                <button className="btn btn-primary custom-btn animate-text delay-2 border-0">
                  View All Industrial Plots
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide slider-2">
              <div className="slider-text">
                <h2 className="animate-text">
                  Your Liaisoning Expert on One Click
                </h2>
                <button className="btn btn-primary custom-btn animate-text delay-2 border-0">
                  View All Industrial Plots
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide slider-3">
              <div className="slider-text">
                <h2 className="animate-text">
                  Trusted Business Consulting for Industrial Growth
                </h2>
                <p className="animate-text delay-1">
                  We help businesses secure industrial land, obtain government
                  approvals, meet pollution compliance, and unlock eligible
                  subsidies — all with smooth coordination and expert guidance.
                </p>
                <button className="btn btn-primary custom-btn animate-text delay-2 border-0">
                  View All Industrial Plots
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </button>{" "}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
