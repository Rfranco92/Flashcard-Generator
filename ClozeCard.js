function ClozeCard (fullText, cloze){
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = fullText.replace(this.cloze, "...") 
}



module.exports = ClozeCard;