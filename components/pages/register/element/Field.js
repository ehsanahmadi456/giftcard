function Field({
  label,
  data,
  icon,
  type,
  dir,
  placeholder,
  name,
  handleChange,
}) {
  return (
    <div className="flex flex-col justify-start items-start gap-1 w-full">
      <div
        className={`
        relative p-3 w-full px-6 border-[1px] rounded-sm flex items-center gap-2
        ${data[name].error.valid ? "border-red-500" : ""}
      `}
      >
        <label className="absolute -top-4 right-5 bg-[#FAFAFE] p-1 text-sm">
          {label}
        </label>
        {icon}
        <input
          type={type}
          dir={dir || "rtl"}
          placeholder={placeholder}
          onChange={(e) => handleChange(name, e.target.value)}
          className={`
          relative w-full bg-transparent outline-none placeholder:text-sm
          ${dir === "ltr" ? "placeholder:text-end" : "placeholder:text-start"}
        `}
        />
      </div>
      {data[name].error.valid && (
        <p className="text-sm text-red-500">{data[name].error.text}</p>
      )}
    </div>
  );
}

export default Field;
