import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    // redirectTo: 'login',
    // pathMatch: 'full',
     loadChildren: './vievs/login/login.module#LoginModule',
     
      

    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
