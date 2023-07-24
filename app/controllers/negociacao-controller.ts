import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  criaNegociacao(): Negociacao {
    //OUTRA FORMA DE CONVERTER OS VALORES CONFORME A TIPAGEM DO CONSTRUTOR
    // const regExp = /-/g;
    // const date = new Date(this.inputData.value.replace(regExp, ","));
    // const quantidade = parseInt(this.inputQuantidade.value);
    // const valor = parseFloat(this.inputValor.value);
    // return new Negociacao(date, quantidade, valor);
    return new Negociacao(
      this.inputData.valueAsDate,
      this.inputQuantidade.valueAsNumber,
      this.inputValor.valueAsNumber
    );
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    console.log(negociacao);
    this.limparFormulario();
  }

  limparFormulario(): void {
    this.inputData.value = "",
    this.inputQuantidade.value = "",
    this.inputValor.value = "",
    this.inputData.focus()
  }
}
