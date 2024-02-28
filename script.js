//your JS code here. If required.
function activateSearch() {
  var searchDiv = document.querySelector('.search');
  searchDiv.classList.add('active');
  var inputField = searchDiv.querySelector('.input');
  inputField.focus();
}