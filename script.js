function volume_sphere(e) {
	e.preventDefault();
    //Write your code here
	let radius = document.getElementById("radius").value;

	// By default whatever we take input from frontend ,
	// It comes in string from . So whenever we want to take input 
	// of number we have to convert string input in number .

	radius = Number(radius);

	if(isNaN(radius) || radius < 0){
		document.getElementById("volume").value = NaN;
		return false;
	}

	let volume = (4/3) * Math.PI *Math.pow(radius,3);
	// It keeps value till 4 decimal number 
	volume = volume.toFixed(4);

	document.getElementById("volume").value = volume;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;


// function volume_sphere(e) {
// //Write your code here
// e.preventDefault();
// let radius = document.getElementById("radius").value;


// radius = Number(radius);

// if(isNaN(radius) || radius < 0) {
// 	document.getElementById("volume").value = NaN;
// 	return false;
// }

// let volume = (4/3) * Math.PI * Math.pow(radius, 3);

// volume = volume.toFixed(4);

// document.getElementById("volume").value = volume;


// }
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

































// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;