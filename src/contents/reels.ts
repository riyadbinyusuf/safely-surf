import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.facebook.com/*"]
}

window.addEventListener("load", () => {

  let divTags = document.getElementsByTagName("div");
  let reelTexts = "Reels"
  let reelsHeading:any;

  for (const element of divTags) {
    if (element.textContent === reelTexts) {
      reelsHeading = element;
      break;
    }
  }

  if (reelsHeading) {
    reelsHeading.parentElement.style.display = 'none';
  }

})

window.addEventListener("mousemove", () => {

  let divTags = document.getElementsByTagName("div");
  let reelTexts = "Reels"
  let reelsHeading:any;

  for (const element of divTags) {
    if (element.textContent === reelTexts) {
      reelsHeading = element;
      break;
    }
  }

  if (reelsHeading) {
    reelsHeading.parentElement.style.display = 'none';
  }

})

window.addEventListener("scroll", () => {

  let divTags = document.getElementsByTagName("div");
  let reelTexts = "Reels and short videos"
  let reelsHeading:any;

  for (const element of divTags) {
    if (element.textContent === reelTexts) {
      reelsHeading = element;
      break;
    }
  }

  if (reelsHeading) {
    reelsHeading.parentElement.style.display = 'none';
  }

})
