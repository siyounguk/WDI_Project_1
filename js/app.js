$(function() { 


  var game = {}
  var gameCard = $(".card")
  console.log(gameCard)

  var turnText = $("#turnText")
  var playerOne
  var playerTwo
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

//   // pic[8] = "./images/right_image8.png"
//   pic[9] = "./images/right_image5.png"
//   pic[12] = "./images/left_image3.png"
// pic[15] = "./images/right_image2.png"


  // pic[13] = "./images/right_image3.png"
  // pic[11] = "./images/right_image4.png"
  // pic[10] = "./images/right_image6.png"
  // pic[14] = "./images/right_image7.png"


  

  game.start = $(function(){
    
    $("#start").on("click", function(){
        turnText.text("Player One's Turn")    
    })
  })  



  game.choice = gameCard.on("click",function(){

    if (clicks === 0){ 
      idToSRC = 'images/'+ $("td").attr("id") +'.png';

      gameCard.src= idToSRC;
      console.log(gameCard.src)
      clicks = 1
      console.log (clicks)
    }else if (clicks === 1){
      idToSRC = 'images/'+ $("td").attr("id") +'.png';
      console.log(gameCard.src)
      gameCard.src= idToSRC;
      clicks = 2 
      console.log (clicks)
    }else if (clicks === 2){
      
    }
  })



});


