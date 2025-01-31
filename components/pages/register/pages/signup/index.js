import Form from "./Form";

function SignupPage() {
  return (
    <section className="flex flex-col w-full max-w-md gap-8 p-6 mx-auto lg:max-w-screen-2xl lg:px-12 xl:px-24 lg:order-1 lg:w-1/2 lg:justify-center">
      <h4 className="mb-8 font-bold text-center">ساخت حساب کاربری جدید</h4>
      <form action="" className="flex flex-col gap-8">
        <Form />
        <div className="flex gap-4">
          <img src="../public/assets/images/captcha.png" alt="" />
          <div className="flex items-center gap-2 text-[#717171] text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M2.59102 13.7V17.8666V13.7Z" fill="#717171" />
              <path
                d="M18.3327 9.99996C18.3327 14.6 14.5993 18.3333 9.99935 18.3333C5.39935 18.3333 2.59102 13.7 2.59102 13.7M2.59102 13.7H6.35768M2.59102 13.7V17.8666M1.66602 9.99996C1.66602 5.39996 5.36602 1.66663 9.99935 1.66663C15.5577 1.66663 18.3327 6.29996 18.3327 6.29996M18.3327 6.29996V2.13329M18.3327 6.29996H14.6327"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            بارگذاری مجدد
          </div>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="rules" className="accent-primary" />
          <label htmlFor="rules" className="p-2 text-sm">
            قوانین و شرایط را می پذیرم.
          </label>
        </div>
        <button
          type="submit"
          className="p-3 px-12 text-center text-white rounded-sm bg-primary lg:w-3/4 lg:mx-auto"
        >
          ایجاد حساب کاربری
        </button>
      </form>

      <span className="block">
        قبلا ثبت نام کرده اید؟
        <a href="#" className="text-primary">
          ورود به حساب کاربری
        </a>
      </span>
    </section>
  );
}

export default SignupPage;
