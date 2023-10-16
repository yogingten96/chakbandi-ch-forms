import React from "react";
import styles from "./index.module.css";

const FormList = () => {
  return (
    <div className={styles.listContainer}>
      {formListing.map((form, index) => {
        return (
          <>
            <div key={index} className={`${styles.listBox}`}>
              <span>{form?.title}</span>
              <span>{"=>"}</span>
            </div>
            {/* <Divider key={index} /> */}
          </>
        );
      })}
    </div>
  );
};

export default FormList;

const formListing = [
  {
    id: 1,
    title: "CH Form 2",
  },
  {
    id: 2,
    title: "CH Form 4",
  },
  {
    id: 3,
    title: "CH Form 5",
  },
  {
    id: 4,
    title: "CH Form 6",
  },
  {
    id: 5,
    title: "CH Form 7",
  },
];
