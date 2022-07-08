chrome.action.onClicked.addListener(buttonClicked);

function sendMessageToContentScript(tabs) {
  let msg = {
    txt: "getPiece",
  };

  chrome.tabs.sendMessage(tabs[0].id, msg);
}

function buttonClicked(tab) {
  const tabQuery = { active: true, currentWindow: true };

  chrome.tabs.query(tabQuery, sendMessageToContentScript);
}

function gotMessage(request, sender, sendResponse) {
  console.log(request.txt);
}

chrome.runtime.onMessage.addListener(gotMessage);
