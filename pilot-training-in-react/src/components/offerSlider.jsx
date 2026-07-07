import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import realKnowledge from '../assets/img/seeking-real-knowledge.webp';
import hardworking from '../assets/img/for-hardworking-dreamer.webp';
import struggling from '../assets/img/struggling-financially.webp';
import confused from '../assets/img/confused-soul.webp';
import proud from '../assets/img/make-parents-proud.webp';

import learning from '../assets/img/learning.png';
import effort from '../assets/img/effort.png';
import leverage from '../assets/img/leverage.png';
import overload from '../assets/img/overload.png';
import adventure from '../assets/img/adventure (1).png';

function OfferSlider() {

  return (

    <section className="offer fade-content">

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="header">
              This offer stands only for youuuuu
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-md-12 col-sm-12 mx-auto">
            <Swiper
              modules={[Navigation]}
              className="mySlider"
              loop={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={10}
              navigation={{
                nextEl: '.next-btn',
                prevEl: '.prev-btn',
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
              <SwiperSlide>
                <div className="card-box">
                  <img src={realKnowledge} className="img-fluid" alt="" />
                  <div className="content-box">
                    <div className="icon">
                      <img src={learning} alt="" className="img-fluid p-3" />
                    </div>
                    <h4>Real Knowledge</h4>
                    <p>
                      For the seekers of real knowledge, who value learning deeply over simply chasing marks to clear exams.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-box">
                  <img src={hardworking} className="img-fluid" alt="" />
                  <div className="content-box">
                    <div className="icon">
                      <img src={effort} alt="" className="img-fluid p-3" />
                    </div>
                    <h4>Hardworking</h4>
                    <p>
                      For the hardworking dreamers who are passionate about becoming pilots and will stop at nothing to achieve their goal.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-box">
                  <img src={struggling} className="img-fluid" alt="" />
                  <div className="content-box">
                    <div className="icon">
                      <img src={leverage} alt="" className="img-fluid p-3" />
                    </div>
                    <h4>Struggling Financially</h4>
                    <p>
                      For those struggling financially, who need a helping hand and a mentor to guide them on the right path.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-box">
                  <img src={confused} className="img-fluid" alt="" />
                  <div className="content-box">
                    <div className="icon">
                      <img src={overload} alt="" className="img-fluid p-3" />
                    </div>
                    <h4>Confused Souls</h4>
                    <p>
                      For the confused souls, overwhelmed by endless information online, who can’t afford to risk their parents’ hard-earned money on the wrong choices.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-box">
                  <img src={proud} className="img-fluid" alt="" />
                  <div className="content-box">
                    <div className="icon">
                      <img src={adventure} className="img-fluid p-3" alt="" />
                    </div>
                    <h4>Parents Proud</h4>
                    <p>
                      For the ambitious students who don’t just want to pass exams but aim to crack airline interviews and secure their future.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>

            <div className="slider-buttons text-center text-danger">
              <button className="prev-btn">
                ‹
              </button>
              <button className="next-btn">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferSlider;