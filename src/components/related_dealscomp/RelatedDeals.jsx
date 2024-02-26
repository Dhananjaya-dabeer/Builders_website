import React from "react";
import styles from "../../css/relateddeals.module.css";
import RelatedBuilders from "../RelatedBuilders";
function RelatedDeals() {
  return (
    <div className={styles.relatedBuildersParent}>
      <div className={styles.header}>
        <h1>Related deals you might like for</h1>
      </div>
      <div className={styles.cardContainer}>
        <RelatedBuilders />
        <RelatedBuilders />
        <RelatedBuilders />
      </div>
    </div>
  );
}

export default RelatedDeals;
