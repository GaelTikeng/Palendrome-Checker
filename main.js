const display1 = document.querySelector('.display1')
const display2 = document.querySelector('.display2')
let arr = []
let ar = []

document.querySelector('.enter').addEventListener('click', palindromeChecker)

function palindromeChecker () {
  let inputText = document.querySelector('.text').value
  if (inputText === '') {
    display2.innerHTML = 'Please enter a word or phrase'
  }
  else {
    // removing special characters and spaces from the string
    let res = ''
    for (let i = 0; i < inputText.length; i++) {
      const character = inputText[i]
      if (+character) {
        res += character
      }
      else if (character.toLowerCase() !== character.toUpperCase()) {
        res += character
      }
      continue
    }
    const word = res.toLowerCase()
    console.log(word)
    // creating two arrays: a normal array and a reversed array
    for (const i in word) {
      arr.unshift(word[i])
      ar.push(word[i])
    }

    // looping trough the arrays to search for same elements
    for (let i = 0; i < ar.length; i++) {
      if (ar[i] === arr[i]) {
        display2.innerHTML = ''
        display1.innerHTML = 'Is a palindrome'
      }
      else {
        display1.innerHTML = ''
        display2.innerHTML = 'Is not a palindrome'
      }
      continue
    }
    console.log(inputText)
    inputText = ''
    console.log(inputText)
  }
  // clearing the arrays stoting the input text inorder to recieve another text or phrase
  arr = []
  ar = []
}
