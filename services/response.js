import api from "./api";

export const request = {
  signUp: (name, email, mobile, landline, pass1, pass2, code) => {
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("landline", landline);
    formData.append("code", code);
    formData.append("pass1", pass1);
    formData.append("pass2", pass2);
    formData.append("order", "1");

    return api.post("members/signup.php?op=signup", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
    });
  },
  login: (email, password, code, time, token, token_sign) => {
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("code", code);
    formData.append("time", time);
    formData.append("token", token);
    formData.append("token_sign", token_sign);

    return api.post("members/login.php", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
    });
  },
  getLoginToken: () =>
    api.get("members/logintoken.php", {
      withCredentials: true,
    }),
  sendOtp: (time, token, token_sign, mobile) => {
    const formData = new URLSearchParams();
    formData.append("op", "sendotp");
    formData.append("time", time);
    formData.append("token", token);
    formData.append("token_sign", token_sign);
    formData.append("mobile", mobile);

    return api.post("members/otp.php?op=sendotp", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
    });
  },
  checkOtp: (time, token, token_sign, code) => {
    const formData = new URLSearchParams();
    formData.append("op", "checkotp");
    formData.append("time", time);
    formData.append("token", token);
    formData.append("token_sign", token_sign);
    formData.append("code", code);

    return api.post("members/otp.php?op=checkotp", formData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  },
  listCar: () => api.get('data.php?op=cat_list')
};
