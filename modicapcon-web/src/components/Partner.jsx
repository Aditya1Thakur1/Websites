import { useEffect } from "react";
import aboutImg from "../assets/images/vecteezy_illustration-of-a-man-in-front-of-a-laptop-holding-a-smartphone_6230296-1-1280x1280.png"; // apni image laga

export default function Partner() {

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
              Your Growth Partner in Business Consulting
            </h2>

            <div className="divider"></div>

            <ul className="about-list">
              <li>Practical knowledge of government processes</li>
              <li>Time-saving and hassle-free execution</li>
              <li>Clear communication & transparent workflow</li>
              <li>Trusted by growing businesses and industries</li>
            </ul>

            <button className="custom-btn">
              CONTACT US
              <span className="icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}