
document.getElementById("u").addEventListener("click",n1);
document.getElementById("d").addEventListener("click",n2);
document.getElementById("t").addEventListener("click",n3);
document.getElementById("c").addEventListener("click",n4);
document.getElementById("ci").addEventListener("click",n5);
document.getElementById("s").addEventListener("click",n6);
document.getElementById("si").addEventListener("click",n7);
document.getElementById("oc").addEventListener("click",n8);
document.getElementById("nu").addEventListener("click",n9);
document.getElementById("cer").addEventListener("click",n0);
document.getElementById("suma").addEventListener("click",o1);
document.getElementById("resta").addEventListener("click",o2);
document.getElementById("divis").addEventListener("click",o3);
document.getElementById("multi").addEventListener("click",o4);
document.getElementById("igu").addEventListener("click",showResult);

function n1() {
    let actual = document.getElementById('entrada').innerHTML;
    console.log(actual);
    let sumado = document.getElementById("u").innerHTML;
    console.log(suma);
     var jeje = document.getElementById('entrada').innerHTML = actual + sumado
    console.log(jeje);
}
function n2() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("d").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}
function n3() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("t").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}
function n4() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("c").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}
function n5() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("ci").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}
function n6() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("s").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}
function n7() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("si").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}
function n8() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("oc").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}
function n9() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("nu").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}
function n0() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("cer").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}

function o1() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("suma").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}

function o2() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("resta").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}

function o3() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("divis").innerHTML;
	document.getElementById('entrada').innerHTML = actual + sumado
}

function o4() {
	let actual = document.getElementById('entrada').innerHTML;
	let sumado = document.getElementById("multi").innerHTML;
	document.getElementById('entrada').innerHTML = actual +  sumado
}

function showResult() {
    let actual = document.getElementById('entrada').innerHTML;
    console.log(actual);
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("÷");
	let mult = actual.indexOf("x");
	if (suma !== -1) {
		arr = actual.split("+",2);
		res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("entrada").innerHTML = res;
	} else if (resta !== -1) {
		arr = actual.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("entrada").innerHTML = res;
		
	} else if (div !== -1) {
		arr = actual.split("÷",2);
		res = arr[0] / arr[1];
		document.getElementById("entrada").innerHTML = res;
		
	} else if (mult !== -1) {
		arr = actual.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("entrada").innerHTML = res;
		
	}
}











