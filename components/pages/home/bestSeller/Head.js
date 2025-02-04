"use client";

import { useState } from "react";

function Head() {
  const [active, setActive] = useState(0);
  const changeBtn = (id) => setActive(id);
  const buttons = ["بازی", "سرگرمی", "موزیک"];

  return (
    <div className="flex items-center justify-between">
      <p className="text-[#2F2F2F] text-[24px] font-bold">
        پرفروش ترین گیف کارت ها
      </p>
      <div className="flex items-center justify-end gap-[16px]">
        {buttons.map((item, idx) => (
          <button
            key={idx}
            onClick={() => changeBtn(idx)}
            className={`
                text-[20px] font-medium py-[2px] px-[10px] transition-all
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
