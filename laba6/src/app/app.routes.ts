import { Routes } from '@angular/router';
import { Calculator } from './calculator/calculator'; 
import { ArrayOneComponent } from './array-one/array-one';
import { ArrayTwoComponent } from './array-two/array-two';

export const routes: Routes = [
  { path: 'classes', component: Calculator },
  { path: 'array-one', component: ArrayOneComponent },
  { path: 'array-two', component: ArrayTwoComponent },
  { path: '', redirectTo: '/classes', pathMatch: 'full' }
];