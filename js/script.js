const sliderBtns = document.querySelector("#sliderBtns");
const sliderImag = document.querySelector("#sliderImag");
const quantityBox = document.querySelector("#quantityBox");
const del = document.querySelectorAll(".del");
const prices = document.querySelectorAll(".price");
const radio = document.querySelectorAll("input[type=radio]");
const cartPrice = document.querySelector(".cartPrice");
const btnRefil = document.querySelector(".btnRefil");
const tabs = document.querySelectorAll(".tabs");
const tabDetails = document.querySelectorAll(".tabDetails");

let imageElement = "";
let quantityElement = "";

const images = [
	"./images/image-1.webp",
	"./images/image-2.webp",
	"./images/image-3.webp",
	"./images/image-4.webp",
	"./images/image-5.webp",
	"./images/image-6.webp ",
];

const quantities = [
	{
		dis: "+10% off",
		quantity: "1",
		set: "set",
	},
	{
		dis: "Free shipping! +14% off",
		quantity: "2",
		set: "sets",
	},
	{
		dis: "Free shipping! +15% off",
		quantity: "3",
		set: "sets",
	},
	{
		dis: "Free shipping! +17% off",
		quantity: "6",
		set: "sets",
	},
];

// slider image btn --------------------------------------------------
images.forEach((item, i) => {
	imageElement =
		imageElement +
		` <div class=" border-2 border-[--border-primary]  h-14 w-14 rounded-full overflow-hidden">
	<img
		src= ${item}
		alt="one"
		class="w-full h-full object-cover sliderBtnClick"
	/>
</div> `;

	sliderBtns.innerHTML = imageElement;
});

const sliderBtnClick = document.querySelectorAll(".sliderBtnClick");

sliderBtnClick.forEach((item, i) => {
	item.addEventListener("click", (e) => {
		sliderImag.src = e.target.src;
	});
});
// slider image btn --------------------------------------------------

// quantity btn --------------------------------------------------

let price = 0;
let dis = 0;
let disPrice = 0;
let OTP = false;
const otpFnc = () => OTP;

quantities.forEach((item, i) => {
	quantityElement =
		quantityElement +
		`
            <div class="w-full lg:w-[103px] h-[82px] border border-[--border-primary] rounded-[8px] overflow-hidden cursor-pointer quantitySet" >
            	<div
            		class="w-full h-[45%] bg-[--bg-third] flex flex-col items-center justify-center"
            	>
            		<p
            			class="text-[--color-secondary] text-sm text-center leading-[1.10]"
            		>
            			${item.dis}
            		</p>
            	</div>

            	<div class="w-full h-[55%] ">
            		<p class="text-center leading-[.5]">
            			<strong class="text-lg">${item.quantity}</strong> <br />
            			${item.set}
            		</p>
            	</div>
            </div>
        `;

	quantityBox.innerHTML = quantityElement;
});

const quantitySet = document.querySelectorAll(".quantitySet");
quantitySet[0].classList.add("selectedBackground");

quantitySet.forEach((item, index) => {
	item.addEventListener("click", (e) => {
		const OTP = otpFnc();
		for (let i = 0; i < quantitySet.length; i++) {
			quantitySet[i].classList.remove("selectedBackground");
		}

		switch (index) {
			case 0:
				price = 37;
				dis = (price * (OTP ? 0 : 10)) / 100;
				disPrice = price - Math.round(dis);
				// set price ----------------------
				prices[0].innerText = "$" + price;
				del[0].style.display = "none";
				del[1].innerText = "$" + price;
				prices[1].innerText = "$" + disPrice;
				// --------------------------------
				cartPrice.innerText = "$" + disPrice;
				btnRefil.innerText = "$" + disPrice;
				break;
			case 1:
				price = 37 * 2;
				dis = (price * (OTP ? 7 : 14)) / 100;
				disPrice = price - Math.round(dis);
				// set price ----------------------
				prices[0].innerText = "$" + disPrice;
				del[0].style.display = "block";
				del[0].innerText = "$" + price;
				del[1].innerText = "$" + price;
				prices[1].innerText = "$" + disPrice;
				// --------------------------------
				cartPrice.innerText = "$" + disPrice;
				btnRefil.innerText = "$" + disPrice;

				break;
			case 2:
				price = 37 * 3;
				dis = (price * (OTP ? 9 : 15)) / 100;
				disPrice = price - Math.round(dis);
				// set price ----------------------
				prices[0].innerText = "$" + disPrice;
				del[0].style.display = "block";
				del[0].innerText = "$" + price;
				del[1].innerText = "$" + price;
				prices[1].innerText = "$" + disPrice;
				// --------------------------------
				cartPrice.innerText = "$" + disPrice;
				btnRefil.innerText = "$" + disPrice;

				break;
			case 3:
				price = 37 * 6;
				dis = (price * (OTP ? 11 : 17)) / 100;
				disPrice = price - Math.round(dis);
				// set price ----------------------
				prices[0].innerText = "$" + disPrice;
				del[0].style.display = "block";
				del[0].innerText = "$" + price;
				del[1].innerText = "$" + price;
				prices[1].innerText = "$" + disPrice;
				// --------------------------------
				cartPrice.innerText = "$" + disPrice;
				btnRefil.innerText = "$" + disPrice;

				break;

			default:
				break;
		}

		item.classList.add("selectedBackground");
	});
});

// quantity btn --------------------------------------------------

// subscription btn --------------------------------------------------
radio.forEach((input) => {
	input.addEventListener("click", (e) => {
		if (e.target.value === "OTP") {
			OTP = true;
		}
		if (e.target.value === "subscribe") {
			OTP = false;
		}
	});
});
// subscription btn --------------------------------------------------

// tabs btn --------------------------------------------------

tabs.forEach((tab, index) => {
	tab.addEventListener("click", (e) => {
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove("tabBackground");
			tabDetails[i].style.display = "none";
		}

		tabDetails[index].style.display = "block";

		tab.classList.add("tabBackground");
	});
});

// tabs btn --------------------------------------------------
