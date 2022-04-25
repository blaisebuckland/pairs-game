// Variables
const levelOneLink = document.querySelector("#level-one-link");
const levelTwoLink = document.querySelector("#level-two-link");
const levelThreeLink = document.querySelector("#level-three-link");
const mainContainer = document.querySelector(".main");
let body = document.querySelector(".body");
let pictureArrLevelOne = ["images/easy/candy-floss.jpeg", "images/easy/candy-floss.jpeg", "images/easy/custard-cream.jpeg", "images/easy/custard-cream.jpeg","images/easy/doughnut.webp", "images/easy/doughnut.webp", "images/easy/jelly.jpeg", "images/easy/jelly.jpeg", "images/easy/macaron.jpeg", "images/easy/macaron.jpeg", "images/easy/pancakes.jpeg", "images/easy/pancakes.jpeg"];
let pictureArrLevelTwo = ["images/medium/balinese.jpeg", "images/medium/balinese.jpeg", "images/medium/ballet.jpeg", "images/medium/ballet.jpeg", "images/medium/emmy.jpeg", "images/medium/emmy.jpeg", "images/medium/ginger.jpeg", "images/medium/ginger.jpeg", "images/medium/glasses-stars-cat.jpeg", "images/medium/glasses-stars-cat.jpeg", "images/medium/hiss.jpeg", "images/medium/hiss.jpeg","images/medium/liesl.jpeg", "images/medium/liesl.jpeg", "images/medium/mainecoon.jpeg", "images/medium/mainecoon.jpeg", "images/medium/moggy.jpeg", "images/medium/moggy.jpeg", "images/medium/white-ragdoll.jpeg", "images/medium/white-ragdoll.jpeg", "images/medium/sleeping-kitten.jpeg", "images/medium/sleeping-kitten.jpeg", "images/medium/tortoiseshell.jpeg", "images/medium/tortoiseshell.jpeg"]
let pictureArrLevelThree = ["images/hard/a-holly-dolly-christmas.jpeg", "images/hard/a-holly-dolly-christmas.jpeg", "images/hard/all-i-can-do.jpeg", "images/hard/all-i-can-do.jpeg", "images/hard/backwoods-barbie.jpeg", "images/hard/backwoods-barbie.jpeg", "images/hard/blue-smoke.jpeg", "images/hard/blue-smoke.jpeg", "images/hard/dolly.png", "images/hard/dolly.png", "images/hard/great-balls-of-fire.jpeg", "images/hard/great-balls-of-fire.jpeg",
"images/hard/heartbreak-express.jpeg", "images/hard/heartbreak-express.jpeg", "images/hard/hello-im-dolly.jpeg", "images/hard/hello-im-dolly.jpeg", "images/hard/here-you-come-again.jpeg", "images/hard/here-you-come-again.jpeg", "images/hard/honky-tonk-angels.jpeg", "images/hard/honky-tonk-angels.jpeg", "images/hard/hungry-again.jpeg", "images/hard/hungry-again.jpeg", "images/hard/i-believe-in-you.jpeg", "images/hard/i-believe-in-you.jpeg", "images/hard/love-is-like-a-butterfly.jpeg", "images/hard/love-is-like-a-butterfly.jpeg", "images/hard/rainbow.jpeg", "images/hard/rainbow.jpeg"]
let cardPack = [];
let userChoices = [];
let matchedCards = [];
let imgSrc = "";
let placeholderImg = "";
let numberOfMovesTaken = 0;

