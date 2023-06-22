/* // Aula - Executando comandos

import uploadArquivo from "./index.js";

const caminhoFile = process.argv;

uploadArquivo(caminhoFile[2]);
// ********************************************************************************************************************************************************************************************
 */


// Aula - Organizando entradas e saídas

import uploadArquivo from "./index.js";
import chalk from "chalk";

const caminhoFile = process.argv;

async function printTexto(path) {
    const resultado = await uploadArquivo(path[2]);
    console.log(chalk.yellowBright.bgWhite('Lista de links:'), resultado);
}

// A partir de agora, toda exibição do texto (saída) no console é na função "printTexto" e o processamento
// do arquivo com a lógica de captura dos links (entrada) é separada no arquivo "index.js".

printTexto(caminhoFile);