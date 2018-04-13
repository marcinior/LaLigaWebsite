function time(){
	var today = new Date();
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var day = today.getDay();
	var month = today.getMonth();
	var year = today.getFullYear();
console.log("aa" + today);
	var pozdro;
	if (hour >= 6 && hour < 12) {
		pozdro = 'Dzień dobry!<br>Jest godzina: ' + hour + ':' + minutes;
	} else if (hour >= 12 && hour < 18) {
		pozdro = 'Witaj!<br>Jest godzina: ' + hour + ':' + minutes;
	} else if (hour >= 18 && hour < 23){
		pozdro  = 'Dobry wieczór!<br>Jest godzina: ' + hour + ':' + minutes;
	} else if((hour >= 23 && hour < 24) || (hour >= 0 && hour < 6 )) {
		pozdro = 'Siema,czemu jeszcze nie spisz?<br>Jest już godzina: ' + hour + ':' + minutes;
	}
	if (day < 10) { day = '0' + day;}
	if (month < 10 ) { month = '0' + month;}
	if (hour < 10 ) { hour = '0' + hour;}
	if (minutes < 10 ) { minutes = '0' + minutes;}
	pozdro += '<br/>A dzisiejsza data to: ' + day + '.' + month + '.' + year + 'r.';
	document.getElementById('time').innerHTML = pozdro;
	setInterval("time()",60000);
}