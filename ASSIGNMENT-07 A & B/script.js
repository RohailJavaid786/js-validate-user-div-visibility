

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); 

      const usernameInput = document.querySelector('#username');
      const username = usernameInput.value;

      
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      const minLength = 5;

      if (username.length >= minLength && alphanumericRegex.test(username)) {
        alert('Success! Username is valid.');
      } else {
        alert('Error! Username must be at least 5 characters long and contain only letters and numbers.');
      }
    });
  });


  // 2nd part

const toggleButton = document.getElementById('toggleButton');
const hiddenDiv = document.getElementById('hiddenDiv');

toggleButton.addEventListener('click', function() {
  if (hiddenDiv.style.display === 'none') {
    hiddenDiv.style.display = 'block'; // Show the div
  } else {
    hiddenDiv.style.display = 'none'; // Hide the div
  }
});