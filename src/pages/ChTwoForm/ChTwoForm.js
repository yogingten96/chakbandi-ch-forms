import React from "react";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import InputFields from "../../components/InputFields/InputFields";
import styles from "./index.module.css";
import Divider from "../../components/Divider/Divider";
import { form2AinitialState } from "./formTwoReducer";
import { useReducer } from "react";
import { formTwoReducer } from "./formTwoReducer";
import { Button } from "@mui/material";
import { api_call_token } from "../../utils/network";
import { form2AFields } from "../../utils/constants";
import CustomAutoComplete from "../../components/CustomAutoComplete/CustomAutoComplete";
const ChTwoForm = () => {
  const [state, dispatch] = useReducer(formTwoReducer, form2AinitialState);

  console.log("HGHGH", state);

  const handleForm2aSubmit = () => {
    console.log("FInalstate", state);
    api_call_token
      .post(`geo/map/v1/2a/form/`, state)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Select first section  */}

      {form2AFields?.firstSection?.map((field, index) => {
        return (
          <div key={index} className={styles.fieldMarginBottom}>
            <span>{field?.title}</span>
            {field?.fieldType === 1 && (
              <InputFields
                value={state?.keyname}
                name={field?.keyname}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: field?.keyname,
                    payload: e.target.value,
                  })
                }
              />
            )}
            {field?.fieldType === 2 && <CustomSelect listArray={[]} />}
            {field?.fieldType === 3 && (
              <CustomAutoComplete
                value={state?.keyname}
                // options={field?.keyname}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: field?.keyname,
                    payload: e.target.value,
                  })
                }
              />
            )}
          </div>
        );
      })}
      <Divider />
      {/* 9 */}
      <div>
        <p className={styles.mainLabel}>Area</p>
        {/* <div className={styles.fieldMarginBottom}>
          <span>Plot No.</span>
          <InputFields name="basic_khasra_rec" />
        </div> */}

        {form2AFields?.area1.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>
              <InputFields
                value={state?.keyname}
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
      <Divider />
      {/* 10 */}
      <div>
        <p className={styles.mainLabel}>
          No. of Khata Khatauni of the basic year
        </p>

        {form2AFields?.khata_Khatauni_basic_year.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>
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
      <Divider />
      {/* 18 */}
      <div>
        <p className={styles.mainLabel}>
          Details of improvements, if any, like a well, tube-well, etc. existing
          in the plot or trees other than those constituting a grove standing in
          the plot or on its boundaries
        </p>
        {form2AFields?.details_improvments.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>

              {field?.fieldType === 1 && (
                <InputFields
                  value={state?.keyname}
                  name={field?.keyname}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      fieldName: field?.keyname,
                      payload: e.target.value,
                    })
                  }
                />
              )}
            </div>
          );
        })}
      </div>
      <Divider />
      {/* 20 */}
      <div>
        <p className={styles.mainLabel}>
          Details of groves existing in the agricultural year Immediately
          preceding the year in which notification under Section 4 was issued
        </p>
        {form2AFields?.groove_details.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>

              {field?.fieldType === 1 && (
                <InputFields
                  value={state?.keyname}
                  name={field?.keyname}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      fieldName: field?.keyname,
                      payload: e.target.value,
                    })
                  }
                />
              )}
            </div>
          );
        })}
      </div>
      <Divider />

      {/* 23 */}
      <div>
        <p className={styles.mainLabel}>Details of uncultivated area</p>
        {form2AFields?.details_uncultivated_area.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>

              {field?.fieldType === 1 && (
                <InputFields
                  value={state?.keyname}
                  name={field?.keyname}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      fieldName: field?.keyname,
                      payload: e.target.value,
                    })
                  }
                />
              )}
            </div>
          );
        })}
      </div>
      <Divider />
      {/* 25 */}
      <div>
        <p className={styles.mainLabel}>Details of irrigation</p>
        {form2AFields?.irrigation_details.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>

              {field?.fieldType === 1 && (
                <InputFields
                  value={state?.keyname}
                  name={field?.keyname}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      fieldName: field?.keyname,
                      payload: e.target.value,
                    })
                  }
                />
              )}
            </div>
          );
        })}
      </div>
      <Divider />
      {/* 28 */}
      <div>
        <p className={styles.mainLabel}>Crops generally grown during</p>
        {form2AFields?.crops_grown.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>

              {field?.fieldType === 1 && (
                <InputFields
                  value={state?.keyname}
                  name={field?.keyname}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      fieldName: field?.keyname,
                      payload: e.target.value,
                    })
                  }
                />
              )}
            </div>
          );
        })}
      </div>
      <Divider />
      {/* 30 */}
      <div style={{ marginTop: "17px" }}>
        {form2AFields?.unidentified_labels_1.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>

              {field?.fieldType === 1 && (
                <InputFields
                  value={state?.keyname}
                  name={field?.keyname}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      fieldName: field?.keyname,
                      payload: e.target.value,
                    })
                  }
                />
              )}
            </div>
          );
        })}
      </div>

      <Divider />
      {/* 32 */}
      <div>
        <p className={styles.mainLabel}>Area</p>
        {form2AFields?.area_consolidation.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>

              {field?.fieldType === 1 && (
                <InputFields
                  value={state?.keyname}
                  name={field?.keyname}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      fieldName: field?.keyname,
                      payload: e.target.value,
                    })
                  }
                />
              )}
            </div>
          );
        })}
      </div>
      <Divider />

      <div style={{ marginTop: "17px" }}>
        {form2AFields?.unidentified_labels_2.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>

              {field?.fieldType === 1 && (
                <InputFields
                  value={state?.keyname}
                  name={field?.keyname}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      fieldName: field?.keyname,
                      payload: e.target.value,
                    })
                  }
                />
              )}
            </div>
          );
        })}
      </div>
      <Divider />

      {/* 36 */}

      {/* 39 */}
      <div>
        <p className={styles.mainLabel}>
          Khata No. of C.H Form 23 to which allotted with area/valuation if
          partly allotted
        </p>
        {form2AFields?.khata_valuation_last.map((field, index) => {
          return (
            <div key={index} className={styles.fieldMarginBottom}>
              <span>{field?.title}</span>

              {field?.fieldType === 1 && (
                <InputFields
                  value={state?.keyname}
                  name={field?.keyname}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      fieldName: field?.keyname,
                      payload: e.target.value,
                    })
                  }
                />
              )}
            </div>
          );
        })}
      </div>

      <div style={{ width: "100%", marginBottom: "20px" }}>
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          onClick={handleForm2aSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ChTwoForm;
