chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  document.querySelector(".html5-main-video").playbackRate = request.message;
});
