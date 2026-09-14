chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle" && document.body) {
    const isEditable = document.body.contentEditable === "true";
    document.body.contentEditable = !isEditable;







  }
  });