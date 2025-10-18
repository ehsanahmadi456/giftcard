import Link from "next/link"

const CategoryItemComponent = ({ item }) => {
  return (
    <Link href="/"
      className="flex max-w-[115px] flex-col justify-center items-center gap-[4px] md:gap-[9px] lg:gap-[14px] py-[5px] md:py-[9px] lg:py-[12px] px-[17px] md:px-[24px] lg:px-[32px] bg-[#FDFDFD] shadow-[0px_0px_25px_0px_rgba(120,_106,_194,_0.09)] rounded-[8px]"
    >
      <div className="w-full mx-auto flex justify-center">
        {item.Icon()}
      </div>
      <p className="text-[#30275F] text-[12px] lg:text-[14px] leading-[24px] font-medium text-nowrap text-center justify-center flex">
        {item.label}
      </p>
    </Link>
  )
}

export default CategoryItemComponent