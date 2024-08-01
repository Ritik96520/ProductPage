import { useMemo } from "react";
import PropTypes from "prop-types";
import "./LoanOptions.css";

const LoanOptions = ({ className = "", text, propWidth }) => {
  const loanOptionsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`loan-options ${className}`} style={loanOptionsStyle}>
      <div className="button3">
        <h2 className="text3">{text}</h2>
        <img
          className="noise-icon3"
          loading="lazy"
          alt=""
          src="/noise@2x.png"
        />
      </div>
    </div>
  );
};

LoanOptions.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default LoanOptions;
