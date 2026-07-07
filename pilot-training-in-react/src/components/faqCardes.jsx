import React, { useEffect, useState } from "react";

function FaqCardes() {

    const [show, setShow] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setShow(true);
        }, 100);

    }, []);

    const faqDataLeft = [
        {
            question: "Why is PTI giving such a good scholarship offer which no one else does?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },

        {
            question: "Is this offer for every year or just for the June 2026 Batch?",
            answer: "Accordion content here."
        },

        {
            question: "What are the eligibility criteria for the 100% scholarship?",
            answer: "Accordion content here."
        },

        {
            question: "Why is PTI giving such a good scholarship offer which no one else does?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
         {
            question: "Why is PTI giving such a good scholarship offer which no one else does?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];

    const faqDataRight = [
        {
            question: "Why is PTI giving such a good scholarship offer which no one else does?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },

        {
            question: "Is this offer for every year or just for the June 2026 Batch?",
            answer: "Accordion content here."
        },

        {
            question: "What are the eligibility criteria for the 100% scholarship?",
            answer: "Accordion content here."
        },

        {
            question: "Why is PTI giving such a good scholarship offer which no one else does?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
         {
            question: "Why is PTI giving such a good scholarship offer which no one else does?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];

    return (

        <>

            {/* LEFT */}

            <div className={`col-md-10 col-sm-12 col-lg-6 fade-content ${show ? "show" : ""}`}>
                <div className="accordion custom-accordion" id="leftAccordion">
                    {
                        faqDataLeft.map((faq, index) => (
                            <div className="accordion-item faq-card" key={index}>
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#leftFaq${index}`}
                                    >
                                        {faq.question}
                                        <span className="custom-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id={`leftFaq${index}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#leftAccordion"
                                >
                                    <div className="accordion-body">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* RIGHT */}

            <div className={`col-md-10 col-sm-12 col-lg-6 fade-content ${show ? "show" : ""}`}>
                <div className="accordion custom-accordion" id="rightAccordion">
                    {
                        faqDataRight.map((faq, index) => (
                            <div className="accordion-item faq-card" key={index}>
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#rightFaq${index}`}
                                    >
                                        {faq.question}
                                        <span className="custom-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id={`rightFaq${index}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#rightAccordion"
                                >
                                    <div className="accordion-body">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default FaqCardes;