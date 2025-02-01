function Item({ data }) {
  return (
    <div className="bg-white flex flex-col gap-8 p-4 w-full shadow-md rounded-md text-center md:gap-4 md:bg-transparent md:shadow-none md:flex-row md:items-center md:justify-between md:py-0">
      <p className="w-1/12 hidden md:block">1</p>
      <span className={`py-2 px-8 ${data.color} w-max md:w-3/12 text-center`}>
        شارژ
      </span>
      <div className="flex justify-between md:justify-center text-sm md:w-3/12">
        <p className="text-lowgray md:hidden">مبلغ</p>
        <p className="font-semibold">+ {data.price} تومان</p>
      </div>
      <div className="flex justify-between md:justify-center text-sm md:w-3/12">
        <p className="text-lowgray md:hidden">تاریخ</p>
        <p className="font-semibold">{data.date}</p>
      </div>
      <div className="flex justify-between text-sm md:w-2/12 md:justify-center">
        <p className="text-lowgray md:hidden">فاکتور</p>
        <div className="flex gap-1 items-center text-[#4FA8EA]">
          <p>مشاهده</p>
          <i>
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 17.2248C12.3417 17.2248 12.1834 17.1664 12.0584 17.0414L6.62502 11.6081C5.74169 10.7248 5.74169 9.27477 6.62502 8.39144L12.0584 2.95811C12.3 2.71644 12.7 2.71644 12.9417 2.95811C13.1834 3.19977 13.1834 3.59977 12.9417 3.84144L7.50836 9.27477C7.10836 9.67477 7.10836 10.3248 7.50836 10.7248L12.9417 16.1581C13.1834 16.3998 13.1834 16.7998 12.9417 17.0414C12.8167 17.1581 12.6584 17.2248 12.5 17.2248Z"
                fill="#4FA8EA"
              />
            </svg>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Item;
