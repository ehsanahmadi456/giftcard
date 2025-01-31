import React from "react";
import MobileNav from "./MobileNav";
import Top from "./top";
import Bottom from "./bottom";

function Header() {
  return (
    <header>
      <MobileNav />
      <div className="w-full p-6 mx-auto max-w-screen-2xl lg:px-12 xl:px-24">
        <Top />
        <Bottom />
      </div>
    </header>
  );
}

export default Header;
