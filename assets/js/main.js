/* Swiper
 **************************************************************/
// let swiper = Swiper;
// let swiper_2 = Swiper;
// let swiper_3 = Swiper;
let init = false;
const dropDowns = document.querySelectorAll("#dropdowns>div");
const like = document.querySelector("#like");
const optionItems = document.querySelectorAll("#options li");
const selectBox = document.querySelector("#selectBox");
const selectInput = selectBox?.querySelector("input");
const categoryProduct = document.querySelector(".mobile-category");
const categoryProductBtn = document.querySelectorAll(".mobile-category-btn");
const mobileNav = document.querySelector("#mobile-nav");
let windowY = window.scrollY;


const swiperEls = document.querySelectorAll('[class*="swiper--"]')
const swipers = {}
swiperEls.forEach((item,i) => {
	swipers[`swiper_${i+1}`] = Swiper
})


mobileNav &&
	document.addEventListener("scroll", () => {
		if (windowY < window.scrollY) {
			mobileNav.classList.add("h-0");
			mobileNav.classList.remove("h-16");
		} else {
			mobileNav.classList.remove("h-0");
			mobileNav.classList.add("h-16");
		}
		windowY = window.scrollY
	});

categoryProductBtn &&
	categoryProductBtn.forEach((btn) =>
		btn.addEventListener("click", () => {
			categoryProduct.classList.toggle("hidden");
			categoryProduct.classList.toggle("flex");
		})
	);

selectBox &&
	selectBox.addEventListener("click", () => {
		if (!selectInput.value) {
			selectBox.classList.add("active");
		}
	});

selectBox &&
	document.addEventListener("click", (e) => {
		console.log(e.target);
		if (e.target != selectInput) {
			selectBox.classList.remove("active");
		}
	});

selectBox &&
	optionItems.forEach((option) => {
		option.addEventListener("click", () => {
			console.log(option.innerHTML);
			selectInput.value = option.innerText;
		});
	});

like &&
	like.addEventListener("click", (e) => {
		e.preventDefault();
		like.querySelector("svg").classList.toggle("fill-red-500");
		like.querySelector("svg").classList.toggle("stroke-lowgray");
	});

dropDowns &&
	dropDowns.forEach((dropDown) => {
		dropDown
			.querySelector(".action-button")
			.addEventListener("click", () => {
				dropDown.classList.toggle("active");
			});
	});

/* Which media query
 **************************************************************/
function swiperMode() {
	let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");
	// Enable (for mobile)
	if (mobile.matches) {
		if (!init) {
			init = true;
			swiperEls.forEach((_,i) => {
				swipers[`swiper_${i+1}`] = new Swiper(`.swiper-${i+1}`, {
					slidesPerView: "auto",
					// centeredSlides: 'auto',
					spaceBetween: 16,
					freeMode: true,
				});
			})
		}
	}

	// Disable (for tablet)
	else {
		if(init){
			for (let swiper in swipers){
				swiper.destroy()
			}
			init = false;
		}
	}
}

/* On Load
 **************************************************************/
if (swiperEls) {
	window.addEventListener("load", function () {
		swiperMode();
	});

	/* On Resize
	 **************************************************************/
	window.addEventListener("resize", function () {
		swiperMode();
	});
}
