// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
let current_position =  parseInt(dodger.style.left);
function moveDodgerLeft(){
    
    let current_position =  parseInt(dodger.style.left);

    if(current_position > 0){
       
        dodger.style.left = `${current_position - 10}px`
        
    } 
}

function moveDodgerRight(){
    let current_position =  parseInt(dodger.style.left);
   
    if(current_position < 400 ){
        console.log("moving right")
        dodger.style.left = `${current_position + 10}px`
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    }else if (e.key === "ArrowRight"){
        moveDodgerRight()
    }
  });