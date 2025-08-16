import Steam from "@/public/assets/images/steam.png";
import Item from "./Item";

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/data.php?op=cat_list&limit=4`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data || [];
}

async function Cards() {
  const list = [
    { img: Steam, name: "گیفت کارت استیم" },
    { img: Steam, name: "گیفت کارت استیم" },
    { img: Steam, name: "گیفت کارت اسپاتیفای" },
    { img: Steam, name: "گیفت کارت اپل" },
  ];
  const categories = await getCategories();
  console.log(categories);

  return (
    <ul className="hidden lg:grid grid-cols-2 gap-x-[20px] gap-y-[18px] min-w-fit">
      {categories.cats.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </ul>
  );
}

export default Cards;
