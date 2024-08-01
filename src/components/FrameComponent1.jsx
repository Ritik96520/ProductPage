import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  loanAmount,
  prop,
  l,
  l1,
  l2,
  l3,
  cr,
}) => {
  return (
    <div className={`rectangle-parent3 ${className}`}>
      <div className="frame-child7" />
      <div className="input-elements">
        <div className="input-names-container">
          <div className="loan-amount">{loanAmount}</div>
        </div>
        <div className="input-units-container">
          <div className="input-units-container-child" />
          <div className="div">{prop}</div>
        </div>
      </div>
      <div className="input-fields">
        <div className="input-field-containers">
          <div className="input-field-elements">
            <div className="input-field-elements-child" />
            <div className="input-field-backgrounds" />
          </div>
          <div className="input-field-controls">
            <div className="input-field-decrement-buttons" />
            <div className="input-field-increment-buttons" />
          </div>
        </div>
        <div className="input-slider-handles">
          <div className="l">{l}</div>
          <div className="l1">{l1}</div>
          <div className="l2">{l2}</div>
          <div className="l3">{l3}</div>
          <div className="cr">{cr}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  loanAmount: PropTypes.string,
  prop: PropTypes.string,
  l: PropTypes.string,
  l1: PropTypes.string,
  l2: PropTypes.string,
  l3: PropTypes.string,
  cr: PropTypes.string,
};

export default FrameComponent1;
