import { Component, EventEmitter, inject, Output, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {
  @Output() confirm = new EventEmitter<boolean>();

  activeModal = inject(NgbActiveModal);

  dismissModal(): void {
    this.activeModal.close();
  }

  Ok(): void {
    this.confirm.emit(true);
    this.dismissModal();
  }

}
