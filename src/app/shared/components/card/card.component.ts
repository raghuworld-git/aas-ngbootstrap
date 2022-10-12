import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() imageURL: string | null | undefined = null;
  @Input() imageTitle: string | undefined = "";
  @Input() customHeight: string = "40vh";

}
