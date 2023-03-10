import React from "react";
import "../style/Marque.css";

function Marque() {
  return (
    <div className="marque-cont">
      <div class="container">
        {" "}
        <div class="ticker">
          {" "}
          <div class="title">
            <h5>Attentions Investores:</h5>
          </div>{" "}
          <div class="news">
            {" "}
            <marquee class="news-content">
              {" "}
              <p>
                It has come to our notice that some unauthorized SMSes are being
                circulated in the name of sukhman Securities &amp; Finance ltd(
                sukhman Group) inducing clients to invest in scrips, not
                recommended by us. sukhman Securities &amp; Finance ltd( sukhman
                Group) does not send any unsolicited SMS. Investors are
                cautioned against such unauthorized SMSes/Emails from unknown
                sources and requested not to rely on such SMSes or emails.
                Clients are advised to verify the genuinity of the source before
                initiating any trades in the said scrips. sukhman Securities
                &amp; Finance ltd( sukhman Group) shall not be liable whatsoever
                for any losses incurred for trading done based on calls from
                such unauthorized sources.
              </p>{" "}
            </marquee>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Marque;
