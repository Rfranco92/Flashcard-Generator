//what is required from other documents

var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var fs = require("fs");


//inquirer prompt Basic/Cloze cards
inquirer.prompt([
	{ 
      name: "cardType",
      type: "list",
      message: "Do you want to make a Basic Card, or a Cloze Card?",
      choices: ["Basic", "Cloze"]
    }  
   ])
.then(function(response){
	if(response.cardType === "Basic"){
		basicPrompt();
	}
	else{
		clozePrompt();
	}
})

//Prompt for building a basic card then appending it into the Basic Cards file.
function basicPrompt() {
	console.log("In order to make a Basic Card, you must create a question followed by an answer.")
	inquirer.prompt([
	{
		name:"basicQuestion",
		type: "input",
		message: "Please provide your question"
	},
	{
		name:"basicAnswer",
		type: "input",
		message: "Please provide your answer to your question"
	}
	]).then(function(resp){
		var newBasicCard = new basicCard (resp.basicQuestion, resp.basicAnswer);
		var fileCard = JSON.stringify(newBasicCard) + ", ";
		fs.appendFile("BasicCards", fileCard, function(err) {
  		// If an error was experienced we say it.
 		 if (err) {
    	console.log(err);
 		 }

  		else {
		console.log("new Card completed!");	
  		}
  		})
  		inquirer.prompt([
  			 {
  			 	type: "confirm",
  			 	name: "continue",
  			 	message: "Would you like to add another one?"
  			 }
  			]).then(function(resp){
  				if (resp.continue){
  				basicPrompt();
  				}
  				else{
  					console.log("Ok. Have a nice day!")
  				}
  			})
		})
}

//Prompt for building a Cloze Card, then appending it into a file.

function clozePrompt(){
	console.log("In order to make a Cloze Card, you must create a statement and the part you wish to delete")
	inquirer.prompt([
	{	
		name:"clozeQuestion",
		type: "input",
		message: "Please provide your statement"
	},
	{
		name:"clozeAnswer",
		type:"input",
		message: "Please provide the word or words you wish to delete"
	}
	]).then(function(resp){
		var newClozeCard = new clozeCard (resp.clozeQuestion, resp.clozeAnswer);
		if (newClozeCard.partial === newClozeCard.fullText){
	 		console.log ("You did not make a valid cloze card.")
		}
		else{
		var fileCard = JSON.stringify(newClozeCard) + ", ";
			

		fs.appendFile("ClozeCards", fileCard, function(err) {
  		// If an error was experienced we say it.
 		 if (err) {
    	console.log(err);
 		 }
 		 else{
		console.log("new card completed!")
 		 } 
  		})
  		} 
  		  inquirer.prompt([
  			 {
  			 	type: "confirm",
  			 	name: "continue",
  			 	message: "Would you like to add another one?"
  			 }
  			]).then(function(resp){
  				if (resp.continue){
  				clozePrompt();
  				}
  				else{
  					console.log("Ok. Have a nice day!")
  				}
  			})
	})
}
