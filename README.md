# WDI_Project_1
The-Rorschach-Memory-Test

Technologies used:
  html, php, javascript/jQuery, css

Approach:
This project is a twist on the classic game of memory. 
The players are faced with a selection of overturned cards. The front of each card represents half of an image based on the Rorschach test.
If a player gets a correct match the full image is displayed on their board and they get another go. If theuy don't get a match it is then the next player's turn.

Motivation:
This project is the first project of my Web Development Immersive course with General Assembly.

Code Example:
the most unique problem I encountered was matching and removing the 'half' images and replacing them with the 'full' images.
I solved this through keeping the image file paths similar and comparing the data through this:

var fullImages = [];
fullImages[0] = './images/full_images/full_image1.png';
fullImages[1] = './images/full_images/full_image2.png';
fullImages[2] = './images/full_images/full_image3.png';
fullImages[3] = './images/full_images/full_image4.png';
fullImages[4] = './images/full_images/full_image5.png';
fullImages[5] = './images/full_images/full_image6.png';
fullImages[6] = './images/full_images/full_image7.png';
fullImages[7] = './images/full_images/full_image8.png';
fullImages[8] = './images/full_images/full_image9.png';

var halfImages = []

halfImages [0] = 'left_image1', halfImages [1] = 'left_image2';
halfImages [2] = 'left_image3', halfImages [3] = 'left_image4';
halfImages [4] = 'left_image5', halfImages [5] = 'left_image6';
halfImages [6] = 'left_image7', halfImages [7] = 'left_image8';
halfImages [8] = 'left_image9', halfImages [9] = 'right_image1';
halfImages [10] ='right_image2', halfImages [11] ='right_image3';
halfImages [12] ='right_image4', halfImages [13] ='right_image5';
halfImages [14] ='right_image6', halfImages [15] ='right_image7';
halfImages [16] ='right_image8', halfImages [17] ='right_image9';

function checkCards (choice1, choice2){
  if (choice1.charAt(choice1.length-1) === choice2.charAt(choice2.length-1)){
    addFullCard();
    removeCard();
    addClickListener();
  }else{
    setTimeout(turnOverCard, 1000);
    nextTurn();
    playerCounter ++
  }
}

function addFullCard(){
  for (var i = fullImages.length -1; i >=0; i--){
      if((fullImages[i].charAt(fullImages[i].length-5)) == (firstCard.id.charAt(firstCard.id.length-1))){
        var htmlImg = "<img src='"+ fullImages[i] +"'>";
        $(currentPlayer).hide().append(htmlImg).fadeIn(3100);  
      }          
  }
  addClickListener();    
}

Unsolved Problems:
given the time constraints I was unable to implement a computer AI and build some of the info included in the instructions into the game functionality.