$(function() { 

  var game = {};
  var gameCard = document.getElementsByClassName("card");
  var turnText = $("#turnText");
  var choice1;
  var choice2;
  var playerOne = document.getElementById("player_one");
  var playerTwo = document.getElementById("player_two");
  var currentPlayer = playerTwo;
  var clicks = 0;
  var fullImages = [];
  var addImageToObject = [];

  fullImages[0] = './images/full_images/full_image1.png';
  fullImages[1] = './images/full_images/full_image2.png';
  fullImages[2] = './images/full_images/full_image3.png';
  fullImages[3] = './images/full_images/full_image4.png';
  fullImages[4] = './images/full_images/full_image5.png';
  fullImages[5] = './images/full_images/full_image6.png';
  fullImages[6] = './images/full_images/full_image7.png';
  fullImages[7] = './images/full_images/full_image8.png';
 
  function addStartListener (){
    var start = document.getElementById("start");
    start.addEventListener("click",startGame);
  }

  function changeTurn (){
    if (currentPlayer === playerOne){
      currentPlayer = playerTwo;
    }else{
      currentPlayer = playerOne;
    }
  }

  function startGame (){
    changeTurn();
    console.log (currentPlayer.innerHTML);
    turnText.text( currentPlayer.innerHTML+ "'s" + " Turn");
    addClickListener();
  } 

  function addClickListener(){
    for(var i = gameCard.length -1; i >=0; i--){
      gameCard[i].addEventListener("click", choice);
    }
  }

  function choice () {
    var idToSRC = './images/'+ $(this).attr("id") +'.png';

    if (clicks === 0){ 
      // this.attr("src", idToSRC);
      this.style.backgroundImage = 'url('+idToSRC+')';
      firstCard= event.target;
      console.log ("firstCard = " + firstCard);
      choice1 = this.id;
      console.log("choice1 = " + choice1);
      clicks = 1;
    }else if (clicks === 1){
      this.style.backgroundImage = 'url('+idToSRC+')';
      secondCard = event.target;
      console.log("secondCard = " + secondCard);
      choice2 = this.id;
      console.log("choice2 = " + choice2);
      clicks = 2;
      checkCards(choice1,choice2);
    }else if (clicks === 2){
      return false;
    }
  }

    function checkCards (choice1, choice2){
      if (choice1.charAt(choice1.length-1) === choice2.charAt(choice2.length-1)){
        
        addFullCard();
        removeCard();
        addClickListener();
        

      }else{
        nextTurn();

        // turnText.text(currentPlayer.innerHTML+ "'s" + " Turn"); 
      }
    }

    // function nextClickListener(){
    //   for(var i = gameCard.length -1; i >=0; i--){
    //     gameCard[i].addEventListener("click", choice);

    //   }
    // }
 

    function removeCard(){

      // $(firstCard).fadeOut(3000)
      firstCard.style.backgroundImage = 'url("./images/small_blank_image.png")';
      // $(secondCard).fadeOut(3000)
      secondCard.style.backgroundImage ='url("./images/small_blank_image.png")';
    }

    function addFullCard(){
      for (var i = fullImages.length -1; i >=0; i--){
          if((fullImages[i].charAt(fullImages[i].length-5)) == (firstCard.id.charAt(firstCard.id.length-1)) ){

            var htmlImg = "<img src='"+ fullImages[i] +"'>"
            $(currentPlayer).html(htmlImg)
          } 
          clicks = 0
      }
      addClickListener()
      // console.log ( firstCard.style.backgroundImage + secondCard.style.backgroundImage)
    }
  

  addStartListener();

});


