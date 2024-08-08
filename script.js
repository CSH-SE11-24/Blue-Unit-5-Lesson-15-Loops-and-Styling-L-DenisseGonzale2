console.log("Script running...");
// Task 1: All off button
// Select the all off button and console log to confirm you selected successfully
let offButton= document.querySelector("#clear")
console.log(offButton)
// Select all the lightbulb p tags and console log the length to confirm you selected successfully
let lightbulbs=document.querySelectorAll(".lightbulb")
console.log(lightbulbs.length)
// Add an event listener such that when the all off button is clicked, the background color of all the lightbulbs becomes black


  offButton.addEventListener("click", function(event){
	  for(let i=0;i<lightbulbs.length;i++){
	  lightbulbs[i].style.backgroundColor= "black";
  }
})
// Task 2: CSH Mode
// Select the CSH mode button and console log to confirm you selected successfully
let cshbutton=document.querySelector("#hello")
console.log(cshbutton)
// Make sure to add an ID so you can select this button


// Select the body and console log to confirm you selected successfully
let body=document.querySelector("body")

// Add an event listener such that when your mouse is over CSH mode button, the background color of body becomes green and the text of the lightbulb tags becomes "💻"
cshbutton.addEventListener("mouseover", function(event){
	body.style.backgroundColor="green";
	for(let p=0;p<lightbulbs.length;p++){
		lightbulbs[p].textContent="💻"
	}
	
})



// Add an event listener such that when your mouse is off CSH mode button, the background color of body becomes black again and the text of the lightbulb tags goes back to "💡"

cshbutton.addEventListener("mouseout", function(event){
	body.style.backgroundColor="black";
	for(let o=0;o<lightbulbs.length;o++){
		lightbulbs[o].textContent="💡"
	}

})


// Task 3: On and off features
// Add an event listener to each lightbulb such that when you click it, the background color of that p tag changes to white

for(let o=0;o<lightbulbs.length;o++){
lightbulbs[o].addEventListener("click", function(event){
		lightbulbs[o].style.backgroundColor="white";

})
}



// Extra credit: use classList and toggle to the lightbulb class to toggle on AND off when you click each lightbulb






