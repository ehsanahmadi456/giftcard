import Left from "./Left";
import Right from "./Right";

function Articles() {
  return (
    <section
      id="blog"
      className="p-6 !pb-[80px] !pt-0 mx-auto mt-0 md:mt-[10px] lg:mt-[40px] max-w-screen-2xl lg:px-12 xl:px-24"
    >
      <div className="flex items-center justify-between w-full">
        <h4 className="text-lg font-bold md:text-xl">مقالات جدید</h4>
        <div className="flex items-center justify-center gap-2">
          <a href="#" className="font-medium text-secondary md:text-lg">
            مشاهده همه
          </a>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.57 6.43005L3.5 12.5001L9.57 18.5701M20.5 12.5001H3.67"
                stroke="#F69625"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 mt-[20px] md:mt-[37px] lg:mt-[55px] lg:grid-cols-2 lg:grid-rows-3">
        <Right />
        <Left />
        <Left />
        <Left />
      </div>
    </section>
  );
}

export default Articles;
