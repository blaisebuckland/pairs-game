const easyLevelLink = document.querySelector("#easy-level-link");
const mediumLevelLink = document.querySelector("#medium-level-link");
const hardLevelLink = document.querySelector("#hard-level-link");
const mainContainer = document.querySelector(".main");
const body = document.querySelector(".body");

// Reusable functions
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
}

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
// Event Listeners - hover over levels list
/* easyLevelLink.addEventListener("mouseenter", () => {
    easyLevelLink.innerHTML = `<li class="main__list__item" id="easy-level-link"><i class="fa-solid fa-candy-cane"></i> Easy <i class="fa-solid fa-candy-cane"></li>`;
})
easyLevelLink.addEventListener("mouseleave", () => {
    easyLevelLink.innerHTML = `<li class="main__list__item" id="easy-level-link">Easy</li>`;
})
mediumLevelLink.addEventListener("mouseenter", () => {
    mediumLevelLink.innerHTML = `<li class="main__list__item" id="medium-level-link"><i class="fa-solid fa-cat"></i> Medium <i class="fa-solid fa-cat"></i> </li>`;
})
mediumLevelLink.addEventListener("mouseleave", () => {
    mediumLevelLink.innerHTML = `<li class="main__list__item" id="medium-level-link">Medium</li>`;
})
hardLevelLink.addEventListener("mouseenter", () => {
    hardLevelLink.innerHTML = `<li class="main__list__item" id="hard-level-link"><i class="fa-solid fa-hat-cowboy"></i> Hard <i class="fa-solid fa-hat-cowboy"></i></li>`;
})
hardLevelLink.addEventListener("mouseleave", () => {
    hardLevelLink.innerHTML = `<li class="main__list__item" id="hard-level-link">Hard</li>`;
}) */


easyLevelLink.addEventListener("click", renderEasyLevel);

// Event listeners - select level
mediumLevelLink.addEventListener("click", renderMediumLevel);

hardLevelLink.addEventListener("click", renderHardLevel);