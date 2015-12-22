var bbd = new Playlist();

var dope = new Song("She's Dope", "	Bell Biv DeVoe", "4:41");
var word = new Song("Word To The Mutha!", "	Bell Biv DeVoe", "6:37");
var poison = new Song("Poison", "	Bell Biv DeVoe", "6:16");

bbd.add(dope);
bbd.add(word);
bbd.add(poison);

var playlistElement = document.getElementById("playlist");

bbd.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function(){
	bbd.play();
	bbd.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
playButton.onclick = function(){
	bbd.next();
	bbd.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
playButton.onclick = function(){
	bbd.stop();
	bbd.renderInElement(playlistElement);
}
