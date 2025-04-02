function toClipboard(elem) {
  // Get the text field and button
  var copyText = document.getElementById(elem);

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerText);
  
  // Get the toast notification element
  const toastElement = document.getElementById("toastElement");

  // Show the toast notification
  const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
  toast.show();
}