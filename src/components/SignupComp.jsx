import React from "react";
import styles from "../css/signupcomp.module.css"
function SignupComp() {
  return (
    <div className={styles.signupCompParentContainer}>
      <div className={styles.signupContainer}>
      <div className={styles.signupMsg}>
        <h1>Sign up and get exclusive special deals</h1>
      </div>
      <div className={styles.sginupInputBtn}>
        <input type="text" name="" id="" />
        <button>Sign Up</button>
      </div>
    </div>
    </div>
  );
}

export default SignupComp;
