import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./CalculatorResults.css";

const CalculatorResults = ({ className = "" }) => {
  return (
    <section className={`calculator-results ${className}`}>
      <div className="results-heading">
        <div className="results-heading-child" />
        <div className="calculate-emi-interest">
          Calculate EMI, Interest amount
        </div>
        <div className="results-values-container">
          <div className="input-container">
            <FrameComponent1
              loanAmount="Loan amount"
              prop="₹ 10000000"
              l="1L "
              l1="25L "
              l2="50L"
              l3="75L"
              cr="1Cr"
            />
            <FrameComponent1
              loanAmount="Interest rate "
              prop="14 %"
              l="4%"
              l1="8% "
              l2="12%"
              l3="16%"
              cr="20%"
            />
            <FrameComponent1
              loanAmount="Loan Tenure"
              prop="4 yrs"
              l="5Y"
              l1="10Y "
              l2="15Y"
              l3="2OY"
              cr="25Y"
            />
          </div>
          <div className="loan-breakup-container">
            <div className="loan-breakup-content">
              <div className="loan-breakup-content-child" />
              <div className="loan-breakup-chart">
                <div className="chart-background" />
              </div>
              <div className="loan-breakup-details">
                <div className="principle-details">
                  <div className="principle-amount">Principle amount</div>
                  <div className="principle-value-container">
                    <div className="principle-value">
                      <div className="principle-value-background" />
                    </div>
                    <div className="interest-amount">Interest amount</div>
                  </div>
                </div>
                <div className="interest-details">
                  <div className="interest-value-container">
                    <div className="interest-value">
                      <div className="interest-value-background" />
                      <div className="interest-indicator-container">
                        <div className="interest-indicator" />
                        <div className="interest-indicator-border" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="computed-results-container">
              <div className="computed-results-container-child" />
              <div className="computed-results">
                <div className="computed-results-child" />
                <div className="loan-emi">{`Loan EMI `}</div>
                <div className="div1">₹ 44,986</div>
              </div>
              <div className="computed-results1">
                <div className="computed-results-item" />
                <div className="principal-amount-wrapper">
                  <div className="principal-amount">Principal Amount</div>
                </div>
                <div className="div2">₹ 44,57,986</div>
              </div>
              <div className="computed-results2">
                <div className="computed-results-inner" />
                <div className="interest-amount1">Interest Amount</div>
                <div className="wrapper">
                  <div className="div3">₹ 1,07,96,711</div>
                </div>
              </div>
            </div>
            <div className="payable-amount-container">
              <div className="payable-amount-container-child" />
              <div className="total-payable-amount">Total Payable amount</div>
              <div className="payable-amount-value">
                <div className="div4">₹ 1,04,56,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CalculatorResults.propTypes = {
  className: PropTypes.string,
};

export default CalculatorResults;
