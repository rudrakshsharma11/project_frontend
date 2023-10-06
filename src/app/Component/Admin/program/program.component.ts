import { Component,ViewChild,ViewContainerRef,ElementRef,Renderer2, OnInit } from '@angular/core';

// import { InputComponent } from '../input/input.component';

import { Router } from '@angular/router';

import { JsonPipe } from '@angular/common';

// import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';

 

export interface PeriodicElement {

 

  Actions: string;

 

  Code: string;

 

  CourseName: string;

 

  TheoryTime: string;

 

  PractiseTime: string;

 

  Description: string;

 

  Topics: string;

 

}

export interface PeriodicElement1 {

 

  Actions1: string;

 

  Code1: string;

 

  CourseName1: string;

 

  TheoryTime1: string;

 

  PractiseTime1: string;

 

  Description1: string;

 

  Topics1: string;

 

  Files1:String;

 

}

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent  {

  constructor(private rout:Router,private el: ElementRef, private renderer: Renderer2){

   

    const storedEntries = localStorage.getItem('entries');
  
      if (storedEntries) {
  
        this.entries = JSON.parse(storedEntries);
  
      }
  
     
  
    }

  
   
  
  entries: any[] = [];
  
  entries1: any[] = [];
  
   
  
  code:string ='';
  
  course:string ='';
  
  Theorytime:string =''
  
  practisetime:string ='';
  
  descriptions:string ='';
  
  topics:string ='';
  
   
  
   
  
  code1:string ='';
  
  course1:string ='';
  
  Theorytime1:string =''
  
  practisetime1:string ='';
  
  descriptions1:string ='';
  
  topics1:string ='';
  
   
  
   
  
   
  
  obj = {
  
   code:'',
  
   course:'',
  
   Theorytime:'',
  
   practisetime:'',
  
   descriptions:'',
  
   topics:''
  
  }
  
  obj1 = {
  
    code1:'',
  
    course1:'',
  
    Theorytime1:'',
  
    practisetime1:'',
  
    descriptions1:'',
  
    topics1:''
  
   }
  
   
  
   
  
   
  
   
  
  ELEMENT_DATA: PeriodicElement[] = [
  
   
  
    { Actions: '', Code: '', CourseName: '', TheoryTime: '', PractiseTime: '', Description: '', Topics: ''},
  
   
  
   
  
   
  
  ];
  
   
  
  ELEMENT_DATA1: PeriodicElement1[] = [
  
   
  
    { Actions1: '', Code1: '', CourseName1: '', TheoryTime1: '', PractiseTime1: '', Description1: '', Topics1: '',Files1:''},
  
   
  
   
  
   
  
  ];
  
   
  
   
  
  displayedColumns: string[] = ['Actions','Code', 'CourseName', 'TheoryTime','PractiseTime','Description','Topics'];
  
  displayedColumns1: string[] = ['Actions1','Code1', 'CourseName1', 'TheoryTime1','PractiseTime1','Description1','Topics1','Files1'];
  
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  
  dataSource1 = new MatTableDataSource(this.ELEMENT_DATA1);
  
  coursetable=false;
  
  onLocalstorage(){
  
   
  
   
  
   
  
     this.obj.code=this.code;
  
     this.obj.course=this.course;
  
     this.obj.Theorytime=this.Theorytime;
  
     this.obj.practisetime=this.practisetime;
  
     this.obj.descriptions=this.descriptions;
  
     this.obj.topics=this.topics
  
   
  
   
  
     
  
    sessionStorage.setItem("obj", JSON.stringify(this.obj));
  
   
  
    const personCopy = { ...this.obj};
  
    this.entries.push(personCopy)
  
   
  
   
  
    this.isDisabled=true;
  
    this.tablehide=true;
  
     
  
      console.log(this.entries)
  
      this.coursetable=false;
  
  }
  
   
  
  tablehide1=false;
  
  onLocalstorage1(){
  
   
  
   
  
   
  
    this.obj1.code1=this.code1;
  
    this.obj1.course1=this.course1;
  
    this.obj1.Theorytime1=this.Theorytime1;
  
    this.obj.practisetime=this.practisetime1;
  
    this.obj1.descriptions1=this.descriptions1;
  
    this.obj1.topics1=this.topics1
  
   
  
   
  
   
  
   sessionStorage.setItem("obj1", JSON.stringify(this.obj1));
  
   
  
   const personCopy1 = { ...this.obj1};
  
   this.entries1.push(personCopy1)
  
   
  
   
  
   this.isDisabled=true;
  
   this.tablehide1=true;
  
   this.tablehide=false;
  
     console.log(this.entries)
  
     this.coursetable=false;
  
     this.topicshow1=false;
  
  }
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
  deleteRow(row: any) {
  
    const index = this.entries.indexOf(row);
  
    if (index !== -1) {
  
      this.entries.splice(index, 1);
  
      console.log('Deleted:', row);
  
    }
  
   
  
  }
  
   
  
   
  
   
  
   
  
  // for editing a row
  
   
  
  isDisabled: boolean = false;
  
  tablehide=false;
  
  editRow(row: any) {
  
   
  
    this.coursetable=true;
  
    const index = this.entries.indexOf(row);
  
   
  
   
  
    this.isDisabled = !this.isDisabled;
  
   
  
   
  
   
  
    console.log(index)
  
    console.log(this.entries[index].code)
  
   
  
    if(!this.isDisabled){
  
      this.code=row.code
  
      this.course=row.course
  
      this.Theorytime = row.Theorytime
  
      this.practisetime = row.practisetime
  
      this.descriptions = row.descriptions
  
      this.topics= row.topics
  
    }
  
    if(this.isDisabled){
  
     
  
    this.entries[index].code = this.code
  
    this.entries[index].course=this.course
  
    this.entries[index].Theorytime=this.Theorytime
  
    this.entries[index].practisetime=this.practisetime
  
    this.entries[index].descriptions=this.descriptions
  
    this.entries[index].topics=this.topics
  
   
  
   
  
    }
  
   
  
  }
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
  //----------------------------------------------------------
  
    // constructor(private rout:Router){}
  
    title = 'course-page';
  
    @ViewChild('container1',{read:ViewContainerRef,static:true})
  
    container1!:ViewContainerRef;
  
    @ViewChild('container2',{read:ViewContainerRef,static:true})
  
    container2!:ViewContainerRef;
  
    @ViewChild('container5',{read:ViewContainerRef,static:true})
  
    container5!:ViewContainerRef;
  
  onAddTopic(){
  
    // this.container1.clear()
  
    // this.container1.createComponent(InputComponent)
  
    this.coursetable=true;
  
     
  
   this.isDisabled=false;
  
   this.code='';
  
   this.course='';
  
   this.Theorytime='';
  
   this.practisetime='';
  
   this.descriptions='';
  
   this.topics='';
  
   
  
  }
  
  // topic
  
  topicshow = false;
  
  coursebutton=true;
  
  onTopic(row:any){
  
  this.topicshow=true;
  
  this.coursebutton=false;
  
  this.code=row.code;
  
  const h1Element = this.el.nativeElement.querySelector('#topicname'); // Replace 'myH1' with the actual id
  
    if (h1Element) {
  
      this.renderer.setProperty(h1Element, 'textContent', this.code.concat(" > PHP Basics") );
  
    }
  
    this.tablehide=false;
  
    this.isDisabled=false;
  
    this.code1='';
  
    this.course1='';
  
    this.Theorytime1='';
  
    this.practisetime1='';
  
    this.descriptions1='';
  
    this.topics1='';
  
  }
  
  topicshow1=false;
  
  onAddTopic1(){
  
    // this.container1.clear()
  
    // this.container1.createComponent(InputComponent)
  
    // this.coursetable=true;
  
     
  
   this.isDisabled=false;
  
   this.code1='';
  
   this.course1='';
  
   this.Theorytime1='';
  
   this.practisetime1='';
  
   this.descriptions1='';
  
   this.topics1='';
  
   this.topicshow1=true;
  
  }
  
   
  
  editRow1(row: any) {
  
   
  
    this.topicshow1=true;
  
    const index = this.entries1.indexOf(row);
  
   
  
   
  
    this.isDisabled = !this.isDisabled;
  
   
  
   
  
   
  
    console.log(index)
  
    console.log(this.entries1[index].code)
  
   
  
    if(!this.isDisabled){
  
      this.code1=row.code1
  
      this.course1=row.course1
  
      this.Theorytime1 = row.Theorytime1
  
      this.practisetime1 = row.practisetime1
  
      this.descriptions1 = row.descriptions1
  
      this.topics1= row.topics1
  
    }
  
    if(this.isDisabled){
  
     
  
    this.entries1[index].code1 = this.code1
  
    this.entries1[index].course1=this.course1
  
    this.entries1[index].Theorytime1=this.Theorytime1
  
    this.entries1[index].practisetime1=this.practisetime1
  
    this.entries1[index].descriptions1=this.descriptions1
  
    this.entries1[index].topics1=this.topics1
  
   
  
   
  
    }
  
   
  
  }
  
   
  
  deleteRow1(row: any) {
  
    const index = this.entries1.indexOf(row);
  
    if (index !== -1) {
  
      this.entries1.splice(index, 1);
  
      console.log('Deleted:', row);
  
    }
  
   
  
  }

}
