import PropTypes from "prop-types";
import "./SocialMedia.css";

const SocialMedia = ({ className = "" }) => {
  return (
    <div className={`social-media ${className}`}>
      <img
        className="instagram-1-icon"
        loading="lazy"
        alt=""
        src="/instagram-1@2x.png"
      />
      <div className="linkedin-container">
        <img
          className="linkedin-2-icon"
          loading="lazy"
          alt=""
          src="/linkedin-2@2x.png"
        />
      </div>
      <div className="telephone-container">
        <div className="telephone-icon-container">
          <img
            className="telephone-icon"
            loading="lazy"
            alt=""
            src="/vector-401.svg"
          />
          <img className="telephone-1-icon" alt="" src="/telephone-1@2x.png" />
        </div>
      </div>
      <div className="email-container">
        <img
          className="mail-1-1"
          loading="lazy"
          alt=""
          src="/mail-1-1@2x.png"
        />
      </div>
    </div>
  );
};

SocialMedia.propTypes = {
  className: PropTypes.string,
};

export default SocialMedia;
