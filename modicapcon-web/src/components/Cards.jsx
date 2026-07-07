import { useEffect } from "react";

export default function ServicesSection() {

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
    <section className="services-section py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="main-title">Complete Business Consulting Solutions</h2>
          <div className="divider"></div>
          <p className="subtitle">
            We support entrepreneurs, manufacturers, and enterprises at every stage — from setup to expansion.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">

          <div className="col-12 col-md-6 col-lg-6">
            <div className="service-card fade-up">
              <h5 className="card-title">
                <i className="fa-solid fa-industry me-2"></i>
                Industrial Land Assistance
              </h5>            
              <ul className="ps-5">
                <li>industrial Land Identification and Business Feasibility Support.</li>
                <li>Sell/Puchase Support for Industrial Land and Industry.</li>
                <li>Lease Ammendment, Industrail Land Transfer from MPIDC.</li>
                <li>Industry Layout Approvals.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div className="service-card fade-up">
              <h5 className="card-title">
                <i className="fa-solid fa-handshake me-2"></i>
                Government Permissions
              </h5>
              <ul className="ps-5">
                <li> IEM PART-A and IEM PART-B for large scale industries.</li>
                <li>Fire Safety Permission (Provisional NOC).</li>
                <li>Contractor Employer License</li>
                <li>Electrical Drawing and Permission with Full Setup</li>
                <li>Factory License</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div className="service-card fade-up">
              <h5 className="card-title">
                <i className="fa-solid fa-leaf me-2"></i>
                Pollution Control & Compliance
              </h5>              
              <ul className="ps-5">
                <li>CPCB / SPCB Registrations</li>
                <li>Consent to Establish</li>
                <li>Consent to Operate</li>
                <li>Renewal / Expansion</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div className="service-card fade-up">
              <h5 className="card-title">
                <i className="fa-solid fa-coins me-2"></i>
                Subsidy & Incentive Consulting
              </h5>              
              <ul className="ps-5">
                <li>Eligibility Assessment</li>
                <li>Application Filing</li>
                <li>Documentation Support</li>
                <li>Follow-ups</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div className="service-card fade-up">
              <h5 className="card-title">
                <i className="fa-solid fa-chart-line me-2"></i>
                CCIP (Investment Promotion)
              </h5>              
              <ul className="ps-5">
                <li>Investment Benefits (100Cr+)</li>
                <li>Project Report</li>
                <li>MSME & MPIDC Follow-ups</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div className="service-card fade-up">
              <h5 className="card-title">
                <i className="fa-solid fa-building-columns me-2"></i>
                Bank Finance
              </h5>              
              <ul className="ps-5">
                <li>Loan Guidance</li>
                <li>Application to Disbursement</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}