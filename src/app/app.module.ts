import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusDasAvaliacoesPage } from '../pages/status-das-avaliacoes/status-das-avaliacoes';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { AvaliacoesAnterioresPage } from '../pages/avaliacoes-anteriores/avaliacoes-anteriores';
import { PeriodoPage } from '../pages/periodo/periodo';
import { TurmasAvaliadasPage } from '../pages/turmas-avaliadas/turmas-avaliadas';
import { IonRating } from '../components/ion-rating/ion-rating';
import { AvaliacaoProvider } from '../providers/avaliacao/avaliacao';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StatusDasAvaliacoesPage,
    AvaliacaoPage,
    AvaliacoesAnterioresPage,
    PeriodoPage,
    TurmasAvaliadasPage,
    IonRating
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StatusDasAvaliacoesPage,
    AvaliacaoPage,
    AvaliacoesAnterioresPage,
    PeriodoPage,
    TurmasAvaliadasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AvaliacaoProvider,
    AuthProvider
  ]
})
export class AppModule {}
