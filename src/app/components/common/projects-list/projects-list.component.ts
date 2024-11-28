import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getProjects, Projects, ProjectsService } from 'src/app/services/projects.service';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {


  page: number = 1;
  pageSize: number = 5;

  resProjects: Projects[];

  constructor(private projectService: ProjectsService, private modalServ: NgbModal) {

  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (res: any) => {
        this.resProjects = res.data;
      },
      error: e => console.log(e)
    });
  }

  deleteProject(id: number): void {
    this.projectService.deleteProject(id).subscribe({
      next: res => {
        this.getProjects();
      },
      error: e => {
        console.log(e);
      }
    })
  }

  putProject(p: Projects): void {
    this.projectService.putProject(p).subscribe({
      next: res => {
        this.getProjects();
      },
      error: e => {
        console.log(e);
      }
    })
  }

  postProject(p: Projects): void {
    this.projectService.postProject(p).subscribe({
      next: res => {
        this.getProjects();
      },
      error: e => {
        console.log(e);
      }
    })
  }

  openConfirmModal(project: Projects): void {
    const modalRef = this.modalServ.open(ModalDeleteComponent);
    modalRef.componentInstance.confirm.subscribe((res) => {
      if (res) {
        this.deleteProject(project.id ?? 0);
      }
    })
  }

  openModalForm(isNew: string, project?: Projects) {
    const modalRef = this.modalServ.open(ModalFormComponent);
    if (isNew == 'N') {
      modalRef.componentInstance.title = 'New project';
      modalRef.componentInstance.isNew = true;
      modalRef.componentInstance.newProject.subscribe((p) => {
        this.postProject(p);
      })
    } else if (isNew == 'E') {
      modalRef.componentInstance.title = 'Edit project';
      modalRef.componentInstance.isNew = false;
      modalRef.componentInstance.project = project;
      modalRef.componentInstance.newData.subscribe((p) => {
        p.id = project?.id;
        this.putProject(p);
      })
    }
  }

}
