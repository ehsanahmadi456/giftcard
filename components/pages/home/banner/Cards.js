import Item from "./Item";

async function Cards({ cat }) {
  const categories = cat.cats.filter((_, idx) => idx < 4);

  return (
    <ul className="hidden lg:grid grid-cols-2 gap-x-[20px] gap-y-[18px] min-w-fit">
      {categories.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </ul>
  );
}

export default Cards;
