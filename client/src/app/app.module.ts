import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AudienceHomeComponent } from './components/audience-home/audience-home.component';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { VoteFormComponent } from './components/vote-form/vote-form.component';
import { AllTopicsComponent } from './components/all-topics/all-topics.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { EditTopicComponent } from './components/edit-topic/edit-topic.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AudienceHomeComponent,
    AddTopicComponent,
    TopicListComponent,
    TopicDetailComponent,
    VoteFormComponent,
    AllTopicsComponent,
    EditTopicComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule, ReactiveFormsModule],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule {}
