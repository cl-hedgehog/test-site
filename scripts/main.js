 /*
 var myHeading = document.querySelector('h1');
 myHeading.textContent = 'Hello world!';
 var myVar;
 
 // Another comment too.
 var iceCream = 'chocolate';
 if (iceCream === 'chocolate'){
 	alert('Yay, I love chocolate ice cream!');
 } else {
 	alert('Awww, but chocolate is my favoriate...');
 }

function multiply(num1, num2){
	var result = num1 * num2;
	return result;
}
*/
let myVariable = 'lilei and meimei';
myVariable = 'poly';
if(myVariable === 'poly'){
    alert('I am a bird');
}else{
	alert('Are you kidding me');
}
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozilla.jpeg'){
    	myImage.setAttribute('src', 'images/google_news_icon.png');
    }else{
		myImage.setAttribute('src', 'images/mozilla.jpeg');
    }
}

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
function setUserName() {
	// body...
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')){
   setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function(){
	setUserName();
}