var x = "";

function bopen(){
	x += "(";
	document.getElementById("get").innerHTML = x;
	
}

function bclose(){
	x += ")";
	document.getElementById("get").innerHTML = x;
	
}

function bc(){
	x = "" ;
	document.getElementById("get").innerHTML = x;
	
}

function btrans(){
	t = document.getElementById("change");
	t.href = "css/calculator2.css";
}
function bret(){
	r = document.getElementById("change");
	r.href = "css/calculator.css";
}
function bclr(){
	x = "" ;
	var i = document.getElementById("put");
	i.value = document.getElementById("put").innerHTML = x;
	
}

function bequals(){
	i = document.getElementById("put");
	y = i.value;
	x = eval(y)
	i.value = document.getElementById("put").innerHTML = x;
	
}

function bops(){
	x = document.getElementById("h");
	x.className = "reveal";
	var btn = document.getElementById("dis");
	btn.addEventListener("click", bdis);
	btn.removeEventListener("click", bops);
}

function bdis(){
	x = document.getElementById("h");
	x.className = "hidden";
	var bt = document.getElementById("dis");
	bt.addEventListener("click", bops);
	bt.removeEventListener("click", bdis);
}

function bpluss(){
	i = document.getElementById("put");
	y = i.value;
	i.value = document.getElementById("put").innerHTML = y + "+";
	//x = Number(x);
	//document.getElementById("get").innerHTML = "+";
	
}

function bminuss(){
	i = document.getElementById("put");
	y = i.value;
	i.value = document.getElementById("put").innerHTML = y + "-";
	
}

function btimess(){
	i = document.getElementById("put");
	y = i.value;
	i.value = document.getElementById("put").innerHTML = y + "*";
	
}
function bdivides(){
	i = document.getElementById("put");
	y = i.value;
	i.value = document.getElementById("put").innerHTML = y + "/";
	
}

function b1(){
	x += 1;
	document.getElementById("get").innerHTML = x;
	
}

function b2(){
	x += 2;
	document.getElementById("get").innerHTML = x;
	
}

function b3(){
	x += 3;
	document.getElementById("get").innerHTML = x;
}

function b4(){
	x += 4;
	document.getElementById("get").innerHTML = x;
	
}

function b5(){
	x += 5;
	document.getElementById("get").innerHTML = x;
	
}

function b6(){
	x += 6;
	document.getElementById("get").innerHTML = x;
	
}

function b7(){
	x += 7;
	document.getElementById("get").innerHTML = x;
	
}

function b8(){
	x += 8;
	document.getElementById("get").innerHTML = x;
	
}

function b9(){
	x += 9;
	document.getElementById("get").innerHTML = x;
	
}

function b0(){
	x += 0;
	document.getElementById("get").innerHTML = x;
	
}

function bplus(){
	x += "+";
	document.getElementById("get").innerHTML = x;
	//x = Number(x);
	//document.getElementById("get").innerHTML = "+";
	
}

function bminus(){
	x += "-";
	document.getElementById("get").innerHTML = x;
	
}

function btimes(){
	x += "*";
	document.getElementById("get").innerHTML = x;
	
}
function bdivide(){
	x += "/";
	document.getElementById("get").innerHTML = x;
	
}
function bpoint(){
	x += ".";
	document.getElementById("get").innerHTML = x;
	
}
function bequal(){
	 var y = eval(x);
	document.getElementById("get").innerHTML = y;
	
}