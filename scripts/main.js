var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc ==='images/4533134a9171492c09f7ef92.jpg'){
		myImage.setAttribute('src','images/c83d70cf3bc79f3dfcac6d96bba1cd11738b29c2.jpg')
	}
	else{
		myImage.setAttribute('src','images/4533134a9171492c09f7ef92.jpg')
	}
}

var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}