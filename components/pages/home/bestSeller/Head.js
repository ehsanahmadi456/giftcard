"use client";

import { useState } from "react";

function Head() {
  const [active, setActive] = useState(0);
  const changeBtn = (id) => setActive(id);
  const buttons = ["بازی", "سرگرمی", "موزیک"];

  return (
    <div className="flex flex-col sm:flex-row items-start gap-[12px] sm:items-center justify-between">
      <p className="text-[#2F2F2F] text-[16px] md:text-[20px] lg:text-[24px] font-bold">
        پرفروش ترین گیف کارت ها
      </p>
      <div className="flex items-center justify-end gap-[16px]">
        {buttons.map((item, idx) => (
          <button
            key={idx}
            onClick={() => changeBtn(idx)}
            className={`
                text-[16px] md:text-[18px] lg:text-[20px] bg-[#F5F5F5] font-medium py-[2px] px-[10px] transition-all
                ${active === idx ? "text-[#F69625]" : "text-[#717171]"}
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Head;
