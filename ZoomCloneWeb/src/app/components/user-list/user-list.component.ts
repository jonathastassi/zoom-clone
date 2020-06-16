import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { Observable } from 'rxjs';
import { RtcService } from 'src/app/services/rtc.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Output() userSelected: EventEmitter<UserInfo> = new EventEmitter();

  public users$: Observable<Array<UserInfo>>;


  constructor(private rtcService: RtcService) { }

  ngOnInit() {
    this.users$ = this.rtcService.users$;
  }

  public userClicked(user: UserInfo) {
    console.log("eita");
    this.userSelected.emit(user);
  }
}
