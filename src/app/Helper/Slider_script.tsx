export function initializeCarousel() {
  // Ensure the DOM is fully loaded
  if (typeof window === "undefined") return;

  // Get the DOM elements
  const nextDom = document.getElementById("next");
  const prevDom = document.getElementById("prev");
  const carouselDom = document.querySelector(".carousel") as HTMLElement | null;
  const sliderDom = carouselDom?.querySelector(
    ".carousel .list"
  ) as HTMLElement | null;
  const thumbnailBorderDom = document.querySelector(
    ".carousel .thumbnail"
  ) as HTMLElement | null;
  const thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll(
    ".item"
  ) as NodeListOf<HTMLElement> | null;

  // Check if required DOM elements exist
  if (
    !nextDom ||
    !prevDom ||
    !carouselDom ||
    !sliderDom ||
    !thumbnailBorderDom ||
    !thumbnailItemsDom
  ) {
    console.error("Some required DOM elements are missing");
    return;
  }

  // Initialize the carousel
  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  const timeRunning = 3000;
  const timeAutoNext = 6000;

  nextDom.onclick = () => showSlider("next");
  prevDom.onclick = () => showSlider("prev");

  let runTimeOut: ReturnType<typeof setTimeout>;
  let runNextAuto = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);

  function showSlider(type: "next" | "prev") {
    // const sliderItemsDom = sliderDom.querySelectorAll(".carousel .list .item") as NodeListOf<HTMLElement>;
    const sliderItemsDom = sliderDom?.querySelectorAll(".carousel .list .item") as NodeListOf<HTMLElement>;
    const thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll(".item") as NodeListOf<HTMLElement>;

    if (type === "next") {
      sliderDom?.appendChild(sliderItemsDom[0]);
      thumbnailBorderDom?.appendChild(thumbnailItemsDom[0]);
      carouselDom?.classList.add("next");
    } else {
      sliderDom?.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      thumbnailBorderDom?.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom?.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom?.classList.remove("next");
      carouselDom?.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom?.click();
    }, timeAutoNext);
  }
}
