const form = document.getElementById('form-atividade')

let linhas = '';


const qntNomes = [];





form.addEventListener('submit', function(e) {

    e.preventDefault();

    adicionaLinha();
    atualizaLinha();
    adicionaQuantidade();
    atualizaRegistros();

})

function adicionaLinha(){

    const nome = document.getElementById('nome');
    const tel = document.getElementById('tel');

    qntNomes.push(parseInt(nome.value));

    let linha = '<tr>';

    linha += `<td>${nome.value}</td>`;
    linha += `<td>${tel.value}</td>`;
    linha += '</tr>';

    linhas += linha;

}

function atualizaLinha() {
    const corpoTabela = document.getElementById('tbody');

    corpoTabela.innerHTML = linhas;

    nome.value = '';
    tel.value = '';

}

function adicionaQuantidade(){

    let registro = 0;
    for(let i = 0; i < qntNomes.length; i++) {

        registro += qntNomes[i];


    }

}

function atualizaRegistros() {
    const qntRegistros = document.getElementById('tfoot');

    
    qntRegistros.innerHTML = `Quantidade de registros: ${qntNomes.length}`;
  


    qntRegistros.innerHTML = reg


}





