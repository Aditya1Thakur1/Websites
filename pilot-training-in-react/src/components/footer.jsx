import React from "react";

function Footer() {

    return(
            <section className="footer fade-content">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <span className="span">Registration Closed</span>
                        <p className="mb-1 text-danger fw-bold">Registration for our 2026 batch is now closed.</p>
                        <p className="fs-12 text-green fw-bold">You can still be in our standby list!</p>
                    </div>
                    <div className="text-end">
                        {/* <span>SEATS FULL</span> */}
                        <a href="https://wa.link/dc1nkx" className="btn btn-primary">STANDBY LIST</a>
                    </div>
                    {/* <div>
                        <img src="src/assets/img/whatsapp.png" className="img-fluid" alt="whatsapp">
                    </div> */}
                    </div>
                </div>
            </section>
    )
}

export default Footer;