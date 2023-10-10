// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// app.module.ts
import { AppComponent } from './app.component';
import { ListaDeJogosComponent } from './lista-de-jogos.component';


@NgModule({
  declarations: [AppComponent, ListaDeJogosComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
