import LayoutParent from "@/components/layout";
import Aside from "./aside";

function Layout({ children }) {
  return (
    <LayoutParent>
      <main className="w-full p-6 mx-auto max-w-screen-2xl lg:px-12 xl:px-24">
        <div className="flex gap-12">
          <Aside />
          {children}
        </div>
      </main>
    </LayoutParent>
  );
}

export default Layout;
