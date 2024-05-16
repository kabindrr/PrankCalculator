// // const clickAllButtons = document.querySelectorAll(".btn");
// // console.log(clickAllButtons);

// // let strToDisplay = "";
// // const displayElm = document.querySelector(".display");

// // const buttonAction = (value) => {
// //   console.log(value);
// //   if (value === "AC") {
// //     strToDisplay = "";
// //     return display(strToDisplay);
// //   }
// //   if (value === "=") {
// //     return displayTotal();
// //   }

// //   strToDisplay += value;
// //   display(strToDisplay);
// // };

// // clickAllButtons.forEach((btn) => {
// //   btn.addEventListener("click", () => {
// //     const value = btn.innerText;
// //     buttonAction(value);
// //   });
// // });

// // const display = (str) => {
// //   displayElm.innerText = str || "0.0";
// // };

// // const displayTotal = () => {
// //   const total = eval(strToDisplay);
// //   display(total);
// // };

// const getButtonClicked = document.querySelectorAll(".btn");
// console.log(getButtonClicked);

// let strToDisplay = "";
// const displayElm = document.querySelector(".display");
// console.log(displayElm);

// const operators = ["+", "-", "/", "*", "%"];

// const buttonAction = (value) => {
//   if (value === "AC") {
//     strToDisplay = "";
//     return display(strToDisplay);
//   }
//   if (value === "C") {
//     strToDisplay = strToDisplay.slice(0, -1);
//     return display(strToDisplay);
//   }

//   if (value === "=") {
//     const lastCharacter = strToDisplay[strToDisplay.length - 1];
//     if (operators.includes(lastCharacter)) {
//       strToDisplay = strToDisplay.slice(0, -1);
//     }
//     return getTotal();
//   }

//   strToDisplay += value;
//   display(strToDisplay);
// };

// getButtonClicked.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const value = btn.innerText;
//     buttonAction(value);
//   });
// });
// const display = (str) => {
//   displayElm.innerText = str || "0.0";
// };
// const getTotal = () => {
//   const total = eval(strToDisplay);
//   strToDisplay = total.toString();
//   display(strToDisplay);
// };

// const getAllButtonsClicked = document.querySelectorAll(".btn");

// let strToDisplay = "";
// const displayElm = document.querySelector(".display");

// const operators = ["+", "-", "*", "/", "%"];

// const buttonAction = (main) => {
//   if (main === "AC") {
//     strToDisplay = "";
//     return display(strToDisplay);
//   }

//   if (main === "C") {
//     strToDisplay = strToDisplay.slice(0, -1);
//     return display(strToDisplay);
//   }

//   if (main === "=") {
//     const lastChar = strToDisplay[strToDisplay.length - 1];
//     if (operators.includes(lastChar)) {
//       strToDisplay = strToDisplay.slice(0, -1);
//     }
//     return getCalculations();
//   }

//   // if (operators.includes(main)) {
//   //   const lastChar = strToDisplay[strToDisplay.length - 1];

//   //   if (operators.includes(lastChar)) {
//   //     strToDisplay = strToDisplay.slice(0, -1);
//   //   }
//   // }

//   if (operators.includes(main)) {
//     const lastChar = strToDisplay[strToDisplay.length - 1];
//     if (operators.includes(lastChar)) {
//       strToDisplay = strToDisplay.slice(0, -1);
//     }
//   }

//   strToDisplay += main;
//   display(strToDisplay);
// };

// getAllButtonsClicked.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const main = btn.innerText;
//     buttonAction(main);
//   });
// });

// const display = (str) => {
//   displayElm.innerText = str || "0.0";
// };

// const getCalculations = () => {
//   const total = eval(strToDisplay);
//   strToDisplay = total.toString();
//   display(strToDisplay);
// };

const getAllButtonsClicked = document.querySelectorAll(".btn");

let strToDisplay = "";
const displayElm = document.querySelector(".display");

const operators = ["+", "-", "/", "*", "%"];

const buttonAction = (value) => {
  if (value === "AC") {
    strToDisplay = "";
    return display(strToDisplay);
  }

  if (value === "C") {
    strToDisplay = strToDisplay.slice(0, -1);
    return display(strToDisplay);
  }

  if (value === "=") {
    const lastCharacter = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lastCharacter)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
    return getCalculations();
  }

  if (operators.includes(value)) {
    const lastChar = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lastChar)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
  }

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
  displayElm.innerText = str || "0.0";
};

const getCalculations = () => {
  const total = eval(strToDisplay);
  strToDisplay = total.toString();
  display(strToDisplay);
};
