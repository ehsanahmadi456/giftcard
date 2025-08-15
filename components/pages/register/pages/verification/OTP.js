import React from "react";

function OTP({ onKeyDown, inputRef, onChange, data, idx }) {
  return (
    <input
      type="number"
      maxLength={1}
      ref={inputRef}
      value={data[idx]}
      onChange={(e) =>
        e.target.value.length < 2 && onChange(idx, e.target.value)
      }
      onKeyDown={(e) => onKeyDown(idx, e)}
      // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
      className="bg-transparent no-spinner text-center border-2 rounded-md outline-none w-11 h-11"
    />
  );
}

export default OTP;
