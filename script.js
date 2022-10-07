/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-param-reassign */
// add uma ol
const ol = document.createElement('ol');
ol.id = 'lista-tarefas';
document.querySelector('#pai').appendChild(ol);

// add um botão add tarefa
const botao = document.createElement('button');
botao.id = 'criar-tarefa';
botao.className = 'adicionar';
botao.innerText = 'Adicionar';
document.querySelector('#pai2').appendChild(botao);

// função listar tarefa
function creatList() {
  const input = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');

  const li = document.createElement('li');

  li.innerText = input.value;
  li.id = 'list-taref';
  li.className = ' listnis';
  if (input.value) {
    list.appendChild(li);
  } else {
    alert('Por favor adicione uma Tarefa');
  }

  input.value = '';
}
const buton = document.querySelector('#criar-tarefa');
buton.addEventListener('click', creatList);

// criar cor de fundo da lista
function colorFundo(event) {
  const lis = document.getElementsByTagName('li');
  for (let index = 0; index < lis.length; index += 1) {
    const lis2 = lis[index];
    lis2.removeAttribute('style');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}
const list = document.querySelector('#lista-tarefas');
list.addEventListener('click', colorFundo);

// criar tarefa riscada
function duploClik(event) {
  const clas = event.target;
  if (clas.classList.contains('completed')) {
    clas.classList.remove('completed');
  } else {
    clas.classList.add('completed');
  }
}
const duplo = document.querySelector('#lista-tarefas');
duplo.addEventListener('dblclick', duploClik);

// add um botão limpar list tarefa
const botao2 = document.createElement('button');
botao2.id = 'apaga-tudo';
botao2.className = 'limparTudo';
botao2.innerText = 'Limpar tudo';
document.querySelector('#pai3').appendChild(botao2);

// funçõa limpar lista;
// Pesquisei na https://www.w3schools.com/ para plicar  removeChild nesta função;
function clear() {
  const limp = document.getElementById('lista-tarefas');
  while (limp.hasChildNodes()) {
    limp.removeChild(limp.firstChild);
  }
}

const apagar = document.querySelector('#apaga-tudo');
apagar.addEventListener('click', clear);

// add um botão limpar tarefa finalizadas.
const botao3 = document.createElement('button');
botao3.id = 'remover-finalizados';
botao3.className = 'limpar-finalizados';
botao3.innerText = 'Limpar Finalizados';
document.querySelector('#pai3').appendChild(botao3);

// função remover finalizados
function removeFinal() {
  const remo2 = document.querySelectorAll('.completed');
  for (let index = 0; index < remo2.length; index += 1) {
    const fina = remo2[index];
    fina.remove();
  }
}

const remover = document.querySelector('#remover-finalizados');
remover.addEventListener('click', removeFinal);
