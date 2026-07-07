import React from "react";

function OmgCardes() {

    const cardsData = [
        {
            text: `We understand you might be thinking,
            ‘This sounds too good to be true,
            so there must be a catch.’
            But let me reassure you,
            there’s no catch.`,
            className: "home11-box"
        },

        {
            text: `Yes, there are terms and conditions
            but not the kind you’re worried about.
            They’re simply there to ensure that
            deserving students benefit fairly.`,
            className: "home11-box2",
            hover: true
        },

        {
            text: `0Our terms are simple, fair,
            and easy to understand.
            No fine print, no surprises.`,
            className: "home11-box",
            extraText: "*T&C Applied"
        },
        
    ];

    return (
        <div className="col-lg-10 col-md-12 col-sm-12 mt-4">
            <div className="offer-slider-outer">
                <div className="d-flex flex-wrap gap-3">
                    {
                        cardsData.map((card, index) => (
                            <div
                                className={`item ${card.hover ? 'item-hover' : ''}`}
                                key={index}
                            >
                                <div className={card.className}>
                                    <div className="home11-text">
                                        <p>
                                            {card.text}
                                        </p>
                                        {
                                            card.extraText && (
                                                <p className="fs-12 text-end mt-3">
                                                    {card.extraText}
                                                </p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default OmgCardes;