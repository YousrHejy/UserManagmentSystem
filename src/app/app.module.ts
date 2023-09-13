import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    AddButtonComponent,
    UserTableComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
