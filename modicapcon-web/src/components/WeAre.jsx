import { useEffect } from "react";
import aboutImg from "../assets/images/vecteezy_illustration-of-a-man-in-front-of-a-laptop-holding-a-smartphone_6230296-1-1280x1280.png";
import aboutImg2 from "../assets/images/photoroom.png";
import aboutImg3 from "../assets/images/team-2.png";

export default function AboutBanner() {

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

  return (
    <section className="we-are">
      <div className="container">
        <div className="row">

          {/* left CONTENT */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 fade-up pe-md-5">
            <h2 className="about-title">
              WHO WE ARE
            </h2>

            <div class="divider"></div>

            <h3>
              Focused Business Consulting, Built on Experience
            </h3>

            <p>
              ModiCapCon LLP is a professional business consulting firm dedicated to supporting industrial and commercial enterprises. We specialize in navigating government processes, regulatory frameworks, and documentation requirements that are critical for starting and scaling a business.
            </p>
            <p>
              Our team works closely with clients to understand their objectives and deliver practical, result-driven solutions.
            </p>

          </div>

          {/* right IMAGE */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 fade-up">
            <img src={aboutImg} alt="about" className="img-fluid" />
          </div>

        </div>

        <div className="row align-items-center">

          {/* left IMAGE */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 fade-up">
            <img src={aboutImg2} alt="about" className="img-fluid w-75" />
          </div>

          {/* right CONTENT */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 fade-up pe-md-5">
            <h2 className="about-title">
              OUR CORE EXPERTISE
            </h2>

            <div class="divider"></div>

            <div class="">
              <ul>
                <li>Industrial Land Consulting</li>
                <li>Government Liaisoning</li>
                <li>Pollution Control &amp; Environmental Compliance</li>
                <li>Subsidy &amp; Incentive Consulting</li>
              </ul>
            </div>

          </div>



        </div>


        <div className="row">
          {/* left CONTENT */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 fade-up pe-md-5">
            <h2 className="about-title">
              OUR APPROACH
            </h2>
            <div class="divider"></div>
            <h3>
              Clear Process. Reliable Execution.
            </h3>
            <p>
              We believe in structured planning, transparent communication, and consistent follow-ups.
            </p>

            <ul>
              <li>Industrial Land Consulting</li>
              <li>Government Liaisoning</li>
              <li>Pollution Control &amp; Environmental Compliance</li>
              <li>Subsidy &amp; Incentive Consulting</li>
            </ul>
            <p>
              Our approach ensures reduced delays, minimized risks, and smoother project execution.
            </p>
          </div>

          {/* right IMAGE */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 fade-up">
            <img src={aboutImg3} alt="about" className="img-fluid" />
          </div>
        </div>

      </div>
    </section>
  );
}