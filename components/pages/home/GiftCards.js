import Steam from "@/public/assets/images/steam.png";
import Item from "./banner/Item";

function GiftCards() {
  const list = [
    { img: Steam, name: "گیفت کارت استیم" },
    { img: Steam, name: "گیفت کارت استیم" },
    { img: Steam, name: "گیفت کارت اسپاتیفای" },
    { img: Steam, name: "گیفت کارت اپل" },
  ];

  return (
    <ul
      className="
        grid lg:hidden grid-cols-2 md:grid-cols-4 px-[24px] min-w-fit
        gap-x-[16px] md:gap-x-[18px] lg:gap-x-[20px]
        gap-y-[16px] md:gap-y-[17px] lg:gap-y-[18px]
    "
    >
      {list.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </ul>
  );
}

export default GiftCards;
