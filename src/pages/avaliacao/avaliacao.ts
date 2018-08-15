import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AvaliacaoProvider } from '../../providers/avaliacao/avaliacao';

@IonicPage()
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
  providers: [AvaliacaoProvider]
})
export class AvaliacaoPage {

  avaliacao;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, public avaliacaoProvider: AvaliacaoProvider) {
    this.avaliacaoProvider.next(0,0).then((avaliacao) => {
      this.avaliacao = avaliacao;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoPage');
  }

  concluir() {
    this.avaliacaoProvider.save(this.avaliacao).then(() => {

      let toast = this.toastCtrl.create({
        cssClass: "sucesso",
        message: 'Aluno avaliado com sucesso!',
        duration: 2000,
        position: "bottom"

      });
      toast.present(toast);

      this.avaliacaoProvider.next(0,0).then((avaliacao) => {
        this.avaliacao = avaliacao;
      });

    }).catch(() => {
      let toast = this.toastCtrl.create({
        cssClass: "erro",
        message: 'Erro ao avaliar aluno!',
        duration: 2000,
        position: "bottom"

      });
      toast.present(toast);

    });

  }

  starClicked(criterio, nota) {
    console.log("Critério: " + criterio.descricao + " | Rated : " + nota);
    criterio.nota = nota;
  }

}
