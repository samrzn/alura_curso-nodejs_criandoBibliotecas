import fs from 'fs';
import chalk from 'chalk';

function uploadArquivo(pathArquivo) {
    const encoding = 'utf-8';
    fs.readFile(pathArquivo, encoding, (_, text) => {
        // primeiro parâmetro sendo ignorado _ (por hora) é o "error" (tratamento de erro).
        console.log(chalk.greenBright.bgWhite(text))
    })
}

uploadArquivo('./arquivos/texto.md');