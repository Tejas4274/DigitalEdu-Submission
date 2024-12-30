import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrl: './crud-table.component.css',
})
export class CrudTableComponent implements OnInit {
  data: any[] = [];
  form: any = { id: null, name: '', price: null, category: '' };
  editing = false;

  constructor(private dataServiece: DataService) {}

  //get the data from the data.service file while loading the component
  ngOnInit(): void {
    this.data = this.dataServiece.getData();
  }

  edit(item: any) {
    this.form = { ...item };
    this.editing = true;
  }

  delete(id: number) {
    this.dataServiece.deleteItem(id);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You deleted something !',
    });
    this.data = this.dataServiece.getData();
  }

  save() {
    if (this.editing) {
      this.dataServiece.updateData(this.form);
    } else {
      this.form.id = Math.max(...this.data.map((item) => item.id)) + 1;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.dataServiece.addData(this.form);
    }

    this.form = { id: null, name: '', price: null, category: '' };
    this.editing = false;
    this.data = this.dataServiece.getData();
  }
}
