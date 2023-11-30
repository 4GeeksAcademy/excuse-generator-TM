/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function choose_index(arr) {
    let object;
    for (let index = 0; index < arr.length; index++) {
      object = arr[Math.floor(Math.random() * arr.length)];
      return object;
    }
  }
  document.querySelector("#excuse").innerHTML =
    choose_index(who) +
    " " +
    choose_index(action) +
    " " +
    choose_index(what) +
    " " +
    choose_index(when);
};

const myButton = document.querySelector("#refresh");
myButton.addEventListener("click", function() {
  window.location.reload();
  // Tu lógica aquí cuando se hace clic en el botón
  // alert("¡Se hizo clic en el botón!");
});

// console.log("Hello Rigo from the console!");
