// function play(){
//     //hide the home screen 
//      const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add("hidden");
//      // console.log(homeSection.classList)

//     // show the playground 
//     const playgroundSection = document.getElementById('play-ground');
//     //console.log(playgroundSection.classList)
//     playgroundSection.classList.remove("hidden");

// }
function continueGame(){
    // step-1: generate a random alphabet 
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);
}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}



 