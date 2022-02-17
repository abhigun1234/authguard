import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {AuthGuard} from'./auth.guard'
import{AboutComponent} from './about/about.component'
const routes: Routes = [
{
  path:'',component:LoginComponent
},
{path:'about',component:AboutComponent}
,
{path:'login',component:LoginComponent},
 {path:'home',component:HomeComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
