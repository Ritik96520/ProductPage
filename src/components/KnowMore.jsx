import PropTypes from "prop-types";
import "./KnowMore.css";

const KnowMore = ({ className = "" }) => {
  return (
    <div className={`know-more ${className}`}>
      <div className="know-more1">Know more</div>
      <div className="shapes-parent">
        <div className="shapes" />
        <img className="arrow-icon" alt="" src="/arrow-1.svg" />
      </div>
    </div>
  );
};

KnowMore.propTypes = {
  className: PropTypes.string,
};

export default KnowMore;
