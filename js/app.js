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
  var playerCounter = 1

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

  halfImages [0] = 'left_image1'
  halfImages [1] = 'left_image2'
  halfImages [2] = 'left_image3'
  halfImages [3] = 'left_image4'
  halfImages [4] = 'left_image5'
  halfImages [5] = 'left_image6'
  halfImages [6] = 'left_image7'
  halfImages [7] = 'left_image8'
  halfImages [8] = 'left_image9'
  halfImages [9] = 'right_image1'
  halfImages [10] ='right_image2'
  halfImages [11] ='right_image3'
  halfImages [12] ='right_image4'
  halfImages [13] ='right_image5'
  halfImages [14] ='right_image6'
  halfImages [15] ='right_image7'
  halfImages [16] ='right_image8'
  halfImages [17] ='right_image9'

  function shuffle(halfImages) {
    var currentIndex = halfImages.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = halfImages[currentIndex];
      halfImages[currentIndex] = halfImages[randomIndex];
      halfImages[randomIndex] = temporaryValue;
    }
    for(var i = gameCard.length -1; i >=0; i--){
      // var htmlId = "id='"+ halfImages[i]+"'" ;
      var htmlId = halfImages[i];
      // $(gameCard[i]).append(htmlId)
      $(gameCard[i]).attr('id', htmlId)
      // console.log(gameCard[i])
    }
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
    console.log(gameCard)
    changeTurn();
    if(playerCounter % 2){
      var whichPlayer =  1;
    } else {
      var whichPlayer =  2;
    }
    turnText.text( "Player "+ whichPlayer + "'s" + " Turn");
    addClickListener();
  } 

  function nextTurn (){
    changeTurn();
    if(playerCounter % 2){
      var whichPlayer =  2;
    } else {
      var whichPlayer =  1;
    }
    turnText.text( "Player "+ whichPlayer + "'s" + " Turn")
 
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
        setTimeout(turnOverCard, 1000);
        nextTurn();
        playerCounter ++
        // console.log(playerCounter)
      }
    }

    function removeCard(){

      $(firstCard).fadeTo(3000,0);
      // firstCard.style.backgroundImage = 'url("./images/small_blank_image.png")';
      $(secondCard).fadeTo(3000, 0);
      // secondCard.style.backgroundImage ='url("./images/small_blank_image.png")';
    }

    function turnOverCard(){

      $(".card").css({
        "background-image": "url(./images/back_image.jpg)"
      })
    }

    function addFullCard(){
      for (var i = fullImages.length -1; i >=0; i--){
          if((fullImages[i].charAt(fullImages[i].length-5)) == (firstCard.id.charAt(firstCard.id.length-1)) ){

            var htmlImg = "<img src='"+ fullImages[i] +"'>";
            $(currentPlayer).hide().append(htmlImg).fadeIn(4000)
            
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