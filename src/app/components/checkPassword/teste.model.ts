export class TesteModel {
  public name!: string;
  public password!: string;
  public tipoConta!: number;


  constructor(res: any = {}) {

    this.name = res.name ? res.name += ' Testando' : 'naoExiste';
    this.password = res.pass  ? res.pass += ' TestandoPass' : 'naoExiste';
    this.tipoConta = res.tipo ? res.tipo += 123 : 'naoExiste';
  }
}
