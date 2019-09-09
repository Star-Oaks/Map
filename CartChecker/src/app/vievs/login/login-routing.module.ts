import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogOnFacebookComponent } from './log-on-facebook/log-on-facebook.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LogOnFacebookComponent,
  },

  {
    path: 'map',
    canActivate: [AuthGuard],
    loadChildren: '../map/map.module#MapModule'
  },
  {
    path: 'edit-profile',
    canActivate: [AuthGuard],
    component: EditComponent,  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
