function toClipboard(elem) {
  // Get the text field and button
  var copyText = document.getElementById(elem);
  var btn = document.getElementById(elem + '-btn');
  
  // Store the original button text
  var originalText = btn.innerText;

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerText);
  
  // Change button text to "Query copied!"
  btn.innerText = "Query copied!";

  // Reset button text after 3 seconds
  setTimeout(() => {
    btn.innerText = originalText;
  }, 3000);
}