import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const CustomSelect = ({
  listArray,
  label,
  onChange,
  value,
  name,
  width = "100%",
  maxWidth,

  error,
}) => {
  return (
    <FormControl
      sx={{ maxWidth: maxWidth, width: width }}
      size="small"
      error={error}
    >
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={onChange}
        name="slot"
        // error={slotCheck}
      >
        <MenuItem value="">
          <em>Clear All</em>
        </MenuItem>
        {listArray.map((item, i) => {
          return <MenuItem value={item.id}>{item.title}</MenuItem>;
        })}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default CustomSelect;
