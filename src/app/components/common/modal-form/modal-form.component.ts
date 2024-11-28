import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Projects } from 'src/app/services/projects.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  @Output() newData = new EventEmitter<Projects>();
  @Output() newProject = new EventEmitter<Projects>();
  @Input() project: Projects;
  @Input() title: string;
  @Input() isNew: boolean;

  projectform: FormGroup;
  formData: Projects;

  activeModal = inject(NgbActiveModal);
  fb = inject(FormBuilder);

  constructor() {

  }

  ngOnInit(): void {
    this.createForm();
    if (!this.isNew && this.isNew != undefined) {
      this.isEdit();
    }
  }

  createForm(): void {
    this.projectform = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status: [false, Validators.required],
      assignedTo: ['', Validators.required]
    })
  }

  isEdit(): void {
    let formControls = this.projectform.controls;
    formControls['name'].setValue(this.project.name);
    formControls['description'].setValue(this.project.description);
    formControls['status'].setValue(this.project.status);
    formControls['assignedTo'].setValue(this.project.assignedTo);
  }

  dismissModal(): void {
    this.activeModal.close();
  }

  getFormData(): Projects {
    let formControls = this.projectform.controls;
    return this.formData = {
      name: formControls['name'].value,
      description: formControls['description'].value,
      status: formControls['status'].value,
      assignedTo: formControls['assignedTo'].value
    }
  }

  Ok(): void {
    if (this.isNew) {
      this.newProject.emit(this.getFormData())
    } else {
      this.newData.emit(this.getFormData())
    }
    this.dismissModal();
  }

}
