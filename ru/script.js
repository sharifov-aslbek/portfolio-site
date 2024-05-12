
const text = document.querySelector('.my-heading span')
const words =  ["Sharifov Aslbek" , "Front End Developer"]

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
   const currentWord = words[wordIndex];
   const currentChar = currentWord.substring(0 , charIndex);
   text.textContent = currentChar;
   if(!isDeleting && charIndex < currentWord.length) {
      charIndex++
      setTimeout(typeEffect, 200);
   } else if(isDeleting && charIndex > 0) {
      charIndex--
      setTimeout(typeEffect, 100);
   } else {
      isDeleting = !isDeleting
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect , 1200)
   }
}

typeEffect()

