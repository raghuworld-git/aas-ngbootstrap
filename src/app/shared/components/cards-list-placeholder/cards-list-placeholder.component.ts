import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-list-placeholder',
  templateUrl: './cards-list-placeholder.component.html',
  styleUrls: ['./cards-list-placeholder.component.scss']
})
export class CardsListPlaceholderComponent {

  @Input() customHeight:string='40vh';
  @Input() isLoading:number;

}
