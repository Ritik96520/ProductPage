import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`frame-div ${className}`}>
      <header className="rectangle-parent">
        <div className="frame-child" />
        <div className="container">
          <a className="samriddh">Samriddh</a>
        </div>
        <div className="about-us">
          <a className="about-us1">About Us</a>
          <a className="products">Products</a>
        </div>
        <div className="contact">
          <a className="contact-us">Contact Us</a>
          <div className="become-our-partner">Become our Partner</div>
          <a className="login">Login</a>
        </div>
        <div className="footer">
          <div className="social-icons">
            <div className="dots" />
            <div className="dots1" />
            <div className="dots2" />
            <div className="dots3" />
            <div className="dots4" />
            <div className="social-icons-child" />
            <div className="dots-parent">
              <div className="dots5" />
              <div className="dots6" />
              <div className="frame-item" />
              <div className="ellipse-parent">
                <div className="frame-inner" />
                <div className="ellipse-div" />
                <div className="frame-child1" />
                <div className="screenshot-2024-07-21-at-1259-parent">
                  <img
                    className="screenshot-2024-07-21-at-1259-icon"
                    alt=""
                    src="/screenshot-20240721-at-125951-amremovebgpreview-1@2x.png"
                  />
                  <img
                    className="shapes-icon"
                    loading="lazy"
                    alt=""
                    src="/vector-9.svg"
                  />
                  <div className="wrapper-shapes">
                    <img
                      className="shapes-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector-404.svg"
                    />
                  </div>
                </div>
                <div className="wrapper-shapes1">
                  <img
                    className="shapes-icon2"
                    loading="lazy"
                    alt=""
                    src="/vector-404.svg"
                  />
                </div>
                <div className="wrapper-shapes2">
                  <img
                    className="shapes-icon3"
                    loading="lazy"
                    alt=""
                    src="/vector-404.svg"
                  />
                </div>
              </div>
              <div className="wrapper-vector-405">
                <img
                  className="wrapper-vector-405-child"
                  alt=""
                  src="/vector-404.svg"
                />
              </div>
            </div>
          </div>
          <div className="button">
            <img className="icon" loading="lazy" alt="" src="/icon@2x.png" />
            <div className="text-parent">
              <div className="text">EMI CALCULATOR</div>
              <img className="noise-icon" alt="" src="/noise@2x.png" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
