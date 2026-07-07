import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect } from "react";

import image from "../assets/images/about-img.webp";

export default function AboutSection(){
 useEffect(() => {

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

  }, []);

    return <>
        <section className="section-spacing about-section" data-scroll data-scroll-speed="0">
            <div className="container">
                <div className="row">

                <div className="col-6">
                    <div>
                        {/* <img src={image} alt="About NASA" className="img-fluid" /> */}
                            <img 
                                src={image}
                                data-scroll
                                data-scroll-speed="-1"
                                className="img-fluid"
                            />
                    </div>
                </div>
                
                <div className="col-6" data-scroll data-scroll-class="active">
                        <h2>About NASA</h2>
                        <p>NASA.gov brings you the latest news, images and videos from America's space agency, pioneering the future in space exploration, scientific discovery and aeronautics research. </p>
                        <p>Explore the universe and discover our home planet with the latest NASA science news. Get NASA updates on NASA missions, watch NASA TV live, and learn about our quest to reveal the unknown and benefit all humankind.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
                <div className="bg-info">
                        <h1
                            data-scroll
                            data-scroll-speed="4" className="text-white"
                            >
                            Premium Motion
                        </h1>
                </div>
                       
            </div>
            </div>
            <div className="bg-danger">
             <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="5">
                            Moving Text
                        </div>
                        </div>
        </section>
    </>
}