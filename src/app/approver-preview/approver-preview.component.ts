import { Component, OnInit } from '@angular/core';

declare var $;
@Component({
  selector: 'app-approver-preview',
  templateUrl: './approver-preview.component.html',
  styleUrls: ['./approver-preview.component.css']
})
export class ApproverPreviewComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  withdraw(){
    $('#vehicle').modal("show");
  }
}
