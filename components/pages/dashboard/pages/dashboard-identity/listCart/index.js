import Item from "./Item";

function ListCart() {
  const list = [
    {
      id: 1,
      name: "پاسارگاد",
      numCart: 5022291075907582,
      fullNumCart: "IR502229107590758200000000",
    },
  ];

  return (
    <div className="flex flex-col text-sm md:bg-white md:px-8 md:py-4 rounded-md lg:border-[1px] gap-4 w-full md:text-xs lg:text-sm">
      <a
        href="#"
        className="p-2 px-4 bg-primary mb-4 text-white rounded-sm w-max hover:bg-[#6352B8] transition-all duration-300 ease-linear"
      >
        <span className="text-lg ml-1">+</span> ثبت کارت بانکی
      </a>

      <h2 className="font-bold">کارت های بانکی شما</h2>

      <div className="items-center justify-between text-center gap-4 p-4 hidden md:flex">
        <p className="w-1/12">ردیف</p>
        <p className="w-1/12">بانک</p>
        <p className="w-3/12">شماره کارت</p>
        <p className="w-4/12">شماره شبا</p>
        <span className="w-3/12"></span>
      </div>
      <div className="bg-white rounded-md shadow-sm">
        {list.map((item, idx) => (
          <Item data={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default ListCart;
