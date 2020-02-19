import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketinformationComponent } from "./marketinformation.component";


const routes: Routes = [
  { path: '', component: MarketinformationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);