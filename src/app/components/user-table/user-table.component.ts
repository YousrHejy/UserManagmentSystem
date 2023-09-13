import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Users from '../../../../db.json'
import {User} from '../../User'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent implements OnInit{

  @Input() users: User[] = [];
  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter();
 
 public ngOnInit() {
  // this.users = Users;
  // console.log("users", this.users)
}

public onDelete(this.user) {
  this.onDeleteUser.emit(user);
  console.log(user)
}
}
