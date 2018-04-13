var ktory;
var ok = true;
var dane = "Zatwierdzic poniższe dane? \n";
patternImieNazwisko = /^[A-Z]{1}[a-zęółńżźćą]{1,25}$/; 
function sprawdzPole(pole_id,obiektRegex) {
	var obiektPole = document.getElementById(pole_id);
	if(!obiektRegex.test(obiektPole.value)) return (false);
	else return (true);
}
function sprawdz_radio(nazwa_radio) //sprawdza czy element typu "radio" jest zaznaczony
{
	var obiekt = document.getElementsByName(nazwa_radio);
	for (i = 0; i < obiekt.length;i++)
	{ 
		wybrany = obiekt[i].checked;
		if (wybrany) {ktory = i; return true; }
	}
	return false;
} 
function sprawdz_box(box_id) //sprawdza czy element typu "checkbox" jest zaznaczony
{
	var obiekt=document.getElementById(box_id);
	if (obiekt.checked) return true;
	else return false;
}
function sprawdz_zgodnosc(){
	var pass1 = document.getElementById('password').value;
	var pass2 = document.getElementById('password_repeat').value;
	if(pass1 === pass2) return true;
	else return false;

}
function sprawdzImie(){
	if (!sprawdzPole("name",patternImieNazwisko))
	{ 
		ok = false
		document.getElementById("name_err").innerHTML = "Imię musi zaczynać się od dużej litery!".fontcolor("red");
		document.getElementById("name_err").style.fontWeight = '700';
		document.getElementById("name").style.backgroundColor = "#ff3d32";
		$('#name').css("color","#fff");
	}
	else{
		ok = true;
		document.getElementById("name_err").innerHTML = "OK!".fontcolor("green");
		document.getElementById("name_err").style.fontWeight = '700';
		document.getElementById("name").style.backgroundColor = "#c0ff63";
		$('#name').css("color","#000");
	}
}
function sprawdzNazwisko(){
	if (!sprawdzPole("surname",patternImieNazwisko))
	{ 	
		ok = false
		document.getElementById("surname_err").innerHTML = "Nazwisko musi zaczynać się od dużej litery!".fontcolor("red");
		document.getElementById("surname_err").style.fontWeight = '700';
		document.getElementById("surname").style.backgroundColor = "#ff3d32";
		$('#surname').css("color","#fff");
	}
	else{
		ok = true;
		document.getElementById("surname_err").innerHTML = "OK!".fontcolor("green");
		document.getElementById("surname_err").style.fontWeight = '700';
		document.getElementById("surname").style.backgroundColor = "#c0ff63";
		$('#surname').css("color","#000");
	}
}
function sprawdzHaslo(){
	patternPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	if (!sprawdzPole("password",patternPassword)) 
	{ 
		ok = false;
		document.getElementById("password_err").innerHTML = "Hasło musi składać się z conajmniej 6 znaków, w tym liczby i znaku specjalnego".fontcolor("red");
		document.getElementById("password_err").style.fontWeight = '700';
		document.getElementById("password").style.backgroundColor = "#ff3d32";
		$('#password').css("color","#fff");
	}
	else{
		ok = true;
		document.getElementById("password_err").innerHTML = "OK!".fontcolor("green");
		document.getElementById("password_err").style.fontWeight = '700';
		document.getElementById("password").style.backgroundColor = "#c0ff63";
		$('#password').css("color","#000");	
	}
}
function sprawdzPoprawnosc(){
	if(sprawdz_zgodnosc()){	
		ok = true;
		document.getElementById("password_rep_err").innerHTML = "OK!".fontcolor("green");
		document.getElementById("password_rep_err").style.fontWeight = '700';
		document.getElementById("password_repeat").style.backgroundColor = "#c0ff63";
		$('#password_repeat').css("color","#000");
	}
	else{
		ok = false;
		document.getElementById("password_rep_err").innerHTML = "Wpisano inne hasło!".fontcolor("red");
		document.getElementById("password_rep_err").style.fontWeight = '700';
		document.getElementById("password_repeat").style.backgroundColor = "#ff3d32";
		$('#password_repeat').css("color","#fff");
	}
}
function sprawdzEmail(){
	patternEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)/;
	if (!sprawdzPole("email",patternEmail)) 
	{ 
		ok=false;
		document.getElementById("email_err").innerHTML = "Wpisz poprawnie email!".fontcolor("red");
		document.getElementById("email_err").style.fontWeight = '700';
		document.getElementById("email").style.backgroundColor = "#ff3d32";
		$('#email').css("color","#fff");
	}
	else{
		ok = true;
		document.getElementById("email_err").innerHTML = "OK!".fontcolor("green");	
		document.getElementById("email_err").style.fontWeight = '700';
		document.getElementById("email").style.backgroundColor = "#c0ff63";
		$('#email').css("color","#000");
	}
}
function sprawdz()
{
	if(ok){
		dane += "Imie: " + document.getElementById('name').value + "\n";
		dane += "Nazwisko: " + document.getElementById('surname').value + "\n";
		dane += "Hasło: ";
		for(i = 0; i < document.getElementById('password').value.length;i++){
			dane += "*";
		}
		dane += "\n";
		dane += "E-mail: " + document.getElementById('email').value + "\n";
	}
	if(sprawdz_radio("sex")){
		dane += "Płeć: ";
		if(ktory == 0 ){
			dane += "Kobieta\n";
		}else{
			dane += "Mężczyzna\n";
		}
	}
	var date = document.getElementById('date').value;
	var club = document.getElementById('club').value;
	dane += "Data urodzenia: " + date + "\n";
	if(sprawdz_box("tv")){
		dane += "Oglądam ligę hiszpańską w: TV \n";
	}
	if(sprawdz_box("internet")){
		dane += "Oglądam ligę hiszpańską w: Internecie\n";
	}
	if(sprawdz_box("live")){
		dane += "Oglądam ligę hiszpańską: Na żywo\n";
	}
	if(club != null){
		dane += "Kibicuję klubowi: " + club + "\n";
	}
	if(ok){
		
		if(window.confirm(dane)){
			sLocalStorage();
			return true;	
		}
		else return false;
	}
	else{
		return false;
	}
} 
function clr(){
	$('.right').text("");
	$('#name,#surname,#email,#password,#password_repeat').css("background-color","#fff");
}
var index = 1;
var ktory = 0;
function sLocalStorage(){
	var name = document.getElementById('name').value;
	var surname = document.getElementById('surname').value;
	var email = document.getElementById('email').value;
	var plec_radio = document.getElementsByName('sex');

	for (i = 0; i < plec_radio.length;i++)
	{ 
		wybrany = plec_radio[i].checked;
		if (wybrany) ktory = i;
	}

	var plec = document.getElementsByName('sex')[ktory].value;
	if(name && surname && email && plec){
		var item = {};
		item.name = name;
		item.surname = surname;
		item.email = email;
		item.sex = plec;
		localStorage.setItem('item'+index, JSON.stringify(item));
		index++;		
	} else {
		console.log("Ups! Mamy problem!");
	}
}
function setEditLocalStorage(){
	var name = document.getElementById('edit_name').value;
	var surname = document.getElementById('edit_surname').value;
	var email = document.getElementById('edit_email').value;
	var plec = document.getElementById('edit_plec').value;
	if(name && surname && email && plec){
		var item = {};
		item.name = name;
		item.surname = surname;
		item.email = email;
		item.sex = plec;
		localStorage.setItem('item'+index, JSON.stringify(item));
		index++;	
		/*document.getElementById('r').style.display = 'none';      	*/
		location.reload();
		confirm("Zmieniono dane");

	} else {
		console.log("Ups! Mamy problem!");
	}
}
function gLocalStorage(){

var tekst = "";
	for(let i = 1; i <= index; i++){
		let row = JSON.parse(localStorage.getItem('item'+i));
		tekst += "Dane osoby nr. " + i + "\nImię: " + row.name + "\nNazwisko: " + row.surname + "\nE-mail: " + row.email + "\nPłeć: " + row.sex +"\n";
		alert(tekst);
	}
}
function editLocalStorage(){
	$('#r').css('background-color', '#c5f271');
	$('#r').css('border', '1px solid #c5f271');
		
	var t = "";
	var list = document.getElementById('edit_field');
	for(let i = 1; i <= index; i++){
		let row = JSON.parse(localStorage.getItem('item'+i));
		let p = document.createElement("p");
		let li1 = document.createElement("li");
		let li2 = document.createElement("li");
		let li3 = document.createElement("li");
		let li4 = document.createElement("li");
		let li5 = document.createElement("li");
		p.innerHTML = "Dane osoby nr. " + i + "<br>";
		li1.innerHTML = 'Imię: ' + '<input id="edit_name" type="text" required pattern="^[A-Z]{1}[a-zęółńżźćą]{1,25}$/" value="' + row.name + '"><br>';
		li2.innerHTML = 'Nazwisko: ' + '<input id="edit_surname" reguired type="text" pattern="^[A-Z]{1}[a-zęółńżźćą]{1,25}$/" value="' + row.surname + '"><br>';
		li3.innerHTML = 'Płeć: ' + '<input id="edit_plec" required type="text" value="' + row.sex + '"><br>';
		li4.innerHTML = 'E-mail: ' + '<input id="edit_email" required type="email" value="' + row.email + '"><br>';
		li5.innerHTML = '<button class="button" onclick="setEditLocalStorage()" style="margin-top: 5px;">Zatwierdź</button><br>';
		list.appendChild(p);
		list.appendChild(li1);
		list.appendChild(li2);
		list.appendChild(li3);
		list.appendChild(li4);
		list.appendChild(li5);
	}
}
/*function buttonEnable(){
	document.getElementById('see').disabled = false;
	document.getElementById('edit').disabled = false;
	$('#see,#edit').css('background-color','#1e0142');
}*/