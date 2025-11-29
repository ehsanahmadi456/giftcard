import Link from "next/link";

function Navigation({ totalPages = 1, currentPage = 1 }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-12">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`px-4 py-2 rounded-md transition ${
            page === currentPage
              ? "bg-primary text-white"
              : "bg-white text-lowgray hover:bg-gray-100"
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;