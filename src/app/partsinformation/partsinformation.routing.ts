import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartsinformationComponent } from "./partsinformation.component";


const routes: Routes = [
  { path: '', component: PartsinformationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);