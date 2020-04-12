import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';
import { FiveComponent } from './components/five/five.component';
import { FourOneComponent } from './components/four-one/four-one.component';
import { FourTwoComponent } from './components/four-two/four-two.component';
import { FourThreeComponent } from './components/four-three/four-three.component';
import { FourOneOneComponent } from './components/four-one-one/four-one-one.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './authguard/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'one', component: OneComponent, canActivate: [AuthGuard]},
  {path: 'two', component: TwoComponent, canActivate: [AuthGuard]},
  {path: 'three', component: ThreeComponent, canActivate: [AuthGuard]},
  {path: 'four', component: FourComponent, children: [
    {path: 'four-one', component: FourOneComponent, children: [
      {path: 'four-one-one', component: FourOneOneComponent, canActivate: [AuthGuard]}
    ], canActivate: [AuthGuard]},
    {path: 'four-two', component: FourTwoComponent, canActivate: [AuthGuard]},
    {path: 'four-three', component: FourThreeComponent, canActivate: [AuthGuard]}
  ], canActivate: [AuthGuard]},
  {path: 'five', component: FiveComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
