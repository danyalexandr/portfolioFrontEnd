import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgChartsModule } from 'ng2-charts';
import { PolarAreaChartComponent } from './components/polar-area-chart/polar-area-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddExpComponent } from './components/experience/add-exp.component';
import { AddEduComponent } from './components/education/add-edu.component';
import { AddProComponent } from './components/proyects/add-pro.component';
import { AddSkillComponent } from './components/skills/add-skill.component';
import { EditExpComponent } from './components/experience/edit-exp.component';
import { EditEduComponent } from './components/education/edit-edu.component';
import { EditProComponent } from './components/proyects/edit-pro.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectsComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    PolarAreaChartComponent,
    AddExpComponent,
    AddEduComponent,
    AddProComponent,
    AddSkillComponent,
    EditExpComponent,
    EditEduComponent,
    EditProComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
