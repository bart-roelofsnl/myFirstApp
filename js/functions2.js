function fight(){

	document.getElementById("content").innerHTML="<p>You've made the dragon angry! Now he is gonna fight with you! Now what?! Will you be using your bow, shotgun or do you want to run?</p><button onclick='fightBow()'>Use my bow</button><button onclick='fightGun()'>Use my shotgun</button><button onclick='fightRun()'>Run!</button>";

}

function fightBow(){

	document.getElementById("content").innerHTML="<p>The arrow had burned by the flames of the dragon, so were you. You're a death man now. I'm sorry...</p><button onclick='reset()'>Try again</button>";
}

function fightGun(){

	document.getElementById("content").innerHTML="<p>The dragon was not prepared for this.. You have killed him and you are a free man now. Good job!</p><button onclick='reset()'>Try again</button>";
}

function fightRun(){

	document.getElementById("content").innerHTML="<p>You weren't faster as he with that big wings.. You ate you, I'm so sorry...</p><button onclick='reset()'>Try again</button>";
}


function feed(){

	document.getElementById("content").innerHTML="<p>He was really hungry, he likes your kindness and will bring you to Paris, London or Amsterdam. Where do you want do go?</p><button onclick='feedParis()'>Paris</button><button onclick='feedLondon()'>London</button><button onclick='feedAmsterdam()'>Amsterdam</button><button onclick='move()'>Stay here</button>";

}

function feedParis(){

	document.getElementById("content").innerHTML="<p>The dragon got stuck in the Eiffel Tower and you fell off! No way you could survive this, your life had ended here. I'm sorry...</p><button onclick='reset()'>Try again</button>";
}

function feedLondon(){

	document.getElementById("content").innerHTML="<p>The army thought the country was attacked by a dragon, they have launced several rockets right at you. Two of these rockets have killed you and the dragon. Nothing of your body is left, I'm sorry but you're a death man now...</p><button onclick='reset()'>Try again</button>";
}

function feedAmsterdam(){

	document.getElementById("content").innerHTML="<p>It was really bad weather so nobody could see you flying. You've survived the flight and I wish you a happy holliday in Amsterdam. Good job!</p><button onclick='reset()'>Try again</button>";
}


function move(){

	document.getElementById("content").innerHTML="<p>Nothing really happened.. But here you see a angry bird right in front of you, what are we gonna do? Fight, run or hide?</p><button onclick='moveFight()'>Fight!</button><button onclick='moveHide()'>Hide!</button><button onclick='moveRun()'>Run!</button>";

}

function moveFight(){

	document.getElementById("content").innerHTML="<p>The angry bird started launching other birds right at you, they hit you so hard that your head blew off your body. You are death now... I'm sorry...</p><button onclick='reset()'>Try again</button>";
}

function moveHide(){

	document.getElementById("content").innerHTML="<p>The angry bird was throwing other birds on every object in the area. You got stuck underneath some objects. He left and you died becouse you weren't able to eat or drink for too long. I'm sorry...</p><button onclick='reset()'>Try again</button>";
}

function moveRun(){

	document.getElementById("content").innerHTML="<p>You were faster than ever before! You're in a safe place now, and we wish you a great further future! Good job!</p><button onclick='reset()'>Try again</button>";
}

function reset(){

	document.getElementById("content").innerHTML="<p>A huge dragon is in front of you, what do you do?</p><button onclick='move()'>Keep walking</button><button onclick='fight()'>Attack the dragon!!</button><button onclick='feed()'>Feed the dragon</button>";
}