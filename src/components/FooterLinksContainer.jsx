import PropTypes from "prop-types";
import "./FooterLinksContainer.css";

const FooterLinksContainer = ({ className = "" }) => {
  return (
    <div className={`footer-links-container ${className}`}>
      <div className="links-columns">
        <div className="platform">Platform</div>
        <div className="platform-links-items">
          <div className="home">Home</div>
          <div className="get-in-touch">Get in touch</div>
          <div className="how-it-works">How it Works</div>
          <div className="faq">FAQ</div>
        </div>
      </div>
      <div className="information-links">
        <div className="information-links-items">
          <div className="about">About</div>
        </div>
        <div className="about-us-link">
          <div className="about-us-container">
            <div className="about-us2">About Us</div>
          </div>
          <div className="careers-link">
            <div className="careers-container">
              <div className="careers-wrapper">
                <div className="careers">Careers</div>
              </div>
              <button className="hiring-now-container">
                <div className="hiring-now">Hiring now</div>
              </button>
            </div>
            <div className="blog-link-container">
              <div className="blog">Blog</div>
            </div>
          </div>
        </div>
      </div>
      <div className="links-columns1">
        <div className="infromation">Infromation</div>
        <div className="privacy-policy-parent">
          <div className="privacy-policy">Privacy Policy</div>
          <div className="terms-of-use">Terms of Use</div>
          <div className="refund-policy">Refund Policy</div>
          <div className="grievance-officer">Grievance officer</div>
        </div>
      </div>
    </div>
  );
};

FooterLinksContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterLinksContainer;
