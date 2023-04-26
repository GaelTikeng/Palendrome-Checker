const display1 = document.querySelector('.display1')
const display2 = document.querySelector('.display2')
let arr = []
let ar = []

function palindromeChecker() {
  let input_text = document.querySelector('.text').value
  if (input_text ==="") {
    display2.innerHTML = "Please enter a word or phrase"
  } else {
    //removing special characters and spaces the string
    let res=''
    for(let i = 0; i < input_text.length; i++) {
      let character = input_text[i]
      if (+character) {
        res += character
      } 
      else if (character.toLowerCase() !== character.toUpperCase()) {
        res += character
      }
      continue
    }
    let word = res.toLowerCase()
    
    // creating two arrays: a normal and a reversed array
    for(let i in word) {
      arr.unshift(word[i])
      ar.push(word[i])
    }
    
    //looping trough the arrays to search for same elements
    for(let i = 0; i < ar.length; i++) {
      if (ar[i] === arr[i]) {
        display1.innerHTML = "Is a palindrome"
      } else display2.innerHTML = "Is not a palindrome"
    }
  }  
}



