import React, { useState, useEffect } from "react";

function CodeImg() {
  const [imageSrc, setImageSrc] = useState("");

  const reloadImage = () => {
    setImageSrc(`https://gift-card.ir/code.php?reload=${Date.now()}`);
  };

  useEffect(() => {
    reloadImage()
  }, []);

  return (
    <div className="flex gap-4">
      {imageSrc ? <img src={imageSrc} alt="" /> : undefined}
      <button
        type="button"
        onClick={reloadImage}
        className="flex items-center gap-2 text-[#717171] text-xs cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M2.59102 13.7V17.8666V13.7Z" fill="#717171" />
          <path
            d="M18.3327 9.99996C18.3327 14.6 14.5993 18.3333 9.99935 18.3333C5.39935 18.3333 2.59102 13.7 2.59102 13.7M2.59102 13.7H6.35768M2.59102 13.7V17.8666M1.66602 9.99996C1.66602 5.39996 5.36602 1.66663 9.99935 1.66663C15.5577 1.66663 18.3327 6.29996 18.3327 6.29996M18.3327 6.29996V2.13329M18.3327 6.29996H14.6327"
            stroke="#717171"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        بارگذاری مجدد
      </button>
    </div>
  );
}

export default CodeImg;
