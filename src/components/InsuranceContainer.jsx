import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import "./InsuranceContainer.css";

const InsuranceContainer = ({ className = "" }) => {
  return (
    <section className={`insurance-container ${className}`}>
      <div className="insurance-types-container">
        <div className="insurance-types">
          <div className="rectangle-container">
            <div className="frame-child4" />
            <img
              className="screenshot-2024-06-20-at-423-icon"
              loading="lazy"
              alt=""
              src="/screenshot-20240620-at-42310-pmremovebgpreview-1@2x.png"
            />
            <div className="insurance-type-names">
              <div className="health-insurance">Health Insurance</div>
            </div>
          </div>
          <GroupComponent
            screenshot20240623At12570="/screenshot-20240623-at-125704-pmremovebgpreview-1@2x.png"
            lifeInsurance="Life Insurance"
          />
          <GroupComponent
            screenshot20240623At12570="/screenshot-20240623-at-11916-pmremovebgpreview-1@2x.png"
            lifeInsurance="Shop Insurance"
            propFlex="0.9469"
            propPadding="44.3px 46px 29.1px"
            groupDivGap="22px"
          />
          <GroupComponent
            screenshot20240623At12570="/screenshot-20240620-at-41854-pmremovebgpreview-1@2x.png"
            lifeInsurance="Motor Insurance"
            propFlex="1"
            propPadding="45.6px 27px 28.7px 56px"
            groupDivGap="19px"
          />
          <textarea
            className="insurance-types-child"
            placeholder="Crop Insaurance"
            rows={12}
            cols={13}
          />
          <div className="rectangle-parent1">
            <div className="frame-child5" />
            <div className="crop-insaurance">Crop Insaurance</div>
          </div>
        </div>
        <div className="insurance-details">
          <div className="insurance-document-container">
            <div className="insurance-document-details">
              <div className="insurance-document-details-child" />
              <div className="required-document-list-for-the-wrapper">
                <div className="required-document-list">
                  Required Document List for the Insurance:
                </div>
              </div>
              <div className="identity-proof-address-container">
                <ul className="identity-proof-address-proof-a">
                  <li className="identity-proof">Identity Proof</li>
                  <li className="address-proof">Address Proof</li>
                  <li className="age-proof">Age Proof</li>
                  <li className="income-proof">Income Proof</li>
                  <li className="medical-reports">Medical Reports</li>
                  <li>Passport-sized Photographs</li>
                </ul>
              </div>
            </div>
            <div className="insurance-document-details1">
              <div className="insurance-document-details-item" />
              <div className="benefits-of-policy-wrapper">
                <div className="benefits-of-policy">Benefits of Policy</div>
              </div>
              <div className="cashless-hospitalization-finan-container">
                <ul className="cashless-hospitalization-finan">
                  <li className="cashless-hospitalization">
                    Cashless Hospitalization
                  </li>
                  <li className="financial-protection">Financial Protection</li>
                  <li className="tax-benefits">Tax Benefits</li>
                  <li className="no-claim-bonus">No Claim Bonus (NCB)</li>
                  <li>Coverage for Pre and Post-Hospitalization</li>
                </ul>
              </div>
            </div>
            <div className="insurance-document-details2">
              <div className="insurance-document-details-inner" />
              <div className="features-of-policy-wrapper">
                <div className="features-of-policy">Features of Policy:</div>
              </div>
              <div className="sum-insured-premium-container">
                <ul className="sum-insured-premium-policy-ter">
                  <li className="sum-insured">Sum Insured</li>
                  <li className="premium">Premium</li>
                  <li className="policy-term">Policy Term</li>
                  <li className="network-hospitals">Network Hospitals</li>
                  <li className="room-rent-limit">Room Rent Limit</li>
                  <li className="co-payment">Co-payment</li>
                  <li>Waiting Period</li>
                </ul>
              </div>
            </div>
            <div className="union-parent">
              <img
                className="union-icon"
                loading="lazy"
                alt=""
                src="/union.svg"
              />
              <div className="rectangle-parent2">
                <div className="frame-child6" />
                <div className="what-is-covered-under-the-insu-wrapper">
                  <div className="what-is-covered">
                    What Is Covered Under the Insurance Policy?
                  </div>
                </div>
                <div className="in-patient-hospitalization-pre-container">
                  <ul className="in-patient-hospitalization-pre">
                    <li className="in-patient-hospitalization">
                      In-patient Hospitalization
                    </li>
                    <li className="pre-and-post-hospitalization">
                      Pre and Post-Hospitalization
                    </li>
                    <li className="daycare-procedures">Daycare Procedures</li>
                    <li className="ambulance-charges">Ambulance Charges</li>
                    <li className="domiciliary-treatment">
                      Domiciliary Treatment
                    </li>
                    <li className="organ-donor-expenses">
                      Organ Donor Expenses
                    </li>
                    <li className="maternity-benefits">Maternity Benefits</li>
                    <li className="critical-illness-coverage">
                      Critical Illness Coverage
                    </li>
                    <li>AYUSH Treatment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

InsuranceContainer.propTypes = {
  className: PropTypes.string,
};

export default InsuranceContainer;
