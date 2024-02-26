import React from "react";
import styles from "../css/relatedbuilders.module.css";
function RelatedBuilders({ values }) {
  return (
    <div className={styles.relatedBuilder}>
      <div className={styles.relatedBuilderCardParent}>
        <div className={styles.img}>
          <img
            src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
            alt=""
          />
        </div>
        <div className={styles.pecentageOfLimitedTime}>
          <div className="percentageOff">
            <p>20% Off</p>
          </div>
          <div className="limitedTime">
            <p>Limited time</p>
          </div>
        </div>
        <div className={styles.webBuilder}>
          <h4>Webbuilder 1</h4>
        </div>
        <div className={styles.para}>
          <p>Computer Modern clasic with wix support</p>
        </div>
        <div className={styles.money}>
          <div className={styles.dollar}>
            <h4>$39.96</h4>
          </div>
          <div className={styles.originalPrice}>
            <p>$49.96</p>
          </div>
          <div className={styles.perentageDifference}>
            <p>(20% Off)</p>
          </div>
        </div>
        <div className={styles.button}>
          <button>View Deal</button>
        </div>
      </div>
    </div>
  );
}

export default RelatedBuilders;
