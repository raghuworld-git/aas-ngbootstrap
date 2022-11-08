import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-frame',
  templateUrl: './youtube-frame.component.html',
  styleUrls: ['./youtube-frame.component.scss']
})
export class YoutubeFrameComponent implements OnInit {

  @Input() youtubeURL?:string;
  @Input() customHeight: string = "40vh";

  safeSrc! : SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {

   }

  ngOnInit(): void {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeURL!);
  }

}
