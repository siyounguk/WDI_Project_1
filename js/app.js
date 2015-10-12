$(function() { 

  var game = {}
  var gameCard = document.getElementsByClassName("card")
  var turnText = $("#turnText")
  var choice1
  var choice2
  var playerOne = document.getElementById("player_one")
  var playerTwo = document.getElementById("player_two")
  var currentPlayer 
  var clicks = 0
  var fullImages = []

  fullImages[0] = './images/fullImages/full_image1.png'
  fullImages[1] = './images/fullImages/full_image2.png'
  fullImages[2] = './images/fullImages/full_image3.png'
  fullImages[3] = './images/fullImages/full_image4.png'
  fullImages[4] = './images/fullImages/full_image5.png'
  fullImages[5] = './images/fullImages/full_image6.png'
  fullImages[6] = './images/fullImages/full_image7.png'
  fullImages[7] = './images/fullImages/full_image8.png'
 
  function addStartListener (){
    var start = document.getElementById("start");
    start.addEventListener("click",startGame)    
  }

  function startGame (){
    currentPlayer = playerOne;
    console.log (currentPlayer.innerHTML)
    turnText.text( currentPlayer.innerHTML+ "'s" + " Turn")
    addClickListener()
  } 

  function addClickListener(){
    for(var i = gameCard.length -1; i >=0; i--){
      gameCard[i].addEventListener("click", choice)

    }
  }

  function choice () {


    var idToSRC = './images/'+ $(this).attr("id") +'.png';
    // console.log(idToSRC)

    if (clicks === 0){ 

    
      // this.attr("src", idToSRC);
      this.style.backgroundImage = 'url('+idToSRC+')';
      firstCard= event.target;
      console.log ("firstCard = " + firstCard)

      

      choice1 = this.id
      console.log("choice1 = " + choice1)
      clicks = 1
      // console.log(clicks)
    }else if (clicks === 1){


      this.style.backgroundImage = 'url('+idToSRC+')';
      secondCard = event.target;
      console.log("secondCard = " + secondCard)
      choice2 = this.id
      console.log("choice2 = " + choice2)
      clicks = 2 
      // console.log(clicks)
      checkCards(choice1,choice2)
    }else if (clicks === 2){
      return false
    }

    function checkCards (choice1, choice2){
      if (choice1.charAt(choice1.length-1) === choice2.charAt(choice2.length-1)){

        removeCard()
        addFullCard()

      }else{

        console.log ("wrong")
        changeTurn()
        console.log(currentPlayer)
      }
    }

    function changeTurn (){
      if (currentPlayer === playerOne){
        currentPlayer = playerTwo
      }else{
        currentPlayer = playerOne
      }
    }

    function removeCard(){
      firstCard.style.backgroundImage = 'url("./images/small_blank_image.png")'
      secondCard.style.backgroundImage ='url("./images/small_blank_image.png")'
    }

    function addFullCard(){
      console.log (currentPlayer + firstCard)

    }
  }

  addStartListener()

});


