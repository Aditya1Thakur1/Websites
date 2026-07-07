// import Slider from "../components/Slider.jsx";
// import Banner from "../components/Banner";
import AboutBanner from "../components/AboutBanner.jsx";
import WeAre from "../components/WeAre.jsx";
import Footer from "../components/Footer.jsx";
import aboutImg from "../assets/images/about4.png";
import { useEffect } from "react";



export default function About() {

    useEffect(() => {
      const elements = document.querySelectorAll(".fade-up");
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      });
  
      elements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);

  return <>


<AboutBanner/>
<WeAre/>


    <section className="partner">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 fade-up">
            <img src={aboutImg} alt="about" className="img-fluid" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 fade-up">
            <h2 className="about-title">
                WHY CHOOSE MODICAPCON LLP
            </h2>

            <div className="divider"></div>

            <p className="m-0">A Consulting Partner You Can Rely On</p>

            <ul className="about-list">
              <li>Strong understanding of government procedures</li>
              <li>Industry-focused consulting expertise</li>
              <li>Time-efficient execution</li>
              <li>Reliable post-approval support</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
<Footer/>

</>
}
