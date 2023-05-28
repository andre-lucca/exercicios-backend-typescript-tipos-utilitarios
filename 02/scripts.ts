type Item = {
  nome: string,
  descricao: string,
  valor: number
}

type Cartao = {
  numero: number,
  validade: string,
  nome: string,
  cvv: number
}

type TipoTransacao = 'credito' | 'Debito'

type Carrinho = {
  item: Item,
  qtd: number,
  desconto: number,
  frete: number,
  tipoTransacao: TipoTransacao,
  cartao: Cartao
}

type Endereco = {
  cep: string
  rua: string
  bairro: string
  cidade: string
  estado: string
}

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
  endereco: Endereco
  tipoTransacao: Lowercase<TipoTransacao>
}