const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        console.log(`El parametro recibido: ${base}, no es un numero`.red);
        return;
    };
    if (!Number(limite)) {
        console.log(`El parametro recibido: ${limite}, no es un numero`.red);
        return;
    };
    console.log('========================'.green);
    console.log(`==Tabla del ${base} limite ${limite}==`.yellow);
    console.log('========================'.green);
    for (let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}`.blue); 
    };
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve,reject) => {

        if (!Number(base)) {
            reject(`El parametro recibido: ${base}, no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        };

        fs.writeFile(`salida/tabla-${base}.txt`, data, (err) => {
        if (err) 
            reject(err) 
        else
            resolve(`tabla-${base}.txt`.green)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
