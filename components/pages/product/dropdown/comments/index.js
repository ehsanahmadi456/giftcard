"use client";
import { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Comments({ productId }) {
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newComment, setNewComment] = useState({
    rate: 5,
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (productId) {
      fetchComments();
    }
  }, [productId]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_URL}/data.php?op=prod_comment&id=${productId}`
      );
      console.log(response);

      const result = await response.json();

      if (result.status === "1" && result.data) {
        setComments(result.data);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async () => {
    try {
      const accessToken = Cookies.get("access_token");
      if (!accessToken) {
        alert("لطفا ابتدا وارد شوید");
        return;
      }

      if (!newComment.comment.trim()) {
        alert("لطفا متن نظر خود را وارد کنید");
        return;
      }

      setSubmitting(true);

      const formdata = new FormData();
      formdata.append("op", "add");
      formdata.append("id", productId);
      formdata.append("rate", newComment.rate.toString());
      formdata.append("comment", newComment.comment);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
        credentials: "include",
      };

      const response = await fetch(
        `${API_URL}/members/comment.php`,
        requestOptions
      );
      const result = await response.json();

      if (result.status === "1") {
        setShowModal(false);
        setNewComment({ rate: 5, comment: "" });
        fetchComments();
        alert("نظر شما با موفقیت ثبت شد");
      } else {
        const errorMsg = result.data ? result.data.join(" ") : result.msg || "خطا در ثبت نظر";
        alert(errorMsg);
        console.error("API Error:", result);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("خطا در ارتباط با سرور");
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
      index < rating ? (
        <FaStar key={index} className="w-4 h-4 text-yellow-500 fill-current" />
      ) : (
        <FaRegStar key={index} className="w-4 h-4 text-yellow-500" />
      )
    );
  };

  const averageRating =
    comments.length > 0
      ? comments.reduce((sum, comment) => sum + parseInt(comment.rate), 0) /
        comments.length
      : 0;

  return (
    <div className="hidden group-[.active]:flex">
      <div className="flex flex-col w-full gap-6 p-6 bg-white rounded-lg border">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">نظرات کاربران</h3>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 text-sm text-white bg-primary rounded-md hover:bg-[#6352B8] transition-colors"
          >
            افزودن نظر
          </button>
        </div>

        {/* Rating Summary */}
        <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-600">از ۵</span>
          </div>
          <div className="flex gap-1">
            {renderStars(Math.round(averageRating))}
          </div>
          <span className="text-sm text-gray-600">({comments.length} نظر)</span>
        </div>

        {/* Comments List */}
        <div className="flex flex-col gap-4">
          {loading ? (
            <div className="text-center py-8">در حال بارگذاری نظرات...</div>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="flex gap-4 p-4 border-b">
                <FaUserCircle className="w-12 h-12 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-bold">{comment.user_name}</span>
                    <div className="flex gap-1">
                      {renderStars(parseInt(comment.rate))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {comment.comment || "دیدگاهی ثبت نشده است"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              هنوز نظری برای این محصول ثبت نشده است
            </div>
          )}
        </div>
      </div>

      {/* Add Comment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold">ثبت نظر جدید</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <MdClose className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  امتیاز شما
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        setNewComment((prev) => ({ ...prev, rate: star }))
                      }
                      className="p-1"
                    >
                      {star <= newComment.rate ? (
                        <FaStar className="w-6 h-6 text-yellow-500 fill-current" />
                      ) : (
                        <FaRegStar className="w-6 h-6 text-yellow-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  نظر شما
                </label>
                <textarea
                  value={newComment.comment}
                  onChange={(e) =>
                    setNewComment((prev) => ({
                      ...prev,
                      comment: e.target.value,
                    }))
                  }
                  rows="4"
                  className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="نظر خود درباره این محصول را بنویسید..."
                />
              </div>
            </div>

            <div className="flex gap-2 p-4 border-t">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-50"
              >
                انصراف
              </button>
              <button
                onClick={handleAddComment}
                disabled={submitting}
                className="flex-1 px-4 py-2 text-white bg-primary rounded-md hover:bg-[#6352B8] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "در حال ثبت..." : "ثبت نظر"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comments;
