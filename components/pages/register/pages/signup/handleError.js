const checkIsError = (data, setData) => {
  let hasError = false;
  const newData = { ...data };

  const getValue = (key) => (newData[key]?.value ?? "").toString();

  const setError = (field, text) => {
    newData[field] = {
      ...newData[field],
      error: { valid: true, text },
    };
    hasError = true;
  };

  const clearError = (field) => {
    newData[field] = {
      ...newData[field],
      error: { valid: false, text: "" },
    };
  };

  // Name
  if (!getValue("name").trim()) setError("name", "نام الزامی است.");
  else clearError("name");

  // Email
  const emailValue = getValue("email").trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValue) setError("email", "ایمیل الزامی است.");
  else if (!emailRegex.test(emailValue)) setError("email", "ایمیل معتبر نیست.");
  else clearError("email");

  // Mobile
  const mobileValue = getValue("mobile").trim();
  const iranMobileRegex = /^(?:\+98|0)?9\d{9}$/;
  if (!mobileValue) setError("mobile", "شماره موبایل الزامی است.");
  else if (!iranMobileRegex.test(mobileValue)) setError("mobile", "شماره موبایل معتبر نیست.");
  else clearError("mobile");

  // Passwords
  const pass1 = getValue("pass1");
  const pass2 = getValue("pass2");
  if (!pass1.trim()) setError("pass1", "رمز عبور الزامی است.");
  else clearError("pass1");

  if (!pass2.trim()) setError("pass2", "تکرار رمز عبور الزامی است.");
  else if (pass1 && pass2 && pass1 !== pass2) setError("pass2", "رمزها یکسان نیستند.");
  else clearError("pass2");

  // Code
  const codeValue = getValue("code");
  if (!codeValue.trim()) setError("code", "کد امنیتی الزامی است.");
  else if (codeValue.length !== 3) setError("code", "کد باید ۳ رقم باشد.");
  else clearError("code");

  // Rules
  if (!data.rules?.value) {
    newData.rules.error = { valid: true, text: "پذیرش قوانین الزامی است." };
    hasError = true;
  } else {
    newData.rules.error = { valid: false, text: "" };
  }

  setData(newData);
  return newData;
};

export default checkIsError;
