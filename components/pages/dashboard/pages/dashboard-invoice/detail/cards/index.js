import Xbox from "@/public/assets/images/xbox.png";
import Item from "./Item";

function Cards() {
  const list = [
    { name: "گیفت کارت ایکس باکس", length: 2, price: "۴۳۶٬۵۰۰", img: Xbox },
    { name: "گیفت کارت ایکس باکس", length: 2, price: "۴۳۶٬۵۰۰", img: Xbox },
    { name: "گیفت کارت ایکس باکس", length: 2, price: "۴۳۶٬۵۰۰", img: Xbox },
  ];

  return (
    <>
      {list.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </>
  );
}

export default Cards;
