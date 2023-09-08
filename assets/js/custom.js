function toClipboard(elem) {
  // Get the text field
  var copyText = document.getElementById(elem);
  var btn = document.getElementById(elem+'-btn');

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerText);
  btn.innerText = "Query copied!"

}
