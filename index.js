

//TO UPPERCASE

var btn = document.getElementById('btnText');

btn.onclick = function () {
	var inp = document.getElementById('inpText').value;
	
	if (isNaN(inp)) {
		upper(inp);
	} else {
		document.getElementById('Text').innerHTML = 'Введіть будь ласка строку';
	}
}

function upper (inpu) {
	var str = inpu.toUpperCase();
	document.getElementById('Text').innerHTML= str;
}




//CHARAT

var bbt = document.getElementById('index');

bbt.onclick = function () {
	var inp = document.getElementById('inpText').value;
	
	if (isNaN(inp)) {
	indexOf(inp)
	} else {
		document.getElementById('ind').innerHTML = 'Введіть будь ласка строку';
	}
}



function indexOf (arg) {
	var inOf = arg.charAt(1);
	document.getElementById('ind').innerHTML=inOf;

}





var butt = document.getElementById('toLower');

butt.onclick = function () {
	var inp = document.getElementById('inpText').value;
	
	if (isNaN(inp)) {
		lower(inp)
	} else {
		document.getElementById('toLowertext').innerHTML = 'Введіть будь ласка строку';
	}
}

function lower(low) {
	var lawr = low.toLowerCase();
	document.getElementById('toLowertext').innerHTML=lawr;

}


//NUMBER



var button = document.getElementById('numbt');
button.onclick=function () {
	var inpnum = document.getElementById('in_number').value;
	
	if (Number(inpnum)) {
	numm(inpnum)
	} else {
		document.getElementById('numText').innerHTML = 'Введіть будь ласка число';
	}
}
function numm(aaa) {
	var resul = Math.round(aaa);
	document.getElementById('numText').innerHTML=resul;
}




var butn = document.getElementById('rondom');
butn.onclick=function() {
	var inpnum = document.getElementById('in_number').value;
	
	if (Number(inpnum)) {
			ronDom(inpnum)
	} else {
		document.getElementById('rondomText').innerHTML = 'Введіть будь ласка число';
	}
}
function ronDom(ron) {
	var Ron = Math.random(ron);
	document.getElementById('rondomText').innerHTML = Ron;
}





var bbb = document.getElementById('sqrt');

bbb.onclick=function() {
	var inpnum = document.getElementById('in_number').value;
	
	if (Number(inpnum)) {
		sqr(inpnum)
	} else {
		document.getElementById('sqrtText').innerHTML = 'Введіть будь ласка число';
	}
}
function sqr(qqq) {
	var sqt = Math.sqrt(qqq);
	document.getElementById('sqrtText').innerHTML = "Квадратный корень:" + sqt;
}