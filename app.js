//Importación de paquetes de terceros
require('colors');

//Importación paquetes desarrollados para App
const statements = require('./modules/statements');


const main = async() => {

    console.clear();

    let nomApre = 'oRlanDO';
    let apeApre = 'CasTRO';


    console.log('*******************************'.green);
    console.log('*     '.green,'Gestionar Textos'.bgGreen,'      *'.green);
    console.log('*******************************\n'.green);
    console.log('*******************************'.cyan); 
    console.log('*                             *'.cyan); 
    console.log(`Nombre Original: ${nomApre}`);
    console.log(`Apellido Original: ${apeApre}`);
    console.log('Nombre: ' + statements.upperCase(nomApre) + ' ' + 
                'Apellido: ' + statements.upperCase(apeApre));
    console.log('Nombre: ' + statements.lowerCase(nomApre) + ' ' + 
                'Apellido: ' + statements.lowerCase(apeApre));
    console.log('Nombre Completo: ' + 
                statements.upperCaseSentence(nomApre, apeApre));
    console.log('Nombre Completo: ' + 
                statements.lowerCaseSentence(nomApre,apeApre));
    console.log('Nombre Completo: ' + statements.firstUpper(nomApre,apeApre));

    let nombreAprendiz = statements.firstUpper(nomApre,apeApre);
    
    statements.quitarIzquierdaNombreCompleto(nomApre,apeApre);

    for (let i = (nombreAprendiz.length - 1) ; i >= 0; i--) {
        console.log(nombreAprendiz.substring(i));
    }

    otra = Array.from(nombreAprendiz);
    otra.forEach(element => {
        console.log(element);
    });
}

main();
