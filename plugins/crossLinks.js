import { crossLinks } from '../crossLinksIndex';
import config from '@generated/docusaurus.config';

const doCrossLinks = () => {
  const domElementsContainer = document.querySelector(
    '.markdown div.no-video-insert'
  );

  let insertVideos;
  domElementsContainer === null
    ? (insertVideos = true)
    : (insertVideos = false);

  // const domElements = document.querySelectorAll('p');
  // const domElements = document.querySelectorAll(".markdown *:not(a)");
  const domElements = document.querySelectorAll(
    '.markdown div:not(.no-crosslinks) p'
  );

  // part 1: replace keywords with (almost) unique ID's
  if (domElements.length > 0) {
    domElements.forEach((element) => {
      crossLinks.forEach((textFragment) => {
        let innerText = element.innerHTML;

        // Assign only once:
        textFragment.randomNumber === undefined
          ? (textFragment.randomNumber = Math.floor(
              Math.random() * 10000000000000000000
            ))
          : null;

        let innerTextNew = innerText.replace(
          textFragment.keyword,
          textFragment.randomNumber
        );
        element.innerHTML = innerTextNew;
      });
    });

    // part 2: replace (almost) unique ID's with link
    domElements.forEach((element) => {
      crossLinks.forEach((textFragment) => {
        let innerText = element.innerHTML;

        let strInnerTextNew =
          `<a class='cross-link' href=${config.baseUrl}` +
          textFragment.url +
          '>' +
          textFragment.keyword +
          '</a>' +
          ' <strong>(Level: ' +
          textFragment.level +
          ')</strong>';

        if (textFragment.youtubeID !== undefined && insertVideos) {
          strInnerTextNew += `<iframe class="video-test" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%" src="https://www.youtube.com/embed/${textFragment.youtubeID}?start=${textFragment.timeStart}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        }

        let innerTextNew = innerText.replace(
          textFragment.randomNumber,
          strInnerTextNew
        );

        // textFragment.youtubeID !== undefined
        //   ? (innerTextNew += `<iframe style="overflow:hidden;height:100%;width:100%" height="100%" width="100%" src="https://www.youtube.com/embed/${textFragment.youtubeID}?start=${textFragment.timeStart}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
        //   : null;

        element.innerHTML = innerTextNew;
      });
    });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;

  doCrossLinks();
}
