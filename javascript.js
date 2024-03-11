/* mind game assignment */

/* 
- music awl ma yktb asmo [done]
- al timer bta3 al game  [done]
- al local storgar bta3t al nas aly htl3b  [done]
- y5tar hwa 3add al blocks aly 3ayz ytl3ha [done]
*/

// let allBlocks = document.querySelectorAll(`[class="game-block"]`);

// let allMemoryGameBlocks = Array.from(allBlocks);

// function startGameFuncion() {
//   let startGame = document.querySelector(`[class="control-buttons"]`);
//   startGame.addEventListener("click", function () {
//     startGame.remove();

//     // fill the name with the prompt message
//     let promptMsg = prompt("what's your name ?");
//     let myName = document.querySelector(`[class="name"]`).querySelector("span");
//     if (promptMsg === null || promptMsg === "") {
//       myName.textContent = "UNKOWN";
//     } else {
//       promptMsg = promptMsg.toLocaleUpperCase();
//       myName.textContent = `${promptMsg}`;
//     }

//     // hna a7na hnwary al nas al blocks kolha
//     allMemoryGameBlocks.forEach((ele) => {
//       ele.classList.add("is-flipped");
//     });

//     // setup al music aly htb2a m3aya tol al game
//     let gameSound = document.getElementById("gameSound");
//     gameSound.play();
//     gameSound.volume = 0.35;

//     // hna b3d al second w nos kdh hyremove kol aly a7na bynah
//     setTimeout(() => {
//       allMemoryGameBlocks.forEach((ele) => {
//         ele.classList.remove("is-flipped");
//         ele.classList.remove("has-match");
//       });
//     }, 1500);

//     // hna ana bdy al timer aly time aly ana 3ayzo
//     document.getElementById("timer").textContent = "01:00";
//     startTimer();
//   });
// }

// startGameFuncion();

// // timer setup function
// function startTimer() {
//   let x = setInterval(theIntervalFun, 1000);
//   window.localStorage.setItem("clearInterval", x);
//   function theIntervalFun() {
//     var presentTime = document.getElementById("timer").textContent;
//     var timeArray = presentTime.split(":");
//     var minutes = timeArray[0];
//     var seconds = checkSecond(timeArray[1] - 1);
//     if (seconds == 59) {
//       minutes = minutes - 1;
//     }
//     if (minutes < 0) {
//       allMemoryGameBlocks.forEach((ele) => {
//         ele.classList.remove("is-flipped");
//         ele.classList.remove("has-match");
//       });
//       replay("The Timer Is Done ... Losssseeeerrrrr ... You Can Try Again !!!");
//       return;
//     }

//     document.getElementById("timer").textContent = `${minutes}:${seconds}`;
//   }
// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {
//     sec = "0" + sec;
//   } // add zero in front of numbers < 10
//   if (sec < 0) {
//     sec = "59";
//   }
//   return sec;
// }

// /* hna ana 3ayz eh 3ayz array fyha al index bta3 kol div fa ana asln lw 3mlt Array(ay length ana 3ayzo)
// hygblk asln array fadya bnfs al length aly anta mdholo lma btzwd b2a 3lyh klmt keys by7otlk al index dh gwa al
// array kdh
//  */
// let orderRange = [...Array(allMemoryGameBlocks.length).keys()];
// /* another methor */
// // let orderRange = Array.from(Array(allMemoryGameBlocks.length).keys());

// // console.log(orderRange);

// // explain lly fo2 3la tol
// /*
// let myArr = ["totos" , "nasr" , "kamel"];
// let iterator = myArr.keys();
// for (const k of iterator){
//   console.log(k);
// }
// //output
// 0
// 1
// 2
// console.log(...iterator);
// //output => 0 1 2
// console.log(Array(30));
// */

// // shuffle the order range
// function changeOrder() {
//   for (let i = 0; i < orderRange.length; i++) {
//     let random = Math.floor(Math.random() * orderRange.length);
//     // let temp = orderRange[i];
//     // orderRange[i] = orderRange[random];
//     // orderRange[random] = temp;
//     /* another solution for shuffle  */
//     [orderRange[i], orderRange[random]] = [orderRange[random], orderRange[i]];
//   }
// }
// // excute the function
// changeOrder();

// // order the boxes
// allMemoryGameBlocks.forEach((ele, index) => {
//   ele.style.order = orderRange[index];
//   ele.addEventListener("click", function () {
//     ele.classList.add("is-flipped");
//     checkTheSamePhoto();
//   });
// });

