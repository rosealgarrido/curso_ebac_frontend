"use strict";

var aluno = ['Fernando', 'Claudio'];
for (var i = 0; i < aluno; i++) {
  console.log(aluno[i]);
}
var aluno2 = aluno.map(function (itemAtual) {
  itemAtual = {
    aluno: itemAtual,
    nota: 4
  };
  return itemAtual;
});
aluno2.push({
  aluno: 'Rose',
  nota: 10
});
aluno2.push({
  aluno: 'Maria',
  nota: 8
});
aluno2.push({
  aluno: 'Priscila',
  nota: 7
});
console.log(aluno2);
var filtraAlunos = function filtraAlunos(aluno) {
  return aluno.nota >= 6;
};
var alunosQuePassaram = aluno2.filter(filtraAlunos);
console.log(alunosQuePassaram);