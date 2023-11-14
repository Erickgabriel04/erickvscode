var Jogada_1, Jogada_2;


window.alert(' Bem vindo ao JOGO DA ADIVINHAÇÃO!');
window.alert(' Funciona da seguinte forma:');
window.alert(' "Jogador 1" escolhe um número entre 1 e 200.');
window.alert('  "Jogador 2" tenta adivinhar o número escolhido pelo oponente.');
window.alert('O jogo acaba quando o "Jogador 2" consegue adivinhar o número.');
window.alert('Algumas dicas são apresentadas se o jogador errar o número. Informando se a pedida foi muito baixa ou muito alta, em relação ao número escolhido pelo oponente.');
window.alert('O jogo vai começar. Boa sorte!');
Jogada_1 = window.prompt('Qual o seu nome?');
Jogada_2 = window.prompt('Qual o seu nome?');
Jogada_1 = Number(window.prompt(String(Jogada_1) + ', escolha um número de 1 a 200'));
Jogada_2 = Number(window.prompt(String(Jogada_2) + ', escolha um número de 1 a 200'));
while (Jogada_1 != Jogada_2) {
  if (Jogada_1 < Jogada_2) {
    window.alert('Número muito alto! Tente novamente.' + '');
  }
  if (Jogada_1 > Jogada_2) {
    window.alert('Número muito baixo! Tente novamente.' + '');
  }
  Jogada_2 = Number(window.prompt(' Escolha um número de 1 a 200'));
}
if (Jogada_1 == Jogada_2) {
  window.alert('Você acertou, parabéns! O número é:  ' + String(Jogada_1));
}