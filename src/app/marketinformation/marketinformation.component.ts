import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-marketinformation',
  templateUrl: './marketinformation.component.html',
  styleUrls: ['./marketinformation.component.css']
})
export class MarketinformationComponent implements OnInit {

  marketform:any;

  constructor( private Formbuilder: FormBuilder,private router: Router) {
    this.marketform = this.Formbuilder.group({
     
      "issue": [null, Validators.compose([Validators.required])],
      "analysis": [null, Validators.compose([Validators.required])],
      "series": [null, Validators.compose([Validators.required])],
      "plant": [null, Validators.compose([Validators.required])],
      "field": [null, Validators.compose([Validators.required])],
      "fileupload": [null, Validators.compose([Validators.required])],
    });
   }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'India' },
      { item_id: 2, item_text: 'USA' },
      { item_id: 3, item_text: 'Singapore' },
    ];
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  @ViewChild('uploadFileid') uploadFileid: any;

  cancleUploadsuppmaster() {
    // this.uploadFileid.nativeElement.value = "";
    this.Uploadsuppmasterfilename = "";
  }


  Uploadsuppmasterfilename = '';
  Uploadsuppmasterfinallfile: any;
  uploadfilenamesupp: any;
  uploadfilesupp(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      var file: File = fileList[0];
      this.Uploadsuppmasterfilename = file.name;
      var finalfilename = (this.Uploadsuppmasterfilename).split(".");
      this.uploadfilenamesupp = finalfilename[0];
      this.Uploadsuppmasterfinallfile = file;
    }
  }
  selectvalue:any;
  selectmeasure:any;
  marketvalues(data){
    this.selectvalue = data
  }
  measurevlaues(data){
    this.selectmeasure = data;
  }
  nextsubmit(){
    if(this.marketform.invalid){
      this.markFormGroupTouched(this.marketform);
     }else{
      this.router.navigateByUrl("dashboard/home/parts")
     }
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
