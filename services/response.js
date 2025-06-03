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
};
