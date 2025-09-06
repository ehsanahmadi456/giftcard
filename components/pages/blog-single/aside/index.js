import Item from "./Item";

function Aside({data}) {

  return (
    <aside className="flex flex-col gap-4 lg:mt-[4.5rem] lg:w-5/12 xl:w-1/3 md:w-1/2 md:mx-auto">
      <h6 className="mb-4 font-medium lg:text-lg">مطالب پیشنهادی</h6>
      {data.posts.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </aside>
  );
}

export default Aside;
