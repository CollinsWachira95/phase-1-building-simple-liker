// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');

  // Add event listeners for future modal functionality
  // Example: showing and hiding the modal
  const showModalButton = document.querySelector('.show-modal');
  const hideModalButton = document.querySelector('.hide-modal');

  if (showModalButton) {
      showModalButton.addEventListener('click', () => {
          modal.classList.remove('hidden');
      });
  }

  if (hideModalButton) {
      hideModalButton.addEventListener('click', () => {
          modal.classList.add('hidden');
      });
  }
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
