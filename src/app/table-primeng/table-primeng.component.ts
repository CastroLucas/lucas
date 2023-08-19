import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ConfirmationService, Message, SelectItem } from "primeng/api";
import { Table } from 'primeng/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-table-primeng',
  templateUrl: './table-primeng.component.html',
  styleUrls: ['./table-primeng.component.scss'],
  providers: [DatePipe]

})
export class TablePrimengComponent implements OnInit {

  cars: any[];
  cols: any[];
  color: string[] = ['Black', 'Orange', 'Red', 'Blue', 'Gray', 'White', 'Yellow', 'Green'];
  rowGroupMetadata: any;

  constructor() {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'brand', header: 'Brand' }
    ];
    this.cars = [
      {corpo:[], "brand": "VW", "id": "dsad231ff" },
      {corpo:[], "brand": "Audi", "id": "gwregre345" },
      {corpo:[], "brand": "Renault", "id": "h354htr" },
      {corpo:[], "brand": "BMW", "id": "j6w54qgh" },
      {corpo:[], "brand": "Mercedes", "id": "hrtwy34" },
      {corpo:[], "brand": "Volvo", "id": "jejtyj" },
      {corpo:[], "brand": "Honda", "id": "g43gr" },
      {corpo:[], "brand": "Jaguar", "id": "greg34" },
      {corpo:[], "brand": "Ford", "id": "h54hw5" },
      {corpo:[], "brand": "Fiat", "id": "245t2s" }
    ];
    // this.updateRowGroupMetaData();
  }
  ngOnInit(): void {

    this.cars.forEach( element => {
      let randomNumber = Math.floor ( Math.random() * 10 )
      for ( let i = 0 ; i < randomNumber ; i++ ) {
        element.corpo.push( this.criaCorpo() );
      }
    });
    console.log( this.cars );

  }
  criaCorpo(){
    let randomNumber = Math.floor( Math.random() * 13 );
    return {
      preco: ( Math.floor( Math.random() * 2000 ) + 20000 ) * ( randomNumber + 1 ),
      ano: 2010 + randomNumber,
      color: this.color[ Math.floor( Math.random() * this.color.length ) ]
    }
  }

      //   updateRowGroupMetaData() {
      //     this.rowGroupMetadata = {};
      //     if (this.cars) {
      //         for (let i = 0; i < this.cars.length; i++) {
      //             let rowData = this.cars[i];
      //             let brand = rowData.brand;
      //             if (i == 0) {
      //                 this.rowGroupMetadata[brand] = { index: 0, size: 1 };
      //             }
      //             else {
      //                 let previousRowData = this.cars[i - 1];
      //                 let previousRowGroup = previousRowData.brand;
      //                 if (brand === previousRowGroup)
      //                     this.rowGroupMetadata[brand].size++;
      //                 else
      //                     this.rowGroupMetadata[brand] = { index: i, size: 1 };
      //             }
      //         }
      //     }
      // }
}
