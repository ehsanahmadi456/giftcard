import Image from "next/image";
import Link from "next/link";
import BlogPlaceholder from "@/public/assets/images/blog.png";
import { formatJalaliDate } from "@/helper";

function Item({ data }) {
  const imageSrc = data?.img || data?.image || BlogPlaceholder;

  return (
    <article className="flex items-center gap-4">
      {imageSrc && (
        <Image 
          src={imageSrc} 
          alt={data?.head || data?.name || "Blog post"}
          className="w-20 rounded-md lg:w-24"
          width={96}
          height={96}
        />
      )}

      <div className="flex flex-col gap-2">
        <Link 
          href={`/blog/${data?.id}`}
          className="text-sm font-medium hover:text-primary"
        >
          {data?.head || data?.name || 'بدون عنوان'}
        </Link>

        {data?.date && (
          <span className="text-xs text-lowgray">
            {formatJalaliDate(data.date)}
          </span>
        )}
      </div>
    </article>
  );
}

export default Item;
