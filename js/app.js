$(function() { 

  var game = {};
  var gameCard = document.getElementsByClassName("card");
  var turnText = $("#turnText");
  var choice1;
  var choice2;
  var playerOne = document.getElementById("player_one");
  var playerTwo = document.getElementById("player_two");
  var currentPlayer;
  var addImageToObject = [];
  var counter = 1;

  var fullImages = [];
  fullImages[0] = './images/full_images/full_image1.png';
  fullImages[1] = './images/full_images/full_image2.png';
  fullImages[2] = './images/full_images/full_image3.png';
  fullImages[3] = './images/full_images/full_image4.png';
  fullImages[4] = './images/full_images/full_image5.png';
  fullImages[5] = './images/full_images/full_image6.png';
  fullImages[6] = './images/full_images/full_image7.png';
  fullImages[7] = './images/full_images/full_image8.png';

  var halfImages = []

  halfImages [0] = "a"
  halfImages [1] = "b"
  halfImages [2] = "c"
  halfImages [3] = "d"
  halfImages [4] = "e"
  halfImages [5] = "f"
  halfImages [6] = "g"
  halfImages [7] = "h"
  halfImages [8] = "i"
  halfImages [9] = "j"
  halfImages [10] ="k"
  halfImages [11] ="l"
  halfImages [12] ="m"
  halfImages [13] ="n"
  halfImages [14] ="o"
  halfImages [15] ="p"

  function shuffle(halfImages) {
    var currentIndex = halfImages.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = halfImages[currentIndex];
      halfImages[currentIndex] = halfImages[randomIndex];
      halfImages[randomIndex] = temporaryValue;
    }
    console.log(halfImages)
    
  }

  

 
  function addStartListener (){
    var start = document.getElementById("start");
    start.addEventListener("click",startGame);
  }

  function changeTurn (){
    if (currentPlayer === undefined){
      currentPlayer = playerOne;
    }else if (currentPlayer === playerOne){
      currentPlayer = playerTwo;
    }else if(currentPlayer === playerTwo){
      currentPlayer = playerOne;
    }
  }

  function startGame (){
    shuffle(halfImages)
    changeTurn();
    if(counter % 2){
      var whichPlayer =  1;
    } else {
      var whichPlayer =  2;
    }
    turnText.text( "Player "+ whichPlayer + "'s" + " Turn")
    // turnText.text( "Player 1" + "'s" + " Turn")
    console.log(counter);
    addClickListener();
  } 

  function nextTurn (){
    changeTurn();
    if(counter % 2){
      var whichPlayer =  1;
    } else {
      var whichPlayer =  2;
    }
    turnText.text( "Player "+ whichPlayer + "'s" + " Turn")
    // turnText.text( "Player 1" + "'s" + " Turn")
    console.log(counter);
    addClickListener();
  }

  function addClickListener(){
    for(var i = gameCard.length -1; i >=0; i--){
      gameCard[i].addEventListener("click", choice);

    }
  }

  function choice () {
    var idToSRC = './images/'+ $(this).attr("id") +'.png';

    if (counter % 2){ 
      this.style.backgroundImage = 'url('+idToSRC+')';
      firstCard = event.target;
      choice1 = this.id;
      
    }else{
      this.style.backgroundImage = 'url('+idToSRC+')';
      secondCard = event.target;
      choice2 = this.id;
      
      checkCards(choice1,choice2);
    }         

      counter ++
  }

    function checkCards (choice1, choice2){
      if (choice1.charAt(choice1.length-1) === choice2.charAt(choice2.length-1)){
        addFullCard();
        removeCard();
        addClickListener();
      }else{
        setTimeout(turnOverCard, 500);
        nextTurn();
        
      }
    }

    function removeCard(){

      $(firstCard).fadeTo(3000,0);
      // firstCard.style.backgroundImage = 'url("./images/small_blank_image.png")';
      $(secondCard).fadeTo(3000, 0);
      // secondCard.style.backgroundImage ='url("./images/small_blank_image.png")';
    }

    function turnOverCard(){

      // setTimeout(function() { ... }, timeMS);

      firstCard.style.background = "blue";
      secondCard.style.background ="blue";
    }

    function addFullCard(){
      for (var i = fullImages.length -1; i >=0; i--){
          if((fullImages[i].charAt(fullImages[i].length-5)) == (firstCard.id.charAt(firstCard.id.length-1)) ){

            var htmlImg = "<img src='"+ fullImages[i] +"'>"
            $(currentPlayer)
            .hide()
            .append(htmlImg)
            .fadeIn(4000)
            console.log(currentPlayer)
          }          
      }
      addClickListener()    
    }
  
  function addResetListener(){
    document.getElementById("reset").addEventListener("click", resetBoard)
  }

  function resetBoard(){
    // for (var i = gameCard.length - 1; i >= 0; i--) {
    //   gameCard[i].style.background = "blue";  
    window.location.reload()
      
    // }
  }

  addStartListener();
  addResetListener();

});