// Functions
const resetForNextGame = () => {
    userChoices = [];
    matchedCards = [];
    numberOfMovesTaken = 0;
    pictureArrLevelOne = ["images/easy/candy-floss.jpeg", "images/easy/candy-floss.jpeg", "images/easy/custard-cream.jpeg", "images/easy/custard-cream.jpeg","images/easy/doughnut.webp", "images/easy/doughnut.webp", "images/easy/jelly.jpeg", "images/easy/jelly.jpeg", "images/easy/macaron.jpeg", "images/easy/macaron.jpeg", "images/easy/pancakes.jpeg", "images/easy/pancakes.jpeg"];
    pictureArrLevelTwo = ["images/medium/balinese.jpeg", "images/medium/balinese.jpeg", "images/medium/ballet.jpeg", "images/medium/ballet.jpeg", "images/medium/emmy.jpeg", "images/medium/emmy.jpeg", "images/medium/ginger.jpeg", "images/medium/ginger.jpeg", "images/medium/glasses-stars-cat.jpeg", "images/medium/glasses-stars-cat.jpeg", "images/medium/hiss.jpeg", "images/medium/hiss.jpeg","images/medium/liesl.jpeg", "images/medium/liesl.jpeg", "images/medium/mainecoon.jpeg", "images/medium/mainecoon.jpeg", "images/medium/moggy.jpeg", "images/medium/moggy.jpeg", "images/medium/white-ragdoll.jpeg", "images/medium/white-ragdoll.jpeg", "images/medium/sleeping-kitten.jpeg", "images/medium/sleeping-kitten.jpeg", "images/medium/tortoiseshell.jpeg", "images/medium/tortoiseshell.jpeg"]
    pictureArrLevelThree = ["images/hard/a-holly-dolly-christmas.jpeg", "images/hard/a-holly-dolly-christmas.jpeg", "images/hard/all-i-can-do.jpeg", "images/hard/all-i-can-do.jpeg", "images/hard/backwoods-barbie.jpeg", "images/hard/backwoods-barbie.jpeg", "images/hard/blue-smoke.jpeg", "images/hard/blue-smoke.jpeg", "images/hard/dolly.png", "images/hard/dolly.png", "images/hard/great-balls-of-fire.jpeg", "images/hard/great-balls-of-fire.jpeg",
    "images/hard/heartbreak-express.jpeg", "images/hard/heartbreak-express.jpeg", "images/hard/hello-im-dolly.jpeg", "images/hard/hello-im-dolly.jpeg", "images/hard/here-you-come-again.jpeg", "images/hard/here-you-come-again.jpeg", "images/hard/honky-tonk-angels.jpeg", "images/hard/honky-tonk-angels.jpeg", "images/hard/hungry-again.jpeg", "images/hard/hungry-again.jpeg", "images/hard/i-believe-in-you.jpeg", "images/hard/i-believe-in-you.jpeg", "images/hard/love-is-like-a-butterfly.jpeg", "images/hard/love-is-like-a-butterfly.jpeg", "images/hard/rainbow.jpeg", "images/hard/rainbow.jpeg"]
}
const renderHomepage = () => {
    body.classList.add("body");
    body.classList.remove("body-game--level-one");
    body.classList.remove("body-game--level-two");
    body.classList.remove("body-game--level-three");
    mainContainer.classList.remove("game");
    mainContainer.classList.add("main")
    resetForNextGame();
    mainContainer.innerHTML =  
    `<h1 class="heading">Pairs</h1>
    <p class="subheading">Flip the cards to find all the matching pairs!</p>
    <ul class="list">
        Choose a level:
        <li class="list__item" id="level-one-link">One</li>
        <li class="list__item" id="level-two-link">Two</li>
        <li class="list__item" id="level-three-link">Three</li>
    </ul>`
    const levelOneLink = document.querySelector("#level-one-link");
    const levelTwoLink = document.querySelector("#level-two-link");
    const levelThreeLink = document.querySelector("#level-three-link");    
    levelOneLink.addEventListener("click", renderLevelOne);
    levelTwoLink.addEventListener("click", renderLevelTwo);
    levelThreeLink.addEventListener("click", renderLevelThree);
}
const renderLevelOne = () => {
    body.classList.add("body-game--level-one");
    body.classList.remove("body");
    body.classList.remove("body-game--level-two");
    body.classList.remove("body-game--level-three");
    placeholderImg = "images/card-backgrounds/sweets.jpg"
    body = document.querySelector(".body-game--level-one")
    renderGame();
}
const renderLevelTwo = () => {
    body.classList.add("body-game--level-two");
    body.classList.remove("body");
    body.classList.remove("body-game--level-one");
    body.classList.remove("body-game--level-three");
    placeholderImg = "images/card-backgrounds/cat.jpeg"
    body = document.querySelector(".body-game--level-two")
    renderGame();
}
const renderLevelThree = () => {
    body.classList.add("body-game--level-three");
    body.classList.remove("body");
    body.classList.remove("body-game--level-one");
    body.classList.remove("body-game--level-two");
    placeholderImg = "images/card-backgrounds/dolly.jpeg"
    body = document.querySelector(".body-game--level-three")
    renderGame();
}
const renderGame = () => {
    mainContainer.classList.remove("main");
    mainContainer.classList.add("game");
    mainContainer.innerHTML = 
        `<i class="fa-solid fa-house home-btn"></i>
        <h1 class="game__heading">Pairs</h1>
        <p class="game__subheading">Level One</p>
        <section class="container container--level-one">
        </section>
        <p class="moves"> Moves: 0</p>
        <div class="modal-container">
            <div class="modal-content">
                <span class="modal-content__close">&times;</span>
                <h1 class="modal-content__heading">Congratulations,<br>you win!</h1>
                <p class="modal-content__subheading">Want to play again?</p>
                <ul class="list">
                    Choose a level:
                    <li class="list__item" id="level-one-link">One</li>
                    <li class="list__item" id="level-two-link">Two</li>
                    <li class="list__item" id="level-three-link">Three</li>
                </ul>
            </div>
        </div>
        `
    let gameContainer = document.querySelector(".container")
    if (body.classList.contains("body-game--level-one")) {
        gameContainer.classList.add("container--level-one")
        pictureArr = pictureArrLevelOne;
        pictureArr.forEach((picture) => {
            gameContainer.innerHTML += `<div class="container__card container__card--level-one"></div>`
            })
    }
    if (body.classList.contains("body-game--level-two")) {
        gameContainer.classList.add("container--level-two")
        pictureArr = pictureArrLevelTwo;
        pictureArr.forEach((picture) => {
            gameContainer.innerHTML += `<div class="container__card container__card--level-two"></div>`
            })
    }
    if (body.classList.contains("body-game--level-three")) {
        gameContainer.classList.add("container--level-three")
        pictureArr = pictureArrLevelThree;
        pictureArr.forEach((picture) => {
            gameContainer.innerHTML += `<div class="container__card container__card--level-three"></div>`
            })
    }
    // In-game variables
    let cardsArr = document.querySelectorAll(".container__card");
    let numberOfMovesDisplay = document.querySelector(".moves");
    const homeBtn = document.querySelector(".home-btn")
    const modal = document.querySelector(".modal-container");
    const closeModalBtn = document.querySelector(".modal-content__close")
    const levelOneLink = document.querySelector("#level-one-link");
    const levelTwoLink = document.querySelector("#level-two-link");
    const levelThreeLink = document.querySelector("#level-three-link");
    // In-game event listeners
    homeBtn.addEventListener("click", renderHomepage);
    levelOneLink.addEventListener("click", renderLevelOne);
    levelTwoLink.addEventListener("click", renderLevelTwo);
    levelThreeLink.addEventListener("click", renderLevelThree);
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none"
    })
    window.addEventListener("click", () => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
    // In-game functions
    const addUserChoice = (cardPicked, img) => {
        cardPicked.style.backgroundImage = `url(${img})`
        // userChoices is an array of objects, to store both the div/card the user clicked and the img in that div - makes it easier to modify the background image later
        userChoices.push ({
            cardNode: cardPicked,
            cardImg: img,
        });
    }
    const checkForMatch = (currentChoices) => {
        const flipCardsBack = () => {
            currentChoices[0].cardNode.style.backgroundImage = `url(${placeholderImg})`;
            currentChoices[1].cardNode.style.backgroundImage = `url(${placeholderImg})`;
        }
        // update number of moves taken
        numberOfMovesTaken++ ;
        numberOfMovesDisplay.innerHTML = `Moves: ${numberOfMovesTaken}`
        // if images match
        if (currentChoices[0].cardImg === currentChoices[1].cardImg) {
        // add the matched images to the matchedCards array
            matchedCards.push (
                currentChoices[0].cardImg,
                currentChoices[1].cardImg
            );
        // and make it so these cards/divs can be selected again
            currentChoices[0].cardNode.classList.add("disabled");
            currentChoices[1].cardNode.classList.add("disabled");
        // reset user choices array
            currentChoices.length = 0;
            userChoices.length = 0;
        } else {
        // if the images don't match, flip them back over
            setTimeout(flipCardsBack, 1000)
        }
    }
    cardsArr.forEach((card) => {
        // give each card/div a different picture from the images array
        let randomNumber = Math.floor(Math.random()*(pictureArr.length));
        let imgSrc = pictureArr[randomNumber];
        // then remove that image from the array so it can't be picked again
        pictureArr.splice(randomNumber,1);

        card.addEventListener("click", () => {
            addUserChoice(card, imgSrc);
            if (userChoices.length == 2) {
                checkForMatch(userChoices);
                userChoices = [];
            }
            if (body.classList.contains("body-game--level-one") && matchedCards.length == 12) {
                setTimeout(gameOver, 1000);
            }
            if (body.classList.contains("body-game--level-two") && matchedCards.length == 26) {
                setTimeout(gameOver, 1000);
            }
            if (body.classList.contains("body-game--level-one") && matchedCards.length == 28) {
                setTimeout(gameOver, 1000);
            }
        })
    })

const gameOver = () => {
    modal.style.display = "block";
    resetForNextGame();
}
}

// Event listeners
levelOneLink.addEventListener("click", renderLevelOne);
levelTwoLink.addEventListener("click", renderLevelTwo);
levelThreeLink.addEventListener("click", renderLevelThree);