import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: HomeComponent, children: [
        { path: '', redirectTo: 'vechicle', pathMatch: 'full' },
        { path: 'vehicle', loadChildren: 'src/app/vehicleinformation/vehicleinformation.module#vehicleinformationModule' },
        { path: 'market', loadChildren: 'src/app/marketinformation/marketinformation.module#marketinformationModule' },
        { path: 'parts', loadChildren: 'src/app/partsinformation/partsinformation.module#partsinformationModule'},
        { path: 'cost', loadChildren: 'src/app/costinformation/costinformation.module#costinformationModule' },
      ]
    }
  ]);