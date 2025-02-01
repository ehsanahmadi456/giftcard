function Item({ data }) {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-0 md:gap-2 text-center border-b-[1px] last:border-none md:border-none md:flex-row md:items-center md:justify-between md:py-0">
      <div className="flex items-center justify-between md:justify-center md:w-3/12">
        <span
          className={`py-2 px-8 ${
            data.status
              ? "bg-success-bg text-success-text"
              : "bg-danger-bg text-danger-text"
          } w-24 text-center md:hidden`}
        >
          {data.status ? "موفق" : "ناموفق"}
        </span>
        <span>{data.date}</span>
      </div>
      <div className="flex justify-between md:justify-center text-sm md:w-1/12">
        <p className="text-lowgray md:hidden">نوع واریز</p>
        <p>{data.typePay}</p>
      </div>
      <div className="flex justify-between md:justify-center text-sm md:w-2/12">
        <p className="text-lowgray md:hidden">مقدار واریزی (تومان)</p>
        <p>{data.price}</p>
      </div>
      <div className="hidden md:flex justify-between md:justify-center text-sm md:w-2/12">
        <p className="text-lowgray md:hidden">مقدار واریزی (تومان)</p>
        <span
          className={`py-2 px-8 ${
            data.status
              ? "bg-success-bg text-success-text"
              : "bg-danger-bg text-danger-text"
          } w-24 text-center`}
        >
          {data.status ? "موفق" : "ناموفق"}
        </span>
      </div>
      <div className="flex justify-between md:justify-center text-sm md:w-4/12">
        <p className="text-lowgray md:hidden">شماره پیگیری</p>
        <p>{data.trackingNumber}</p>
      </div>
    </div>
  );
}

export default Item;
