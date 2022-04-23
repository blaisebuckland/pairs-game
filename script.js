// Variables
const easyLevelLink = document.querySelector("#easy-level-link");
const mediumLevelLink = document.querySelector("#medium-level-link");
const hardLevelLink = document.querySelector("#hard-level-link");
const mainContainer = document.querySelector(".main");
const body = document.querySelector(".body");
let pictureArrEasy = ["./images/easy/candy-floss.jpeg", "./images/easy/candy-floss.jpeg", "./images/easy/custard-cream.jpeg", "./images/easy/custard-cream.jpeg","./images/easy/doughnut.webp", "./images/easy/doughnut.webp", "./images/easy/jelly.jpeg", "./images/easy/jelly.jpeg", "./images/easy/macaron.jpeg", "./images/easy/macaron.jpeg", "./images/easy/pancakes.jpeg", "./images/easy/pancakes.jpeg"];
let pictureArrMedium = ["./images/medium/balinese.jpeg", "./images/medium/balinese.jpeg", "./images/medium/ballet.jpeg", "./images/medium/ballet.jpeg", "./images/medium/emmy.jpg", "./images/medium/emmy.jpg", "./images/medium/ginger.jpeg", "./images/medium/ginger.jpeg", "./images/medium/glasses-stars-cat.jpeg", "./images/medium/glasses-stars-cat.jpeg", "./images/medium/hiss.jpeg", "./images/medium/hiss.jpeg","./images/medium/liesl.jpg", "./images/medium/liesl.jpg", "./images/medium/maine-coon.jpeg", "./images/medium/maine-coon.jpeg", "./images/medium/moggy.webp", "./images/medium/moggy.webp", "./images/medium/ragdoll.jpeg", "./images/medium/ragdoll.jpeg", "./images/medium/sleeping-kitten.jpeg", "./images/medium/sleeping-kitten.jpeg", "./images/medium/tortoiseshell.jpeg", "./images/medium/tortoiseshell.jpeg"]
let pictureArrHard = ["./images/hard/a-holly-dolly-christmas.jpeg", "./images/hard/a-holly-dolly-christmas.jpeg", "./images/hard/all-i-can-do.jpeg", "./images/hard/all-i-can-do.jpeg", "./images/hard/backwoods-barbie.jpeg", "./images/hard/backwoods-barbie.jpeg", "./images/hard/blue-smoke.jpeg", "./images/hard/blue-smoke.jpeg", "./images/hard/dolly.png", "./images/hard/dolly.png", "./images/hard/great-balls-of-fire.jpeg", "./images/hard/great-balls-of-fire.jpeg",
"./images/hard/heartbreak-express.jpeg", "./images/hard/heartbreak-express.jpeg", "./images/hard/hello-im-dolly.jpeg", "./images/hard/hello-im-dolly.jpeg", "./images/hard/here-you-come-again.jpeg", "./images/hard/here-you-come-again.jpeg", "./images/hard/honky-tonk-angels.jpeg", "./images/hard/honky-tonk-angels.jpeg", "./images/hard/hungry-again.jpeg", "./images/hard/hungry-again.jpeg", "./images/hard/i-believe-in-you.jpeg", "./images/hard/i-believe-in-you.jpeg", "./images/hard/love-is-like-a-butterfly.jpeg", "./images/hard/love-is-like-a-butterfly.jpeg", "./images/hard/rainbow.jpeg", "./images/hard/rainbow.jpeg"]
let cardPack = [];
let userChoices = [];
let matchedCards = [];
let imgSrc = "";
let placeholderImg = "";
let numberOfMovesTaken = 0;
// Functions
const renderGame = () => {
    mainContainer.classList.remove("main");
    mainContainer.classList.add("game");
}
const renderEasyLevel = () => {
    renderGame();
    easyLevel();
}

const renderMediumLevel = () => {
    renderGame();
    mediumLevel();
}

const renderHardLevel = () => {
    renderGame();
    hardLevel();
}

