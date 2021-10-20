var allButtons = document.querySelectorAll(".drum");

function playAudio(key)
{
	var audio;

	switch(key)
	{
		case "w": audio = new Audio("sounds/tom-1.mp3");break;
		case "a": audio = new Audio("sounds/tom-2.mp3");break;
		case "s": audio = new Audio("sounds/tom-3.mp3");break;
		case "d": audio = new Audio("sounds/tom-4.mp3");break;
		case "j": audio = new Audio("sounds/crash.mp3");break;
		case "k": audio = new Audio("sounds/snare.mp3");break;
		case "l": audio = new Audio("sounds/kick-bass.mp3");break;
	}

	audio.play();
}

function buttonAnimation(key)
{
	var button = document.querySelector("." + key);
	button.classList.add("pressed");

	setTimeout(function ()
	{
		button.classList.remove("pressed");
	}, 100);
}

for (var i = 0; i < allButtons.length; i++) {
	allButtons[i].addEventListener("click", function ()
	{
		var key = this.innerHTML;
		playAudio(key);
		buttonAnimation(key);
	});
}


document.addEventListener("keypress", function (event)
{
	var key = event.key;
	playAudio(key);
	buttonAnimation(key);
});


