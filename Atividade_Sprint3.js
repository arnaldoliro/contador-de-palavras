const fs = require('fs')

// Teste com o async

// Esse bloco lê o arquivo

function leituraDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(arquivo, 'utf8', (err, data) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(data)
        })
    })
}

// Esse bloco separa as palavras do arquivo

function identificaPalavras(data) {
    palavras =  data.split(/\s+/)
    return palavras
}

// Esse bloco printa na tela quantas palavras o arquivo tem

async function contadorDePalavras(arquivo) {
    try {
        const data = await leituraDoArquivo(arquivo)
        const palavras = identificaPalavras(data);
        console.log(`O arquivo possui: ${palavras.length} palavras`)
    }
    catch(err) {
        console.log(err)
    }
}

// Teste sem o async

function contaPalavra(file) {
    fs.readFile(file, 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const words = result.split(/\s+/)
        console.log(`O arquivo possui: ${words.length} palavras!`)
    })
}

contadorDePalavras('Leitura_Sprint3.txt') // Com o async
contaPalavra('Leitura_Sprint3.txt') // Sem o async  