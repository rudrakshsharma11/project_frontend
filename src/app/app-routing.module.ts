import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Component/Teacher/home/home.component';
import { ExamComponent } from './Component/Teacher/exam/exam.component';
import { AssigmentComponent } from './Component/Teacher/assigment/assigment.component';
import { Home1Component } from './Component/Admin/home1/home1.component';
import { BatchesComponent } from './Component/Admin/batches/batches.component';
import { ProgramComponent } from './Component/Admin/program/program.component';

const routes: Routes = [ 
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'exam',component:ExamComponent},
  {path:'assigment',component:AssigmentComponent},
  {path:'admin',component:Home1Component},
  {path:'batches',component:BatchesComponent},
  {path:'program',component:ProgramComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
