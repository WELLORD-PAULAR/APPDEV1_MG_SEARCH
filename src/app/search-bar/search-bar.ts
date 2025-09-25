import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  links = [
    { title: 'Angular', url: 'https://angular.io', description: 'One framework. Mobile & desktop.' },
    { title: 'GitHub', url: 'https://github.com', description: 'Where the world builds software' },
    { title: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Where Developers Learn, Share, & Build Careers' },
    { title: 'Reddit', url: 'https://www.reddit.com', description: 'The front page of the internet' },
    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Resources for developers, by developers.' },
    { title: 'W3Schools', url: 'https://www.w3schools.com', description: 'The world\'s largest web developer site.' },
    { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org', description: 'Learn to code for free.' },
    { title: 'Hacker News', url: 'https://news.ycombinator.com', description: 'Social news website focusing on computer science and entrepreneurship.' },
    { title: 'Product Hunt', url: 'https://www.producthunt.com', description: 'Discover your next favorite thing.' },
    { title: 'Dev.to', url: 'https://dev.to', description: 'A constructive and inclusive social network for software developers.' }
  ];

  // Signal for the search query
  query = signal('');

  constructor(private router: Router) {}

  // Filtered items based on the query
  filteredItems() {
    const q = this.query().toLowerCase().trim();
    if (!q) return this.links;
    return this.links.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.url.toLowerCase().includes(q)
    );
  }

  onSubmit() {
    const q = this.query();
    this.router.navigate(['/results'], { queryParams: { q } });
  }
}