// /* another solution*/
// // for (let i = 0; i < allMemoryGameBlocks.length; i++) {
// //   allMemoryGameBlocks[i].style.order = orderRange[i];
// //   allMemoryGameBlocks[i].addEventListener("click", function () {
// //     allMemoryGameBlocks[i].classList.add("is-flipped");
// //     // checkTheSamePhoto();
// //   });
// // }

// function stopClicking() {
//   let memoryGameBlockMainDiv = document.querySelector(
//     `[class="memory-game-blocks"]`
//   );
//   memoryGameBlockMainDiv.classList.add("no-clicking");
//   setTimeout(() => {
//     memoryGameBlockMainDiv.classList.remove("no-clicking");
//   }, 1000);
// }

// let counter = 0;
// function checkTheSamePhoto() {
//   let theFlipedBlocks = allMemoryGameBlocks.filter(function (ele) {
//     return ele.classList.contains("is-flipped");
//   });

//   if (theFlipedBlocks.length === 2) {
//     stopClicking();

//     if (
//       theFlipedBlocks[0].getAttribute("data-technology") ===
//       theFlipedBlocks[1].getAttribute("data-technology")
//     ) {
//       theFlipedBlocks[0].classList.remove("is-flipped");
//       theFlipedBlocks[1].classList.remove("is-flipped");

//       theFlipedBlocks[0].classList.add("has-match");
//       theFlipedBlocks[1].classList.add("has-match");

//       //success audio
//       document.getElementById("success").play();
//     } else {
//       let numberOfLosses = document
//         .querySelector(`[class="tries"]`)
//         .querySelector("span");
//       counter++;
//       numberOfLosses.textContent = `${counter}`;
//       //fail audo
//       document.getElementById("fail").play();
//       setTimeout(() => {
//         theFlipedBlocks[0].classList.remove("is-flipped");
//         theFlipedBlocks[1].classList.remove("is-flipped");
//       }, 1000);
//     }
//   }
//   let endGame = allMemoryGameBlocks.filter((ele) => {
//     return !ele.classList.contains("has-match");
//   });

//   if (endGame.length === 0) {
//     replay("congratulations !!!");
//     clearInterval(window.localStorage.getItem("clearInterval"));
//   }
// }

// // the message that will appear when the user lose or win the game
// function replay(text) {
//   let startGameDiv = document.createElement("div");
//   startGameDiv.classList.add("control-buttons");
//   let spanStartGame = document.createElement("span");
//   spanStartGame.textContent = "Start Game";
//   let messageToUser = document.createElement("h1");
//   messageToUser.textContent = text;
//   if (text === "congratulations !!!") {
//     messageToUser.style.backgroundColor = "orange";
//   }
//   startGameDiv.append(spanStartGame, messageToUser);
//   document.body.append(startGameDiv);
//   let gameSound = document.getElementById("gameSound");
//   gameSound.pause();
//   startGameFuncion();
// }

/* another solution for memory game */

let theDivThatContainsTheProject = document.querySelector(`[class="all"]`);
const lastContainer = document.querySelector(".Last-container");

