import Steam from "@/public/assets/images/steam.png";
import Item from "./Item";

function Cards() {
  const list = [
    { img: Steam, name: "گیفت کارت استیم" },
    { img: Steam, name: "گیفت کارت استیم" },
    { img: Steam, name: "گیفت کارت اسپاتیفای" },
    { img: Steam, name: "گیفت کارت اپل" },
  ];

  return (
    <ul className="grid grid-cols-2 gap-x-[20px] gap-y-[18px] min-w-fit">
      {list.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </ul>
  );
}

export default Cards;
