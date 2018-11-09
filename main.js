// Step 1 - Select and Store all the card values in the HTML page.
const k = document.querySelectorAll('ul');
//console.log(k);

// Step 2 - Using "Walk the DOM" select and store all the card values in the first <ul>
const ul = document.querySelectorAll('ul');
let k1 = document.querySelectorAll('ul:first-child li');
console.log(k1);

// Step 3 - Using "Walk the DOM" select and store all the card values in the second <ul>
const ul2 = document.querySelectorAll('#secondRow');
let li2 = document.querySelector('ul2:first-child li');
//console.log(ul2.children);

// Step 4 -Select and store the #myFavouriteCard h3 element.
const h3 = document.querySelector("#myFavouriteCard");

// Step 5 - Iterate through the firstRow NodeList and change the background colour of each element to #3498db and the text colour to #fff.
k1.forEach(function (element) {
	element.style.backgroundColor = '#3498db';
	element.style.color = '#fff'
});

// Step 6 - Iterate through the secondRow NodeList and change the text to uppercase.
ul2.forEach(function (element) {
	element.textContent = element.textContent.toUpperCase();
})


// Step 7 - Create a new object with your first name as the object name. ie: const bob = {}
// Step 8 - Add the name and age properties with your name and age as values.
// Step 9 - Add a property called 'favCard' with one of the cards from the first or second row as the value. <strong>NOTE:</strong> You must access the card from the firstRow variable, not just type the value in.
const ravi = {name: 'ravi',
				value : '22',
				favCard : k1[0].textContent};

// Step 10 - Add the following as text content to the #myFavouriteCard element: `{name} is {age} years old and their favourite card is {favCard}.` replacing the {variable} with the appropriate values.
h3.textContent = `${ravi.name} is ${ravi.value} years old and their favourite card is ${ravi.favCard}.`;