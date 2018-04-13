var licznik = 0;
var rekord = -1;

function rzuc(){


	var z1 = document.getElementById('z1');
	var z2 = document.getElementById('z2');
	var z3 = document.getElementById('z3');
	r1 = Math.floor(Math.random()*6+1);
	r2 = Math.floor(Math.random()*6+1);
	r3 = Math.floor(Math.random()*6+1);
	
	licznik++;
	ustawPole(r1,z1);
	ustawPole(r2,z2);
	ustawPole(r3,z3);

	if ((r1 == r2) && (r2 == r3)) {
		document.getElementById('combo').innerHTML = 'WYGRANA!!';
		if (rekord == -1) rekord = licznik;
		else if (licznik < rekord)   rekord = licznik;
		if (rekord != -1) {
			document.getElementById('record').innerHTML = rekord;
			licznik=0;	
		}

	}else{
		document.getElementById('combo').innerHTML = 'Niestety,nie tym razem!';
	}
	document.getElementById('licznik').innerHTML = licznik;

}
function ustawPole(random,pole){
	a = "Image/3.png";
	b = "Image/4.png";
	c = "Image/15.png";
	d = "Image/17.png";
	e = "Image/19.png";
	f = "Image/20.png";
	switch(random){
		case 1:
		pole.src = a;
		break;
		case 2:
		pole.src = b;
		break;
		case 3:
		pole.src = c;
		break;
		case 4:
		pole.src = d;
		break;
		case 5:
		pole.src = e;
		break;
		case 6:
		pole.src = f;
		break
	}
}