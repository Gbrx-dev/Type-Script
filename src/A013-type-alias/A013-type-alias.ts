type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYKL = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYKL

 const pessoa: Pessoa = {
  idade: 24,
  nome: 'Gabriel',
  salario: 6000,
 };

 export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor};
 }

 console.log(setCorPreferida(pessoa, 'Preto'))