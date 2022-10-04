function randomNumber() {

    var randNum = Math.floor(Math.random() * 101);

    return randNum;

}

function logRandomNumber() {

    var randNum = randomNumber();
    if (randNum <= 50) {
        
        console.log('less than or equal to 50');
    }
       else {
        console.log('greater than 50');
      }
    }

