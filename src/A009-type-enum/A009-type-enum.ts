 enum Cores {
  VERMELHO, //0
  AZUL, //1
  VERDE, //2
 }

 enum Cores {
  ROXO = 'ROXO',
  PRETO = 201,
  ROSA,

 }

function escolhaACor(cor:Cores): void {
  console.log(Cores[cor])
}

escolhaACor(Cores.ROSA);