const resetForNextGame = () => {
    userChoices = [];
    matchedCards = [];
    numberOfMovesTaken = 0;
    pictureArrEasy = ["./images/easy/candy-floss.jpeg", "./images/easy/candy-floss.jpeg", "./images/easy/custard-cream.jpeg", "./images/easy/custard-cream.jpeg","./images/easy/doughnut.webp", "./images/easy/doughnut.webp", "./images/easy/jelly.jpeg", "./images/easy/jelly.jpeg", "./images/easy/macaron.jpeg", "./images/easy/macaron.jpeg", "./images/easy/pancakes.jpeg", "./images/easy/pancakes.jpeg"];
    pictureArrMedium = ["./images/medium/balinese.jpeg", "./images/medium/balinese.jpeg", "./images/medium/ballet.jpeg", "./images/medium/ballet.jpeg", "./images/medium/emmy.jpg", "./images/medium/emmy.jpg", "./images/medium/ginger.jpeg", "./images/medium/ginger.jpeg", "./images/medium/glasses-stars-cat.jpeg", "./images/medium/glasses-stars-cat.jpeg", "./images/medium/hiss.jpeg", "./images/medium/hiss.jpeg","./images/medium/liesl.jpg", "./images/medium/liesl.jpg", "./images/medium/maine-coon.jpeg", "./images/medium/maine-coon.jpeg", "./images/medium/moggy.webp", "./images/medium/moggy.webp", "./images/medium/ragdoll.jpeg", "./images/medium/ragdoll.jpeg", "./images/medium/sleeping-kitten.jpeg", "./images/medium/sleeping-kitten.jpeg", "./images/medium/tortoiseshell.jpeg", "./images/medium/tortoiseshell.jpeg"]
    pictureArrHard = ["./images/hard/a-holly-dolly-christmas.jpeg", "./images/hard/a-holly-dolly-christmas.jpeg", "./images/hard/all-i-can-do.jpeg", "./images/hard/all-i-can-do.jpeg", "./images/hard/backwoods-barbie.jpeg", "./images/hard/backwoods-barbie.jpeg", "./images/hard/blue-smoke.jpeg", "./images/hard/blue-smoke.jpeg", "./images/hard/dolly.png", "./images/hard/dolly.png", "./images/hard/great-balls-of-fire.jpeg", "./images/hard/great-balls-of-fire.jpeg",
    "./images/hard/heartbreak-express.jpeg", "./images/hard/heartbreak-express.jpeg", "./images/hard/hello-im-dolly.jpeg", "./images/hard/hello-im-dolly.jpeg", "./images/hard/here-you-come-again.jpeg", "./images/hard/here-you-come-again.jpeg", "./images/hard/honky-tonk-angels.jpeg", "./images/hard/honky-tonk-angels.jpeg", "./images/hard/hungry-again.jpeg", "./images/hard/hungry-again.jpeg", "./images/hard/i-believe-in-you.jpeg", "./images/hard/i-believe-in-you.jpeg", "./images/hard/love-is-like-a-butterfly.jpeg", "./images/hard/love-is-like-a-butterfly.jpeg", "./images/hard/rainbow.jpeg", "./images/hard/rainbow.jpeg"]
}

// Easy Level
const easyLevel = () => {
    body.classList.add("body-game--easy");
    body.classList.remove("body");
    placeholderImg = "./images/card-backgrounds/sweets.jpg"
mainContainer.innerHTML = 
`<h1 class="game__heading">Pairs</h1>
<p class="game__subheading game__subheading">Level One</p>
<i class="fa-solid fa-house game__home-icon"></i>
<section class="game__container game__container--easy">
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
    <div class="game__container__card game__container__card--easy"></div>
</section>
<p class="game__moves"> Moves: 0</p>
<div class="modal">
    <div class="modal__content">
        <span class="modal__content__close">&times;</span>
        <h1 class="modal__content__heading">Congratulations,<br>you win!</h1>
        <p class="modal__content__subheading">Want to play again?</p>
        <ul class="modal__content__list">
            Choose a level:
            <li class="modal__content__list__item" id="easy-level-link">Easy</li>
            <li class="modal__content__list__item" id="medium-level-link">Medium</li>
            <li class="modal__content__list__item" id="hard-level-link">Hard</li>
        </ul>
    </div>
</div>
`

let easyCardsArr = document.querySelectorAll(".game__container__card");
let numberOfMovesDisplay = document.querySelector(".game__moves");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__content__close")
const easyLevelLink = document.querySelector("#easy-level-link");
const mediumLevelLink = document.querySelector("#medium-level-link");
const hardLevelLink = document.querySelector("#hard-level-link");

easyLevelLink.addEventListener("click", renderEasyLevel);
mediumLevelLink.addEventListener("click", renderMediumLevel);
hardLevelLink.addEventListener("click", renderHardLevel);

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", () => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

const addUserChoice = (cardPicked, img) => {
    cardPicked.style.backgroundImage = `url(${img})`
    // NEW ***** user choices is now an array of objects, so we can store both the div/card the user clicked and the img in that div - makes it easier to modify the background image later
    userChoices.push ({
        cardNode: cardPicked,
        cardImg: img,
    });
    console.log(userChoices)
}

const checkForMatch = (currentChoices) => {
    numberOfMovesTaken++ ;
    numberOfMovesDisplay.innerHTML = `Moves: ${numberOfMovesTaken}`
    // if images match
    if (currentChoices[0].cardImg === currentChoices[1].cardImg) {
        // add the matched images to the matchedCards array
        matchedCards.push (
            currentChoices[0].cardImg,
            currentChoices[1].cardImg
        );
        // and make it so these cards/divs can be selected again ***** NEED TO MAKE THIS CLASS
        currentChoices[0].cardNode.classList.add("disabled");
        currentChoices[1].cardNode.classList.add("disabled");
        // reset user choices array
        currentChoices.length = 0;
        userChoices.length = 0;
    } else {
        // if the images don't match, flip them back over
        const resetFirstChoice = () => {
            currentChoices[0].cardNode.style.backgroundImage = `url(${placeholderImg})`;
        }
        const resetSecondChoice = () => {
            currentChoices[1].cardNode.style.backgroundImage = `url(${placeholderImg})`;
        }
        setTimeout(resetFirstChoice, 1000)
        setTimeout(resetSecondChoice, 1000)
    }
}

const gameOver = () => {
    modal.style.display = "block";
    resetForNextGame();
}


easyCardsArr.forEach((card) => {
    // give each card/div a different picture from the images array
    let randomNumber = Math.floor(Math.random()*(pictureArrEasy.length));
    let imgSrc = pictureArrEasy[randomNumber];
    // then remove that image from the array so it can't be picked again
    pictureArrEasy.splice(randomNumber,1);

    card.addEventListener("click", () => {
        addUserChoice(card, imgSrc);
        if (userChoices.length == 2) {
            checkForMatch(userChoices);
            userChoices = [];
        }
        if (matchedCards.length == 12) {
            gameOver();
        }
    })
})
}


