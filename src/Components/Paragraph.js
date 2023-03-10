import React from "react";

function Paragraph() {
  return (
    <div className="glossary-para-cont">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>52 week low</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              A stock’s 52-week low is the lowest price a stock has traded in
              the previous year. This price is used by traders and investors to
              help them understand the stock’s current value as well as how
              markets and price trends work.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>52 week high</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              The 52-week high of a stock is the highest price at which it has
              traded in the previous year. This price is used by traders and
              investors to help them understand the current value of the stock
              as well as how markets and price trends work.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Acid test ratio</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              The acid test ratio is the current asset to current liability
              ratio of a company. It measures a company’s ability to remain
              liquid in the face of unexpected volatility without selling its
              inventory. Because it does not take into account illiquid assets,
              the ratio is more robust than the current ratio
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <strong>Accrued expenses</strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Accrued expenses are those expenses that are mentioned on the
              income statement but have not yet been paid. They are liabilities
              that must be paid at some point in the future and are recorded on
              the balance sheet’s liability side.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <strong>After hours trading</strong>
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              The BSE and NSE closed at 3.45 p.m. They reopen the following day
              at 9 a.m. After-hours trading occurs between the times when the
              market closes and reopens the following day. If used wisely,
              after-hours trading can help you reduce losses. If you anticipate
              a change that will result in a price drop in the future, you can
              cut your losses by selling your stake ahead of the decline. When
              you place an AMO, you cannot use a stop-loss order to limit your
              losses
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <strong>American contracts</strong>
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              It is a type of options contract that allows option holders to
              exercise their rights to buy or sell up until the expiration date.
              An American-style option allows investors to profit as soon as the
              stock price rises.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSeven">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              <strong>All or none order</strong>
            </button>
          </h2>
          <div
            id="collapseSeven"
            class="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              An All-Or-None (AON) order is a buy or sells order that must be
              executed in full or not at all. AON orders that cannot be
              immediately executed and remain active until they are fulfilled or
              cancelled. These orders take longer time to get executed than a
              normal order.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paragraph;
