const allButtonsClicked = document.querySelectorAll(".btn");

let strToDisplay = "";
const displayElm = document.querySelector(".display");
const operators = ["+", "-", "*", "/", "%"];
let lastOperator = "";

const audio = new Audio("./assets/prankSound.mp3");

const buttonAction = (value) => {
  displayElm.classList.remove("prank");
  if (value === "AC") {
    strToDisplay = "";
    return display(strToDisplay);
  }
  if (value === "=" || value === "Enter") {
    lastOperator = "";
    const lastCharacter = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lastCharacter)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
    return getTotalCalculations();
  }

  if (operators.includes(value)) {
    lastOperator = value;
    const lastChar = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lastChar)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
  }

  if (value === "C") {
    strToDisplay = strToDisplay.slice(0, -1);
    return display(strToDisplay);
  }

  if (value === ".") {
    const lastOperatorIndexPoint = strToDisplay.lastIndexOf(lastOperator);
    const lastNumberSet = strToDisplay.slice(lastOperatorIndexPoint);
    if (lastNumberSet.includes(".")) {
      return;
    }

    if (!lastOperator && strToDisplay.includes(".")) {
      return;
    }
  }

  strToDisplay += value;
  display(strToDisplay);
};

allButtonsClicked.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.scale = "0.5";
  });
  btn.addEventListener("click", () => {
    btn.style.scale = "1";
    const value = btn.innerText;
    buttonAction(value);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.0";
};

const getTotalCalculations = () => {
  const extraValue = randomValue();
  if (extraValue) {
    displayElm.classList.add("prank");
    audio.play();
  }
  const total = eval(strToDisplay) + extraValue;
  strToDisplay = total.toString();

  display(strToDisplay);
};

const randomValue = () => {
  const num = Math.round(Math.random() * 10);
  return num < 5 ? num : 0;
};

document.addEventListener("keypress", (e) => {
  console.log(e);
  const keyPress = e.key;
  if (e.code.includes("key")) {
    return;
  }
  buttonAction(keyPress);
});
