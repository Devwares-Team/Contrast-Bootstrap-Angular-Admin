import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Hero404Component } from './pages/hero404/hero404.component';
import { TablesComponent } from './pages/tables/tables.component';


const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: '404', component: Hero404Component },
        

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
