Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 5;
Main.NumInWordBank = Words.length;

Main.Word = "test";
Main.WordU = "";

// Functions Start Here

Main.PullWord = function(){
	Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];
}

Main.SetUnderline = function(){
	Main.PullWord();
	for(i=0; i<Main.Word.length; i++){
				Main.WordArray[i] = Main.Word.charAt(i);
				Main.WordUArray[i] = "_";
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("WORD").innerHTML = Main.WordU;
	document.getElementById("numLetters").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(letter){
	Main.Changes = 0;
	for(i=0; i<Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		if(Main.Word.charAt(i) == letter){
			Main.WordUArray[i] = letter;
			Main.Changes += 1;
	}
}
	if(Main.Changes < 1){
		Main.Lives -=1;
		document.getElementById("lives").innerHTML = Main.Lives;
	}

	Main.WordU = Main.WordUArray.join("");
	document.getElementById("WORD").innerHTML = Main.WordU;

Main.Word1 = Main.WordArray.join("");
Main.Word2 = Main.WordUArray.join("");

if(Main.Word1 == Main.Word2){
	alert("You won!");
}

if(Main.Lives < 1){
	document.getElementById("WORD").innerHTML == Main.Word1;
	alert("You died.")
	;
}
}

a.onclick = function(){Main.UpdateLetter('a');
document.getElementById("a").disabled = true;
document.getElementById("a").style.color = "black"};
b.onclick = function(){Main.UpdateLetter('b');
document.getElementById("b").disabled = true;
document.getElementById("b").style.color = "black"};
c.onclick = function(){Main.UpdateLetter('c');
document.getElementById("c").disabled = true;
document.getElementById("c").style.color = "black"};
d.onclick = function(){Main.UpdateLetter('d');
document.getElementById("d").disabled = true;
document.getElementById("d").style.color = "black"};
e.onclick = function(){Main.UpdateLetter('e');
document.getElementById("e").disabled = true;
document.getElementById("e").style.color = "black"};
f.onclick = function(){Main.UpdateLetter('f');
document.getElementById("f").disabled = true;
document.getElementById("f").style.color = "black"};
g.onclick = function(){Main.UpdateLetter('g');
document.getElementById("g").disabled = true;
document.getElementById("g").style.color = "black"};
h.onclick = function(){Main.UpdateLetter('h');
document.getElementById("h").disabled = true;
document.getElementById("h").style.color = "black"};
i.onclick = function(){Main.UpdateLetter('i');
document.getElementById("i").disabled = true;
document.getElementById("i").style.color = "black"};
j.onclick = function(){Main.UpdateLetter('j');
document.getElementById("j").disabled = true;
document.getElementById("j").style.color = "black"};
k.onclick = function(){Main.UpdateLetter('k');
document.getElementById("k").disabled = true;
document.getElementById("k").style.color = "black"};
l.onclick = function(){Main.UpdateLetter('l');
document.getElementById("l").disabled = true;
document.getElementById("l").style.color = "black"};
m.onclick = function(){Main.UpdateLetter('m');
document.getElementById("m").disabled = true;
document.getElementById("m").style.color = "black"};
n.onclick = function(){Main.UpdateLetter('n');
document.getElementById("n").disabled = true;
document.getElementById("n").style.color = "black"};
o.onclick = function(){Main.UpdateLetter('o');
document.getElementById("o").disabled = true;
document.getElementById("o").style.color = "black"};
p.onclick = function(){Main.UpdateLetter('p');
document.getElementById("p").disabled = true;
document.getElementById("p").style.color = "black"};
q.onclick = function(){Main.UpdateLetter('q');
document.getElementById("q").disabled = true;
document.getElementById("q").style.color = "black"};
r.onclick = function(){Main.UpdateLetter('r');
document.getElementById("r").disabled = true;
document.getElementById("r").style.color = "black"};
s.onclick = function(){Main.UpdateLetter('s');
document.getElementById("s").disabled = true;
document.getElementById("s").style.color = "black"};
t.onclick = function(){Main.UpdateLetter('t');
document.getElementById("t").disabled = true;
document.getElementById("t").style.color = "black"};
u.onclick = function(){Main.UpdateLetter('u');
document.getElementById("u").disabled = true;
document.getElementById("u").style.color = "black"};
v.onclick = function(){Main.UpdateLetter('v');
document.getElementById("v").disabled = true;
document.getElementById("v").style.color = "black"};
w.onclick = function(){Main.UpdateLetter('w');
document.getElementById("w").disabled = true;
document.getElementById("w").style.color = "black"};
x.onclick = function(){Main.UpdateLetter('x');
document.getElementById("x").disabled = true;
document.getElementById("x").style.color = "black"};
y.onclick = function(){Main.UpdateLetter('y');
document.getElementById("y").disabled = true;
document.getElementById("y").style.color = "black"};
z.onclick = function(){Main.UpdateLetter('z');
document.getElementById("z").disabled = true;
document.getElementById("z").style.color = "black"};


Main.PullWord();
Main.SetUnderline();


