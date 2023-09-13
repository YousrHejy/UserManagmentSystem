import { Component, OnInit } from '@angular/core';
import {User} from '../../User'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit{
  users: User[];

    // Inject the services
 constructor(private userService: UserService) {}

 public ngOnInit() {
   this.userService.getUsers().subscribe(users => this.users  = users);
 }
}
