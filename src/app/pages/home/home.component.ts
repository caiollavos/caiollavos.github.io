import { Component, OnInit } from '@angular/core';

export interface Tile {
  id: string;
  class: string;
  cols: number;
  rows: number;
  title: string;
  text: string;
  path: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    {
      id: 'block-header-image',
      text: 'One',
      cols: 4,
      rows: 4,
      title: '',
      class: 'block-header-image',
      path: 'assets/images/common/caiolavos.jpg'
    },

    { 
      id: 'block-resume',
      text: '/me',
      cols: 2,
      rows: 4, 
      title: '',
      class: 'block-resume', 
      path: '' 
    },

    { 
      id: 'skills',
      text: 'Caio Henrique Lavos de Moraes, 30, frontend developer. Working in the technology market as a Front-end developer since 2009. Professional focused on interface using technologies such as, HTML, CSS, Javascript, AngularJS, Angular, Typescript and preprocessors., REST API. Enthusiast of agile and UX methodologies.',
      cols: 2,
      rows: 4,
      title: '',
      class: 'skills',
      path: '' 
    },

    { 
      id: 'xp', text: 'Four', cols: 4, rows: 1, title: '', class: 'xp', path: '' },
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

}
