console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your Form Has Been Submitted");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let image = document.querySelector('.image1')

const addComment = () => {
	alert('You are squeaky clean')
}

image.addEventListener('mouseover', addComment)
