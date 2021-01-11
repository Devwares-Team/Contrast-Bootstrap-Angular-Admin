import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CDBFreeModule } from 'ng-cdbangular';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Hero404Component } from './pages/hero404/hero404.component';
import { Navbar } from './pages/navbar/navbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarFreeComponent } from './pages/sidebar-free/sidebar-free.component';
import { TablesComponent } from './pages/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Hero404Component,
    Navbar,
    ProfileComponent,
    SidebarFreeComponent,
    TablesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CDBFreeModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
