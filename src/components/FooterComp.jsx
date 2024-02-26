import React from "react";
import styles from "../css/footer.module.css";
function FooterComp() {
  return (
    <div className={styles.FooterComp}>
      <div className={styles.FooterCompInnerContainer}>
        <div className={styles.categoriesContainer}>
          <div className={styles.categories}>
            <h4>CATEGORIES</h4>
          </div>
          <div className={styles.webBuilder}>
            <p>Web Builder</p>
          </div>
          <div className={styles.hosting}>
            <p>Hosting</p>
          </div>
          <div className={styles.datacenter}>
            <p>Data Center</p>
          </div>
          <div className={styles.roboticAutomation}>
            <p>Robotic-Automation</p>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contact}>
            <h4>CONTACT</h4>
          </div>
          <div className={styles.childContact}>
            <p>Contact</p>
          </div>
          <div className={styles.privacyPolicy}>
            <p>Privacy Policy</p>
          </div>
          <div className={styles.termsofService}>
            <p>Terms Of Service</p>
          </div>
          <div className={styles.contactCatogaries}>
            <p>Categories</p>
          </div>
          <div className={styles.about}>
            <p>About</p>
          </div>
        </div>
        <div className={styles.unitedStates}>
          <select name="UnitedStates" id="">
            <option value="United-States">United States</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
