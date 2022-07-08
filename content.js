chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
  if (request.txt === "hello") {
    console.log(
      'I\'VE RECEIVED THE MESSAGE "hello", I WILL NOW SEND THE BACKGROUND SCRIPT A MESSAGE!'
    );
    chrome.runtime.sendMessage({ txt: "HEY IT'S ME, THE CONTENT SCRIPT!!!" });
  } else if (request.txt === "getPiece") {
    detectPiece();
  } else {
    console.log("MESSAGE FAILED!!!!!!");
  }
}

function detectPiece() {
  const piece = document.querySelectorAll(".piece");
  console.log("----------------LOGGING----------------");
  console.log(piece);
  console.log("----------------LOGGING----------------");
}
