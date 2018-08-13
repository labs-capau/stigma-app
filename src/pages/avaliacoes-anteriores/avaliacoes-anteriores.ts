import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeriodoPage } from '../periodo/periodo';
import { TurmasAvaliadasPage } from '../turmas-avaliadas/turmas-avaliadas';

/**
* Generated class for the AvaliacoesAnterioresPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-avaliacoes-anteriores',
  templateUrl: 'avaliacoes-anteriores.html',
})
export class AvaliacoesAnterioresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacoesAnterioresPage');
  }
  exibirPeriodo() {
    this.navCtrl.push(PeriodoPage);
  }
  exibirTurmasAvaliadas() {
    this.navCtrl.push(TurmasAvaliadasPage);
  }
}
