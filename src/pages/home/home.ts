import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusDasAvaliacoesPage } from '../status-das-avaliacoes/status-das-avaliacoes';
import { AvaliacaoPage } from '../avaliacao/avaliacao';
import { AvaliacoesAnterioresPage } from '../avaliacoes-anteriores/avaliacoes-anteriores';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

   exibirStatus() {
     this.navCtrl.push(StatusDasAvaliacoesPage);
  }

  exibirAvaliacao() {
    this.navCtrl.push(AvaliacaoPage);
  }

  exibirAvaliacoesAnteriores() {
    this.navCtrl.push(AvaliacoesAnterioresPage);
  }

}
