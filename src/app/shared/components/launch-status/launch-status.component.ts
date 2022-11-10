import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-status',
  templateUrl: './launch-status.component.html',
  styleUrls: ['./launch-status.component.scss']
})
export class LaunchStatusComponent implements OnInit {


  @Input() launchStatus:string | undefined;
  @Input() launchStatusColor:string;


  ngOnInit(): void {
  }

}