// Medium Level
const mediumLevel = () => {
    body.classList.add("body-game--medium");
    body.classList.remove("body");
    placeholderImg = "./images/card-backgrounds/cat.jpeg"
mainContainer.innerHTML = 
`<h1 class="game__heading">Pairs</h1>
<p class="game__subheading game__subheading">Level Two</p>
<section class="game__container game__container--medium">
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
    <div class="game__container__card game__container__card--medium"></div>
</section>
<p class="game__moves"> Moves: 0</p>
<div class="modal">
    <div class="modal__content">
        <span class="modal__content__close">&times;</span>
        <h1 class="modal__content__heading">Congratulations, you win!</h1>
        <p class="modal__content__subheading">Want to play again?</p>
        <ul class="modal__content__list">
            Choose a level:
            <li class="modal__content__list__item" id="easy-level-link">Easy</li>
            <li class="modal__content__list__item" id="medium-level-link">Medium</li>
            <li class="modal__content__list__item" id="hard-level-link">Hard</li>
        </ul>
    </div>
</div>
`
let mediumCardsArr = document.querySelectorAll(".game__container__card");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__content__close")
let numberOfMovesDisplay = document.querySelector(".game__moves");
const easyLevelLink = document.querySelector("#easy-level-link");
const mediumLevelLink = document.querySelector("#medium-level-link");
const hardLevelLink = document.querySelector("#hard-level-link");

easyLevelLink.addEventListener("click", renderEasyLevel);
mediumLevelLink.addEventListener("click", renderMediumLevel);
hardLevelLink.addEventListener("click", renderHardLevel);

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", () => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

const addUserChoice = (cardPicked, img) => {
    cardPicked.style.backgroundImage = `url(${img})`
    userChoices.push ({
        cardNode: cardPicked,
        cardImg: img,
    });
    console.log(userChoices)
}

const checkForMatch = (currentChoices) => {
    numberOfMovesTaken++ ;
    numberOfMovesDisplay.innerHTML = `Moves: ${numberOfMovesTaken}`
    if (currentChoices[0].cardImg === currentChoices[1].cardImg) {
        matchedCards.push (
            currentChoices[0].cardImg,
            currentChoices[1].cardImg
        );
        currentChoices[0].cardNode.classList.add("disabled");
        currentChoices[1].cardNode.classList.add("disabled");
        currentChoices.length = 0;
        userChoices.length = 0;
    } else {
        const resetFirstChoice = () => {
            currentChoices[0].cardNode.style.backgroundImage = `url(${placeholderImg})`;
        }
        const resetSecondChoice = () => {
            currentChoices[1].cardNode.style.backgroundImage = `url(${placeholderImg})`;
        }
        setTimeout(resetFirstChoice, 1000)
        setTimeout(resetSecondChoice, 1000)
    }
}

const gameOver = () => {
    modal.style.display = "block";
    resetForNextGame();
}

mediumCardsArr.forEach((card) => {
    // give each card/div a different picture from the images array
    let randomNumber = Math.floor(Math.random()*(pictureArrMedium.length));
    let imgSrc = pictureArrMedium[randomNumber];
    // then remove that image from the array so it can't be picked again
    pictureArrMedium.splice(randomNumber,1);

    card.addEventListener("click", () => {
        addUserChoice(card, imgSrc);
        if (userChoices.length == 2) {
            checkForMatch(userChoices);
            userChoices = [];
        }
        if (matchedCards.length >= 24) {
            gameOver();
        }
    })
})
}

