//Wacky Conditions_James_Karolak_11-13-2013
//When do I call a cab when I have too much to drink?
//Ternary Operator equation
//Each unit equals a 12 oz beer
var beersPerhour = 3;
//Each unit equals one ounce
var liquorPerhour = 2;
//total 7 units per hour
var tooMuchAlcoholtodrive = 7;
//Time spent in hours at the Pub
var hoursDrinkingatPub = 3;
//Equation determining when too much is consumed
var waytooMuch = hoursDrinkingatPub * beersPerhour + liquorPerhour * hoursDrinkingatPub;
//identifying how many drinks you are over by
var overtheLimit = waytooMuch - tooMuchAlcoholtodrive;

(waytooMuch > tooMuchAlcoholtodrive) ? console.log("Call a cab. Do not drive car because you are "+overtheLimit+" drinks over your limit!") : console.log("You can still drink a bit longer - Please be carefull!")
