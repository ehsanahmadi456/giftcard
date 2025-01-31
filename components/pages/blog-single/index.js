import Aside from "./aside";
import Detail from "./Detail";

function BlogSinglePage() {
  return (
    <main className="flex flex-col w-full gap-12 p-6 mx-auto mt-8 max-w-screen-2xl lg:px-12 xl:px-24 lg:flex-row lg:gap-8 lg:justify-between">
      <Detail />
      <Aside />
    </main>
  );
}

export default BlogSinglePage;
