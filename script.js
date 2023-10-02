let inputBox = document.getElementById("inputBox");
let inputRange = document.getElementById("inputRange");
let generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", () => {
  inputBox.value = passwordGen(inputRange.value);
});

function passwordGen(range) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let num = "1234567890";
  let sym = "!@#$%^&*()_+<>:?/";
  let allChars = `${upper}${lower}${num}${sym}`;
  let genPassword = "";
  for (i = 0; i < range; i++) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return genPassword;
}
