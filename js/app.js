$(function() { 

  // var pic = []
  // pic[0] = "./images/left_image1.png" 
  // pic[1] = "./images/left_image6.png"
  // pic[2] = "./images/left_image7.png"
  // pic[3] = "./images/left_image2.png"

  // pic[4] = "./images/left_image4.png"
  // pic[5] = "./images/right_image1.png"
  // pic[6] = "./images/left_image5.png"
  // pic[7] = "./images/left_image8.png"

  // pic[8] = "./images/right_image8.png"
  // pic[9] = "./images/right_image5.png"
  // pic[12] = "./images/left_image3.png"
  // pic[15] = "./images/right_image2.png"

  // pic[13] = "./images/right_image3.png"
  // pic[11] = "./images/right_image4.png"
  // pic[10] = "./images/right_image6.png"
  // pic[14] = "./images/right_image7.png"

  var game = {}
  var gameCard = document.getElementsByClassName("card")
  var turnText = $("#turnText")
  var choice1
  var choice2
  var playerOne = document.getElementById("player_one")
  var playerTwo = document.getElementById("player_two")
  var currentPlayer 
  var clicks = 0

  // game.turnChange = function(){
  //   if (currentPlayer === playerOne){
  //     currentPlayer = playerTwo 
  //   }else{
  //     currentPlayer = playerOne
  //   }
  // }
 
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
      // console.log(event.target.getAttribute("id"))
      // console.log(event.target.getAttribute("class"))
    }
  }


  function choice () {
    // console.log(event.target.getAttribute("id"))
    // console.log(event.target.getAttribute("class"))

    var idToSRC = './images/'+ $(this).attr("id") +'.png';
    // console.log(idToSRC)

    if (clicks === 0){ 

    
      // this.attr("src", idToSRC);
      this.style.backgroundImage = 'url('+idToSRC+')';
      var firstCard= event.target;
      console.log (firstCard)

      console.log(this)

      choice1 = this.id
      console.log(choice1)
      clicks = 1
      console.log(clicks)
    }else if (clicks === 1){

      // $("img").attr("src", idToSRC);
      // $(this).find("img").attr("src", idToSRC);
      this.style.backgroundImage = 'url('+idToSRC+')';
      choice2 = this.id
      console.log(choice2)
      clicks = 2 
      console.log(clicks)
    }else if (clicks === 2){
      return false
    }
  


    function checkCards (choice1, choice2){
      if (choice1.charAt(choice1.length-1) === choice2.charAt(choice2.length-1)){

        // .style.backgroundImage = 'url('+null+')'
        removeCard()

      }else{

        console.log ("wrong")
      }
    }

    checkCards(choice1,choice2)

    function removeCard(){
      console.log ("remove card" + firstCard)
    }
  }

  addStartListener()

});


