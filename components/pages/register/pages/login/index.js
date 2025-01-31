import EmailReg from "@/public/assets/icons/EmailReg";
import Field from "../../element/Field";
import PassReg from "@/public/assets/icons/PassReg";
import CodeReg from "@/public/assets/icons/CodeReg";
import RetryReg from "@/public/assets/icons/RetryReg";

function LoginPage() {
  return (
    <section className="flex flex-col w-full max-w-md gap-8 p-6 mx-auto mb-12 lg:max-w-screen-2xl lg:px-12 xl:px-24 lg:order-1 lg:w-1/2 lg:justify-center">
      <h4 className="mb-12 font-bold text-center">ورود به حساب کاربری</h4>
      <form action="" className="flex flex-col gap-8">
        <Field
          label="ایمیل"
          type="email"
          icon={<EmailReg />}
          placeholder="ایمیل خود را وارد کنید."
        />
        <Field
          label="رمز عبور"
          type="password"
          icon={<PassReg />}
          placeholder="رمز خود را وارد کنید."
        />
        <Field
          label="کد امنیتی"
          type="text"
          icon={<CodeReg />}
          placeholder="کد زیر را به انگلیسی وارد کنید."
        />
        <div className="flex gap-4">
          <img src="../public/assets/images/captcha.png" alt="" />
          <div className="flex items-center gap-2 text-[#717171] text-xs">
            <RetryReg />
            بارگذاری مجدد
          </div>
        </div>
        <button
          type="submit"
          className="p-3 px-12 text-center text-white rounded-sm bg-primary lg:w-3/4 lg:mx-auto"
        >
          ورود به حساب کاربری
        </button>
      </form>

      <a href="#" className="block mt-6 text-secondary">
        فراموشی کلمه عبور
      </a>
      <span className="block">
        حساب کاربری ندارید؟
        <a href="#" className="text-primary">
          ساخت حساب کاربری جدید
        </a>
      </span>
    </section>
  );
}

export default LoginPage;
