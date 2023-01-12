function initializeGame(){
    // transition to set hight to 35vh between 0s and 2s 
    document.getElementById("game-header").style.minHeight = '300px';

    //  putting opacity on the button and removing it after the animation
    const startGameButton = document.getElementById("start-game");
    startGameButton.style.opacity = '0';

    // get the div with the game
    const gameScreen = document.querySelector('#game-screen');
    gameScreen.classList.remove("uk-hidden");

    // show footer
    document.getElementById('footer').classList.remove('uk-hidden');
    
    // execute with delay
    setTimeout(function () {
        startGameButton.remove();
    }, 2500);
};

// happy messages array
const happyMessagesArray = [
    ['We cannot solve problems with the kind of thinking we employed when we came up with them.','Albert Einstein'],
    ['Learn as if you will live forever, live like you will die tomorrow.','Mahatma Gandhi'],
    ['Stay away from those people who try to disparage your ambitions.Small minds will always do that, but great minds will give you a feeling that you can become great too.','Mark Twain'],
    ['When you give joy to other people, you get more joy in return.You should give a good thought to happiness that you can give out.','Eleanor Roosevelt'],
    ['When you change your thoughts, remember to also change your world.','Norman Vincent Peale'],
    ['It is only when we take chances, when our lives improve.The initial and the most difficult risk that we need to take is to become honest.','Walter Anderson'],
    ['Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.','Diane McLaren']
];

// recieves array to generate random message
const generateMessage = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    
    const messageContent = arr[randomNumber][0];
    const messageAuthor = arr[randomNumber][1];

    document.getElementById('quote-content').innerHTML = messageContent;
    document.getElementById('quote-author').innerHTML = messageAuthor;
        
    return `${messageContent} - ${messageAuthor}`;
};


const startGame = () => {
    return generateMessage(happyMessagesArray);
};