$(function() { 


  var game = {}
  var gameCard = $(".card")


  var turnText = $("#turnText")
  var choice1
  var choice2
  var playerOne = $("#player_one")
  var playerTwo = $("#player_two")
  var currentPlayer = 

  
  
  game.turnChange = function(){
    if (currentPlayer === playerOne){
      currentPlayer = playerTwo 
    }else{
      currentPlayer = playerOne
    }
  }
  var clicks = 0

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



  game.start = $(function(){
    
    $("#start").on("click", function(){
        turnText.text("Player One's Turn")    
        currentPlayer = playerOne
        
    })
  })  



  game.choice = gameCard.on("click",function(){
    
    var idToSRC = './images/'+ $(this).attr("id") +'.png';

    if (clicks === 0){ 

    
      $("img").attr("src", idToSRC);
      console.log (this)

      choice1 = this.id
      clicks = 1
    }else if (clicks === 1){
      $("img").attr("src", idToSRC);
      console.log (this)
      choice2 = this.id
      clicks = 2 
    }else if (clicks === 2){
      return false
    }

    game.checkCards = function(choice1, choice2){
      if (choice1.charAt(choice1.length-1) === choice2.charAt(choice2.length-1)){
        
        console.log ("correct")

      }else{

        console.log ("wrong")
      }

    }

    game.checkCards(choice1,choice2)



  })



  


});


