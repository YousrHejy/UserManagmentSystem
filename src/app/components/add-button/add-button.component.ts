import { Component, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})

export class AddButtonComponent {
  @Output() 
  addUserEvent: EventEmitter<User> = new EventEmitter<User>();

  public onAddUser() : void {
    this.addUserEvent.emit();
  }
  
}
