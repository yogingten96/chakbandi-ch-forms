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
const ChTwoForm = () => {
  const [state, dispatch] = useReducer(formTwoReducer, form2AinitialState);

  console.log("HGHGH", state);

  const handleForm2aSubmit = () => {
    console.log("FInalstate", state);
    // api_call_token
    //   .post(`geo/map/v1/2a/form/`)
    //   .then((response) => {})
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Error");
    //   });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
        <div className={styles.fieldMarginBottom}>
          <span>
            Name of tenureholder with address and kind of tenure against the
            first plot of that khata
          </span>
          <InputFields
            name="tenureholder_details"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "tenureholder_details",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>{`Name of asami, if any, with his address (Column 5 of the basic khasra)`}</span>
          <InputFields
            name="asami_details"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "asami_details",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>{`Name of the person in possession, if any, shown in the remarks column of the basic khasra`}</span>
          <InputFields
            name="person_in_possession_details"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "person_in_possession_details",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>{`Details of dispute of possession with period of possession claimed and its basis`}</span>
          <InputFields
            name="dispute_of_possession_details"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "dispute_of_possession_details",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>{`Description`}</span>
          <InputFields
            name="khatauni_revised_annual_register"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "khatauni_revised_annual_register",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>{`Measurements and age`}</span>
          <InputFields
            name="measurements_and_age"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "measurements_and_age",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>{`Estimated value`}</span>
          <InputFields
            name="estimated_value"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "estimated_value",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>{`Name of the owner, his address and share in the property`}</span>
          <InputFields
            name="owner_details"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "owner_details",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>
      <Divider />
      {/* 20 */}
      <div>
        <p className={styles.mainLabel}>
          Details of groves existing in the agricultural year Immediately
          preceding the year in which notification under Section 4 was issued
        </p>
        <div className={styles.fieldMarginBottom}>
          <span>Nature</span>
          <InputFields
            name="nature"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "nature",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>Area</span>
          <InputFields
            name="area"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "area",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>
      <Divider />

      {/* 23 */}
      <div>
        <p className={styles.mainLabel}>Details of uncultivated area</p>
        <div className={styles.fieldMarginBottom}>
          <span>Nature</span>
          <InputFields
          // name="khatauni_revised_annual_register"
          // onChange={(e) =>
          //   dispatch({
          //     type: "field",
          //     fieldName: "khatauni_revised_annual_register",
          //     payload: e.target.value,
          //   })
          // }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>Included in holding</span>
          <InputFields
            name="included_in_holding"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "included_in_holding",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>Not included in holding</span>
          <InputFields
            name="not_included_in_holding"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "not_included_in_holding",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>
      <Divider />
      {/* 25 */}
      <div>
        <p className={styles.mainLabel}>Details of irrigation</p>
        <div className={styles.fieldMarginBottom}>
          <span>Source and method of irrigation</span>
          <InputFields
            name="irrigation_details"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "irrigation_details",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>Irrigable area</span>
          <InputFields
            name="irrigable_area"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "irrigable_area",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>
      <Divider />
      {/* 28 */}
      <div>
        <p className={styles.mainLabel}>Crops generally grown during</p>
        <div className={styles.fieldMarginBottom}>
          <span>Kharif</span>
          <InputFields
            name="kharif_details"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "kharif_details",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>Rabi</span>
          <InputFields
            name="rabi_details"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "rabi_details",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>Zaid</span>
          <InputFields
            name="zaid_details"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "zaid_details",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>
      <Divider />
      {/* 30 */}
      <div style={{ marginTop: "17px" }}>
        <div className={styles.fieldMarginBottom}>
          <span>
            Physical features of the plot showing in particular the area of
            uncultivated portions if not separately surveyed its level with
            respect to surrounding plots, if the plot is irrigable its distance
            from the source of irrigation and volume of water supply, etc.
          </span>
          <InputFields
            name="physical_features"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "physical_features",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>Soil class as recorded in the current Settlement</span>
          <InputFields
            name="soil_class"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "soil_class",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>

      <Divider />
      {/* 32 */}
      <div>
        <p className={styles.mainLabel}>Area</p>
        <div className={styles.fieldMarginBottom}>
          <span>Not consolidable</span>
          <InputFields
            name="not_consolidable"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "not_consolidable",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>Consolidable</span>
          <InputFields
            name="consolidable"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "consolidable",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>
      <Divider />

      <div style={{ marginTop: "17px" }}>
        <div className={styles.fieldMarginBottom}>
          <span>
            Exchange ratio in annas (in words) of the consolidable area of the
            plot as determined by the A.C.O.
          </span>
          <InputFields
            name="exchange_ratio_annas"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "exchange_ratio_annas",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>{`Valuation of the consolidable area of the plot (Col 27 x Col. 28)`}</span>
          <InputFields
            name="valuation_consolidable_area"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "valuation_consolidable_area",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>
            Exchange ratio as modified by superior authorities, with details of
            the case No. and date of order
          </span>
          <InputFields
            name="exchange_ratio_modified"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "exchange_ratio_modified",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>{`Valuation as modified by superior authorities (Col. 27 x Col. 30)`}</span>
          <InputFields
            name="valuation_modified"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "valuation_modified",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>
      <Divider />

      {/* 36 */}

      {/* 39 */}
      <div>
        <p className={styles.mainLabel}>
          Khata No. of C.H Form 23 to which allotted with area/valuation if
          partly allotted
        </p>
        <div className={styles.fieldMarginBottom}>
          <span>As proposed by A.C.O.</span>
          <InputFields
            name="proposed_by_aco"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "proposed_by_aco",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>As modified by C.O.</span>
          <InputFields
            name="modified_by_co"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "modified_by_co",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.fieldMarginBottom}>
          <span>As modified in appeals and revisions</span>
          <InputFields
            name="modified_appeals_revisions"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "modified_appeals_revisions",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div>
        <Button variant="contained" onClick={handleForm2aSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default ChTwoForm;
