// using this file is optional
// you can also load the code snippets in using your browser's console


const main = document.querySelector("#id");

main.addEventListener("click", event => {
  console.log("I was clicked");
});


const input = document.querySelector('input');

input.addEventListener("keydown", event => {
  if (event.key === 'g') {
    return event.preventDefault()
  } else {
    return console.log(event.key)
  }
})
