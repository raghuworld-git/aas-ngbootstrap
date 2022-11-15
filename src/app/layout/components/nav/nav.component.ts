import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  navigationRouteList: { route: string; displayName: string }[] = [
    { route: '/dashboard', displayName: 'Home' },
    { route: 'launches/upcoming', displayName: 'Upcoming' },
    { route: 'launches/previous', displayName: 'Previous' },
    { route: '/picoftheday', displayName: 'Picture of the day' },
  ];

  constructor(private offcanvasService: NgbOffcanvas) {}
  openOffCanvasMenu(content: any): void {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {},
        (reason) => {}
      );
  }
}
