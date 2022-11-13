import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav style="display: flex; gap: 2rem">
      <a routerLink="todo">Todo</a>
      <a routerLink="counter">Counter</a>
      <a routerLink="book">Book</a>
    </nav>

    <main style="padding: 2rem">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'Sample';
}