function startGameFuncion() {
  // select the start game button
  let startGame = document
    .querySelector(`[class="control-buttons"]`)
    .querySelector("span");

  startGame.addEventListener("click", () => {
    // select the number of blocks from input blocks
    let numOfBlocks = document.querySelector(`[class="nums"]`).valueAsNumber;

    // select the minute for the timer
    let NumberOfMin = checkForZero(
      document.getElementById("min").valueAsNumber
    );

    // select the seconds for the timer
    let NumberOfSec = checkForZero(
      document.getElementById("sec").valueAsNumber
    );

    // remove the whole div
    document.querySelector(`[class="control-buttons"]`).style.display = "none";
    document.querySelector(`[class="memory-game-blocks"]`).remove();

    // fill the name with the prompt message
    let promptMsg = prompt("what's your name ?");
    let myName = document.querySelector(`[class="name"]`).querySelector("span");
    if (promptMsg === null || promptMsg === "") {
      myName.textContent = "UNKOWN";
    } else {
      promptMsg = promptMsg.toLocaleUpperCase();
      myName.textContent = `${promptMsg}`;
    }

    // get the data from memoryGame.json object
    fetch("./memoryGame.json")
      .then((result) => {
        let blocks = result.json();
        return blocks;
      })
      .then((result) => {
        let allBlocks = document.createElement("article");
        allBlocks.classList.add("memory-game-blocks");
        for (let i = 0; i < numOfBlocks; i++) {
          let gameBlock = document.createElement("div");
          gameBlock.classList.add("game-block");
          gameBlock.setAttribute("data-technology", result[i].name);
          let faceFront = document.createElement("div");
          faceFront.classList.add("face");
          faceFront.classList.add("front");
          let faceBack = document.createElement("div");
          faceBack.classList.add("face");
          faceBack.classList.add("back");
          let img = document.createElement("img");
          img.decoding = "async";
          img.src = `${result[i].src}`;
          faceBack.append(img);
          gameBlock.append(faceBack, faceFront);
          allBlocks.append(gameBlock, gameBlock.cloneNode(true));
        }
        lastContainer.parentNode.insertBefore(allBlocks, lastContainer);
      })
      .then(() => {
        let allMemoryGameBlocks =
          document.querySelectorAll(`[class="game-block"]`);

        // hna a7na hnwary al nas al blocks kolha
        allMemoryGameBlocks.forEach((ele) => {
          ele.classList.add("is-flipped");
        });
        return allMemoryGameBlocks;
      })
      .then((result) => {
        // hna b3d al second w nos kdh hyremove kol aly a7na bynah
        setTimeout(() => {
          result.forEach((ele) => {
            ele.classList.remove("is-flipped");
            ele.classList.remove("has-match");
          });
        }, 1500);
        return result;
      })
      .then((result) => {
        let orderRange = [...Array(result.length).keys()];

        // excute the function
        changeOrder(orderRange);

        // order the boxes
        result.forEach((ele, index) => {
          ele.style.order = orderRange[index];
          ele.addEventListener("click", function () {
            ele.classList.add("is-flipped");
            checkTheSamePhoto(result);
          });
        });
      });
    let gameSound = document.getElementById("gameSound");
    gameSound.play();
    gameSound.volume = 0.35;

    let numberOfLosses = document
      .querySelector(`[class="tries"]`)
      .querySelector("span");
    numberOfLosses.textContent = 0;

    let theLastTries = document
      .querySelector(`[class="Last Score"]`)
      .querySelector("span");
    let thePrivName = document
      .querySelector(`[class="recivedName"]`)
      .querySelector("span");

    thePrivName.textContent = promptMsg.toUpperCase();
    if (window.localStorage.getItem(promptMsg)) {
      theLastTries.textContent = window.localStorage.getItem(promptMsg);
    } else {
      theLastTries.textContent = 0;
    }

    // hna ana bdy al timer aly time aly ana 3ayzo
    document.getElementById(
      "timer"
    ).textContent = `${NumberOfMin}:${NumberOfSec}`;
    startTimer();
  });
}

startGameFuncion();

// shuffle the order range
function changeOrder(orderRange) {
  for (let i = 0; i < orderRange.length; i++) {
    let random = Math.floor(Math.random() * orderRange.length);

    [orderRange[i], orderRange[random]] = [orderRange[random], orderRange[i]];
  }
}

// timer setup function
function startTimer() {
  let x = setInterval(theIntervalFun, 1000);
  window.localStorage.setItem("clearInterval", x);
  function theIntervalFun() {
    var presentTime = document.getElementById("timer").textContent;
    var timeArray = presentTime.split(":");
    var minutes = timeArray[0];
    var seconds = checkSecond(timeArray[1] - 1);
    if (seconds == 59) {
      minutes = minutes - 1;
    }
    if (minutes < 0) {
      replay("The Timer Is Done ... Losssseeeerrrrr ... You Can Try Again !!!");
      console.log("5lst!!");
      return;
    }

    document.getElementById("timer").textContent = `${minutes}:${seconds}`;
  }
}

