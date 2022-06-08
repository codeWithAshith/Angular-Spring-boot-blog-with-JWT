import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './component/create-post/create-post.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PostComponent } from './component/post/post.component';
import { RegisterComponent } from './component/register/register.component';
import { RouterGuardService } from './service/router-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [RouterGuardService] },
  {
    path: 'create',
    component: CreatePostComponent,
    canActivate: [RouterGuardService],
  },
  {
    path: 'post/:id',
    component: PostComponent,
    canActivate: [RouterGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
