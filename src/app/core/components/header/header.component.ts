import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public navList: any[] = [
    { label: 'Home', id: 0 },
    { label: 'TV Shows', id: 1 },
    { label: 'News & Popular', id: 2 },
    { label: 'My List', id: 3 },
    { label: 'Browse by Languages', id: 4 },
  ];
}
