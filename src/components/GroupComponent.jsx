import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  screenshot20240623At12570,
  lifeInsurance,
  propFlex,
  propPadding,
  groupDivGap,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      gap: groupDivGap,
    };
  }, [propFlex, propPadding, groupDivGap]);

  return (
    <div className={`rectangle-group ${className}`} style={groupDivStyle}>
      <div className="frame-child3" />
      <img
        className="screenshot-2024-06-23-at-1257-icon"
        loading="lazy"
        alt=""
        src={screenshot20240623At12570}
      />
      <div className="life-insurance-wrapper">
        <div className="life-insurance">{lifeInsurance}</div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  screenshot20240623At12570: PropTypes.string,
  lifeInsurance: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  groupDivGap: PropTypes.any,
};

export default GroupComponent;
