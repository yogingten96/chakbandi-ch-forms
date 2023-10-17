import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const CustomAutoComplete = ({ value, onChange }) => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={onChange}
      size="small"
      renderInput={(params) => <TextField  {...params} />}
    />
  );
};

export default CustomAutoComplete;
