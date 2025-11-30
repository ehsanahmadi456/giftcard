import Cards from "../bestSeller/Cards";

function Item({ list }) {
  // const musicIds = ["1", "10", "3", "14"];
  // const musicCats = list.cats.filter((cat) => musicIds.includes(cat.id));

  return (
    <article className="flex flex-col items-center justify-center gap-[12px] md:gap-[22px] lg:gap-[32px] overflow-visible swiper--1">
      <div className="flex items-center justify-between w-full">
        <h4 className="text-[16px] md:text-[18px] lg:text-xl font-bold">
          گیفت کارت های موزیک
        </h4>
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
      <Cards list={list} />
    </article>
  );
}

export default Item;
