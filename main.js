function getHistory() {
    return document.getElementById("historyValue").innerHTML;
}
function prinHistory(num) {
	document.getElementById("historyValue").innerHTML=num;
	
}
printHistory(10);

