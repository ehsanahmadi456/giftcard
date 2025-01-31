function Payment() {
  return (
    <div className="sticky bottom-0 pt-6 lg:px-8 xl:pl-24 lg:w-2/5 lg:block">
      <section id="confirm-pay" className="sticky bottom-0">
        <div className="flex flex-row-reverse justify-between items-center bg-white p-8 border-t-[1px] border-b-[1px] text-sm lg:border-[1px] lg:flex-col lg:items-start lg:gap-16 lg:pb-16">
          <h4 className="hidden font-medium lg:text-lg lg:block">
            پرداخت نهایی
          </h4>
          <div className="flex justify-between font-medium lg:w-full">
            <span className="hidden text-lowgray lg:block">
              مبلغ قابل پرداخت
            </span>
            ۴۳۶٬۵۰۰ تومان
          </div>
          <a
            href="#"
            className="p-3 px-12 text-center text-white rounded-sm bg-primary lg:w-3/4 lg:mx-auto"
          >
            تایید پرداخت
          </a>
        </div>
      </section>
    </div>
  );
}

export default Payment;
