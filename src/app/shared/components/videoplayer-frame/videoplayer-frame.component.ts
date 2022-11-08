import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videoplayer-frame',
  templateUrl: './videoplayer-frame.component.html',
  styleUrls: ['./videoplayer-frame.component.scss']
})
export class VideoPlayerFrameComponent implements OnInit {

  @Input() youtubeURL?:string;
  @Input() customHeight: string = "40vh";

  safeSrc! : SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {

   }

  ngOnInit(): void {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeURL!);
  }

}
