function startGame(){
    // transition to set hight to 35vh between 0s and 2s 
    document.getElementById("game-header").style.minHeight = '300px';

    //  putting opacity on the button and removing it after the animation
    const startGameButton = document.getElementById("start-game");
    startGameButton.style.opacity = '0';

    // get the div with the game
    const gameScreen = document.querySelector('#game-screen');
    gameScreen.classList.remove("uk-hidden");
    
    // execute with delay
    setTimeout(function () {
        startGameButton.remove();
    }, 2500);
}