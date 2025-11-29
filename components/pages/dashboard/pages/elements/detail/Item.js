function Item({ icon, text, detail }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      {icon}
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-gray-500">{text}</p>
        <p className="font-semibold">{detail}</p>
      </div>
    </div>
  );
}

export default Item;
