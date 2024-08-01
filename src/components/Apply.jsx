import PropTypes from "prop-types";
import "./Apply.css";

const Apply = ({ className = "" }) => {
  return (
    <div className={`apply ${className}`}>
      <div className="apply-for-loan">{`Apply for loan  `}</div>
      <div className="shapes-group">
        <div className="shapes1" />
        <img className="frame-child2" alt="" src="/arrow-1-1.svg" />
      </div>
    </div>
  );
};

Apply.propTypes = {
  className: PropTypes.string,
};

export default Apply;
