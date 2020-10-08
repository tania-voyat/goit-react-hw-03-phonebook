import React from "react";
import styles from "./Filter.module.css";

function Filter({ value, onChange }) {
  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
        ></input>
      </label>
    </div>
  );
}

export default Filter;
