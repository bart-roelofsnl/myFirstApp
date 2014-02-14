function fight(){

	var result = prompt("You've made the dragon angry! Now he is gonna fight with you! Now what?! Will you be using your bow, shotgun or do you want to run? Enter 'bow', 'shotgun' or 'run'");
	
	if(result == "bow"){
	
	alert("The arrow had burned by the flames of the dragon, so were you. You're a death man now. I'm sorry...");

	}
	else if(result == "run"){
	alert("You weren't faster as he with that big wings.. You ate you, I'm so sorry...");
	}
	else if(result == "shotgun"){
	alert("The dragon was not prepared for this.. You have killed him and you are a free man now. Good job!");
	}
	else{
	
	alert("Please try again. Enter the suggested anwsers without quotes.");
	
	}
}

function feed(){

	var result = prompt("He was really hungry, he likes your kindness and will bring you to Paris, London or Amsterdam. Where do you want do go? Enter 'amsterdam', 'london' or 'paris'");

	if(result == "paris"){
	
	alert("The dragon got stuck in the Eiffel Tower and you fell off! No way you could survive this, your life had ended here. I'm sorry...");

	}
	else if(result == "london"){
	
	alert("The army thought the country was attacked by a dragon, they have launced several rockets right at you. Two of these rockets have killed you and the dragon. Nothing of your body is left, I'm sorry but you're a death man now...");
	}
	
	else if(result == "amsterdam"){
	
	alert("It was really bad weather so nobody could see you flying. You've survived the flight and I wish you a happy holliday in Amsterdam. Good job!");
	
	}
	else{
	
	alert("Please try again. Enter the suggested anwsers without quotes.");
	
	}
	
}

function move(){

	var result = prompt("Nothing really happened.. But here you see a angry bird right in front of you, what are we gonna do? Fight, run or hide? Enter 'fight', 'run' or 'hide'.");

	if(result == "fight"){
	
	alert("The angry bird started launching other birds right at you, they hit you so hard that your head blew off your body. You are death now... I'm sorry...");

	}
	else if(result == "run"){
	
	alert("You were faster than ever before! You're in a safe place now, and we wish you a great further future! Good job!");
	
	}
	
	else if(result == "hide"){
	
	alert("The angry bird was throwing other birds on every object in the area. You got stuck underneath some objects. He left and you died becouse you weren't able to eat or drink for too long. I'm sorry...");
	
	}
	else{
	
	alert("Please try again. Enter the suggested anwsers without quotes.");
	
	}
	
	
}