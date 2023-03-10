import React from "react";

function Links() {
  return (
    <div className="glossary-main-cont">
      <div className="glossary-cont">
        {/* Cards */}
        <div className="glossary-card-title">
          <h2>We Won't let your Margin sit idle.</h2>
        </div>
        <div class="glossary-cards">
          <div class="glossary-card">
            <h1>
              <i class="fa fa-rupee"></i>
              <span className="rupee-1 first-color">20</span>
            </h1>
            <p>Per order + interest on margin + Zero delivery Brokerage</p>
          </div>
          <div class="glossary-card">
            <h1>
              <i class="fa fa-rupee"></i>
              <span className="rupee-2 second-color">10</span>
            </h1>
            <p>Per order + Zero delivery Brokerage</p>
          </div>
        </div>
        <div class="glossary-btn-cont">
          <button class="btn btn-primary glossary-btn" type="button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Links;
