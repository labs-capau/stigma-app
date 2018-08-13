import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeriodoPage } from '../periodo/periodo';

/**
 * Generated class for the TurmasAvaliadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turmas-avaliadas',
  templateUrl: 'turmas-avaliadas.html',
})
export class TurmasAvaliadasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurmasAvaliadasPage');
  }
  exibirPeriodo() {
    this.navCtrl.push(PeriodoPage);
  }
}
