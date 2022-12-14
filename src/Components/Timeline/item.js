import React from "react";
import styles from "./item.module.css";
export default function item({ data, index }) {
  const { date,title, content } = data;
  return (
    <div className={styles["container-item"]}>
      
      <div className={styles["container-content-item"]}>
      
        <div className={styles["container-content-header"]}>
          
          <span className={ `${styles["container-content-header-time"]} ${styles['container-roadmap-items']}`}>
           
            {title}
          </span>
        </div>
        <ul className={styles["container-content-list"]}>
          {content.map((item, index) => (
            <li key={item.title} className={styles["li-outside"]}>
              <div>{item.subtitle}</div>  
              {item.title} 
            
              <ul>
              
              </ul>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}