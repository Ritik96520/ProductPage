import { useMemo } from "react";
import PropTypes from "prop-types";
import "./SavedValue.css";

const SavedValue = ({
  className = "",
  newEMI,
  prop,
  propFlex,
  propBorder,
  propAlignSelf,
}) => {
  const savedValueStyle = useMemo(() => {
    return {
      flex: propFlex,
      border: propBorder,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propBorder, propAlignSelf]);

  return (
    <div className={`saved-value ${className}`} style={savedValueStyle}>
      <div className="saved-value-child" />
      <div className="new-emi-wrapper">
        <div className="new-emi">{newEMI}</div>
      </div>
      <div className="div6">{prop}</div>
    </div>
  );
};

SavedValue.propTypes = {
  className: PropTypes.string,
  newEMI: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propBorder: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default SavedValue;
