/* // Aula - Executando comandos

import uploadArquivo from "./index.js";

const caminhoFile = process.argv;

uploadArquivo(caminhoFile[2]);
// ********************************************************************************************************************************************************************************************
 */


// Aula - Organizando entradas e saídas

/* import uploadArquivo from "./index.js";
import chalk from "chalk";

const caminhoFile = process.argv;

async function printTexto(path) {
    const resultado = await uploadArquivo(path[2]);
    console.log(chalk.yellowBright.bgWhite('Lista de links:'), resultado);
}

// A partir de agora, toda exibição do texto (saída) no console é na função "printTexto" e o processamento
// do arquivo com a lógica de captura dos links (entrada) é separada no arquivo "index.js".

printTexto(caminhoFile);
// ********************************************************************************************************************************************************************************************
 */


// Aula - Processando diretórios

/* import uploadArquivo from "./index.js";
import fs from 'fs';
import chalk from "chalk";

const caminhoFile = process.argv;

function printTexto(resultado) {
    console.log(chalk.yellowBright.bgWhite('Lista de links:'), resultado);
}

async function printLista(args) {
    const path = args[2];

    if (fs.lstatSync(path).isFile()) {
        const resultado = await uploadArquivo(args[2]);
        printTexto(resultado);
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (file) => {
            const lista = await uploadArquivo(`${path}/${file}`);
            console.log(`${path}/${file}`); // imprime array conteúdo do parâmetro passado na função acima.
            printTexto(lista); // imprime na tela o conteúdo dos arrays/objeto retornados na const "lista".
        });
        console.log(files);
    }
}

// A partir de agora, a função "printTexto" verifica se a entrada é um arquivo ou diretório e executa o
// bloco de código "if" responsável por lidar com cada caso e processar o comando, retornando resultados.

printLista(caminhoFile);
// ********************************************************************************************************************************************************************************************
 */


// Aula - Tratando novos erros

import uploadArquivo from "./index.js";
import fs from 'fs';
import chalk from "chalk";

const caminhoFile = process.argv;

function printTexto(resultado, identificador = '') {
    console.log(
        chalk.yellowBright.bgWhite('Lista de links:'),
        chalk.black.bgGreenBright(identificador),
        resultado);
    // A partir de agora, a função renderiza o nome (identificador) de cada arquivo antes do array com links.
}

async function printLista(args) {
    const path = args[2];

    try {
        fs.lstatSync(path);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(chalk.bgRed.blackBright('Arquivo ou diretório não existe.'));
            return;
        }
        // Trata erro de diretório ou arquivo inexistente e retorna mensagem no console.
    }

    if (fs.lstatSync(path).isFile()) {
        const resultado = await uploadArquivo(args[2]);
        printTexto(resultado);
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (file) => {
            const lista = await uploadArquivo(`${path}/${file}`);
            console.log(`${path}/${file}`); // imprime array conteúdo do parâmetro passado na função acima.
            printTexto(lista, file); // imprime na tela o conteúdo (parâmetro "lista") dos arrays identificados por arquivo (parâmetro "file").
        });
        console.log(files);
    }
}

printLista(caminhoFile);

// Caminho relativo: ./arquivos/texto.md
// Caminho absoluto: C:/Users/n134389/Documents/alura_curso-nodejs_criandoBibliotecas/arquivos/texto.md
// "../" (sem aspas): sobe um nível na hierarquia de diretórios
// Lib "path" do Node.js permite manipular caminhos absolutos com melhor escalabilidade de uso.
// ********************************************************************************************************************************************************************************************



// Aula - Scripts

// A partir de agora o código pode ser executado por linha de comando através do script abaixo:
// npm run cli './caminhoDiretório/arquivo' ou './caminhoDiretório'