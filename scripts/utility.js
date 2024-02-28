function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    // get or create an alphabet array 
    const  alphabetString = 'qwertyuioplkjhgfdsazxcvbnm';
    const alphabets = alphabetString.split('');
   // console.log(alphabet);

    // get a random index between 0-25 
    const randomNumber = Math.random()*25;
    console.log(randomNumber); // 21.17765
    const index = Math.round(randomNumber)
   console.log(index); // 21 

    const alphabet = alphabets[index];
    //console.log(index, alphabet);
    return alphabet ;

}


