import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestListUserComponent } from './request-list-user/request-list-user.component';
import { ApproverPreviewComponent } from './approver-preview/approver-preview.component';
import { RequestListApproverComponent } from './request-list-approver/request-list-approver.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
        { path: '', redirectTo: 'new-request-list', pathMatch: 'full' },
        { path: 'home', loadChildren: 'src/app/home/home.module#HomeModule' },
        { path: 'new-request-list', component: RequestListUserComponent },
        { path: 'approver', component: ApproverPreviewComponent },
        { path: 'request-list', component: RequestListApproverComponent },
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
