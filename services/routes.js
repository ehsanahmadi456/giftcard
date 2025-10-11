const routes = {
  auth: {
    /**
     * ورود کاربر با شماره موبایل و رمز عبور
     * @param {string} mobile - شماره موبایل کاربر
     * @param {string} password - رمز عبور کاربر
     */
    login(mobile, password) {
      return {
        path: "/members/login.php",
        method: "POST",
        query: {
          op: "login",
          mobile,
          password,
        },
      };
    },

    /**
     * ثبت‌نام کاربر جدید با شماره موبایل
     * @param {string} mobile - شماره موبایل کاربر
     * @param {string} password - رمز عبور
     * @param {string} ref - کد معرف (اختیاری)
     */
    register(mobile, password, ref = "") {
      return {
        path: "/members/register.php",
        method: "POST",
        query: {
          op: "register",
          mobile,
          password,
          ref,
        },
      };
    },

    /**
     * ارسال کد تأیید (برای ثبت‌نام یا فراموشی رمز)
     * @param {string} mobile - شماره موبایل
     * @param {"register"|"forgot"} type - نوع ارسال کد
     */
    sendCode(mobile, type = "register") {
      return {
        path: "/members/sendcode.php",
        method: "POST",
        query: {
          op: "send",
          mobile,
          type,
        },
      };
    },

    /**
     * بررسی و تأیید کد ارسال‌شده برای کاربر
     * @param {string} mobile - شماره موبایل
     * @param {string} code - کد تأیید دریافتی
     */
    verifyCode(mobile, code) {
      return {
        path: "/members/verify.php",
        method: "POST",
        query: {
          op: "check",
          mobile,
          code,
        },
      };
    },

    /**
     * درخواست ارسال مجدد کد تأیید
     * @param {string} mobile - شماره موبایل
     */
    resendCode(mobile) {
      return {
        path: "/members/sendcode.php",
        method: "POST",
        query: {
          op: "resend",
          mobile,
        },
      };
    },

    /**
     * بازیابی رمز عبور (فراموشی)
     * @param {string} mobile - شماره موبایل
     * @param {string} code - کد تأیید
     * @param {string} newPass - رمز جدید
     */
    forgotPassword(mobile, code, newPass) {
      return {
        path: "/members/forgot.php",
        method: "POST",
        query: {
          op: "reset",
          mobile,
          code,
          newPass,
        },
      };
    },

    /** خروج از حساب کاربری */
    logout() {
      return {
        path: "/members/logout.php",
        method: "POST",
        query: {
          op: "exit",
        },
      };
    },
  },
  account: {
    /**
     * دریافت اطلاعات پروفایل کاربر (نام، ایمیل، تلفن، آواتار و ...)
     */
    profileInfo() {
      return {
        path: "/members/profile.php",
        method: "POST",
        query: {
          op: "info",
        },
      };
    },

    /**
     * به‌روزرسانی اطلاعات پروفایل کاربر
     * @param {string} name - نام کامل
     * @param {string} email - آدرس ایمیل
     * @param {string} mobile - شماره موبایل
     * @param {string} avatar - آدرس یا فایل آواتار (اختیاری)
     */
    profileUpdate(name, email, mobile, avatar = "") {
      return {
        path: "/members/profile.php",
        method: "POST",
        query: {
          op: "update",
          name,
          email,
          mobile,
          avatar,
        },
      };
    },

    /**
     * دریافت تنظیمات کاربری (اعلان‌ها، حریم خصوصی و ...)
     */
    settingsGet() {
      return {
        path: "/members/setting.php",
        method: "POST",
        query: {
          op: "get",
        },
      };
    },

    /**
     * بروزرسانی تنظیمات کاربری
     * @param {boolean} notify - فعال یا غیرفعال بودن اعلان‌ها
     * @param {boolean} privacy - وضعیت حریم خصوصی (true=خصوصی)
     */
    settingsUpdate(notify, privacy) {
      return {
        path: "/members/setting.php",
        method: "POST",
        query: {
          op: "update",
          notify,
          privacy,
        },
      };
    },

    /**
     * دریافت لیست حساب‌های بانکی کاربر
     */
    bankAccountList() {
      return {
        path: "/members/hesab.php",
        method: "POST",
        query: {
          op: "list",
        },
      };
    },

    /**
     * افزودن حساب بانکی جدید
     * @param {string} bank - نام بانک
     * @param {string} card - شماره کارت
     * @param {string} sheba - شماره شبا
     * @param {string} owner - نام صاحب حساب
     */
    bankAccountAdd(bank, card, sheba, owner) {
      return {
        path: "/members/hesab.php",
        method: "POST",
        query: {
          op: "add",
          bank,
          card,
          sheba,
          owner,
        },
      };
    },

    /**
     * حذف حساب بانکی از لیست کاربر
     * @param {number} id - شناسه حساب
     */
    bankAccountRemove(id) {
      return {
        path: "/members/hesab.php",
        method: "POST",
        query: {
          op: "remove",
          id,
        },
      };
    },

    /**
     * دریافت اطلاعات شماره شباهای کاربر
     */
    shebaList() {
      return {
        path: "/members/sheba.php",
        method: "POST",
        query: {
          op: "list",
        },
      };
    },

    /**
     * افزودن شماره شبا جدید
     * @param {string} sheba - شماره شبا
     * @param {string} bank - نام بانک
     */
    shebaAdd(sheba, bank) {
      return {
        path: "/members/sheba.php",
        method: "POST",
        query: {
          op: "add",
          sheba,
          bank,
        },
      };
    },

    /**
     * حذف شماره شبا
     * @param {number} id - شناسه شبا
     */
    shebaRemove(id) {
      return {
        path: "/members/sheba.php",
        method: "POST",
        query: {
          op: "remove",
          id,
        },
      };
    },
  },
  shop: {
    /**
     * افزودن یا کاهش محصول در سبد خرید
     * @param {number} id - شناسه محصول
     * @param {"a"|"m"} act - a=افزودن یا افزایش، m=کاهش
     */
    cartAction(id, act) {
      return {
        path: "/members/cart.php",
        method: "GET",
        query: { op: "add", id, act },
      };
    },

    /** دریافت لیست آیتم‌های سبد خرید */
    cartList() {
      return {
        path: "/members/cart.php",
        method: "GET",
        query: { op: "query" },
      };
    },

    /** دریافت مجموع تعداد و قیمت محصولات سبد خرید */
    cartTotals() {
      return {
        path: "/members/cart.php",
        method: "GET",
        query: { op: "totals" },
      };
    },

    /**
     * تبدیل سبد خرید به سفارش
     * @param {"y"|"n"} credit - y برای استفاده از کیف پول، n برای عدم استفاده
     * @param {number} donate - مبلغ کمک به خیریه (تومان)
     */
    cartToOrder(credit = "n", donate = 0) {
      return {
        path: "/members/cart.php",
        method: "POST",
        query: { op: "maker_order", credit, donate },
      };
    },

    /**
     * پرداخت سفارش
     * @param {number} oid - شناسه سفارش
     */
    orderPay(oid) {
      return {
        path: "/order.php",
        method: "POST",
        query: { oid },
      };
    },

    /** دریافت سفارش‌های کاربر با فیلتر وضعیت */
    searchOrders(status = "y", start, end) {
      return {
        path: "/members/search.php",
        method: "POST",
        query: { status, start, end },
      };
    },

    /**
     * مشاهده جزئیات و تحویل محصول خریداری‌شده
     * @param {number} fid - شناسه فاکتور
     */
    orderDelivery(fid) {
      return {
        path: "/members/search.php",
        method: "GET",
        query: { op: "list", fid },
      };
    },

    /** دریافت لیست محصولات در انبار کاربر */
    storageList() {
      return {
        path: "/members/storage.php",
        method: "POST",
        query: { op: "list" },
      };
    },

    /**
     * بروزرسانی فیلد اضافی محصول در انبار
     * @param {number} id - شناسه محصول
     * @param {string} field - نام فیلد
     * @param {string|number} value - مقدار جدید
     */
    storageUpdateExtra(id, field, value) {
      return {
        path: "/members/storage.php",
        method: "POST",
        query: { op: "update_extra_field", id, field, value },
      };
    },

    /** افزودن محصول به علاقه‌مندی‌ها */
    favoriteAdd(id) {
      return {
        path: "/members/favorite.php",
        method: "POST",
        query: { op: "add", id },
      };
    },

    /** حذف محصول از علاقه‌مندی‌ها */
    favoriteRemove(id) {
      return {
        path: "/members/favorite.php",
        method: "GET",
        query: { op: "remove", id },
      };
    },

    /** بررسی وجود محصول در علاقه‌مندی‌ها */
    favoriteInfo(id) {
      return {
        path: "/members/favorite.php",
        method: "GET",
        query: { op: "infavorite", id },
      };
    },

    /** دریافت لیست علاقه‌مندی‌ها */
    favoriteList() {
      return {
        path: "/members/favorite.php",
        method: "GET",
        query: { op: "list" },
      };
    },

    /**
     * ثبت امتیاز کاربر برای محصول
     * @param {number} id - شناسه محصول
     * @param {number} rate - امتیاز ۱ تا ۵
     */
    rateAdd(id, rate) {
      return {
        path: "/members/rate.php",
        method: "POST",
        query: { op: "add", id, rate },
      };
    },

    /**
     * ثبت نظر کاربر برای محصول
     * @param {number} id - شناسه محصول
     * @param {number} rate - امتیاز ۱ تا ۵
     * @param {string} comment - متن نظر
     */
    commentAdd(id, rate, comment) {
      return {
        path: "/members/comment.php",
        method: "POST",
        query: { op: "add", id, rate, comment },
      };
    },
  },
  wallet: {
    /**
     * دریافت موجودی فعلی کیف پول کاربر
     */
    balance() {
      return {
        path: "/members/withdraw.php",
        method: "POST",
        query: { op: "credit" },
      };
    },

    /**
     * درخواست برداشت وجه از حساب کاربر
     * @param {number} amount - مبلغ برداشت
     * @param {number} hesab - شناسه حساب بانکی (از لیست حساب‌ها)
     */
    withdrawAdd(amount, hesab) {
      return {
        path: "/members/withdraw.php",
        method: "POST",
        query: {
          op: "add",
          amount,
          hesab,
        },
      };
    },

    /**
     * دریافت لیست درخواست‌های برداشت وجه
     * @param {number} page - شماره صفحه (اختیاری)
     */
    withdrawList(page = 1) {
      return {
        path: "/members/withdraw.php",
        method: "POST",
        query: {
          op: "list",
          page,
        },
      };
    },

    /**
     * دریافت فرم افزودن اعتبار (برای درگاه پرداخت)
     * شامل اطلاعات موردنیاز جهت پرداخت آنلاین
     */
    addCreditForm() {
      return {
        path: "/members/credit.php",
        method: "POST",
        query: {
          op: "add_form",
        },
      };
    },

    /**
     * افزودن مبلغ به کیف پول (پرداخت آنلاین)
     * @param {number} price - مبلغ مورد نظر (تومان)
     */
    addCredit(price) {
      return {
        path: "/members/credit.php",
        method: "POST",
        query: {
          op: "add",
          price,
        },
      };
    },

    /**
     * دریافت لیست تراکنش‌های کیف پول
     * @param {number} page - شماره صفحه
     */
    creditList(page = 1) {
      return {
        path: "/members/credit.php",
        method: "POST",
        query: {
          op: "list",
          page,
        },
      };
    },
  },
  data: {
    /**
     * دریافت لیست دسته‌بندی محصولات
     */
    categoryList() {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "category",
        },
      };
    },

    /**
     * دریافت لیست محصولات با فیلترهای مختلف
     * @param {number} [cid] - شناسه دسته‌بندی (اختیاری)
     * @param {number} [page] - شماره صفحه (اختیاری)
     * @param {string} [sort] - نوع مرتب‌سازی (newest|price|sale)
     * @param {string} [search] - عبارت جستجو (اختیاری)
     */
    productList(cid, page = 1, sort, search) {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "prod_list",
          cid,
          page,
          sort,
          search,
        },
      };
    },

    /**
     * دریافت جزئیات یک محصول خاص
     * @param {number} id - شناسه محصول
     */
    productView(id) {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "prod_view",
          id,
        },
      };
    },

    /**
     * دریافت لیست محصولات مرتبط با یک محصول خاص
     * @param {number} id - شناسه محصول
     */
    productRelated(id) {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "related",
          id,
        },
      };
    },

    /**
     * دریافت بنرهای اصلی سایت (صفحه اصلی)
     */
    bannerMain() {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "banner",
        },
      };
    },

    /**
     * دریافت بنرهای تبلیغاتی بخش‌های مختلف
     * @param {string} [section] - نام بخش (مثلاً "home", "shop", "footer")
     */
    bannerSection(section) {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "banner_section",
          section,
        },
      };
    },

    /**
     * جستجوی محصولات بر اساس کلمه کلیدی
     * @param {string} q - عبارت جستجو
     * @param {number} [page] - شماره صفحه (اختیاری)
     */
    search(q, page = 1) {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "search",
          q,
          page,
        },
      };
    },

    /**
     * دریافت محدوده قیمت محصولات برای فیلتر قیمت
     * @param {number} [cid] - شناسه دسته (اختیاری)
     */
    priceRange(cid) {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "price_range",
          cid,
        },
      };
    },

    /**
     * دریافت فیلترهای قابل اعمال برای دسته‌بندی
     * (مثل برند، رنگ، سایز، نوع و ...)
     * @param {number} cid - شناسه دسته
     */
    filters(cid) {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "filters",
          cid,
        },
      };
    },

    /**
     * دریافت محصولات دارای تخفیف ویژه
     * @param {number} [page] - شماره صفحه
     */
    discountList(page = 1) {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "discount",
          page,
        },
      };
    },

    /**
     * دریافت محصولات پرفروش (بر اساس آمار فروش)
     * @param {number} [page] - شماره صفحه
     */
    bestSellers(page = 1) {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "bestseller",
          page,
        },
      };
    },

    /**
     * دریافت محصولات جدید (آخرین افزوده‌ها)
     * @param {number} [page] - شماره صفحه
     */
    newestProducts(page = 1) {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "newest",
          page,
        },
      };
    },

    /**
     * دریافت محصولات ویژه (special offers)
     */
    specialOffers() {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "special",
        },
      };
    },

    /**
     * دریافت اطلاعات صفحه خانه (Home Page)
     * شامل بنرها، دسته‌ها و محصولات
     */
    homeData() {
      return {
        path: "/data.php",
        method: "GET",
        query: {
          op: "home",
        },
      };
    },
  },
  support: {
    /**
     * دریافت لیست تیکت‌های پشتیبانی کاربر
     * @param {number} page - شماره صفحه (اختیاری)
     */
    ticketList(page = 1) {
      return {
        path: "/members/ticket.php",
        method: "POST",
        query: {
          op: "list",
          page,
        },
      };
    },

    /**
     * مشاهده جزئیات یک تیکت خاص
     * @param {number} id - شناسه تیکت
     */
    ticketView(id) {
      return {
        path: "/members/ticket.php",
        method: "POST",
        query: {
          op: "view",
          id,
        },
      };
    },

    /**
     * ارسال تیکت جدید به پشتیبانی
     * ⚠️ اگر فایل ضمیمه دارید، باید با form-data ارسال شود.
     * @param {string} title - عنوان تیکت
     * @param {string} message - متن پیام
     * @param {number} [cat] - شناسه دسته‌بندی تیکت (اختیاری)
     * @param {File} [userfile] - فایل ضمیمه (اختیاری)
     */
    ticketAdd(title, message, cat, userfile) {
      return {
        path: "/members/ticket.php",
        method: "POST",
        query: {
          op: "add",
          title,
          message,
          cat,
          userfile,
        },
      };
    },

    /**
     * ارسال پاسخ جدید در تیکت باز
     * ⚠️ اگر فایل دارید، با form-data ارسال شود.
     * @param {number} id - شناسه تیکت
     * @param {string} message - متن پاسخ
     * @param {File} [userfile] - فایل ضمیمه (اختیاری)
     */
    ticketReply(id, message, userfile) {
      return {
        path: "/members/ticket.php",
        method: "POST",
        query: {
          op: "reply",
          id,
          message,
          userfile,
        },
      };
    },

    /**
     * بستن تیکت توسط کاربر
     * @param {number} id - شناسه تیکت
     */
    ticketClose(id) {
      return {
        path: "/members/ticket.php",
        method: "POST",
        query: {
          op: "close",
          id,
        },
      };
    },

    /**
     * دریافت دسته‌بندی‌های تیکت‌ها (برای انتخاب در زمان ایجاد تیکت)
     */
    ticketCategories() {
      return {
        path: "/members/support.php",
        method: "POST",
        query: {
          op: "categories",
        },
      };
    },

    /**
     * آپلود فایل برای استفاده در پیام تیکت
     * ⚠️ باید با form-data ارسال شود.
     * @param {File} file - فایل برای آپلود
     */
    uploadFile(file) {
      return {
        path: "/members/upload.php",
        method: "POST",
        query: {
          op: "ticket",
          file,
        },
      };
    },
  },

}