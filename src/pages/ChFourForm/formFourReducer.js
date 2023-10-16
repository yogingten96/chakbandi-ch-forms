export const form4initialState = {
  no_of_khata_khatauni: "",
  plots_with_mistakes: "",
  area_recorded_in_column_2: "",
  serial_number: "",
  details: "",
  remark: "",
  plot_id: "",
  shares_claimed_by_tenure_holder: "",
  aco_orders_clerical_mistakes: "",
};

export const formFourReducer = (state, action) => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }

    default:
      return state;
  }
};
