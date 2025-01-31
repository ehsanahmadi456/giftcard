import React from "react";

function OTP() {
  return (
    <input
      type="text"
      maxLength="1"
      // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
      className="bg-transparent border-2 rounded-md outline-none w-11 h-11"
    />
  );
}

export default OTP;
