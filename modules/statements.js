
//Define un objeto que contenga las funciones
const statements = {};

//Define la función mayuscula (upperCase)
const upperCase = (a) => {
    return a.toUpperCase();
}

const lowerCase = (a) => {
    return a.toLowerCase();
}

const upperCaseSentence = (a,b) => {
    return a.toUpperCase() + ' ' + b.toUpperCase(); 
}

const lowerCaseSentence = (a,b) => {
    return a.toLowerCase() + ' ' + b.toLowerCase(); 
}

const firstUpper = (a,b) => {
    return a[0].toUpperCase() + a.substring(1).toLowerCase() + ' ' +
           b[0].toUpperCase() + b.substring(1).toLowerCase(); 
}

statements.upperCase = upperCase;
statements.lowerCase = lowerCase;
statements.upperCaseSentence = upperCaseSentence;
statements.lowerCaseSentence = lowerCaseSentence;
statements.firstUpper = firstUpper;
module.exports = statements;