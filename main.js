// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//const heart = document.getElementsByClassName('like-glyph')

const heart = document.querySelectorAll('.like-glyph')

//console.log(heart.forEach(element => console.log(element)))

heart[0].addEventListener('click', () => {
  mimicServerCall()
  .then(() => {
    if (heart[0].innerText === EMPTY_HEART){
      heart[0].className = 'activated-heart'
      heart[0].innerText = FULL_HEART
    } else {
      heart[0].innerText = EMPTY_HEART
      heart[0].className = ''
  }
  })
  .catch(() => {
    document.querySelector('#modal').classList.remove('hidden')
    setTimeout(() => document.querySelector('#modal').className = 'hidden',3000)
  })
})

//Below is another attempt at filling the heart
// if (heart.target.innerText === EMPTY_HEART) {
    //   heart.target.innerText = FULL_HEART
    // }
    // else if (heart.target.innerText === FULL_HEART) {
    //   heart.target.innerText = EMPTY_HEART
    // }



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
