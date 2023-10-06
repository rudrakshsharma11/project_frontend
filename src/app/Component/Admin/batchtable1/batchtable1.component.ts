

import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

 

import { MatTableDataSource } from '@angular/material/table';

 

import { Batchtable2Component } from '../batchtable2/batchtable2.component';

 

export interface PeriodicElement {

 

 

 

  Actions: string;

 

  Code: string;

 

  ProgramName: string;

 

  Student: string;

 

 

 

}

@Component({
  selector: 'app-batchtable1',
  templateUrl: './batchtable1.component.html',
  styleUrls: ['./batchtable1.component.css']
})
export class Batchtable1Component {
 

  code = ''

 

  batchname = '';

 

  selectedDate = ''

 

  var1 = true;

 

  var2 = true;

 

  var3 = true;

 

 

 

 

 

  var4 = false

 

  var5 = false;

 

  var6 = false;

 

 

 

 

 

  @ViewChild('container5', { read: ViewContainerRef, static: true })

 

  container5!: ViewContainerRef

 

  ELEMENT_DATA: PeriodicElement[] = [

 

 

 

    { Actions: '', Code: '', ProgramName: '', Student: '' }

 

  ];

 

  displayedColumns: string[] = ['Actions', 'Code', 'ProgramName', 'Student'];

 

 

 

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

 

  CourseName: any;

 

  Teacher: any;

 

ProgramName: any;

 

Student: any;

 

  secondclick() {

 

    this.container5.clear()

 

    this.var1 = false

 

    this.var2 = false;

 

    this.var3 = false;

 

    this.var4 = true;

 

    this.var5 = true;

 

    this.var6 = true;

 

 

 

 

 

    this.container5.createComponent(Batchtable2Component)

 

  }

 

  onDateChange(event: any): void {

 

    this.selectedDate = event.value;

 

  }

 

   edittable2:boolean=true;

 

    toggletable2(){

 

      this.edittable2 = !this.edittable2;

 

      if (this.edittable2==false) {

 

       

 

      this.var4=false

 

      this.var5=false;

 

      this.var6=false;

 

      this.var1=true;

 

      this.var2=true;

 

      this.var3=true;

 

     }

 

     if (this.edittable2==true) {

 

       

 

      this.var1=false

 

      this.var2=false;

 

      this.var3=false;

 

      this.var4=true;

 

      this.var5=true;

 

      this.var6=true;

 

     }

 

 

 

    }

 

   

 

   

 

 

 

  table2 = true;

 

  deletetable2(){

 

      this.table2=false;

 

      this.container5.clear()

 

  }

}
