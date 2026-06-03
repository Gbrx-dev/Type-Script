/* eslint-disable */
type TemNome = {nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND


type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

type intersecao = AB & AC & AD;


const pessoa: Pessoa = {
  idade: 24,
  nome: 'Gabriel',
  sobrenome: 'Santos',
};

console.log(pessoa)

//Module mode
export { pessoa };