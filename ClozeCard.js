function ClozeCard (fullText, cloze){
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = fullText.replace(this.cloze, "...")

	if (this.partial === this.fullText){
	 console.log ("You did not make a valid cloze card.")
	} 
}


var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
