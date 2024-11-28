import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ProjectsListComponent } from './components/common/projects-list/projects-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDeleteComponent } from './components/common/modal-delete/modal-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from './components/common/modal-form/modal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    ProjectsListComponent,
    ModalDeleteComponent,
    ModalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
