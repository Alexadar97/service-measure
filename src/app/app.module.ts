import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RequestListUserComponent } from './request-list-user/request-list-user.component';
import { ApproverPreviewComponent } from './approver-preview/approver-preview.component';
import { RequestListApproverComponent } from './request-list-approver/request-list-approver.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    RequestListUserComponent,
    ApproverPreviewComponent,
    RequestListApproverComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
