import PropTypes from "prop-types";
import "./EMICalculatorContainer.css";

const EMICalculatorContainer = ({
  className = "",
  text,
  samriddhsEMICalculatorIsE,
}) => {
  return (
    <div className={`e-m-i-calculator-container ${className}`}>
      <div className="e-m-i-calculator-content">
        <div className="e-m-i-calculator-description">
          <div className="button4">
            <h2 className="text4">{text}</h2>
            <img
              className="noise-icon4"
              loading="lazy"
              alt=""
              src="/noise@2x.png"
            />
          </div>
        </div>
        <div className="samriddhs-emi-calculator">
          {samriddhsEMICalculatorIsE}
        </div>
      </div>
    </div>
  );
};

EMICalculatorContainer.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  samriddhsEMICalculatorIsE: PropTypes.string,
};

export default EMICalculatorContainer;
