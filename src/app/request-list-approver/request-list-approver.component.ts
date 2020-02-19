import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-list-approver',
  templateUrl: './request-list-approver.component.html',
  styleUrls: ['./request-list-approver.component.css']
})
export class RequestListApproverComponent implements OnInit {
  requestlist:any
  constructor() { }

  ngOnInit() {
    this. request();
  }
  request(){
    this.requestlist = [{"value":"EC&SM-2018-5","date":"06-04-2019"},{"value":"EC&SM-2018-5","date":"06-04-2019"},{"value":"EC&SM-2018-5","date":"06-04-2019"},
    {"value":"EC&SM-2018-5","date":"06-04-2019"},{"value":"EC&SM-2018-5","date":"06-04-2019"},{"value":"EC&SM-2018-5","date":"06-04-2019"},
    {"value":"EC&SM-2018-5","date":"06-04-2019"},{"value":"EC&SM-2018-5","date":"06-04-2019"},{"value":"EC&SM-2018-5","date":"06-04-2019"},]
  }
}
