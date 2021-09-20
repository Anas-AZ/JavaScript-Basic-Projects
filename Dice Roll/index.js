// 1st random number
var n1=Math.random();
var dice_no1=Math.floor(n1*6+1);
//console.log(dice_no);

// set the left dice
var left=document.querySelector(".img1");
var url1=`images/dice${dice_no1}.png`;
left.setAttribute("src",url1);

//2nd random number
var  n2=Math.random();
var dice_no2=Math.floor(n2*6+1);

//set the right dice
var right=document.querySelector(".img2");
var url2=`images/dice${dice_no2}.png`;
right.setAttribute("src",url2);

 //change the heading text
var heading=document.querySelector(".container h1");

 function whoWins(n1,n2){
    
     if(n1>n2)
     return "🚩 Player 1 wins";
     else if(n2>n1)
     return "Player 2 wins 🚩";
     else
     return "Draw !";


 }


 heading.textContent=whoWins(dice_no1,dice_no2);
//console.log(whoWins(dice_no1,dice_no2));
