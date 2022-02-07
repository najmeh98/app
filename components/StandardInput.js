import React from "react";

export const StandardInput = ({
  label,
  placeholder,
  value,
  setValue,
  style,
  width,
  onChange,
}) => {
  return (
    <form>
      <input
        style={{
          height: "40px",
          //  maxWidth: "60%",
          width: "100%",
          //maxWidth: "100%",
          border: "none",
          fontSize: "20px",
          marginLeft: "20px",
          borderRadius: "7px",
          borderColor: " lightgray",
          outline: "none",
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
