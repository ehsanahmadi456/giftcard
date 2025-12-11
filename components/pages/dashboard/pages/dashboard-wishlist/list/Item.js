import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

function Item({ data, onRemove }) {
  const router = useRouter();
  const handleAddToCart = async () => {
    try {
      const accessToken = Cookies.get("access_token");

      if (!accessToken) {
        toast.warning("لطفا ابتدا وارد شوید");
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append("Cookie", `AStoken=${accessToken}`);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/members/cart.php?op=add&id=${data.pid}&act=a`,
        {
          method: "GET",
          headers: myHeaders,
          credentials: "include",
        }
      );

      const result = await response.json();

      if (result.status === "1") {
        toast.success("محصول به سبد خرید اضافه شد");
      } else {
        toast.error("خطا در افزودن به سبد خرید");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error(error.data ?? "خطا در ارتباط با سرور");
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="bg-white flex flex-col gap-4 p-4 w-full shadow-md rounded-md text-center md:gap-4 md:bg-transparent md:shadow-none md:flex-row md:items-center md:justify-between md:py-0">
      <div className="flex gap-2 md:justify-center text-sm md:w-2/12">
        <p className="text-lowgray md:hidden">شناسه:</p>
        <p className="font-medium">{data.pid}</p>
      </div>

      <div className="flex gap-2 md:justify-center text-sm md:w-6/12">
        <p className="text-lowgray md:hidden">محصول:</p>
        <p className="text-right">{data.prod_name}</p>
      </div>

      <div className="flex items-center justify-evenly mt-2 md:mt-0 mm:justify-center mm:gap-2 sm:gap-4 md:w-4/12">
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 p-2 px-4 bg-transparent border-[1px] border-primary text-primary font-medium rounded-sm w-max hover:bg-primary hover:text-white transition-all duration-300 ease-linear"
        >
          <span>افزودن به سبد</span>
          <FaShoppingCart className="w-4 h-4" />
        </button>

        <button
          onClick={onRemove}
          className="flex items-center gap-2 p-2 px-4 bg-transparent border-[1px] border-red-500 text-red-500 font-medium rounded-sm w-max hover:bg-red-500 hover:text-white transition-all duration-300 ease-linear"
        >
          <span>حذف</span>
          <FaTrash className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default Item;
