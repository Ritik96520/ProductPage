import EMICalculatorContainer from "./EMICalculatorContainer";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`e-m-i-calculator-container-parent ${className}`}>
      <EMICalculatorContainer
        text="EMI Calculator"
        samriddhsEMICalculatorIsE="Samriddh’s EMI calculator is easy, intuitive, and instantaneous. Calculate the EMI for your Home loan, business loan, personal loan, loan against property (LAP) or any other fully amortising loan using or EMI Calculator."
      />
      <div className="calculator-usage-container">
        <div className="calculator-usage-content">
          <div className="calculator-usage-heading">
            <b className="how-to-use">How to use</b>
          </div>
          <div className="enter-the-loan-container">
            <ol className="enter-the-loan-amount-you-wish">
              <li className="enter-the-loan">
                Enter the loan amount you wish to avail (In rupees)
              </li>
              <li className="enter-the-term">
                Enter the term of your loan (In months or years)
              </li>
              <li>Enter the rate of interest (In percentage)</li>
            </ol>
          </div>
        </div>
        <div className="calculator-video-container">
          <b className="how-to-use1">How to use EMI calculator video</b>
          <div className="video-player">
            <div className="video-player-child" />
            <div className="play-button-container">
              <div className="play-button-container-child" />
              <img
                className="play-button-icon"
                loading="lazy"
                alt=""
                src="/polygon-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
