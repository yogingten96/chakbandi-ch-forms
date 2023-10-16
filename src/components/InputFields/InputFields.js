import React, { forwardRef } from "react";
import { MenuItem, TextField } from "@mui/material";

const InputFields = forwardRef((props, ref) => {
  const {
    id = "",
    value,
    name,
    type,
    options = [],
    onKeyPress,
    select,
    onChange,
    style,
    label,
    size = "small",
    checkKey = () => {},
    index,
    rows,
    required,
    optionValue,
    optionLabel,
    disabled = false,
    multiline,
    error,
    helperText,
    maxLength = 250,
    startAdornment,
    endAdornment,
    width = "100%",
  } = props;

  return (
    <div>
      <TextField
        sx={{ width: width }}
        id={id}
        index={index}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        select={select}
        style={style}
        size={size}
        multiline={multiline}
        onKeyPress={onKeyPress}
        rows={rows}
        inputRef={ref}
        error={error}
        helperText={helperText}
        disabled={disabled}
        required={required}
        SelectProps={{
          native: true,
        }}
        InputProps={{
          inputProps: {
            maxLength: maxLength,
          },
          startAdornment: startAdornment,
          endAdornment: endAdornment,
        }}
        inputProps={{ onKeyDown: (e) => checkKey(e, index) }}
      >
        {options &&
          options.map((option, idx) => {
            return (
              <option key={option[optionValue]} value={option[optionValue]}>
                {option[optionLabel]}
              </option>
            );
          })}
      </TextField>
    </div>
  );
});

export default InputFields;
