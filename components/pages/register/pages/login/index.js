import Link from "next/link";
import Form from "./Form";

function LoginPage() {
  return (
    <section className="flex flex-col w-full max-w-md gap-8 p-6 mx-auto mb-12 lg:max-w-screen-2xl lg:px-12 xl:px-24 lg:order-1 lg:w-1/2 lg:justify-center">
      <h4 className="mb-12 font-bold text-center">ورود به حساب کاربری</h4>
      <Form />

      <Link href="/verification" className="block mt-6 text-secondary">
        فراموشی کلمه عبور
      </Link>
      <span className="block">
        حساب کاربری ندارید؟
        <Link href="/signup" className="text-primary">
          ساخت حساب کاربری جدید
        </Link>
      </span>
    </section>
  );
}

export default LoginPage;
