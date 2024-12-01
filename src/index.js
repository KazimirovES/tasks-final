import "./scss/index.scss";
import "./scss/equipmen-swiper.scss";
import "./scss/types-repairs.scss";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

const equipmentSwiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",
});

const typesSwiper = new Swiper(".types-swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".types-swiper-pagination",
    clickable: true,
  },
});

const initPriceSwiper = new Swiper(".price-swiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: ".price-swiper-pagination",
    clickable: true,
  },
});

const enableOnlyMobile = () => {
  if (window.innerWidth > 767) {
    equipmentSwiper.disable();
    typesSwiper.disable();
    initPriceSwiper.disable();
  } else {
    equipmentSwiper.enable();
    equipmentSwiper.update();
    typesSwiper.enable();
    typesSwiper.update();
    initPriceSwiper.enable();
    initPriceSwiper.update();
  }
};

enableOnlyMobile();

window.addEventListener("resize", enableOnlyMobile);

/* Бургер меню */

const searchMenu = document.querySelector(".search__menu");
const closeBtn = document.querySelector(".escape");
const openBtn = document.querySelector(".menu");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

const openSearchMenu = () => {
  searchMenu.style.left = "0";
  header.classList.add("hidden");
  main.classList.add("hidden");
  footer.classList.add("hidden");
};

const closeSearchMenu = () => {
  searchMenu.style.left = "-320px";
  header.classList.remove("hidden");
  main.classList.remove("hidden");
  footer.classList.remove("hidden");
};

openBtn.addEventListener("click", openSearchMenu);
closeBtn.addEventListener("click", closeSearchMenu);

/* Заказать звонок */

document
  .querySelector(".search__menu-footer-button.call")
  .addEventListener("click", function () {
    const orderCallMenu = document.querySelector(".order-call");
    orderCallMenu.classList.add("active");
    header.classList.add("hidden");
    main.classList.add("hidden");
    footer.classList.add("hidden");
    searchMenu.classList.add("hidden");
    if (window.innerWidth < 1120) {
      searchMenu.style.left = "-320px";
    }
  });

document
  .querySelector(".header__button.phone")
  .addEventListener("click", function () {
    const orderCallMenu = document.querySelector(".order-call");
    orderCallMenu.classList.add("active");
    header.classList.add("hidden");
    main.classList.add("hidden");
    footer.classList.add("hidden");
    if (window.innerWidth < 1120) {
      searchMenu.classList.add("hidden");
    }
  });

document
  .querySelector(".order-call-button")
  .addEventListener("click", function () {
    const orderCallMenu = document.querySelector(".order-call");
    orderCallMenu.classList.remove("active");
    header.classList.remove("hidden");
    main.classList.remove("hidden");
    footer.classList.remove("hidden");
    searchMenu.classList.remove("hidden");
  });

/* feedback menu */

const feedbackMenu = document.querySelector(".feedback-menu");
const closeFeedbackButton = document.querySelector(
  ".feedback-menu__button-close-modal"
);
const openMessageButton1 = document.querySelector(
  ".search__menu-footer-button.message"
);
const openMessageButton2 = document.querySelector(".header__button.messege");

const openFeedbackMenu = () => {
  feedbackMenu.classList.add("active");
  header.classList.add("hidden");
  main.classList.add("hidden");
  footer.classList.add("hidden");
  searchMenu.classList.add("hidden");

  if (window.innerWidth < 1120) {
    searchMenu.style.left = "-320px";
  }
};

const closeFeedbackMenu = () => {
  feedbackMenu.classList.remove("active");
  header.classList.remove("hidden");
  main.classList.remove("hidden");
  footer.classList.remove("hidden");
  searchMenu.classList.remove("hidden");
  if (window.innerWidth < 1120) {
    searchMenu.classList.add("hidden");
  }
};

openMessageButton1.addEventListener("click", openFeedbackMenu);
openMessageButton2.addEventListener("click", openFeedbackMenu);
closeFeedbackButton.addEventListener("click", closeFeedbackMenu);

/* Показать все/ Скрыть................... */

