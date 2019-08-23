import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactsComponent } from './contacts.component';


@NgModule({
  declarations: [ContactListComponent, ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
