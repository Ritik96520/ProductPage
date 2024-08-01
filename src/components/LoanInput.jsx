import { useMemo } from "react";
import PropTypes from "prop-types";
import "./LoanInput.css";

const LoanInput = ({
  className = "",
  loanAmount,
  prop,
  l,
  l1,
  l2,
  l3,
  cr,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const loanInputStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div className={`loan-input ${className}`} style={loanInputStyle}>
      <div className="loan-input-child" />
      <div className="container3">
        <div className="loan-amount-wrapper">
          <div className="loan-amount1">{loanAmount}</div>
        </div>
        <div className="input-container1">
          <div className="input-container-child" />
          <div className="div5">{prop}</div>
        </div>
      </div>
      <div className="loan-input1">
        <div className="container4">
          <div className="value-input-parent">
            <div className="value-input">
              <div className="value-input-child" />
              <div className="input-placeholder" />
            </div>
            <div className="value-btn">
              <div className="decrement" />
              <div className="increment" />
            </div>
          </div>
        </div>
        <div className="input-unit">
          <div className="l4">{l}</div>
          <div className="l5">{l1}</div>
          <div className="l6">{l2}</div>
          <div className="l7">{l3}</div>
          <div className="cr1">{cr}</div>
        </div>
      </div>
    </div>
  );
};

LoanInput.propTypes = {
  className: PropTypes.string,
  loanAmount: PropTypes.string,
  prop: PropTypes.string,
  l: PropTypes.string,
  l1: PropTypes.string,
  l2: PropTypes.string,
  l3: PropTypes.string,
  cr: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default LoanInput;
