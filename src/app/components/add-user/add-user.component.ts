import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User} from '../../User'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  // @Output() onAddUser: EventEmitter<User> = new EventEmitter

  // username: string = " "; 
  // email: string = " "; 
  // age: number = 0; 
  // company: string = " "; 

  

  // public onSubmit(){
  //   if(!this.username){
  //     alert("Please enter the user name");
  //     return;
  //   }

  //   const newTask = {
  //     username: this.username,
  //     email: this.email,
  //     age: this.age,
  //     company: this.company
  //   }

  //   this.onAddUser.emit(newTask);

  //   this.username = ' ';
  //   this.email = ' ';
  //   this.age = 0;
  //   this.company = ' ';
  // }
}
