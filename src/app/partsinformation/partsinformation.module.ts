import { NgModule } from '@angular/core';
import { routing } from "./partsinformation.routing";
import { PartsinformationComponent } from "./partsinformation.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [routing,CommonModule,FormsModule, ReactiveFormsModule],
  declarations: [PartsinformationComponent]
})
export class partsinformationModule { }