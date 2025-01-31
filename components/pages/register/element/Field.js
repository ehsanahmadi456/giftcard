function Field({ label, icon, type, placeholder }) {
  return (
    <div className="relative p-3 px-6 border-[1px] rounded-sm flex items-center gap-2">
      <label className="absolute -top-4 right-5 bg-[#FAFAFE] p-1 text-sm">
        {label}
      </label>
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="relative w-full bg-transparent outline-none placeholder:text-sm"
      />
    </div>
  );
}

export default Field;
