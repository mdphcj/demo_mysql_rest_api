import { Component } from '@angular/core';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'],
})
export class AddRestoComponent {
  alert: boolean = false;
  constructor(private restoService: RestoService) {}
  onSubmit(data: any) {
    this.restoService.saveResto(data).subscribe((result) => {
      // console.warn('Result is here', result);
      // alert('Inserted.');
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 3000);
    });
    // console.log(data);
  }
}
