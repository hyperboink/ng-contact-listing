import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from '../common/list/list.component';
//import { ContactListComponent } from '../pages/contacts/contact-list/contact-list.component';
import { NavComponent } from '../common/nav/nav.component';

@NgModule({
  declarations: [
    ListComponent,
    NavComponent
    //ContactListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RouterModule, ListComponent, NavComponent]
})
export class SharedModule { }
