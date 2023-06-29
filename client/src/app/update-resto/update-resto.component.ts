import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(
    private restoService: RestoService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // console.warn(this.activatedRoute.snapshot.params['id']);
    this.restoService
      .getCurrentResto(this.activatedRoute.snapshot.params['id'])
      .subscribe((result: any) => {
        console.warn(result);
        this.editResto = new FormGroup({
          name: new FormControl(result['name']),
          address: new FormControl(result['address']),
          email: new FormControl(result['email']),
        });
      });
  }
  // onSubmit(data: any) {
  //   this.restoService.saveResto(data).subscribe((result) => {});
  // }
  onSubmit() {
    // this.restoService.saveResto(data).subscribe((result) => {});
    // console.warn(this.editResto.value);
    this.restoService
      .updateResto(
        this.activatedRoute.snapshot.params['id'],
        this.editResto.value
      )
      .subscribe((result) => {
        // console.warn(result);
        alert('updated');
      });
  }
}
