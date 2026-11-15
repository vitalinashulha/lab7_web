import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Header } from './header/header'; 
import { Calculator } from './calculator/calculator';
import { ArrayOneComponent } from './array-one/array-one';
import { ArrayTwoComponent } from './array-two/array-two';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Header, 
    Calculator,
    ArrayOneComponent,
    ArrayTwoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'laba6';
}