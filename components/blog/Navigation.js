import React from "react";

function Navigation() {
  return (
    <div className="flex justify-center gap-2 mt-12">
      {Array(4)
        .fill({})
        .map((item, idx) => (
          <a href="#" className={`
            px-4 py-2 rounded-md 
          ${idx ===0 ?
            'bg-primary text-white' : 
            'bg-white text-lowgray'}
          `}>
            {idx+1}
          </a>
        ))}
    </div>
  );
}

export default Navigation;
