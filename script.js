// Constants & Query Selectors
const easyLevelLink = document.querySelector("#easy-level-link");
const mediumLevelLink = document.querySelector("#medium-level-link");
const hardLevelLink = document.querySelector("#hard-level-link");
const mainContainer = document.querySelector(".main");
const body = document.querySelector(".body");
const pictureArrEasy = ["./images/easy/candy-floss.jpeg", "./images/easy/candy-floss.jpeg", "./images/easy/custard-cream.jpeg", "./images/easy/custard-cream.jpeg","./images/easy/doughnut.webp", "./images/easy/doughnut.webp", "./images/easy/jelly.jpeg", "./images/easy/jelly.jpeg", "./images/easy/macaron.jpeg", "./images/easy/macaron.jpeg", "./images/easy/pancakes.jpeg", "./images/easy/pancakes.jpeg"];
// add const for med and hard Arr
let cardPack = [];
let userChoices = [];
let matchedCards = [];

// reusable functions

const renderGame = () => {

    body.classList.remove("body");
    mainContainer.classList.remove("main");
    mainContainer.classList.add("game");
    mainContainer.innerHTML = 
    `<h1 class="game__heading">Pairs</h1>
    <p class="game__subheading game__subheading">Level One</p>
    <section class="game__container game__container--easy">
       
    </section>
    <p class="game__status">Time: <br> Moves: </p>
    `
    // <div class="game__container__card game__container__card--easy game__container__card--1"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--2"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--3"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--4"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--5"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--6"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--7"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--8"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--9"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--10"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--11"></div>
    // <div class="game__container__card game__container__card--easy game__container__card--12"></div>
}

const dealEasyCards = () => {
    const gameContainer = document.querySelector(".game__container");
    gameContainer.classList.add("game__container--easy");
    cardPack = pictureArrEasy;
    cardPack.forEach((card) => {
        gameContainer.innerHTML += `<div class="game__container__card game__container__card--easy game__container__card--12"></div>`;
    })
}
const dealMediumCards = () => {
    const gameContainer = document.querySelector(".game__container");
    gameContainer.classList.add("game__container--medium")
    cardPack = pictureArrMedium;
    cardPack.forEach((card) => {
        gameContainer.innerHTML += `<div class="game__container__card game__container__card--medium"></div>`;
    })
}
const dealHardCards = () => {
    const gameContainer = document.querySelector(".game__container");
    gameContainer.classList.add("game__container--hard")
    cardPack = pictureArrHard;
    cardPack.forEach((card) => {
        gameContainer.innerHTML += `<div class="game__container__card game__container__card--hard"></div>`;
    })
}

const renderEasyLevel = () => {
    renderGame();
    body.classList.add("body-game--easy");
    dealEasyCards();
}



// Easy Level
// const renderEasyLevel = () => {
//     body.classList.add("body-game--easy");
//     body.classList.remove("body");
//     mainContainer.classList.remove("main");
//     mainContainer.classList.add("game");
// mainContainer.innerHTML = 
// `<h1 class="game__heading">Pairs</h1>
// <p class="game__subheading game__subheading">Level One</p>
// <section class="game__container game__container--easy">
//     <div class="game__container__card game__container__card--easy game__container__card--1"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--2"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--3"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--4"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--5"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--6"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--7"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--8"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--9"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--10"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--11"></div>
//     <div class="game__container__card game__container__card--easy game__container__card--12"></div>
// </section>
// <p class="game__status">Time: <br> Moves: </p>
// `
// let easyCardsArr = document.querySelectorAll(".game__container__card");

// easyCardsArr.forEach((card) => {
//     const addUserChoice = () => {
//         if (userChoices.length < 2) {
//             userChoices.push(imgSrc);
//         }  
//     }
//     const checkForMatch = () => {
//         if (userChoices[0] == userChoices[1]) {
//             return true
//         } else {
//             return false;
//         }
//     }
//     let randomNumber = Math.floor(Math.random()*(pictureArrEasy.length));
//     let imgSrc = pictureArrEasy[randomNumber];
//     pictureArrEasy.splice(randomNumber,1);

//     card.addEventListener("click", () => {
//         // if this is the first choice, flip the card and add to choices array
//         if (userChoices.length === 0 && matchedCards.includes(imgSrc) === false) {
//             card.style.backgroundImage = `url("${imgSrc}")`
//             addUserChoice();
//             console.log(userChoices)
//         // if it's the second choice, flip the card, add to the choices array and check whether the two card match
//         } else if (userChoices.length === 1 && matchedCards.includes(imgSrc) === false) {
//             card.style.backgroundImage = `url("${imgSrc}")`
//             addUserChoice();
//             console.log(userChoices)
//             if (checkForMatch() === true) {
//                 matchedCards.push(userChoices)
//                 console.log("matchedCards")
//             } else if (checkForMatch() === false){
//                 card.style.backgroundImage = `url(./images/card-backgrounds/sweets-background.jpg)`
//                 userChoices = [];
//             }
//         } 
//         // else if (userChoices.length === 2 && matchedCards.includes(imgSrc) === false) {
//         //     userChoices = userChoices[2];
//         //     // need to flip both cards back to the background image if not a match, and empty the user choice array
//         //     userChoices.style.backgroundImage = `url(./images/card-backgrounds/sweets-background.jpg)`
//         //     userChoices[1].style.backgroundImage = `url(./images/card-backgrounds/sweets-background.jpg)`
//         // }
        
