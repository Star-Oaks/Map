import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Map page'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
