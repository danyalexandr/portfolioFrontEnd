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
import { EditHeaderComponent } from './components/header/edit-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


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
    AddExpComponent,
    AddEduComponent,
    AddProComponent,
    AddSkillComponent,
    EditExpComponent,
    EditEduComponent,
    EditProComponent,
    EditSkillComponent,
    EditHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
