import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleinformationComponent } from "./vehicleinformation.component";


const routes: Routes = [
  { path: '', component: VehicleinformationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);