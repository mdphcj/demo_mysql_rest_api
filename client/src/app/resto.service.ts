import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://localhost:8080/restaurants';
  constructor(private http: HttpClient) {}
  getListofResto() {
    return this.http.get(this.url);
  }
  saveResto(data: any) {
    // console.warn('form data', data);
    return this.http.post(this.url, data);
  }
  deleteResto(id: any) {
    // console.warn('delete called from service');
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentResto(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id: any, data: any) {
    return this.http.patch(`${this.url}/${id}`, data);
  }
}
