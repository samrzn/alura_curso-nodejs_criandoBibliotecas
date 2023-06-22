import uploadArquivo from "./index.js";

const caminhoFile = process.argv;

uploadArquivo(caminhoFile[2]);