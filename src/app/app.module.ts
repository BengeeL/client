import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';
import { SurveyEditComponent } from './survey/survey-edit/survey-edit.component';
import { SurveyCreateComponent } from './survey/survey-create/survey-create.component';
import { SurveyQuestionComponent } from './survey/survey-question/survey-question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    ContactComponent,
    SurveyListComponent,
    SurveyEditComponent,
    SurveyCreateComponent,
    SurveyQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
