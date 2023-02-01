document.getElementById("input-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let params = {
    currentWindow: true,
    active: true,
  };

  function gotTabs(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {"message": `${document.getElementById('input-text').value}`});
  }

  chrome.tabs.query(params, gotTabs);
});
