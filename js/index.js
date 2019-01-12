// using this file is optional
// you can also load the code snippets in using your browser's console
let main = document.getElementById('main');
let input = document.querySelector('input');

main.addEventListener('click', ()=>{
    alert('I was clicked')
})


// add listener to the input element
//keypress, keydown, and keyup events, for example, will have a key property that tells us which key was pressed.

input.addEventListener('keydown', function (e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});

//Every DOM event comes with a preventDefault property.
//preventDefault is a function that, when called, will prevent the
//default event from taking place.It provides us an opportunity to intercept and tweak user interactions(usually in more helpful ways than preventing them from typing "g").


let divs = document.querySelectorAll('div');

function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!

  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
//this is bubbling - all things get affected on event listener
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', bubble);
// }

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();
  //event propagation prevents bubbling from happenning
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}


