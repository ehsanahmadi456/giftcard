import Image from "next/image";

function Card({ data }) {
  return (
    <div className="p-4 bg-white rounded-md">
      <a
        href="#"
        className="flex items-center gap-4 font-medium max-md:justify-center"
      >
        <Image src={data.img} className="h-8 w-14" alt="" />
        <span>{data.name}</span>
      </a>
    </div>
  );
}

export default Card;
