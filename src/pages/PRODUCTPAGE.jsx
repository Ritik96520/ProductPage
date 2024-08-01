import FrameComponent4 from "../components/FrameComponent4";
import Content from "../components/Content";
import FrameComponent3 from "../components/FrameComponent3";
import LoanOptions from "../components/LoanOptions";
import InsuranceContainer from "../components/InsuranceContainer";
import FrameComponent2 from "../components/FrameComponent2";
import CalculatorResults from "../components/CalculatorResults";
import FrameComponent from "../components/FrameComponent";
import SocialMedia from "../components/SocialMedia";
import FooterLinksContainer from "../components/FooterLinksContainer";
import "./PRODUCTPAGE.css";

const PRODUCTPAGE = () => {
  return (
    <div className="product-page">
      <div className="product-page-child" />
      <div className="product-page-item" />
      <div className="product-page-inner" />
      <FrameComponent4 />
      <Content />
      <div className="rectangle-div" />
      <div className="product-page-child1" />
      <main className="frame-parent">
        <FrameComponent3 />
        <LoanOptions text="Insaurance" propWidth="304px" />
        <InsuranceContainer />
        <FrameComponent2 />
        <CalculatorResults />
        <FrameComponent />
      </main>
      <footer className="footer-background-parent">
        <div className="footer-background" />
        <div className="footer-content">
          <div className="company-description">
            <div className="samriddh-kendra-is-container">
              <span>
                <span className="samriddh-kendra">SAMRIDDH KENDRA</span>
              </span>
              <span className="is-an-early-stage-fi-tech-play">
                <span> i</span>
                <span>
                  s an early stage Fi Tech player working in the field of
                  Finance and technology to bridge the gap between rural
                  customers and Finance Institutions
                </span>
              </span>
            </div>
          </div>
          <SocialMedia />
        </div>
        <div className="footer-links">
          <FooterLinksContainer />
        </div>
      </footer>
    </div>
  );
};

export default PRODUCTPAGE;
