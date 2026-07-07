import { useEffect } from "react";

export default function CTASection() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="row ">

          {/* LEFT TEXT */}
          <div className="col-sm-12 col-md-12 col-lg-6 fade-up pb-5">
            <h2 className="cta-title">
              Ready to Move Forward?
            </h2>

            <div className="cta-desc">
              <p>
                Supporting businesses with land, compliance, approvals,
                and growth solutions.
              </p>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <div className="col-sm-12 col-md-12 col-lg-6 text-start fade-up">
            <button className="custom-btn">
              CONTACT US
              <span className="icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}