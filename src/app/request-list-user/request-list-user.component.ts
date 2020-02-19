import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-list-user',
  templateUrl: './request-list-user.component.html',
  styleUrls: ['./request-list-user.component.css']
})
export class RequestListUserComponent implements OnInit {
  requestlist = [];
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
