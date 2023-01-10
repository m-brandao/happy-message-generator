function startGame(){
    // transition to set hight to 35vh between 0s and 2s 
    document.getElementById("game-header").style.minHeight = '35vh';

    //  putting opacity on the button and removing it after the animation
    const startGameButton = document.getElementById("start-game");
    startGameButton.style.opacity = '0';
    setTimeout(function () {
        startGameButton.parentElement.remove();
    }, 2500);
}