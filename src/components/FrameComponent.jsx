import EMICalculatorContainer from "./EMICalculatorContainer";
import LoanInput from "./LoanInput";
import TenurePaid from "./TenurePaid";
import SavedValue from "./SavedValue";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`transfer-container-parent ${className}`}>
      <EMICalculatorContainer
        text="Balance Transfer Calculator"
        samriddhsEMICalculatorIsE="Transfer your outstanding loan amount from one lender to another, at a lower rate of interest. Calculate your new EMI for different interests rates, loan amounts and tenures, using Samriddh’s balance transfer calculator."
      />
      <div className="container5">
        <div className="container6">
          <b className="how-to-use2">How to use</b>
        </div>
        <div className="current-outstanding-loan-container">
          <ol className="current-outstanding-loan-amoun">
            <li className="current-outstanding-loan">
              Current outstanding loan amount (in rupees)
            </li>
            <li className="current-rate-of">
              Current rate of interest (in percentage)
            </li>
            <li className="loan-tenure-in">Loan tenure (in months)</li>
            <li className="emi-paid-in">EMI paid (in months)</li>
            <li>New rate of interest (in percentage)</li>
          </ol>
        </div>
      </div>
      <div className="container7">
        <div className="container8">
          <div className="container-item" />
          <div className="calculate-emi-interest1">
            Calculate EMI, Interest amount
          </div>
          <div className="container-parent">
            <div className="container9">
              <div className="input-fields1">
                <LoanInput
                  loanAmount="Loan amount"
                  prop="₹ 10000000"
                  l="1L "
                  l1="25L "
                  l2="50L"
                  l3="75L"
                  cr="1Cr"
                />
                <LoanInput
                  loanAmount="Interest rate "
                  prop="14 %"
                  l="4%"
                  l1="8% "
                  l2="12%"
                  l3="16%"
                  cr="20%"
                  propFlex="unset"
                  propMinWidth="540px"
                  propWidth="540px"
                />
              </div>
              <div className="tenure-input">
                <TenurePaid loanTenure="Loan Tenure" btnIcon="/btn-icon.svg" />
                <TenurePaid
                  loanTenure="EMI Already paid"
                  btnIcon="/vector-425.svg"
                  propFlex="unset"
                  propMinWidth="unset"
                  propWidth="540px"
                />
              </div>
            </div>
            <div className="transfer-info">
              <div className="container10">
                <LoanInput
                  loanAmount="Loan amount"
                  prop="₹ 10000000"
                  l="1L "
                  l1="25L "
                  l2="50L"
                  l3="75L"
                  cr="1Cr"
                  propFlex="1"
                  propMinWidth="476px"
                  propWidth="unset"
                />
                <div className="new-rate-info">
                  <div className="new-rate-info-child" />
                  <div className="container11">
                    <div className="new-interest-rate">New Interest Rate</div>
                  </div>
                  <div className="rate-value">
                    <div className="rate-value-child" />
                    <div className="container12">
                      <div className="container-inner" />
                      <div className="months1">months</div>
                      <div className="value-btn2">
                        <img
                          className="btn-icon1"
                          alt=""
                          src="/vector-425.svg"
                        />
                      </div>
                    </div>
                    <div className="calculated-rate">
                      <div className="rate-value1">4</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="saving-calculation">
                <div className="container13">
                  <div className="container-child1" />
                  <div className="container14">
                    <div className="saving-display">
                      <div className="indicator" />
                      <div className="calculation-indicator">
                        <div className="indicator1" />
                        <div className="indicator2" />
                      </div>
                    </div>
                  </div>
                  <div className="saving-details">
                    <div className="calculation-placeholder" />
                    <div className="calculation-placeholder1" />
                    <div className="saving-info">
                      <div className="monthly-emi-saved">Monthly EMI saved</div>
                      <div className="new-value">
                        <div className="new-emi1">New EMI</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="final-result">
                  <div className="final-values">
                    <div className="values">
                      <textarea className="e-m-i-saved" rows={12} cols={23} />
                      <SavedValue newEMI="New EMI" prop="₹ 44,986" />
                    </div>
                    <SavedValue
                      newEMI="Current EMI"
                      prop="₹ 44,57,986"
                      propFlex="unset"
                      propBorder="1px solid #c8c8c8"
                      propAlignSelf="stretch"
                    />
                    <SavedValue
                      newEMI="Monthly EMI saved"
                      prop="₹ 1,07,96,711"
                      propFlex="unset"
                      propBorder="1px solid #c7c7c7"
                      propAlignSelf="stretch"
                    />
                  </div>
                  <SavedValue
                    newEMI="Total saving"
                    prop="₹ 1,04,56,000"
                    propFlex="unset"
                    propBorder="unset"
                    propAlignSelf="stretch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