const buttonOpen = document.querySelector(
  ".service__informative-description-button"
);
const serviceInformative = document.querySelector(
  ".service__informative-description-text"
);
const buttonText = document.querySelector(
  ".service__informative-description-button-text"
);
const buttonIcon = document.querySelector(
  ".service__informative-description-button-image"
);

let isExpanded = false;

buttonOpen.addEventListener("click", () => {
  isExpanded = !isExpanded;

  if (isExpanded) {
    serviceInformative.classList.remove(
      "service__informative-description-text"
    );
    serviceInformative.classList.add(
      "service__informative-description-text--click"
    );
    buttonText.textContent = "Скрыть";

    buttonIcon.classList.remove(
      "service__informative-description-button-image"
    );
    buttonIcon.classList.add(
      "service__informative-description-button-image--rotate"
    );

    console.log("открыто");
  } else {
    serviceInformative.classList.remove(
      "service__informative-description-text--click"
    );
    serviceInformative.classList.add("service__informative-description-text");
    buttonText.textContent = "Показать все";

    buttonIcon.classList.remove(
      "service__informative-description-button-image--rotate"
    );
    buttonIcon.classList.add("service__informative-description-button-image");
  }
  console.log("закрыто");
});

/* Кнопка показать все (модели) */

const buttonOpenEquipmen = document.querySelector(".open-button");
const equipmenRepairWrapper = document.querySelector(
  ".equipmen__repair-wrapper"
);
const buttonTextEquipmen = document.querySelector(".button__text");
const buttonIconEquipmen = document.querySelector(".button__icon");

let isEquipmen = false;

buttonOpenEquipmen.addEventListener("click", () => {
  isEquipmen = !isEquipmen;

  if (isEquipmen) {
    equipmenRepairWrapper.classList.remove("equipmen__repair-wrapper");
    equipmenRepairWrapper.classList.add("equipmen__repair-wrapper--click");
    buttonTextEquipmen.textContent = "Скрыть";

    buttonIconEquipmen.classList.remove("button__icon");
    buttonIconEquipmen.classList.add("button__icon--rotate");

    console.log("открыто");
  } else {
    // Если состояние 'закрыто'
    equipmenRepairWrapper.classList.remove("quipmen__repair-wrapper--click");
    equipmenRepairWrapper.classList.add("equipmen__repair-wrapper");

    buttonTextEquipmen.textContent = "Показать все";

    buttonIconEquipmen.classList.remove("button__icon--rotate");
    buttonIconEquipmen.classList.add("button__icon");
  }
  console.log("закрыто");
});

/* Кнопка показать все (Типы моделей) */

const buttonOpenEquipmenTypes = document.querySelector(".types-button");
const equipmenRepairWrapperTypes = document.querySelector(
  ".types-equipment__swiper-wrapper"
);
const buttonTextEquipmenTypes = document.querySelector(".button__text-types");
const buttonIconEquipmenTypes = document.querySelector(".button__icon-types");

let isEquipmenTypes = false;

buttonOpenEquipmenTypes.addEventListener("click", () => {
  isEquipmenTypes = !isEquipmenTypes;

  if (isEquipmenTypes) {
    equipmenRepairWrapperTypes.classList.remove(
      "types-equipment__swiper-wrapper"
    );
    equipmenRepairWrapperTypes.classList.add(
      "types-equipment__swiper-wrapper--click"
    );
    buttonTextEquipmenTypes.textContent = "Скрыть";

    buttonIconEquipmenTypes.classList.remove("button__icon-types");
    buttonIconEquipmenTypes.classList.add("button__icon-types--rotate");

    console.log("открыто");
  } else {
    equipmenRepairWrapperTypes.classList.remove(
      "types-equipment__swiper-wrapper--click"
    );
    equipmenRepairWrapperTypes.classList.add("types-equipment__swiper-wrapper");

    buttonTextEquipmenTypes.textContent = "Показать все";

    buttonIconEquipmenTypes.classList.remove("button__icon-types--rotate");
    buttonIconEquipmenTypes.classList.add("button__icon-types");
  }
  console.log("закрыто");
});
