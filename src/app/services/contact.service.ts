import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormValidationService } from './form-validation.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: AngularFireList<any>;

  constructor(private db:AngularFireDatabase, private validation: FormValidationService) { }

  get(){
    this.contacts = this.db.list('contacts');
    return this.contacts.snapshotChanges();
  }

  add(contact){
    this.contacts.push(this.transformData(contact));
  }

  edit(contact){
    this.validation.form.setValue(contact);
  }

  update(contact){
    this.contacts.update(contact.key, this.transformData(contact));
  }

  delete(key){
    this.contacts.remove(key);
  }

  private transformData(data){
   return {
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
      email: data.email,
      age: data.age,
      dob: data.dob
    }
  }

}
