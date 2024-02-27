function play(){
    //hide the home screen 
     const homeSection = document.getElementById('home-screen');
    homeSection.classList.add("hidden");
     // console.log(homeSection.classList)

    // show the playground 
    const playgroundSection = document.getElementById('play-ground ');
    //console.log(playgroundSection.classList)
    playgroundSection.classList.remove('hidden');

    continueGame();

}

