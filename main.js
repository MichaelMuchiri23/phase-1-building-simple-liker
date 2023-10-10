// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const like=document.getElementsByClassName('like-glyph')
for(let element of like){
  element.addEventListener('click',()=>{
    mimicServerCall()
    .then(data=>{
      console.log(data)
      element.innerHTML=FULL_HEART
      element.classList.toggle('activated-heart')
      console.log(element)
      if(element.classList[1]!=='activated-heart'){
        element.innerHTML=EMPTY_HEART
      }
    })
    .catch(error=>{
      document.querySelector('#modal').classList.remove('hidden')
      setTimeout(()=>document.querySelector('#modal').className='hidden',3000)
    })
  })
}


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
