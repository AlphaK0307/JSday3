// Jaavascript closure

let subject = 'Javascript'

function homework(student){
    console.log(`${student}, did u  finish your ${subject} homework`)
}
homework('Keyur');

//scope can be nested

let hometown = "Chicago";
{
    var  state = "Illinois";
    let hometown = "Hanover Park"
    {
        console.log(`I am from ${hometown}, ${state}`)
    }
}
console.log(`I am from ${hometown}, ${state}`)



//functions scope cna be nested
