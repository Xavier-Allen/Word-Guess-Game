// storing a function inside "random" that returns the value of a random key from an object.
var random = function ranObject (obj){

    // setting "something" to equal the keys of "answers" of the object. 
    var something = object.keys(obj.answers);

    // setting "guess" to randomize the order of the keys
    var guess = Math.floor(Math.random() * something.length);

    // get the first key from the now randomized keys
    return guess[0];
}

for (var i = 0; i < random.length; i++){
    
}