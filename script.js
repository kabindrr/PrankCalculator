// const clickAllButtons = document.querySelectorAll(".btn");
// console.log(clickAllButtons);

// let strToDisplay = "";
// const displayElm = document.querySelector(".display");

// const buttonAction = (value) => {
//   console.log(value);
//   if (value === "AC") {
//     strToDisplay = "";
//     return display(strToDisplay);
//   }
//   if (value === "=") {
//     return displayTotal();
//   }

//   strToDisplay += value;
//   display(strToDisplay);
// };

// clickAllButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const value = btn.innerText;
//     buttonAction(value);
//   });
// });

// const display = (str) => {
//   displayElm.innerText = str || "0.0";
// };

// const displayTotal = () => {
//   const total = eval(strToDisplay);
//   display(total);
// };

const getButtonsClicked = document.querySelectorAll(".btn");

let strToDisplay = "";
const displayElm = document.querySelector(".display");

const buttonAction = (main) => {
  if (main === "AC") {
    strToDisplay = "";
    return display(strToDisplay);
  }

  if (main === "=") {
    return getTotal();
  }

  strToDisplay += main;
  display(strToDisplay);
};

getButtonsClicked.forEach((btn) => {
  btn.addEventListener("click", () => {
    const main = btn.innerText;
    buttonAction(main);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.0";
};

const getTotal = () => {
  const total = eval(strToDisplay);
  display(total);
};
