import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
* Generated class for the HomePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  autenticacao;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {

    this.autenticacao = {turmas: []};

    this.authProvider.login().then((autenticacao) => {
      this.autenticacao = autenticacao;
      console.log(autenticacao);
    });
  }

}