//     })
// })
// }


// Medium Level
const renderMediumLevel = () => {
    body.classList.add("body-game--medium");
    body.classList.remove("body");
    mainContainer.classList.remove("main");
    mainContainer.classList.add("game");
mainContainer.innerHTML = 
`<h1 class="game__heading">Pairs</h1>
<p class="game__subheading game__subheading">Level Two</p>
<section class="game__container game__container--medium">
    <div class="game__container__card game__container__card--medium game__container__card--1"></div>
    <div class="game__container__card game__container__card--medium game__container__card--2"></div>
    <div class="game__container__card game__container__card--medium game__container__card--3"></div>
    <div class="game__container__card game__container__card--medium game__container__card--4"></div>
    <div class="game__container__card game__container__card--medium game__container__card--5"></div>
    <div class="game__container__card game__container__card--medium game__container__card--6"></div>
    <div class="game__container__card game__container__card--medium game__container__card--7"></div>
    <div class="game__container__card game__container__card--medium game__container__card--8"></div>
    <div class="game__container__card game__container__card--medium game__container__card--9"></div>
    <div class="game__container__card game__container__card--medium game__container__card--10"></div>
    <div class="game__container__card game__container__card--medium game__container__card--11"></div>
    <div class="game__container__card game__container__card--medium game__container__card--12"></div>
    <div class="game__container__card game__container__card--medium game__container__card--12"></div>
    <div class="game__container__card game__container__card--medium game__container__card--14"></div>
    <div class="game__container__card game__container__card--medium game__container__card--15"></div>
    <div class="game__container__card game__container__card--medium game__container__card--16"></div>
    <div class="game__container__card game__container__card--medium game__container__card--17"></div>
    <div class="game__container__card game__container__card--medium game__container__card--18"></div>
    <div class="game__container__card game__container__card--medium game__container__card--19"></div>
    <div class="game__container__card game__container__card--medium game__container__card--20"></div>
    <div class="game__container__card game__container__card--medium game__container__card--21"></div>
    <div class="game__container__card game__container__card--medium game__container__card--22"></div>
    <div class="game__container__card game__container__card--medium game__container__card--23"></div>
    <div class="game__container__card game__container__card--medium game__container__card--24"></div>
</section>
<p class="game__status">Time: <br> Moves: </p>
`
}

// Hard Level
const renderHardLevel = () => {
    body.classList.add("body-game--hard");
    body.classList.remove("body");
    mainContainer.classList.remove("main");
    mainContainer.classList.add("game");
mainContainer.innerHTML = 
`<h1 class="game__heading">Pairs</h1>
<p class="game__subheading game__subheading">Level Three</p>
<section class="game__container game__container--hard">
    <div class="game__container__card game__container__card--hard game__container__card--1"></div>
    <div class="game__container__card game__container__card--hard game__container__card--2"></div>
    <div class="game__container__card game__container__card--hard game__container__card--3"></div>
    <div class="game__container__card game__container__card--hard game__container__card--4"></div>
    <div class="game__container__card game__container__card--hard game__container__card--5"></div>
    <div class="game__container__card game__container__card--hard game__container__card--6"></div>
    <div class="game__container__card game__container__card--hard game__container__card--7"></div>
    <div class="game__container__card game__container__card--hard game__container__card--8"></div>
    <div class="game__container__card game__container__card--hard game__container__card--9"></div>
    <div class="game__container__card game__container__card--hard game__container__card--10"></div>
    <div class="game__container__card game__container__card--hard game__container__card--11"></div>
    <div class="game__container__card game__container__card--hard game__container__card--12"></div>
    <div class="game__container__card game__container__card--hard game__container__card--13"></div>
    <div class="game__container__card game__container__card--hard game__container__card--14"></div>
    <div class="game__container__card game__container__card--hard game__container__card--15"></div>
    <div class="game__container__card game__container__card--hard game__container__card--16"></div>
    <div class="game__container__card game__container__card--hard game__container__card--17"></div>
    <div class="game__container__card game__container__card--hard game__container__card--18"></div>
    <div class="game__container__card game__container__card--hard game__container__card--19"></div>
    <div class="game__container__card game__container__card--hard game__container__card--20"></div>
    <div class="game__container__card game__container__card--hard game__container__card--21"></div>
    <div class="game__container__card game__container__card--hard game__container__card--22"></div>
    <div class="game__container__card game__container__card--hard game__container__card--23"></div>
    <div class="game__container__card game__container__card--hard game__container__card--24"></div>
    <div class="game__container__card game__container__card--hard game__container__card--25"></div>
    <div class="game__container__card game__container__card--hard game__container__card--26"></div>
    <div class="game__container__card game__container__card--hard game__container__card--27"></div>
    <div class="game__container__card game__container__card--hard game__container__card--28"></div>
</section>
<p class="game__status">Time: <br> Moves: </p>
`
}
// Event listeners - select level
easyLevelLink.addEventListener("click", renderEasyLevel);

mediumLevelLink.addEventListener("click", renderMediumLevel);

hardLevelLink.addEventListener("click", renderHardLevel);