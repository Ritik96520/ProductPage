import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <div className={`content ${className}`}>
      <div className="frame-group">
        <div className="container-wrapper">
          <div className="container1">
            <div className="container-child" />
            <h1 className="at-samriddh-kendra-container">
              <span>
                <i>At Samriddh Kendra, we offer</i>
                <i className="i">{` `}</i>
              </span>
              <i className="multiple-products">
                <span className="multiple-products1">multiple products</span>
                <span>{` `}</span>
              </i>
              <span>
                <i>{`for our customer `}</i>
              </span>
            </h1>
          </div>
        </div>
        <div className="button-container">
          <button className="button1">
            <div className="text1">INSAURANCE</div>
            <div className="icon-button">
              <img className="icon1" alt="" src="/icon-1@2x.png" />
            </div>
            <img className="noise-icon1" alt="" src="/noise@2x.png" />
          </button>
        </div>
        <div className="button-container1">
          <div className="button2">
            <div className="text-group">
              <div className="text2">LOANS</div>
              <img className="noise-icon2" alt="" src="/noise@2x.png" />
            </div>
            <div className="icon-button1">
              <img
                className="icon2"
                loading="lazy"
                alt=""
                src="/icon-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
