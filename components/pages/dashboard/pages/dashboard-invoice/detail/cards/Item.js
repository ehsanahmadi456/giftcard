import Image from "next/image";

function Item({ data }) {
  return (
    <article className="flex justify-between items-center border-b-[1px] pb-8">
      <div className="flex items-center gap-2 font-medium">
        <Image src={data.img} alt="" className="w-12 h-12 rounded-md" />
        <div className="flex flex-col gap-4">
          <span className="text-sm text-lowgray">
            تعداد : {data.length} عدد
          </span>
        </div>
      </div>
      <span>{data.price} تومان</span>
    </article>
  );
}

export default Item;
