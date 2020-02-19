import { NgModule } from '@angular/core';
import { routing } from "./vehicleinformation.routing";
import { VehicleinformationComponent } from "./vehicleinformation.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [routing,CommonModule,FormsModule, ReactiveFormsModule],
  declarations: [VehicleinformationComponent]
})
export class vehicleinformationModule { }