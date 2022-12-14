import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
})
export class SimpleCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  @Input() customHeight: string = '40vh';
  @Input() wantFlex: boolean = false;
  @Input() wantHeader: boolean = false;
}
