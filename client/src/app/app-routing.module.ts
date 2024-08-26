import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { authGuard } from './guards/auth.guard';
import { VoteFormComponent } from './components/vote-form/vote-form.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './guards/admin.guard';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { AllTopicsComponent } from './components/all-topics/all-topics.component';
import { AudienceHomeComponent } from './components/audience-home/audience-home.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { EditTopicComponent } from './components/edit-topic/edit-topic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'topic/:id', component: TopicDetailComponent, canActivate: [authGuard] },
  { path: 'vote/:id', component: VoteFormComponent, canActivate: [authGuard] },
  { path: 'edit-topic/:id', component: EditTopicComponent, canActivate: [authGuard, adminGuard]  },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [authGuard, adminGuard] },
  { path: 'add-topic', component: AddTopicComponent, canActivate: [authGuard, adminGuard] },
  { path: 'all-topics', component: AllTopicsComponent },
  { path: 'audience', component: AudienceHomeComponent },
  { path: 'topic-list', component: TopicListComponent, canActivate: [authGuard, adminGuard] },
  // Wildcard route for a 404 page
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
