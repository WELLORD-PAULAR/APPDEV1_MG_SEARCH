import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  imports: [CommonModule],
  templateUrl: './search-results.html',
  styleUrl: './search-results.css'
})
export class SearchResults {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }

  // Example: You'd want to get the query param and use it to filter a detailed list
  route = inject(ActivatedRoute);
  query = computed(() => this.route.snapshot.queryParamMap.get('q') || '');

  // Example detailed data (should be shared or fetched in a real app)
  details = [
    { title: 'Angular',url: 'https://angular.io', detail: 'Angular is a platform for building mobile and desktop web applications. Learn more at the official site.' },
    { title: 'GitHub',url: 'https://github.com', detail: 'GitHub is a code hosting platform for version control and collaboration.' },
    { title: 'Stack Overflow',url: 'https://stackoverflow.com', detail: 'Stack Overflow is a question and answer site for professional and enthusiast programmers.' },
    { title: 'Reddit',url: 'https://www.reddit.com', detail: 'Reddit is a social news aggregation, web content rating, and discussion website.' },
    { title: 'MDN Web Docs',url: 'https://developer.mozilla.org', detail: 'MDN Web Docs provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.' },
    { title: 'W3Schools',url: 'https://www.w3schools.com', detail: 'W3Schools is a web developer information website, with tutorials and references relating to web development topics.' },
    { title: 'freeCodeCamp',url: 'https://www.freecodecamp.org', detail: 'freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications, and local organizations.' },
    { title: 'Hacker News',url: 'https://news.ycombinator.com', detail: 'Hacker News is a social news website focusing on computer science and entrepreneurship.' },
    { title: 'Product Hunt',url: 'https://www.producthunt.com', detail: 'Product Hunt is a website that lets users share and discover new products.' },
    { title: 'Dev.to',url: 'https://dev.to', detail: 'Dev.to is a constructive and inclusive social network for software developers.' }
  ];

  filteredDetails() {
    const q = this.query().toLowerCase().trim();
    if (!q) return this.details;
    return this.details.filter(item => item.title.toLowerCase().includes(q));
  }
}
