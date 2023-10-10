// lista-de-jogos.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-jogos',
  template: `
    <div *ngFor="let jogo of jogos">
      <h3>{{ jogo.titulo }}</h3>
      <p>{{ jogo.descricao }}</p>
    </div>
  `,
})
export class ListaDeJogosComponent {
  jogos = [
    { titulo: 'Jogo 1', descricao: 'Descrição do Jogo 1' },
    { titulo: 'Jogo 2', descricao: 'Descrição do Jogo 2' },
    // Adicione mais jogos conforme necessário
  ];
}
