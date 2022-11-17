import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() id:string;
  @Input() maxPageSize:number;
  @Output() paginationEvent = new EventEmitter<number>();

  onPagination(event:number){
    this.paginationEvent.emit(event);
  }

}
