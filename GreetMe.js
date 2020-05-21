var greet = function(name) {
    return `Hello ${name.split(' ').map(i=>i[0].toUpperCase()+i.substr(1).toLowerCase()).join(' ')}!`
};

/*

Write a method that takes one argument as name and then 
greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

*/