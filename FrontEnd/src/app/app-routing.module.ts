import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursesComponent } from './addcourses/addcourses.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';

const routes: Routes = [
  {path:"addcourses", component: AddCoursesComponent  },
  {path:"viewcourses", component: ViewcoursesComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
