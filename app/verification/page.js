function Verification() {
  return (
    <main className="flex flex-col lg:flex-row">
      <section className="flex flex-col gap-4 p-8 text-white bg-primary lg:order-2 lg:w-1/2 lg:justify-center lg:items-center lg:min-h-screen">
        <h2 className="text-xl font-bold text-center">فروشگاه گیفت کارت</h2>
        <p className="leading-loose">
          اولین فروشگاه خرید گیفت کارت اپل، گوگل پلی، استیم، پلی استیشن و ...
        </p>
      </section>
      <section className="flex flex-col w-full max-w-md gap-8 p-6 mx-auto lg:max-w-screen-md lg:px-12 xl:px-24 lg:order-1 lg:w-1/2 lg:justify-center">
        <h4 className="mb-8 font-bold text-center">
          کد ارسالی به شماره همراه خود را وارد نمایید.
        </h4>
        <div className="flex items-center justify-between font-medium">
          ۰۹۰۱۳۵۶۸۸۷۴
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-normal text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M9.94355 3.19992L3.78605 9.71742C3.55355 9.96492 3.32855 10.4524 3.28355 10.7899L3.00605 13.2199C2.90855 14.0974 3.53855 14.6974 4.40855 14.5474L6.82355 14.1349C7.16105 14.0749 7.63355 13.8274 7.86605 13.5724L14.0235 7.05492C15.0885 5.92992 15.5685 4.64742 13.911 3.07992C12.261 1.52742 11.0085 2.07492 9.94355 3.19992Z"
                stroke="#F69625"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.9175 4.2876C9.07473 5.29324 9.56145 6.2182 10.3013 6.91728C11.0411 7.61637 11.9921 8.04999 13.005 8.1501M2.25 17.0001H15.75"
                stroke="#F69625"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ویرایش شماره
          </a>
        </div>
        <form action="" className="flex flex-col gap-8">
          <div className="flex items-center justify-center gap-4 mt-12 mb-12">
            <input
              type="text"
              maxlength="1"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="bg-transparent border-2 rounded-md outline-none w-11 h-11"
            />
            <input
              type="text"
              maxlength="1"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="bg-transparent border-2 rounded-md outline-none w-11 h-11"
            />
            <input
              type="text"
              maxlength="1"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="bg-transparent border-2 rounded-md outline-none w-11 h-11"
            />
            <input
              type="text"
              maxlength="1"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="bg-transparent border-2 rounded-md outline-none w-11 h-11"
            />
            <input
              type="text"
              maxlength="1"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="bg-transparent border-2 rounded-md outline-none w-11 h-11"
            />
            <input
              type="text"
              maxlength="1"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="bg-transparent border-2 rounded-md outline-none w-11 h-11"
            />
          </div>
          <button
            type="submit"
            className="p-3 px-12 text-center text-white rounded-sm bg-primary lg:w-3/4 lg:mx-auto"
          >
            بررسی کد
          </button>
        </form>

        <span> در صورت عدم دریافت کد با شماره ۹۰۰۰۰۲۰۰-۰۲۱ تماس یگیرید.</span>
      </section>
    </main>
  );
}

export default Verification;
