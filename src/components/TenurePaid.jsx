import { useMemo } from "react";
import PropTypes from "prop-types";
import "./TenurePaid.css";

const TenurePaid = ({
  className = "",
  loanTenure,
  btnIcon,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const tenurePaidStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div className={`tenure-paid ${className}`} style={tenurePaidStyle}>
      <div className="tenure-paid-child" />
      <div className="tenure-labels">
        <div className="loan-tenure">{loanTenure}</div>
      </div>
      <div className="group-div">
        <div className="frame-child8" />
        <div className="value-container">
          <div className="value-container-child" />
          <div className="months">months</div>
          <div className="value-btn1">
            <img className="btn-icon" alt="" src={btnIcon} />
          </div>
        </div>
        <div className="paid-value">
          <div className="value-placeholder">4</div>
        </div>
      </div>
    </div>
  );
};

TenurePaid.propTypes = {
  className: PropTypes.string,
  loanTenure: PropTypes.string,
  btnIcon: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default TenurePaid;
