# Documentação

![](https://img.shields.io/badge/version-1.0.0-brightgreen)

- [Overview](#Documentação "Overview")
- [Endpoint](#Endpoint "Endpoint")
- [Unidades de Medida](#Units "Unidades de Medida")
- [Parâmetros obrigatórios](#Parameters "Parâmetros obrigatórios")

Esta é uma API desenvolvida em Flask para a obtenção da cotação da criptomoeda Starkbank COin (SBC) pro cada hora segundo a variação dos valores entre diferentes unidades de medida, incluindo Total de Transferências da plataforma geral da StarkBank, valor do real vs dolar, Valor montante das Transferências da plataforma geral da StarkBank,.



## Endpoint
Faça as requisições para o endpoint a seguir utilizando o método ![GET](https://img.shields.io/badge/GET-brightgreen)

### Request

`GET` `https://apistarkcoin.julio-jj3.repl.co/APIStarkcoin`

![required](https://img.shields.io/badge/Importante:-red)

### Exemplo
Request
`GET` `https://apistarkcoin.julio-jj3.repl.co/APIStarkcoin`

Response

![](https://img.shields.io/badge/STATUS-200%3A%20OK-brightgreen)

```json
{
   {
    "Data": "2023-03-25 10:00:00",
    "Quantidade_Transacoes": 69609,
    "Montante_Movimentado": 5344418,
    "CotacaO_dolar": 4.978,
    "STC": 0.382
  },
  {
    "Data": "2023-03-25 11:00:00",
    "Quantidade_Transacoes": 15703,
    "Montante_Movimentado": 783812,
    "CotacaO_dolar": 5.118,
    "STC": 0.255
  },
  ...
}
```
