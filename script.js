let inputBox = document.getElementById("inputBox");
let rangevalue = document.querySelector(".rangevalue");
let inputRange = document.getElementById("inputRange");
let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let numerical = document.getElementById("number");
let symbols = document.getElementById("symbol");
let generateBtn = document.querySelector(".generateBtn");
rangevalue.innerHTML = inputRange.value;
generateBtn.addEventListener("click", () => {
  inputBox.value = passwordGen(inputRange.value);
});

function passwordGen(range) {
  let lower = lowerCase.checked ? "abcdefghijklmnopqrstuvwxyz":"";
  let upper = upperCase.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ":"";
  let num = numerical.checked ? "1234567890":"";
  let sym = symbols.checked ? "!@#$%^&*()_+<>:?/":"";
  // let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // let lower = "abcdefghijklmnopqrstuvwxyz";
  // let num = "1234567890";
  // let sym = "!@#$%^&*()_+<>:?/";
  let allChars = `${upper}${lower}${num}${sym}`;
  let genPassword = "";
  for (i = 0; i < range; i++) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return genPassword;
}
