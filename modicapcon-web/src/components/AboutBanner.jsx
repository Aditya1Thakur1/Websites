import { useEffect } from "react";
import aboutImg from "../assets/images/about-banner.png";

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
    <section className="about-banner">
      <div className="container">
        <div className="row">

          {/* left CONTENT */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 fade-up pe-md-5">
            <h2 className="about-title">
              We Are Passionate About Building Strong Businesses
            </h2>

            <h3>
                Trusted Consultants for Land, Compliance & Growth
            </h3>

         <p>
            At ModiCapCon LLP, we support businesses with expert consulting services that simplify approvals, compliance, and expansion. Our focus is to remove operational roadblocks so entrepreneurs and industries can grow with confidence.
         </p>

            <button className="custom-btn">
              CONTACT US
              <span className="icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>


        {/* right IMAGE */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 fade-up">
            <img src={aboutImg} alt="about" className="img-fluid" />
          </div>

        </div>
      </div>
    </section>
  );
}