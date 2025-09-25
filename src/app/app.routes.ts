import { Routes } from '@angular/router';
import { SearchBar } from './search-bar/search-bar';
import { SearchResults } from './search-results/search-results';

export const routes: Routes = [
  {path: '', component: SearchBar},
  {path: 'results', component: SearchResults}
];
