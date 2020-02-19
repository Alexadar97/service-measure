import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostinformationComponent } from "./costinformation.component";


const routes: Routes = [
  { path: '', component: CostinformationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);