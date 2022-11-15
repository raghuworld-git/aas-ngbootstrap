import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Output() pageChange = new EventEmitter<number>();

  @Input() currentpage: number = 1;
  @Input() collectionSize: number;
  @Input() pageSize: number;
  @Input() boundaryLinks: boolean = false;
  @Input() maxSize: number;

  pageChangeEvent(page: number) {
    this.pageChange.emit(page);
  }
}
