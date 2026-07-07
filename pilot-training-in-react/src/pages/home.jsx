import React from "react";
import OfferSlider from "../components/offerSlider.jsx";
import WhySlider from "../components/whyareSlider.jsx";
import TrustedLeadersSlider from "../components/trustedLeadersSlider.jsx";
import FaqCardes from "../components/faqCardes.jsx";
import OmgCardes from "../components/omgCardes.jsx";
import BigCompanies from "../components/bigCompanies.jsx";
import Footer from "../components/footer.jsx";
import TopHeader from "../components/topHeader.jsx";

function Home() {
  return (
    <>
      {/* header top */}
      <TopHeader />

      {/* header */}
      <section>
        <div className="header-container">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center d-flex align-items-center justify-content-center">
                <h1 className="heading mb-md-3">
                  Worried About Your <span>Pilot Training Cost</span> ??
                </h1>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-5 d-flex align-items-center justify-content-center">
                <img
                  src="src/assets/img/14-min.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="col-md-6 col-sm-12 col-lg-7 heading-2 mt-3">
                <div className="blue-gradient">
                  <h3>pti brings to you once in a lifetime opportunity</h3>
                </div>
                <div className="mt-3">
                  <img
                    src="src/assets/img/home1.webp"
                    alt=""
                    className="img-fluid"
                  />
                  <img
                    src="src/assets/img/home2.webp"
                    alt=""
                    className="img-fluid mt-3"
                  />
                </div>
                <div className="banner mt-3">
                  <span>Valid For 1st 50 Students Of June 2026 Batch Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- scholarship section --> */}
      <section className="scholarship fade-content">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center d-flex align-items-center justify-content-center">
              <h1 className="heading mb-md-3">WOWWWWW………</h1>
            </div>
            <div className="col-12 text-center">
              <h3 className="heading-2">
                But wait, is this <span>Scholarship</span> only for ground
                classNamees or flying too ?
              </h3>
            </div>
            <div className="text-center">
              <p className="fw-bold">
                We've got you covered ! From ground classNamees to 100% pilot
                training and type rating expenses, fully job-ready at zero cost!
              </p>
            </div>
          </div>

          <div className="row mt-lg-5">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="box-1">
                <h4>
                  SCHOLORSHIP COVERS <span>100% EXPENSES</span> OF YOUR
                </h4>
              </div>
              <div className="box-2">
                <img
                  src="src/assets/img/100.png"
                  alt=""
                  className="img-fluid"
                />
                <h4>Ground classNamees Cost</h4>
              </div>
              <div className="box-2">
                <img
                  src="src/assets/img/100.png"
                  alt=""
                  className="img-fluid"
                />
                <h4>Ground classNamees Cost</h4>
              </div>
              <div className="box-2">
                <img
                  src="src/assets/img/100.png"
                  alt=""
                  className="img-fluid"
                />
                <h4>Even Your Type Rating Is Covered</h4>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="d-flex justify-content-center">
                <iframe
                  width="90%"
                  height="360"
                  className="rounded-3 shadow"
                  src="https://www.youtube.com/embed/vRC27Yrl_b8?si=70Q47XUbqpfXTpfc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- offer section --> */}
      <OfferSlider />

      {/* <!-- Why are we --> */}
      <section className="why-are-we pb-5 fade-content">
        <div className="container">
          <div className="circle-box">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 className="header">Why are we doin this ?</h3>
            </div>

            <div className="container">
              <div className="row px-2">
                <div className="col-lg-10 col-md-10 col-sm-12 mx-auto body-container">
                  <p>“Hey there, my friends, brothers, and sisters! 👋</p>
                  <p>Hi! My name is Himanshu Goyal</p>
                  <p>
                    A proud veteran of the Australian Air Force ✈️ with 16years
                    of experience living and flying in Australia. I’ve got a
                    Commercial Pilot License in both Australia and India 🌏, and
                    my license is packed with over 10 aircraft type ratings 🛫.
                  </p>
                  <p>
                    But let me tell you something, my journey wasn’t easy. I had
                    no one to guide me, no financialsupport, and had to figure
                    it all out on my own 😓. That’s exactly why I’ve made it my
                    mission tomake sure you don’t have to go through the same
                    struggles 💪.
                  </p>

                  {/* <!-- slider --> */}
                  <WhySlider />

                  <p>I left everything behind and came back to India </p>
                  <p>Pilot Training Institute,</p>
                  <p>
                    A place where your dreams are my priority. And here’s the
                    big news: I’m offering 100%scholarships for your CPL and
                    type rating 🎓✈️. Yes, you read that right—zero financial
                    burden💸. I want to make sure you’re job-ready and
                    stress-free when you take off on your aviationjourney! 🚀
                  </p>
                  <p>
                    Our tagline, "With You Until Success", is my personal
                    promise to be there for you every step ofthe way 🤝. Whether
                    you need guidance, motivation, or just someone who gets it,
                    I’m here foryou. You’re not alone in this anymore—your
                    brother in aviation has got your back!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Trusted Leaders --> */}
      <section className="trusted-leaders pb-5 fade-content">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-4">
              <h3 className="header">
                Trusted by Leaders | Honoured by the Nation
              </h3>
              <h3 className="header">
                From inspiring voices to national recognition, see why PTI
                stands apart.
              </h3>
            </div>

            <div className="col-12">
              {/* slider */}
              <TrustedLeadersSlider />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- no-way --> */}
      <section className="no-way fade-content">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center d-flex align-items-center justify-content-center">
              <h1 className="heading">
                NO WAY!!!!!!!!!!!
                <p className="fw-bold fs-22 text-black">
                  {" "}
                  Ye To Sachme Bohot Krazyyy Hogya
                </p>
              </h1>
            </div>
            <div className="col-12 text-center">
              <h3 className="heading-2">
                <span>Now this feels like my dream is about to come true</span>
              </h3>
            </div>
            <div className="text-center">
              <p className="fw-bold">
                But Wait! What makes PTI so special, and why should I choose
                PTI?
              </p>
            </div>
          </div>

          {/* <!-- left-circle --> */}
          {/* <!-- <div className="circle-box">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="circle4"></div>
          </div> --> */}

          {/* <!-- right-circle --> */}
          <div className="circle-box">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </div>

          <div className="timeline-section">
            <div className="timeline-item">
              <div className="timeline-card image-card">
                <img
                  src="src/assets/img/a5.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-card text-card">
                <h3>
                  The Only Ground School Offering 100% Flying & Type Rating
                  Scholarship
                </h3>
                <p>
                  We’re the only ground school in India offering up to 100%
                  scholarships on your flying & Type rating, making aviation
                  more affordable. This scholarship is designed to support your
                  dreams without the financial burden, ensuring you have access
                  to top-quality flight training at a fraction without the
                  financial burden, of the cost.
                </p>
              </div>
            </div>

            <div className="timeline-item reverse">
              <div className="timeline-card text-card order-md-1 order-3">
                <h3>
                  The Only Ground School with a Real Hybrid Flight Simulator
                </h3>
                <p>
                  Experience hands-on learning with our exclusive C172 and DA42
                  hybrid flight simulators. These simulators offer real-world
                  training scenarios, usually only available during actual
                  flying. You’ll be ahead of your peers, familiar with the
                  aircraft, and ready to excel once you start flying school.
                </p>
              </div>
              <div className="timeline-dot order-md-2 order-2"></div>
              <div className="timeline-card image-card order-md-3 order-1">
                <img
                  src="src/assets/img/a2.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-card image-card">
                <img
                  src="src/assets/img/a5.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-card text-card">
                <h3>
                  The Only Ground School Offering 100% Flying & Type Rating
                  Scholarship
                </h3>
                <p>
                  We’re the only ground school in India offering up to 100%
                  scholarships on your flying & Type rating, making aviation
                  more affordable. This scholarship is designed to support your
                  dreams without the financial burden, ensuring you have access
                  to top-quality flight training at a fraction of the cost.
                </p>
              </div>
            </div>

            <div className="timeline-item reverse">
              <div className="timeline-card text-card order-md-1 order-3">
                <h3>
                  The Only Ground School with a Real Hybrid Flight Simulator
                </h3>
                <p>
                  Experience hands-on learning with our exclusive C172 and DA42
                  hybrid flight simulators. These simulators offer real-world
                  training scenarios, usually only available during actual
                  flying. You’ll be ahead of your peers, familiar with the
                  aircraft, and ready to excel once you start flying school.
                </p>
              </div>
              <div className="timeline-dot order-md-2 order-2"></div>
              <div className="timeline-card image-card order-md-3 order-1">
                <img
                  src="src/assets/img/a2.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- offer-section --> */}
      <section className="offer-section fade-content">
        <div className="container">
          {/* <!-- LEFT --> */}
          <div className="left-side">
            <h2>What else do we offer ?</h2>
            <div>
              <img
                src="src/assets/img/pti-what-else-do-we-offer.webp"
                className="img-fluid rounded"
                alt=""
              />
            </div>
          </div>

          {/* <!-- RIGHT --> */}
          <div className="right-side">
            {/* <!-- CARD --> */}
            <div className="offer-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="tag">FIRSTLY</div>
                  <h3>Industry Experts and Airline Pilots as Guest Mentors</h3>
                </div>

                <div className="card-content">
                  <div className="content-box">
                    <div className="icon">
                      {/* <!-- <img src="src/assets/img/correct.png" alt="" className="img-fluid"> --> */}
                    </div>
                    <p>
                      Learn directly from current airline pilots and aviation
                      industry experts who visit our institute. Their firsthand
                      experience, insights, and guidance help you understand the
                      realities of the aviation industry. Ask them any question,
                      gain clarity, and build your network—something only
                      possible because of our strong industry connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- CARD --> */}
            <div className="offer-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="tag">SECONDLY</div>
                  <h3>Medical and Computer Number Assistance</h3>
                </div>
                <div className="card-content">
                  <div className="content-box">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>
                      "At PTI, we offer unlimited revision classNamees to ensure
                      every concept is crystal clear. Our one-on-one
                      doubt-solving sessions address your specific challenges,
                      providing personalized guidance. Whether it's before exams
                      or during your learning journey, we're always here to
                      support you. Your success is our priority, with no
                      questions left unanswered."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- CARD --> */}
            <div className="offer-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="tag">THIRDLY</div>
                  <h3>Global Flying School Assistance</h3>
                </div>
                <div className="card-content">
                  <div className="content-box">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>
                      "At PTI, we offer unlimited revision classNamees to ensure
                      every concept is crystal clear. Our one-on-one
                      doubt-solving sessions address your specific challenges,
                      providing personalized guidance. Whether it's before exams
                      or during your learning journey, we're always here to
                      support you. Your success is our priority, with no
                      questions left unanswered."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- CARD --> */}
            <div className="offer-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="tag">FOURTHLY</div>
                  <h3>Visa and Admission Support</h3>
                </div>
                <div className="card-content">
                  <div className="content-box">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>
                      "At PTI, we offer unlimited revision classNamees to ensure
                      every concept is crystal clear. Our one-on-one
                      doubt-solving sessions address your specific challenges,
                      providing personalized guidance. Whether it's before exams
                      or during your learning journey, we're always here to
                      support you. Your success is our priority, with no
                      questions left unanswered."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Parents --> */}
      <section className="trusted-leaders pb-5 fade-content">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-4">
              <h3 className="header">
                Trusted by Leaders | Honoured by the Nation
              </h3>
              <h3 className="header">
                From inspiring voices to national recognition, see why PTI
                stands apart.
              </h3>
            </div>

            <div className="col-12">
              {/* slider */}
              <TrustedLeadersSlider />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- experience --> */}
      <section className="experience fade-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 header">
              <h3>Take the Pilot’s Seat Before You Even Leave the Ground!</h3>
            </div>

            <div className="col-12 d-flex position-relative">
              <div className="image">
                <img
                  src="src/assets/img/pilot2.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="header-2">
                <h2>
                  Learn aviation
                  <br />
                  with real cockpit
                  <br />
                  experience <br />
                </h2>
              </div>

              <div className="right-img">
                <div className="text-end">
                  <img src="src/assets/img/pilot1.webp" alt="" />
                </div>
              </div>
              <div className="box">
                <p>
                  India's Only Ground <br /> School With An Advanced
                  <br /> Hybrid{" "}
                  <span className="text-yellow fw-bold">C172</span> &amp;{" "}
                  <span className="text-yellow fw-bold">DA42</span>
                  <br />
                  Simulator
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- faq-section --> */}
      <section className="faq-section">
        <div className="mb-4">
          <p className="header text-center">
            <span>FAQs</span>: Here’s everything you may ask...
          </p>
        </div>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            {/* Faq-cardes */}
            <FaqCardes />
          </div>
        </div>
      </section>

      {/* <!-- omg --> */}
      <section className="omg fade-content">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center heading">
              <h1 className="text-center">
                OMG !!!!!!!!!
                <span>Bas Karo Ab Rulaoge Kya 😊😁</span>
              </h1>
              <p>
                But Wait! There must be surely a lot of hidden terms &
                conditions!!
              </p>
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <OmgCardes />
          </div>
        </div>
      </section>

      {/* <!-- big-companies --> */}
      <section className="big-companies-0 fade-content">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center heading">
              <p>
                {" "}
                We Will Not Leave Your Hand Until You Achieve Your DREAM JOB In
                Big Companies Like...
              </p>

              {/* <!-- SLIDER --> */}
              <BigCompanies />
            </div>

            <div className="col-12 mt-4">
              <div className="text-center">
                <h2 className="fw-bold text-black text-center text-uppercase">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    className="comas-up"
                  >
                    <g fill="#000000c7">
                      <path d="m5.293 1.293 1.414 1.414L3 6.414V7h4v7H1V5.586zM15 7h-4v-.586l3.707-3.707-1.414-1.414L9 5.586V14h6z"></path>
                    </g>
                  </svg>
                  WHICH IS WHY WE SAY, <br /> WITH{" "}
                  <span className="text-yellow">YOU</span>, UNTIL{" "}
                  <span className="text-yellow">SUCCESS</span>.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    className="comas-down"
                  >
                    <g fill="#000000c7">
                      <path d="m7 10.414-4.293 4.293-1.414-1.414L5 9.586V9H1V2h6zM9 9h4v.586l-3.707 3.707 1.414 1.414L15 10.414V2H9z"></path>
                    </g>
                  </svg>
                </h2>
                <h5 className=" fw-bold text-black text-center">
                  <span className="text-style">HURRY UP!!</span> Register Now
                  Before The Seats Are Full, Opportunities Like These Don’t
                  Wait!
                </h5>
              </div>
              <div className="text-center pt-2">
                <img src="src/assets/img/2.webp" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-12 mb-3 pt-3 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2077675696937!2d75.88522689999999!3d22.7205177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fddf9aabc509%3A0x20f3ffa4718a9fda!2sPilot%20Training%20Institute%2CIndore(PTI)%20DGCA%20Ground%20School%20and%20CPL%20classNamees!5e0!3m2!1sen!2sin!4v1778490052666!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
export default Home;
