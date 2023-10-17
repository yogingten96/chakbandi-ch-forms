export const form2AinitialState = {
  basic_khasra_record: "",
  current_settlement_record: "",
  found_on_spot: "",
  khatauni_revised_annual_register: 1,
  tenureholder_details: "",
  asami_details: "",
  person_in_possession_details: "",
  dispute_of_possession_details: "",
  measurements_and_age: "",
  estimated_value: "",
  owner_details: "",
  nature: "",
  area: "",
  included_in_holding: "",
  not_included_in_holding: "",
  irrigation_details: "",
  irrigable_area: "",
  kharif_details: "",
  rabi_details: "",
  zaid_details: "",
  physical_features: "",
  soil_class: "",
  not_consolidable: "",
  consolidable: "",
  exchange_ratio_annas: "",
  valuation_consolidable_area: "",
  exchange_ratio_modified: "",
  valuation_modified: "",
  proposed_by_aco: "",
  modified_by_co: "",
  modified_appeals_revisions: "",
  remark: "",
  index: "",
  description: "",
  ticket_type: null,
  plot_id: "",
};

export const formTwoReducer = (state, action) => {
  switch (action.type) {
    case "field": {
      console.log("PAyload", action);
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }

    default:
      return state;
  }
};
