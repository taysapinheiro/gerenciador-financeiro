import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Content } from './components/content/content';

@Component({
  selector: 'app-layout',
  imports: [Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
