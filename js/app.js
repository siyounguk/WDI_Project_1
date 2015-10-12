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
      firstCard= event.target;
      console.log (firstCard)

      console.log(this)

      choice1 = this.id
      console.log("choice1 = " + choice1)
      clicks = 1
      // console.log(clicks)
    }else if (clicks === 1){


      this.style.backgroundImage = 'url('+idToSRC+')';
      secondCard = event.target;
      console.log()
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
      }
    }

    

    function removeCard(){
      firstCard.style.backgroundImage = 'url('+null+')'
      secondCard.style.backgroundImage = 'url('+null+')'
    }

    function addFullCard(){
      console.log (currentPlayer + firstCard)

    }
  }

  addStartListener()

});


