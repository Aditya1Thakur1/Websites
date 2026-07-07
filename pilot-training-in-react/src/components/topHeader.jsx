import react from "react";

function TopHeader() {
    return ( <>
    <section>
    <div className="ticker py-1">
      <div className="ticker__track">
        <div className="ticker__group">
          <span><span className="text-white p-0">★</span>Once in a lifetime Opportunity <span className="text-white p-0">★</span> Only for first 50 students</span>
          <span><span className="text-white p-0">★</span> Once in a lifetime Opportunity <span className="text-white p-0">★</span> Only for first 50 students</span>
          <span><span className="text-white p-0">★</span> Once in a lifetime Opportunity <span className="text-white p-0">★</span> Only for first 50 students</span>
        </div>
    
        {/* <!-- exact duplicate --> */}
        <div className="ticker__group">
          <span><span className="text-white p-0">★</span> Once in a lifetime Opportunity <span className="text-white p-0">★</span> Only for first 50 students</span>
          <span><span className="text-white p-0">★</span> Once in a lifetime Opportunity <span className="text-white p-0">★</span> Only for first 50 students</span>
          <span><span className="text-white p-0">★</span> Once in a lifetime Opportunity <span className="text-white p-0">★</span> Only for first 50 students</span>
        </div>
      </div>
    </div>
    </section>
    </>
    );
}
export default TopHeader;