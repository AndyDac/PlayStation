// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Bem-vindo à PlayStation Store</h1>
    <app-lista-de-jogos></app-lista-de-jogos>
  `,
  styles: []
})
export class AppComponent {}
