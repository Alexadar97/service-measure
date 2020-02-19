import { NgModule } from '@angular/core';
import { routing } from "./costinformation.routing";
import { CostinformationComponent } from "./costinformation.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [routing,CommonModule,FormsModule, ReactiveFormsModule],
  declarations: [CostinformationComponent]
})
export class costinformationModule { }