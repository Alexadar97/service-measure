import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { costinformationModule } from '../costinformation/costinformation.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicleinformation',
  templateUrl: './vehicleinformation.component.html',
  styleUrls: ['./vehicleinformation.component.css']
})
export class VehicleinformationComponent implements OnInit {

  vehicleform:any;
  arrayvalue:any;
  data:any
  constructor( private Formbuilder: FormBuilder,private router: Router) {
    this.vehicleform = this.Formbuilder.group({
     
      "reason": [null, Validators.compose([Validators.required])],
      "validity": [null, Validators.compose([Validators.required])],
      "select": [null, Validators.compose([Validators.required])],
      "vehicleaddrow": this.Formbuilder.array([this.vehiclevalue()]),
    });
   }

  ngOnInit() {

  }

  vehicleaddrow:any;
  get vehicledetails() { 
    return <FormArray>this.vehicleform.get('vehicleaddrow')
    console.log(this.vehicleform)
   }
   addRow(data): void {
    for(var i=0;i<=data;i++){
      this.vehicleaddrow = this.vehicleform.get('vehicleaddrow') as FormArray;
    this.vehicleaddrow.push(this.vehiclevalue());
    }
  }
  // delete(data) {
  //   this.vehicleaddrow = this.vehicleform.get('vehicleaddrow') as FormArray;
  //   console.log(this.vehicleaddrow)
  //   this.vehicleaddrow.removeAt(data = data);
    
  // }
  vehiclevalue(): FormGroup {
    return this.Formbuilder.group({
      "add1": [null, Validators.compose([Validators.required])],
      "add2": [null, Validators.compose([Validators.required])],
    });
  }
  priorityvlaues:any;
  priority(data){
    this.priorityvlaues = data;
    console.log(this.priorityvlaues)
  }
  values:any;
  vechicleinfo(){
    // if(this.vehicleform.invalid){
    //   this.markFormGroupTouched(this.vehicleform);
    // }
    // else{
      this.router.navigateByUrl("dashboard/home/market")
    // }
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    for (let i in formGroup.controls)
      formGroup.controls[i].markAsTouched();

    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
