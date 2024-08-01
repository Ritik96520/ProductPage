import LoanOptions from "./LoanOptions";
import KnowMore from "./KnowMore";
import Apply from "./Apply";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`container-container ${className}`}>
      <div className="container2">
        <LoanOptions text="Loans" />
        <div className="loan-type">
          <h2 className="secured-loans">Secured Loans</h2>
          <div className="loan-cards">
            <div className="loan-card">
              <div className="loan-card-child" />
              <div className="wrapper-screenshot-2024-07-21-">
                <img
                  className="screenshot-2024-07-21-at-216-icon"
                  loading="lazy"
                  alt=""
                  src="/screenshot-20240721-at-21642-amremovebgpreview-1@2x.png"
                />
              </div>
              <div className="shapes2" />
              <div className="loan-names">
                <div className="home-loans">Home Loans</div>
                <div className="buttons">
                  <KnowMore />
                  <Apply />
                </div>
              </div>
            </div>
            <div className="loan-card1">
              <div className="loan-card-item" />
              <div className="wrapper-screenshot-2024-07-21-1">
                <img
                  className="screenshot-2024-07-21-at-322-icon"
                  loading="lazy"
                  alt=""
                  src="/screenshot-20240721-at-32251-pmremovebgpreview-1@2x.png"
                />
              </div>
              <div className="loan-card-inner" />
              <div className="lap-loans-parent">
                <div className="lap-loans">LAP Loans</div>
                <div className="frame-container">
                  <KnowMore />
                  <Apply />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="loan-type1">
          <h2 className="unsecured-loans">Unsecured Loans</h2>
          <div className="loan-cards1">
            <div className="loan-card2">
              <div className="loan-card-child1" />
              <div className="images" />
              <div className="personal-loan">
                <div className="personal-loan1">Personal Loan</div>
                <div className="buttons1">
                  <KnowMore />
                  <Apply />
                </div>
              </div>
              <div className="wrapper-screenshot-2024-07-21-2">
                <img
                  className="screenshot-2024-07-21-at-335-icon"
                  loading="lazy"
                  alt=""
                  src="/screenshot-20240721-at-33527-pmremovebgpreview-1@2x.png"
                />
              </div>
            </div>
            <div className="loan-card3">
              <div className="loan-card-child2" />
              <div className="wrapper-screenshot-2024-07-21-3">
                <img
                  className="screenshot-2024-07-21-at-340-icon"
                  loading="lazy"
                  alt=""
                  src="/screenshot-20240721-at-34050-pmremovebgpreview-1@2x.png"
                />
              </div>
              <div className="loan-card-child3" />
              <div className="business-loan-parent">
                <div className="business-loan">Business Loan</div>
                <div className="buttons2">
                  <KnowMore />
                  <Apply />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
