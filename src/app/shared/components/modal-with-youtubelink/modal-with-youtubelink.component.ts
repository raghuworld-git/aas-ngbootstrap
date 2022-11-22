import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-with-youtubelink',
  templateUrl: './modal-with-youtubelink.component.html',
  styleUrls: ['./modal-with-youtubelink.component.scss'],
})
export class ModalWithYoutubelinkComponent {
  @Input() url: string;
  constructor(public activeModal: NgbActiveModal) {}
}
