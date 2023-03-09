document.getElementById("input-form").addEventListener("submit", (e) => {
  e.preventDefault();
  chrome.tabs.query(
    {
      currentWindow: true,
      active: true,
    },
    (tabs) =>
      chrome.tabs.sendMessage(tabs[0].id, {
        message: `${document.getElementById("input-text").value}`,
      })
  );
});
