function Security() {
  return (
    <div className="text-sm bg-white px-8 py-4 rounded-md lg:border-[1px]">
      <h4 className="font-bold">اطلاعات امنیتی</h4>
      <div className=" flex flex-col gap-8 mt-4 pb-4">
        <a
          href="#"
          className="flex items-center gap-4 text-primary text-base w-max"
        >
          تغییر رمز عبور
          <i>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95 13.93C6.89 12.87 6.89 11.13 7.95 10.07L14.47 3.55002C14.76 3.26002 15.24 3.26002 15.53 3.55002C15.82 3.84002 15.82 4.32002 15.53 4.61002L9.01 11.13C8.53 11.61 8.53 12.39 9.01 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z"
                fill="#786AC2"
              />
            </svg>
          </i>
        </a>
        <div className="flex gap-16">
          <p className="text-lowgray">فعال سازی دو مرحله ای:</p>
          <div className="flex justify-between items-center gap-2">
            <input
              type="radio"
              name="pay-type"
              id="toman"
              className="hidden peer"
            />
            <div className="w-4 h-4 rounded-full border-[1px] border-black mr-4 flex justify-center items-center before:w-3 before:h-3 before:rounded-full peer-checked:border-primary text-primary peer-checked:before:bg-primary"></div>
            <label htmlFor="toman" className="peer-checked:text-primary">
              رمز یکبار مصرف
            </label>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="pay-type"
            id="dollar"
            className="hidden peer"
          />

          <div className="w-4 h-4 rounded-full border-[1px] border-black mr-4 flex justify-center items-center before:w-3 before:h-3 before:rounded-full peer-checked:border-prtext-primary peer-checked:before:bg-primary"></div>
          <label htmlFor="dollar" className="peer-checked:text-primary">
            حساب گوگل
          </label>
        </div>
      </div>
    </div>
  );
}

export default Security;
