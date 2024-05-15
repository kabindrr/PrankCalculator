// const getAllButtons = document.querySelectorAll(".btn");
// console.log(getAllButtons);

// let strToDisplay = "";
// const displayElm = document.querySelector(".display");

// const buttonAction = (value) => {
//   console.log(value);
//   strToDisplay += value;
//   display(strToDisplay);
// };

// getAllButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const value = btn.innerText;
//     buttonAction(value);
//   });
// });

// const display = (str) => {
//   displayElm.innerText = str;
// };

// const getAllButtonClicked = document.querySelectorAll(".btn");
// console.log(getAllButtonClicked);

// let strToDisplay = "100";
// const displayElm = document.querySelector(".display");

// const buttonAction = (value) => {
//   console.log(value);
//   strToDisplay += value;
//   display(strToDisplay);
// };

// getAllButtonClicked.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const value = btn.innerText;
//     buttonAction(value);
//   });
// });

// const display = (str) => {
//   displayElm.innerText = str;
// };

const getAllButtonsClicked = document.querySelectorAll(".btn");
console.log(getAllButtonsClicked);

let strToDisplay = "";
const displayElm = document.querySelector(".display");
console.log(displayElm);

const buttonAction = (value) => {
  strToDisplay += value;

  display(strToDisplay);
};

getAllButtonsClicked.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    buttonAction(value);
  });
});
const display = (str) => {
  displayElm.innerText = str;
};
