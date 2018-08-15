import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AvaliacaoProvider } from '../../providers/avaliacao/avaliacao';

/**
* Generated class for the StatusDasAvaliacoesPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-status-das-avaliacoes',
  templateUrl: 'status-das-avaliacoes.html',
  providers: [AvaliacaoProvider]
})
export class StatusDasAvaliacoesPage {
  status;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public avaliacaoProvider: AvaliacaoProvider) {
      this.avaliacaoProvider.status(0).then((status) => {
        this.status = status;
      });
    }

  }