function checkForZero(x) {
  if (x < 10 && x >= 0) {
    x = "0" + x;
  }
  return x;
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

function stopClicking() {
  let memoryGameBlockMainDiv = document.querySelector(
    `[class="memory-game-blocks"]`
  );
  memoryGameBlockMainDiv.classList.add("no-clicking");
  setTimeout(() => {
    memoryGameBlockMainDiv.classList.remove("no-clicking");
  }, 1000);
}

function checkTheSamePhoto(allMemoryGameBlocks) {
  allMemoryGameBlocks = Array.from(allMemoryGameBlocks);
  let theFlipedBlocks = allMemoryGameBlocks.filter((ele) => {
    return ele.classList.contains("is-flipped");
  });

  if (theFlipedBlocks.length === 2) {
    stopClicking();

    if (
      theFlipedBlocks[0].getAttribute("data-technology") ===
      theFlipedBlocks[1].getAttribute("data-technology")
    ) {
      theFlipedBlocks[0].classList.remove("is-flipped");
      theFlipedBlocks[1].classList.remove("is-flipped");

      theFlipedBlocks[0].classList.add("has-match");
      theFlipedBlocks[1].classList.add("has-match");

      //success audio
      document.getElementById("success").play();
    } else {
      let numberOfLosses = document
        .querySelector(`[class="tries"]`)
        .querySelector("span");
      let numberOfTries = Number(numberOfLosses.textContent);
      numberOfLosses.textContent = ++numberOfTries;
      //fail audio
      document.getElementById("fail").play();
      setTimeout(() => {
        theFlipedBlocks[0].classList.remove("is-flipped");
        theFlipedBlocks[1].classList.remove("is-flipped");
      }, 1000);
    }
  }
  let endGame = allMemoryGameBlocks.filter((ele) => {
    return !ele.classList.contains("has-match");
  });

  if (endGame.length === 0) {
    replay("congratulations !!!");
    clearInterval(window.localStorage.getItem("clearInterval"));
  }
}

// the message that will appear when the user lose or win the game
function replay(text) {
  clearInterval(window.localStorage.getItem("clearInterval"));

  if (
    window.localStorage.getItem(
      document.querySelector(`[class="name"]`).querySelector("span").textContent
    )
  ) {
    let tries =
      Number(
        window.localStorage.getItem(
          document.querySelector(`[class="name"]`).querySelector("span")
            .textContent
        )
      ) +
      Number(
        document.querySelector(`[class="tries"]`).querySelector("span")
          .textContent
      );
    window.localStorage.setItem(
      document.querySelector(`[class="name"]`).querySelector("span")
        .textContent,
      tries
    );
  } else {
    window.localStorage.setItem(
      document.querySelector(`[class="name"]`).querySelector("span")
        .textContent,
      document.querySelector(`[class="tries"]`).querySelector("span")
        .textContent
    );
  }

  let messageToUser = document.querySelector(`[class="score-msg"]`);
  messageToUser.style.display = "block";
  messageToUser.textContent = text;
  if (text === "congratulations !!!") {
    messageToUser.style.backgroundColor = "orange";
  }
  document.querySelector(`[class="time min"]`).value = "0";
  document.querySelector(`[class="time sec"]`).value = "1";
  document.querySelector(`[class="nums"]`).value = "5";
  document.querySelector(`[class="control-buttons"]`).style.display = "block";

  // the main div
  // let startGameDiv = document.createElement("div");
  // startGameDiv.classList.add("control-buttons");

  // // the text messamge
  // let messageToUser = document.createElement("h1");
  // messageToUser.textContent = text;
  // if (text === "congratulations !!!") {
  //   messageToUser.style.backgroundColor = "orange";
  // }

  // //minutes and seconds input field
  // let labelForMin = document.createElement("label");
  // labelForMin.textContent = "min: ";
  // labelForMin.classList.add("labelMin");

  // let inputForMin = document.createElement("input");
  // inputForMin.type = "number";
  // inputForMin.value = "0";
  // inputForMin.min = "0";
  // inputForMin.id = "min";
  // inputForMin.classList.add("time");
  // inputForMin.classList.add("min");

  // let labelForSec = document.createElement("label");
  // labelForSec.textContent = "sec: ";
  // labelForSec.classList.add("labelSec");

  // let inputForSec = document.createElement("input");
  // inputForSec.type = "number";
  // inputForSec.value = "1";
  // inputForSec.min = "0";
  // inputForSec.max = "59";
  // inputForSec.id = "sec";
  // inputForSec.classList.add("time");
  // inputForSec.classList.add("sec");

  // // label field for the input
  // let labelNumOfBlocks = document.createElement("label");
  // labelNumOfBlocks.textContent = "number of blocks: ";

  // // input field
  // let inputNumberOfBlocks = document.createElement("input");
  // inputNumberOfBlocks.type = "number";
  // inputNumberOfBlocks.classList.add("nums");
  // inputNumberOfBlocks.min = "5";
  // inputNumberOfBlocks.max = "20";
  // inputNumberOfBlocks.placeholder = "number between 5 - 20";

  // // start game button
  // let spanStartGame = document.createElement("span");
  // spanStartGame.textContent = "Start Game";

  // // add the elements to the main div and append it to the body
  // startGameDiv.append(
  //   spanStartGame,
  //   messageToUser,
  //   labelNumOfBlocks,
  //   inputNumberOfBlocks,
  //   labelForSec,
  //   inputForSec,
  //   labelForMin,
  //   inputForMin
  // );
  // document.body.append(startGameDiv);

  // stop playing the music
  let gameSound = document.getElementById("gameSound");
  gameSound.pause();

  // repeat the game
  startGameFuncion();
}