// Hard Level
const hardLevel = () => {
    body.classList.add("body-game--hard");
    body.classList.remove("body");
    placeholderImg = "./images/card-backgrounds/dolly.jpeg";
mainContainer.innerHTML = 
`<h1 class="game__heading">Pairs</h1>
<p class="game__subheading game__subheading">Level Three</p>
<section class="game__container game__container--hard">
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
    <div class="game__container__card game__container__card--hard"></div>
</section>
<p class="game__moves">Moves: 0</p>
<div class="modal">
    <div class="modal__content">
        <span class="modal__content__close">&times;</span>
        <h1 class="modal__content__heading">Congratulations, you win!</h1>
        <p class="modal__content__subheading">Want to play again?</p>
        <ul class="modal__content__list">
            Choose a level:
            <li class="modal__content__list__item" id="easy-level-link">Easy</li>
            <li class="modal__content__list__item" id="medium-level-link">Medium</li>
            <li class="modal__content__list__item" id="hard-level-link">Hard</li>
        </ul>
    </div>
</div>
`
let hardCardsArr = document.querySelectorAll(".game__container__card");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__content__close")
let numberOfMovesDisplay = document.querySelector(".game__moves");
const easyLevelLink = document.querySelector("#easy-level-link");
const mediumLevelLink = document.querySelector("#medium-level-link");
const hardLevelLink = document.querySelector("#hard-level-link");

easyLevelLink.addEventListener("click", renderEasyLevel);
mediumLevelLink.addEventListener("click", renderMediumLevel);
hardLevelLink.addEventListener("click", renderHardLevel);

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", () => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

const addUserChoice = (cardPicked, img) => {
    cardPicked.style.backgroundImage = `url(${img})`
    userChoices.push ({
        cardNode: cardPicked,
        cardImg: img,
    });
    console.log(userChoices)
}

const checkForMatch = (currentChoices) => {
    numberOfMovesTaken++ ;
    numberOfMovesDisplay.innerHTML = `Moves: ${numberOfMovesTaken}`

    console.log(numberOfMovesTaken)
    if (currentChoices[0].cardImg === currentChoices[1].cardImg) {
        matchedCards.push (
            currentChoices[0].cardImg,
            currentChoices[1].cardImg
        );
        currentChoices[0].cardNode.classList.add("disabled");
        currentChoices[1].cardNode.classList.add("disabled");
        currentChoices.length = 0;
        userChoices.length = 0;
    } else {
        const resetFirstChoice = () => {
            currentChoices[0].cardNode.style.backgroundImage = `url(${placeholderImg})`;
        }
        const resetSecondChoice = () => {
            currentChoices[1].cardNode.style.backgroundImage = `url(${placeholderImg})`;
        }
        setTimeout(resetFirstChoice, 1000)
        setTimeout(resetSecondChoice, 1000)
    }
}

const gameOver = () => {
    modal.style.display = "block";
    resetForNextGame();
}

hardCardsArr.forEach((card) => {
    // give each card/div a different picture from the images array
    let randomNumber = Math.floor(Math.random()*(pictureArrHard.length));
    let imgSrc = pictureArrHard[randomNumber];
    // then remove that image from the array so it can't be picked again
    pictureArrHard.splice(randomNumber,1);

    card.addEventListener("click", () => {
        addUserChoice(card, imgSrc);
        if (userChoices.length == 2) {
            checkForMatch(userChoices);
            userChoices = [];
        }
        if (matchedCards.length >= 24) {
            gameOver();
        }
    })
})
}
// Event listeners - select level
easyLevelLink.addEventListener("click", renderEasyLevel);

mediumLevelLink.addEventListener("click", renderMediumLevel);

hardLevelLink.addEventListener("click", renderHardLevel);