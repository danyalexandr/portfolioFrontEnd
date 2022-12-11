import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEduComponent } from './components/education/add-edu.component';
import { AddExpComponent } from './components/experience/add-exp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddProComponent } from './components/proyects/add-pro.component';
import { AddSkillComponent } from './components/skills/add-skill.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'addExp', component:AddExpComponent},
  {path:'addEdu', component:AddEduComponent},
  {path:'addSkill', component:AddSkillComponent},
  {path:'addPro', component:AddProComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
