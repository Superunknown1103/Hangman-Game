Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 4;
Main.NumberInWordBank = Words.length;

Main.Word = "test";
Main.WordU = "";

// Functions Start Here

Main.PullWord = function(){
	Main.Word = Words.List[(Math.floor(Math.random()*Main.NumberInWordBank))];
}

Main.SetUnderline = function(){
	Main.PullWord();
	for(i=0; i<Main.Word.length; i++){
				Main.WordArray[i] = Main.Word.charAt(i);
				Main.WordUArray[i] = "_";
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementbyId("WORD").innerHTML = Main.WordU;
	document.getElementbyId("numLetters").innerHTML = Main.Word.length;
}

Main.SetUnderline;


