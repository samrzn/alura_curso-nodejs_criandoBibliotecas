// ***EXPLICAÇÃO DOS EXEMPLOS NA PASTA "ANOTAÇÕES DE AULAS" > "ALURA"

// Aula - Instalando dependências

/* import chalk from "chalk";

console.log(chalk.blue.bgWhite.bold('olá mundo!'));
console.log(chalk.yellowBright('A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.'));
console.log(chalk.blue('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'));
******************************************************************************************************************************************************************************************** 
*/


// Aula - A lib fs

/* import fs from 'fs';
import chalk from 'chalk';

function uploadArquivo(pathArquivo) {
    const encoding = 'utf-8';
    fs.readFile(pathArquivo, encoding, (_, text) => {
        // primeiro parâmetro sendo ignorado _ (por hora) é o "error" (tratamento de erro).
        console.log(chalk.green.bgWhiteBright(text));
    });
}

uploadArquivo('./arquivos/texto.md');
********************************************************************************************************************************************************************************************
 */


// Aula - Tratamento de erros

/* import fs from 'fs';
import chalk from 'chalk';

function treatErro(error) {
    console.log(error);
    throw new Error(chalk.red(error.code, 'Erro de diretório: arquivo não localizado.'));
    // ***Todo objeto "error" possui uma propriedade .code que especifica o erro do código***
}

function uploadArquivo(pathArquivo) {
    const encoding = 'utf-8';
    fs.readFile(pathArquivo, encoding, (error, text) => {
        if (error) {
            treatErro(error);
        }
        console.log(chalk.green.bgWhiteBright(text));
    });
}

uploadArquivo('./arquivos/');
 */


// Aula - Promessas

import fs from 'fs';
import chalk from 'chalk';

function treatErro(error) {
    console.log(error);
    throw new Error(chalk.red(error.code, 'Erro de diretório: arquivo não localizado.'));
}

function uploadArquivo(pathArquivo) {
    const encoding = 'utf-8';
    fs.promises.readFile(pathArquivo, encoding)
        .then((text) => console.log(chalk.green(text)))
        .catch(treatErro);
}

uploadArquivo('./arquivos/texto.md');