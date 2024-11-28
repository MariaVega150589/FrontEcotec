import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  urlBase: string = "https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  getProjects(): Observable<getProjects[]> {
    let url = this.urlBase + '/Project/GetAll?PageSize=' + 1000;
    return this.http.get<getProjects[]>(url);
  }

  postProject(body: Projects): Observable<any> {
    let url = this.urlBase + '/Project/Add';
    return this.http.post(url, body);
  }

  putProject(body: Projects) {
    let url = this.urlBase + '/Project/Update';
    return this.http.put(url, body);
  }

  deleteProject(id: number): Observable<any> {
    let url = this.urlBase + '/Project/Delete?Id=' + id;
    return this.http.delete(url);
  }

}

export interface getProjects {
  data: Projects[],
  pageNumber: number,
  totalPages: number,
  totalCount: number,
  hasPreviousPage: boolean,
  hasNextPage: boolean
}

export interface Projects {
  id?: number,
  name: string,
  description: string,
  status: boolean,
  assignedTo: string
}