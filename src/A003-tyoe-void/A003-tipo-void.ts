function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Santos',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Gabriel', 'Santos');
pessoa.exibirNome();

export {pessoa};