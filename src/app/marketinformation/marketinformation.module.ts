import { NgModule } from '@angular/core';
import { routing } from "./marketinformation.routing";
import { MarketinformationComponent } from "./marketinformation.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  imports: [routing,CommonModule,FormsModule, ReactiveFormsModule,    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [MarketinformationComponent]
})
export class marketinformationModule { }