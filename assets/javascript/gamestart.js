var dallas = {
    "answers": {
        "dirk" : "dirk nowizki",
        "tony" : "tony romo",
        "roger" : "roger staubach",
        "irvin": "michael irvin",
        "jason" : "jason terry"
    },
    "function": function game(){
        
    }
};
    


// storing a function inside "random" that returns the value of a random key from an object.
function ranObject (obj){

    // setting "something" to equal the keys of "answers" of the object. 
    var something = Object.keys(obj.answers);

    // setting "guess" to randomize the order of the keys
    var guess = Math.floor(Math.random() * something.length);

    // get the first key from the now randomized keys
    return obj.answers[something[guess]];
}
// creates a variable that returns a random value like "dirk nowizki or tony romo"
var thing = ranObject(dallas);
console.log(thing);
var spaces = "";

for (var i = 0; i < thing.length; i++){
    spaces += "_";
}