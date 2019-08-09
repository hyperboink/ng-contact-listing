import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: AngularFireList<any>;

  form = new FormGroup({
    key: new FormControl(null),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern("^[0-9]*$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    dob: new FormControl('', Validators.required)
  });

  constructor(private db:AngularFireDatabase) { }

  get(){
    this.contacts = this.db.list('contacts');
    return this.contacts.snapshotChanges();
  }

  add(contact){
    this.contacts.push(this.transformData(contact));
  }

  edit(contact){
    this.form.setValue(contact);
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
