var quotes = [
'But man is not made for defeat. A man can be destroyed but not defeated. -Ernest Hemingway' ,
'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt' ,
'It is better to be feared than loved, if you cannot be both. -Niccolo Machiavelli'
]

/*
Above is an object containing a number of string.
*/

function newQuote() {
	var random = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[random];

}

/*
 *function is called newQuote(). furthermore, math.floor returns an integer. so if
 *math.floor(5.7) it will round it down to the nearest whole number which is 5. when the .random()
 *is included it will only return 0 due to the fact that there has not been any number that has been
 *inputted so the only available randoms are between 0 and 1. Since it will round everything down
 *to the nearest whole number it will return 0. we will times it by the length of the array. if we specified a
 *number larger than the size of the array it might go undefined. The getElementById allows
 *js to manipulate html code while also allowing for easy access.within the parenthesis is the id of our div. this equals
 *the quotes and in blocks will be the random variable so the objects can be randomized.
 */
