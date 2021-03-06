import { NgModule } from '@angular/core';
import { routing } from "./home.routing";
import { HomeComponent } from "./home.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [routing, CommonModule,FormsModule, ReactiveFormsModule],
  declarations: [HomeComponent]
})
export class HomeModule { }