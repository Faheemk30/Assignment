import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product_model';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {


  constructor(private productService: ProductService) {

  }

columnDefs = [
  {headerName: 'Id', field: 'id'},
  {headerName: 'Title', field: 'title'},
  {headerName: 'Description', field: 'description'},
  {headerName: 'Price', field: 'price', editable:true}
];

rowData: Product[];

defaultColDef = {
  sortable: true,
  filter: true
};

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data => {
     this.rowData = data;
     });
  }

}
