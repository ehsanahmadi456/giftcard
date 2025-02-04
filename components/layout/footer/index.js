import Detail from "./Detail";
import List from "./List";
import Namad from "./Namad";
import Searchbar from "./Searchbar";
import SocialMedias from "./SocialMedias";

function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="grid grid-cols-1 gap-12 p-6 mt-12 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-16 lg:max-w-screen-2xl lg:mx-auto lg:px-12 xl:px-24">
        <Detail />
        <div className="flex row-span-2 gap-32 lg:justify-around lg:gap-0">
          <List />
          <List />
        </div>
        <Searchbar />
        <SocialMedias />
        <Namad />
      </div>
    </footer>
  );
}

export default Footer;
