import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.facebook.com/*"]
}

const hideFeatureByParentElm = ({elm}) => {
  if (elm) {
    elm.parentElement.style.display = 'none';
  }
}

window.addEventListener("load", () => {

  let friendsTabElm = document.querySelector('[aria-label="Friends"]');

  hideFeatureByParentElm({elm: friendsTabElm});

  let watchTabElm = document.querySelector('[aria-label="Watch"]')

  hideFeatureByParentElm({elm: watchTabElm});

  let gamingTabElm = document.querySelector('[aria-label="Gaming"]')

  hideFeatureByParentElm({elm: gamingTabElm});

  let divTags:any = document.getElementsByTagName("div");
  let reelTexts = "Reels"
  let reelsHeading:any;

  for (const element of divTags) {
    if (element.textContent === reelTexts) {
      reelsHeading = element;
      break;
    }
  }

  hideFeatureByParentElm({elm: reelsHeading});

})

window.addEventListener("mousedown", () => {

  let friendsTabElm = document.querySelector('[aria-label="Friends"]');

  hideFeatureByParentElm({elm: friendsTabElm});

  let watchTabElm = document.querySelector('[aria-label="Watch"]')

  hideFeatureByParentElm({elm: watchTabElm});

  let gamingTabElm = document.querySelector('[aria-label="Gaming"]')

  hideFeatureByParentElm({elm: gamingTabElm});

  let divTags:any = document.getElementsByTagName("div");
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

  let divTags:any = document.getElementsByTagName("div");
  let reelTexts = "reels and short videos"
  let peopleYouKnow = "people you may know";
  let suggestedForYou = "suggested for you";
  let reelsHeading:any;
  let removePeopleYouKnow:any;
  let removeSuggestedForYou:any;

  for (const element of divTags) {
    if (element.textContent.toLocaleLowerCase() === suggestedForYou) {
      removeSuggestedForYou = element.parentElement.parentElement.parentElement.parentElement.parentElement;
      hideFeatureByParentElm({elm: removeSuggestedForYou});
    }

    if (element.textContent.toLocaleLowerCase() === peopleYouKnow) {
      removePeopleYouKnow = element.parentElement.parentElement.parentElement.parentElement;
      hideFeatureByParentElm({elm: removePeopleYouKnow});
    }

    if (element.textContent.toLocaleLowerCase() === reelTexts) {
      reelsHeading = element;
      hideFeatureByParentElm({elm: reelsHeading});
    }
  }

  // for (const element of divTags) {
  //   if (element.textContent === suggestedForYou) {
  //     removeSuggestedForYou = element;
  //     if (removeSuggestedForYou) {
  //       removeSuggestedForYou.parentElement.style.display = 'none';
  //     }
  //     break;
  //   }
  // }

  // for (const element of divTags) {
  //   if (element.textContent === peopleYouKnow) {
  //     removePeopleYouKnow = element;
  //     if (removePeopleYouKnow) {
  //       removePeopleYouKnow.parentElement.style.display = 'none';
  //     }
  //     break;
  //   }
  // }

  // for (const element of divTags) {
  //   if (element.textContent === reelTexts) {
  //     reelsHeading = element;
  //     if (reelsHeading) {
  //       reelsHeading.parentElement.style.display = 'none';
  //     }
  //     break;
  //   }
  // }

})
