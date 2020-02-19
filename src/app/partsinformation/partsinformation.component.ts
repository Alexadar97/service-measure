import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

declare var $;

@Component({
  selector: 'app-partsinformation',
  templateUrl: './partsinformation.component.html',
  styleUrls: ['./partsinformation.component.css']
})
export class PartsinformationComponent implements OnInit {
  
  name:any;
  Env:FormArray;
  partsinformaiton: FormGroup;
  constructor(private Formbuilder: FormBuilder) {
        this.partsinformaiton = Formbuilder.group({
          'addItem': this.Formbuilder.array([this.createenv(),this.createenv()])
        });    
    }

  ngOnInit() {
  }
    get addAllenv() {
        return <FormArray > this.partsinformaiton.get('addItem')
    }
    
    createenv(): FormGroup {
        return this.Formbuilder.group({
            name: [""],
            value: [""]
        });

    }
    
    addEnv() {
        this.Env = this.partsinformaiton.get('addItem') as FormArray;
        this.Env.push(this.createenv());
    }
    @ViewChild('uploadFileid') uploadFileid: any;

    cancleUploadsuppmaster() {
      $("#uploadsuppmaster").modal("hide");
      this.uploadFileid.nativeElement.value = "";
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
        $("#uploadsuppmaster").modal("show");
      }
    }
    partvalues:any;
    partvalue(data){
      this.partvalues = data;
      console.log(this.partvalues)
    }
    replacepartvalues:any
    replacepart(data){
      this.replacepartvalues = data;
      console.log(this.replacepartvalues)
    }
}