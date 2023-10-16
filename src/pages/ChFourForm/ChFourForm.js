import React from "react";
import styles from "./index.module.css";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import Divider from "../../components/Divider/Divider";
import InputFields from "../../components/InputFields/InputFields";
import { form4Fields } from "../../utils/constants";
import { form4initialState, formFourReducer } from "./formFourReducer";
import { useReducer } from "react";

const ChFourForm = () => {
  const [state, dispatch] = useReducer(formFourReducer, form4initialState);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <div className={styles.fieldMarginBottom}>
          <div>Villages</div>
          <CustomSelect listArray={[]} />
        </div>
      </div>
      <div>
        <div className={styles.fieldMarginBottom}>
          <div>Pargana</div>
          <CustomSelect listArray={[]} />
        </div>
      </div>
      <div>
        <div className={styles.fieldMarginBottom}>
          <div>Tehsil</div>
          <CustomSelect listArray={[]} />
        </div>
      </div>
      <div>
        <div className={styles.fieldMarginBottom}>
          <div>District</div>
          <CustomSelect listArray={[]} />
        </div>
      </div>

      <Divider />
      <div style={{ marginTop: "17px" }}>
        {form4Fields?.secondSection?.map((field, index) => {
          return (
            <div className={styles.fieldMarginBottom}>
              <div>{field?.title}</div>
              <InputFields
                name={field?.keyname}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: field?.keyname,
                    payload: e.target.value,
                  })
                }
              />
            </div>
          );
        })}
      </div>

      <div>
        {form4Fields?.disputeDetails?.map((field, index) => {
          return (
            <div className={styles.fieldMarginBottom}>
              <div>{field?.title}</div>
              <InputFields
                name={field?.keyname}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: field?.keyname,
                    payload: e.target.value,
                  })
                }
              />
            </div>
          );
        })}
      </div>

      <div>
        {form4Fields?.thirdsection?.map((field, index) => {
          return (
            <div className={styles.fieldMarginBottom}>
              <div>{field?.title}</div>
              <InputFields
                name={field?.keyname}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: field?.keyname,
                    payload: e.target.value,
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChFourForm;
