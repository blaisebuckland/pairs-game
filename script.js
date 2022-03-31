// Constants & Query Selectors
const easyLevelLink = document.querySelector("#easy-level-link");
const mediumLevelLink = document.querySelector("#medium-level-link");
const hardLevelLink = document.querySelector("#hard-level-link");
const mainContainer = document.querySelector(".main");
const body = document.querySelector(".body");
const pictureArrEasy = ["./images/easy/candy-floss.jpeg", "./images/easy/candy-floss.jpeg", "./images/easy/custard-cream.jpeg", "./images/easy/custard-cream.jpeg","./images/easy/doughnut.webp", "./images/easy/doughnut.webp", "./images/easy/jelly.jpeg", "./images/easy/jelly.jpeg", "./images/easy/macaron.jpeg", "./images/easy/macaron.jpeg", "./images/easy/pancakes.jpeg", "./images/easy/pancakes.jpeg"];

// Easy Level
const renderEasyLevel = () => {
    body.classList.add("body-game--easy");
    body.classList.remove("body");
    mainContainer.classList.remove("main");
    mainContainer.classList.add("game");
mainContainer.innerHTML = 
`<h1 class="game__heading">Pairs</h1>
<p class="game__subheading game__subheading">Level One</p>
<section class="game__container game__container--easy">
    <div class="game__container__card game__container__card--easy game__container__card--1"></div>
    <div class="game__container__card game__container__card--easy game__container__card--2"></div>
    <div class="game__container__card game__container__card--easy game__container__card--3"></div>
    <div class="game__container__card game__container__card--easy game__container__card--4"></div>
    <div class="game__container__card game__container__card--easy game__container__card--5"></div>
    <div class="game__container__card game__container__card--easy game__container__card--6"></div>
    <div class="game__container__card game__container__card--easy game__container__card--7"></div>
    <div class="game__container__card game__container__card--easy game__container__card--8"></div>
    <div class="game__container__card game__container__card--easy game__container__card--9"></div>
    <div class="game__container__card game__container__card--easy game__container__card--10"></div>
    <div class="game__container__card game__container__card--easy game__container__card--11"></div>
    <div class="game__container__card game__container__card--easy game__container__card--12"></div>
</section>
<p class="game__status">Time: <br> Moves: </p>
`
let easyCardsArr = document.querySelectorAll(".game__container__card");

easyCardsArr.forEach((card) => {
    let randomNumber = Math.floor(Math.random()*(pictureArrEasy.length));
    card.addEventListener("click", () => {
        card.style.backgroundImage = `url("${pictureArrEasy[1]}")` 
        console.log("on click event")
    })
    pictureArrEasy.splice(randomNumber,1);
})
}

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

