//Increment Button

let incrementButton = document.querySelector("#increment"); 
let decrementButton = document.querySelector("#decrement"); 
let counter = document.querySelector("#counter"); 

incrementButton.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue = Number(counter.innerHTML) + 1;

    if(newCounterValue >= 10) {         
      counter.style.color = "red";
    }

    counter.innerHTML = newCounterValue;
  })

  //Decrement Button

  decrementButton.addEventListener("click", function() {
    console.log("- button clicked");
    let newCounterValue = Number(counter.innerHTML) - 1;
    
    if(newCounterValue <= -10) {
      counter.style.color = "purple";
    }
   
      counter.innerHTML = newCounterValue;
    
  })