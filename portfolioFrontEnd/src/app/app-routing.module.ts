import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEduComponent } from './components/education/add-edu.component';
import { EditEduComponent } from './components/education/edit-edu.component';
import { AddExpComponent } from './components/experience/add-exp.component';
import { EditExpComponent } from './components/experience/edit-exp.component';
import { EditHeaderComponent } from './components/header/edit-header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddProComponent } from './components/proyects/add-pro.component';
import { EditProComponent } from './components/proyects/edit-pro.component';
import { AddSkillComponent } from './components/skills/add-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'addExp', component:AddExpComponent},
  {path:'addEdu', component:AddEduComponent},
  {path:'addSkill', component:AddSkillComponent},
  {path:'addPro', component:AddProComponent},
  {path: 'editSkill/:id', component:EditSkillComponent},
  {path: 'editExp/:id', component:EditExpComponent},
  {path: 'editPro/:id', component:EditProComponent},
  {path: 'editEdu/:id', component:EditEduComponent},
  {path: 'editHeader', component:EditHeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
