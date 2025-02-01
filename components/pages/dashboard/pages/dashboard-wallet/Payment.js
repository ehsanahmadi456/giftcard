function Payment() {
  return (
    <div className="flex flex-col text-sm bg-white p-8 rounded-md lg:border-[1px] gap-4 w-full shadow-sm max-w-sm md:max-w-md lg:max-w-lg">
      <div className="mx-auto border-2 border-primary overflow-hidden flex justify-center items-center rounded-md mb-4">
        <a
          href="#"
          className="active p-2 px-4 [&.active]:bg-primary [&.active]:text-white bg-white rounded-sm w-max [&.active]:hover:bg-[#6352B8] hover:bg-[#6352B8] hover:text-white transition-all duration-300 ease-linear"
        >
          <span className="text-lg ml-1">+</span> ثبت کارت بانکی
        </a>
        <a
          href="#"
          className="p-2 px-4 [&.active]:bg-primary [&.active]:text-white bg-white rounded-sm w-max [&.active]:hover:bg-[#6352B8] hover:bg-[#6352B8] hover:text-white transition-all duration-300 ease-linear"
        >
          <span className="text-lg ml-1">+</span> ثبت کارت بانکی
        </a>
      </div>
      <form action="" className="flex flex-col gap-8">
        <div className="relative p-3 px-6 border-[1px] rounded-sm flex items-center gap-2">
          <input
            type="text"
            placeholder="کد زیر را به انگلیسی وارد کنید."
            className="w-full bg-transparent outline-none placeholder:text-xs"
          />
        </div>
        <div className="relative p-3 px-6 border-[1px] rounded-sm flex items-center gap-2">
          <input
            type="text"
            placeholder="کد زیر را به انگلیسی وارد کنید."
            className="w-full bg-transparent outline-none placeholder:text-xs"
          />
        </div>
        <button
          type="submit"
          className="p-3 px-12 text-center text-white rounded-sm bg-primary"
        >
          تایید و پرداخت
        </button>
      </form>
    </div>
  );
}

export default Payment;
