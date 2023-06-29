import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent implements OnInit {
  collection: any;
  constructor(private restoService: RestoService) {}
  ngOnInit(): void {
    const xyz = this.restoService.getListofResto().subscribe((result) => {
      this.collection = result;
    });
  }
  deleteRestoById(id: any) {
    // console.warn('to be delete ', id);
    this.restoService.deleteResto(id).subscribe(() => {
      console.warn('deleted');
      alert('deleted');
    });
  }
}
