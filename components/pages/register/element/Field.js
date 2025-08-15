function Field({ label, icon, type, dir, placeholder, name, handleChange }) {
  return (
    <div className="relative p-3 px-6 border-[1px] rounded-sm flex items-center gap-2">
      <label className="absolute -top-4 right-5 bg-[#FAFAFE] p-1 text-sm">
        {label}
      </label>
      {icon}
      <input
        type={type}
        dir={dir || "rtl"}
        placeholder={placeholder}
        onChange={(e) => handleChange(name, e.target.value)}
        className="relative w-full bg-transparent outline-none placeholder:text-sm"
      />
    </div>
  );
}

export default Field;
